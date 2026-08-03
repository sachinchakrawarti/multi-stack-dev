"""
============================================================
Python Jupyter Notebook Creator
============================================================

Creates a professional Python (.ipynb) notebook.

Usage:
    from notebook_create import PythonNotebook

    nb = PythonNotebook("What Are Variables")

    nb.markdown("# What Are Variables")
    nb.code("print('Hello, World!')")

    nb.save("what_are_variables.ipynb")
"""

from pathlib import Path
import nbformat as nbf


class PythonNotebook:

    def __init__(self, title="Python Notebook"):

        self.nb = nbf.v4.new_notebook()

        self.nb.metadata = {
            "kernelspec": {
                "display_name": "Python 3",
                "language": "python",
                "name": "python3"
            },
            "language_info": {
                "name": "python",
                "version": "3.x",
                "file_extension": ".py",
                "mimetype": "text/x-python"
            },
            "title": title
        }

    # =====================================================
    # Basic Cells
    # =====================================================

    def markdown(self, text):
        self.nb.cells.append(
            nbf.v4.new_markdown_cell(text)
        )

    def code(self, text):
        self.nb.cells.append(
            nbf.v4.new_code_cell(text)
        )

    def raw(self, text):
        self.nb.cells.append(
            nbf.v4.new_raw_cell(text)
        )

    # =====================================================
    # Common Sections
    # =====================================================

    def title(self, text):
        self.markdown(f"# {text}")

    def heading(self, text):
        self.markdown(f"## {text}")

    def subheading(self, text):
        self.markdown(f"### {text}")

    def objectives(self, *items):

        text = "## Learning Objectives\n\n"

        for item in items:
            text += f"- {item}\n"

        self.markdown(text)

    def theory(self, text):
        self.markdown(f"## Theory\n\n{text}")

    def note(self, text):
        self.markdown(f"> **Note:** {text}")

    def tip(self, text):
        self.markdown(f"> 💡 **Tip:** {text}")

    def warning(self, text):
        self.markdown(f"> ⚠️ **Warning:** {text}")

    def syntax(self, code):
        self.markdown("## Syntax")
        self.code(code)

    def example(self, title, code):
        self.markdown(f"## {title}")
        self.code(code)

    def exercise(self, text):
        self.markdown(f"## Exercise\n\n{text}")

    def challenge(self, text):
        self.markdown(f"## Challenge\n\n{text}")

    def summary(self, *items):

        text = "## Summary\n\n"

        for item in items:
            text += f"- {item}\n"

        self.markdown(text)

    def quiz(self, question, *options):

        text = f"## Quiz\n\n**{question}**\n\n"

        for i, option in enumerate(options, 1):
            text += f"{i}. {option}\n"

        self.markdown(text)

    def separator(self):
        self.markdown("---")

    # =====================================================
    # Save
    # =====================================================

    def save(self, filename):

        filename = Path(filename)

        filename.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        with open(filename, "w", encoding="utf-8") as f:
            nbf.write(self.nb, f)

        print("=" * 60)
        print("Notebook Created Successfully")
        print(filename.resolve())
        print(f"Total Cells : {len(self.nb.cells)}")
        print("=" * 60)


# ==========================================================
# Demo
# ==========================================================

if __name__ == "__main__":

    nb = PythonNotebook("Demo Notebook")

    nb.title("Demo Notebook")

    nb.objectives(
        "Create markdown cells",
        "Create code cells",
        "Save notebooks"
    )

    nb.theory(
        "This notebook was generated automatically."
    )

    nb.code("""
print("Hello, Python!")
""")

    nb.summary(
        "Reusable notebook creator.",
        "Supports Markdown and Python code cells.",
        "Suitable for any Python lesson."
    )

    nb.save("demo.ipynb")