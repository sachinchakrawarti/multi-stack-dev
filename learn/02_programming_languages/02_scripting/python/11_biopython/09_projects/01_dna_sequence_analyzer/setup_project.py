"""
setup_project.py
----------------
One-shot project generator for the DNA Sequence Analyzer.
Creates ALL project files, installs dependencies, generates sample data,
runs the analysis, converts the notebook to a script, and produces a report.

Run:
    python setup_project.py
"""

from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

# ------------------------------------------------------------------
# Project root = folder where this script lives
# ------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent
SAMPLE_DIR = ROOT / "sample_data"
SAMPLE_DIR.mkdir(exist_ok=True)


# ==================================================================
# 1. FILE CONTENTS
# ==================================================================

REQUIREMENTS_TXT = """biopython>=1.81
"""

DNA_ANALYZER_PY = r'''"""
dna_analyzer.py
---------------
Core DNA sequence analysis module built on Biopython.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List, Optional

from Bio import SeqIO
from Bio.Seq import Seq
from Bio.SeqRecord import SeqRecord
from Bio.SeqUtils import gc_fraction, molecular_weight
from Bio.SeqUtils.ProtParam import ProteinAnalysis
from Bio.Data import CodonTable
from Bio.Restriction import RestrictionBatch, Analysis


# ---------------- Data container ----------------

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


# ---------------- Analyzer ----------------

class DNAAnalyzer:
    """High-level DNA sequence analyzer using Biopython."""

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
        obj = cls()
        obj.record = SeqIO.read(path, "fasta")
        return obj

    @classmethod
    def from_genbank(cls, path: str) -> "DNAAnalyzer":
        obj = cls()
        obj.record = SeqIO.read(path, "genbank")
        return obj

    @classmethod
    def from_string(cls, seq: str, seq_id: str = "seq1") -> "DNAAnalyzer":
        return cls(seq, seq_id)

    # ---- Basic stats ----

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

    # ---- ORF detection ----

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
                    if nuc[i:i + 3] in starts:
                        for j in range(i + 3, len(nuc) - 2, 3):
                            if nuc[j:j + 3] in stops:
                                orf = nuc[i:j]
                                if len(orf) >= min_length:
                                    orfs.append(
                                        f"[{strand} frame {frame + 1}] "
                                        f"len={len(orf)} start={i} "
                                        f"seq={orf[:40]}{'...' if len(orf) > 40 else ''}"
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

    # ---- Report ----

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
            f"Rev complement (first 60): {s.reverse_complement[:60]}...",
            f"Transcription  (first 60): {s.transcription[:60]}...",
            f"Translation    (first 60): {s.translation[:60]}...",
            "",
            f"ORFs (>= {min_orf_len} bp): {len(s.orfs)}",
        ]
        for o in s.orfs[:10]:
            L.append(f"  {o}")

        rs = self.restriction_sites()
        if rs:
            L += ["", "Restriction sites:"]
            for enz, pos in rs.items():
                L.append(f"  {enz}: {pos}")

        pp = self.protein_properties()
        if pp:
            L += [
                "",
                "Protein properties (frame 1):",
                f"  Length              : {pp['length']} aa",
                f"  Molecular weight    : {pp['molecular_weight']} Da",
                f"  Isoelectric point   : {pp['isoelectric_point']}",
                f"  Aromaticity         : {pp['aromaticity']}",
                f"  Instability index   : {pp['instability_index']}",
                f"  GRAVY               : {pp['gravy']}",
            ]
        L.append("=" * 60)
        return "\n".join(L)


# ---------------- Sample data helpers ----------------

SAMPLE_DNA = (
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
    "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG"
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


# ---------------- CLI ----------------

if __name__ == "__main__":
    import argparse

    p = argparse.ArgumentParser(description="DNA Sequence Analyzer")
    p.add_argument("-f", "--fasta", help="Input FASTA file")
    p.add_argument("-g", "--genbank", help="Input GenBank file")
    p.add_argument("-s", "--sequence", help="Raw DNA string")
    p.add_argument("-o", "--out", help="Write report to file")
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
        analyzer = DNAAnalyzer.from_fasta(args.fasta)
    elif args.genbank:
        analyzer = DNAAnalyzer.from_genbank(args.genbank)
    elif args.sequence:
        analyzer = DNAAnalyzer.from_string(args.sequence)
    else:
        print("No input provided - using built-in sample sequence.\n")
        analyzer = DNAAnalyzer.from_string(SAMPLE_DNA, "sample_seq")

    report = analyzer.report(min_orf_len=args.min_orf)
    print(report)

    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(report)
        print(f"\n[OK] Report saved to {args.out}")
'''


NOOTBOOK_SCRIPT_PY = r'''"""
nootbook_script.py
------------------
Converts dna_sequence_analyzer.ipynb  ->  dna_sequence_analyzer_script.py
"""

import json
from pathlib import Path


def convert_notebook_to_script(notebook_path: str, output_path: str = None) -> str:
    nb_path = Path(notebook_path)
    if not nb_path.exists():
        raise FileNotFoundError(f"Notebook not found: {nb_path}")

    if output_path is None:
        output_path = nb_path.with_name(nb_path.stem + "_script.py")

    with open(nb_path, "r", encoding="utf-8") as f:
        nb = json.load(f)

    lines = ['"""', f"Auto-generated script from {nb_path.name}", '"""', ""]

    for i, cell in enumerate(nb.get("cells", [])):
        if cell.get("cell_type") == "code":
            lines.append(f"# ==== Cell {i + 1} ====")
            src = cell.get("source", [])
            lines.extend(src if isinstance(src, list) else [src])
            lines += ["", ""]

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"[OK] Notebook converted -> {output_path}")
    return str(output_path)


if __name__ == "__main__":
    here = Path(__file__).parent
    convert_notebook_to_script(
        str(here / "dna_sequence_analyzer.ipynb"),
        str(here / "dna_sequence_analyzer_script.py"),
    )
'''


README_MD = """# DNA Sequence Analyzer

A Biopython-based tool for DNA analysis: GC content, nucleotide counts,
molecular weight, reverse complement, transcription, translation, ORF
detection, restriction sites, and protein properties.

## Install

```bash
pip install -r requirements.txt