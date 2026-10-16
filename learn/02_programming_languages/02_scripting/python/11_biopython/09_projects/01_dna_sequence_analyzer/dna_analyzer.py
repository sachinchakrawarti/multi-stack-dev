"""
dna_analyzer.py
---------------
Core DNA analysis + EDA helpers, built on Biopython.
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Dict, List, Optional
from collections import Counter

from Bio import SeqIO
from Bio.Seq import Seq
from Bio.SeqRecord import SeqRecord
from Bio.SeqUtils import gc_fraction, molecular_weight
from Bio.SeqUtils.ProtParam import ProteinAnalysis
from Bio.Data import CodonTable
from Bio.Restriction import RestrictionBatch, Analysis


# ---------- Data container ----------
@dataclass
class DNAStats:
    seq_id: str
    description: str
    length: int
    gc_content: float
    at_content: float
    nucleotide_counts: Dict[str, int]
    molecular_weight: float
    reverse_complement: str
    transcription: str
    translation: str
    orfs: List[str] = field(default_factory=list)


# ---------- Analyzer ----------
class DNAAnalyzer:
    """DNA sequence analyzer + EDA toolbox."""

    def __init__(self, sequence: Optional[str] = None, seq_id: str = "seq1"):
        if sequence:
            self.record = SeqRecord(
                Seq(sequence.upper()),
                id=seq_id,
                description="user-provided sequence",
            )
        else:
            self.record: Optional[SeqRecord] = None

    # ---- Loaders ----
    @classmethod
    def from_fasta(cls, path: str) -> "DNAAnalyzer":
        obj = cls(); obj.record = SeqIO.read(path, "fasta"); return obj

    @classmethod
    def from_genbank(cls, path: str) -> "DNAAnalyzer":
        obj = cls(); obj.record = SeqIO.read(path, "genbank"); return obj

    @classmethod
    def from_string(cls, seq: str, seq_id: str = "seq1") -> "DNAAnalyzer":
        return cls(seq, seq_id)

    # ---- Basic ----
    def nucleotide_counts(self) -> Dict[str, int]:
        s = str(self.record.seq)
        return {b: s.count(b) for b in ("A", "T", "G", "C", "N")}

    def gc_content(self) -> float:
        return round(gc_fraction(self.record.seq) * 100, 2)

    def at_content(self) -> float:
        return round(100 - self.gc_content(), 2)

    def molecular_weight(self) -> float:
        return round(molecular_weight(self.record.seq, seq_type="DNA"), 2)

    # ---- Transformations ----
    def reverse_complement(self) -> str:
        return str(self.record.seq.reverse_complement())

    def transcribe(self) -> str:
        return str(self.record.seq.transcribe())

    def translate(self, frame: int = 0, to_stop: bool = False) -> str:
        return str(self.record.seq[frame:].translate(to_stop=to_stop))

    # ---- ORFs ----
    def find_orfs(self, min_length: int = 100) -> List[str]:
        seq = str(self.record.seq)
        rc = self.reverse_complement()
        table = CodonTable.unambiguous_dna_by_id[1]
        starts, stops = set(table.start_codons), set(table.stop_codons)
        orfs: List[str] = []
        for strand, nuc in (("+", seq), ("-", rc)):
            for frame in range(3):
                i = frame
                while i < len(nuc) - 2:
                    if nuc[i:i+3] in starts:
                        for j in range(i + 3, len(nuc) - 2, 3):
                            if nuc[j:j+3] in stops:
                                orf = nuc[i:j]
                                if len(orf) >= min_length:
                                    orfs.append(
                                        f"[{strand} f{frame+1}] len={len(orf)} start={i}"
                                    )
                                i = j + 3
                                break
                        else:
                            i += 3
                    else:
                        i += 3
        return orfs

    # ---- Restriction sites ----
    def restriction_sites(self, enzymes: Optional[List[str]] = None) -> Dict[str, List[int]]:
        if enzymes is None:
            enzymes = ["EcoRI", "BamHI", "HindIII", "NotI", "XhoI", "PstI"]
        rb = RestrictionBatch(enzymes)
        result = Analysis(rb, self.record.seq).full()
        return {str(k): v for k, v in result.items() if v}

    # ---- Protein properties ----
    def protein_properties(self, frame: int = 0) -> Optional[dict]:
        prot = self.translate(frame=frame).replace("*", "")
        if not prot:
            return None
        pa = ProteinAnalysis(prot)
        return {
            "length": len(prot),
            "molecular_weight": round(pa.molecular_weight(), 2),
            "isoelectric_point": round(pa.isoelectric_point(), 3),
            "aromaticity": round(pa.aromaticity(), 4),
            "instability_index": round(pa.instability_index(), 3),
            "gravy": round(pa.gravy(), 4),
            "amino_acid_percent": {k: round(v, 2)
                                   for k, v in pa.amino_acids_percent.items()},
        }

    # ==================================================
    # EDA HELPERS
    # ==================================================

    def composition_df(self):
        """Return list-of-dicts: per-nucleotide count & percent."""
        import pandas as pd
        n = len(self.record.seq)
        counts = self.nucleotide_counts()
        rows = [{"base": b, "count": c,
                 "percent": round(c / n * 100, 2) if n else 0}
                for b, c in counts.items()]
        return pd.DataFrame(rows)

    def codon_usage(self, frame: int = 0) -> Dict[str, int]:
        """Count codons in the given reading frame."""
        seq = str(self.record.seq)[frame:]
        seq = seq[: len(seq) - len(seq) % 3]
        return dict(Counter(seq[i:i+3] for i in range(0, len(seq), 3)))

    def codon_usage_df(self, frame: int = 0):
        import pandas as pd
        counts = self.codon_usage(frame)
        total = sum(counts.values()) or 1
        rows = [{"codon": c, "count": n,
                 "frequency": round(n / total * 100, 3)}
                for c, n in sorted(counts.items(), key=lambda x: -x[1])]
        return pd.DataFrame(rows)

    def amino_acid_df(self, frame: int = 0):
        import pandas as pd
        prot = self.translate(frame=frame).replace("*", "")
        if not prot:
            return pd.DataFrame(columns=["aa", "count", "percent"])
        c = Counter(prot)
        total = sum(c.values()) or 1
        rows = [{"aa": aa, "count": n, "percent": round(n / total * 100, 2)}
                for aa, n in sorted(c.items(), key=lambda x: -x[1])]
        return pd.DataFrame(rows)

    def sliding_gc(self, window: int = 50, step: int = 10):
        """Return list of (start, gc_percent) over sliding windows."""
        seq = str(self.record.seq).upper()
        out = []
        for i in range(0, max(1, len(seq) - window + 1), step):
            w = seq[i:i+window]
            gc = (w.count("G") + w.count("C")) / len(w) * 100 if w else 0
            out.append((i, round(gc, 2)))
        return out

    def orf_lengths(self, min_length: int = 30) -> List[int]:
        """Extract numeric lengths from ORF descriptor strings."""
        lengths = []
        for o in self.find_orfs(min_length=min_length):
            for tok in o.split():
                if tok.startswith("len="):
                    lengths.append(int(tok[4:]))
        return lengths

    def summary_df(self, min_orf_len: int = 30):
        """Single-row summary DataFrame."""
        import pandas as pd
        n = len(self.record.seq)
        return pd.DataFrame([{
            "id": self.record.id,
            "length_bp": n,
            "gc_percent": self.gc_content(),
            "at_percent": self.at_content(),
            "mol_weight_Da": self.molecular_weight(),
            "A": self.nucleotide_counts()["A"],
            "T": self.nucleotide_counts()["T"],
            "G": self.nucleotide_counts()["G"],
            "C": self.nucleotide_counts()["C"],
            "N": self.nucleotide_counts()["N"],
            "num_orfs": len(self.find_orfs(min_orf_len)),
        }])

    # ---- Text report ----
    def report(self, min_orf_len: int = 100) -> str:
        s = self.stats(min_orf_len)
        L = [
            "=" * 60,
            "DNA SEQUENCE ANALYSIS REPORT",
            "=" * 60,
            f"ID           : {s.seq_id}",
            f"Description  : {s.description}",
            f"Length       : {s.length} bp",
            f"GC content   : {s.gc_content} %",
            f"AT content   : {s.at_content} %",
            f"Mol. weight  : {s.molecular_weight} Da",
            "",
            "Nucleotide counts:",
        ]
        for k, v in s.nucleotide_counts.items():
            pct = (v / s.length * 100) if s.length else 0
            L.append(f"  {k}: {v:5d}  ({pct:5.2f}%)")

        L += [
            "",
            f"Rev comp (60): {s.reverse_complement[:60]}...",
            f"mRNA     (60): {s.transcription[:60]}...",
            f"Protein  (60): {s.translation[:60]}...",
            "",
            f"ORFs (>= {min_orf_len} bp): {len(s.orfs)}",
        ]
        for o in s.orfs[:10]:
            L.append(f"  {o}")

        rs = self.restriction_sites()
        if rs:
            L.append("")
            L.append("Restriction sites:")
            for e, p in rs.items():
                L.append(f"  {e}: {p}")

        pp = self.protein_properties()
        if pp:
            L += [
                "",
                "Protein properties (frame 1):",
                f"  Length            : {pp['length']} aa",
                f"  Molecular weight  : {pp['molecular_weight']} Da",
                f"  Isoelectric point : {pp['isoelectric_point']}",
                f"  Aromaticity       : {pp['aromaticity']}",
                f"  Instability index : {pp['instability_index']}",
                f"  GRAVY             : {pp['gravy']}",
            ]
        L.append("=" * 60)
        return "\n".join(L)

    def stats(self, min_orf_len: int = 100) -> DNAStats:
        return DNAStats(
            seq_id=self.record.id,
            description=self.record.description,
            length=len(self.record.seq),
            gc_content=self.gc_content(),
            at_content=self.at_content(),
            nucleotide_counts=self.nucleotide_counts(),
            molecular_weight=self.molecular_weight(),
            reverse_complement=self.reverse_complement(),
            transcription=self.transcribe(),
            translation=self.translate(),
            orfs=self.find_orfs(min_orf_len),
        )


# ---------- Sample data ----------
SAMPLE_DNA = (
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGAAACGCATTAGCACCACCATTACCACCACCATCACCATTACCACAGGTAACGGTGCGGGCTGA"
    "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT"
    "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG"
    "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    "ATGTTTAAACCCGGGTTTAAACCCGGGTTTAAACCCGGGTTTAAACCC"
)


def write_sample_fasta(path: str) -> None:
    rec = SeqRecord(Seq(SAMPLE_DNA), id="sample_seq",
                    description="Synthetic sample DNA sequence")
    SeqIO.write(rec, path, "fasta")


def write_sample_genbank(path: str) -> None:
    rec = SeqRecord(Seq(SAMPLE_DNA), id="sample_seq",
                    description="Synthetic sample DNA sequence")
    rec.annotations["molecule_type"] = "DNA"
    SeqIO.write(rec, path, "genbank")


# ---------- CLI ----------
if __name__ == "__main__":
    import argparse, os
    p = argparse.ArgumentParser(description="DNA Sequence Analyzer")
    p.add_argument("-f", "--fasta")
    p.add_argument("-g", "--genbank")
    p.add_argument("-s", "--sequence")
    p.add_argument("-o", "--out")
    p.add_argument("--min-orf", type=int, default=100)
    p.add_argument("--make-samples", action="store_true")
    args = p.parse_args()

    if args.make_samples:
        os.makedirs("sample_data", exist_ok=True)
        write_sample_fasta("sample_data/sample.fasta")
        write_sample_genbank("sample_data/sample.gb")
        print("[OK] sample_data/sample.fasta and sample_data/sample.gb written")
        raise SystemExit(0)

    if args.fasta:
        a = DNAAnalyzer.from_fasta(args.fasta)
    elif args.genbank:
        a = DNAAnalyzer.from_genbank(args.genbank)
    elif args.sequence:
        a = DNAAnalyzer.from_string(args.sequence)
    else:
        print("No input - using built-in sample sequence.\n")
        a = DNAAnalyzer.from_string(SAMPLE_DNA, "sample_seq")

    rpt = a.report(min_orf_len=args.min_orf)
    print(rpt)
    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(rpt)
        print(f"\n[OK] report saved to {args.out}")