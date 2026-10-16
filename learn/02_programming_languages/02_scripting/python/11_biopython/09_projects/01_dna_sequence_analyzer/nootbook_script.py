"""Notebook -> script converter."""
import json
from pathlib import Path


def convert_notebook_to_script(nb_path, out_path=None):
    nb_path = Path(nb_path)
    if not nb_path.exists():
        raise FileNotFoundError(nb_path)
    if out_path is None:
        out_path = nb_path.with_name(nb_path.stem + "_script.py")
    with open(nb_path, encoding="utf-8") as f:
        nb = json.load(f)
    lines = ['"""', f"Auto-generated from {nb_path.name}", '"""', ""]
    for i, cell in enumerate(nb.get("cells", [])):
        if cell.get("cell_type") == "code":
            lines.append(f"# ==== Cell {i+1} ====")
            src = cell.get("source", [])
            lines.extend(src if isinstance(src, list) else [src])
            lines += ["", ""]
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"[OK] -> {out_path}")
    return str(out_path)


if __name__ == "__main__":
    here = Path(__file__).parent
    convert_notebook_to_script(str(here / "dna_sequence_analyzer.ipynb"),
                               str(here / "dna_sequence_analyzer_script.py"))
