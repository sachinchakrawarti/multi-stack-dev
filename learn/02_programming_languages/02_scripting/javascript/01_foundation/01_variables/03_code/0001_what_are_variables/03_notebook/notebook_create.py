import json
from pathlib import Path

# ==========================================================
# Create Node.js Notebook (.nnb) for VS Code Extension
# ==========================================================

def create_nnb_notebook():
    # Node.js Notebook structure for VS Code extension
    notebook = {
        "cells": [],
        "metadata": {
            "kernelspec": {
                "display_name": "Node.js",
                "language": "javascript",
                "name": "javascript"
            },
            "language_info": {
                "name": "javascript",
                "file_extension": ".js",
                "mimetype": "application/javascript"
            }
        },
        "nbformat": 4,
        "nbformat_minor": 4
    }
    
    # ==========================================================
    # Helper Functions
    # ==========================================================
    
    def md(text):
        # Split by newline but don't keep trailing newlines
        notebook["cells"].append({
            "cell_type": "markdown",
            "metadata": {},
            "source": text.split('\n')
        })
    
    def code(text):
        # Split by newline but don't keep trailing newlines
        notebook["cells"].append({
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": text.split('\n')
        })
    
    # ==========================================================
    # 30 CELLS
    # ==========================================================
    
    # 1
    md("# What Are Variables")
    
    # 2
    md("## Learning Objectives\n\n- Understand variables\n- Learn var, let and const\n- Store values")
    
    # 3
    md("## Introduction\n\nVariables are named containers used to store data.")
    
    # 4
    code('console.log("Welcome to JavaScript Variables");')
    
    # 5
    md("## What is a Variable?")
    
    # 6
    code("""let name = "Sachin";
console.log(name);""")
    
    # 7
    md("## Why Do We Need Variables?")
    
    # 8
    code("""let age = 25;
console.log(age);""")
    
    # 9
    md("## Declaring Variables")
    
    # 10
    code("""let city = "Delhi";
console.log(city);""")
    
    # 11
    md("## The var Keyword")
    
    # 12
    code("""var country = "India";
console.log(country);""")
    
    # 13
    md("## The let Keyword")
    
    # 14
    code("""let language = "JavaScript";
console.log(language);""")
    
    # 15
    md("## The const Keyword")
    
    # 16
    code("""const PI = 3.14159;
console.log(PI);""")
    
    # 17
    md("## Variable Naming Rules")
    
    # 18
    code("""let firstName = "John";
let _age = 20;
let $salary = 5000;

console.log(firstName);
console.log(_age);
console.log($salary);""")
    
    # 19
    md("## Invalid Variable Names")
    
    # 20
    code("""// let 1name = "John";
// let first-name = "John";
// let let = 10;""")
    
    # 21
    md("## Reassigning Variables")
    
    # 22
    code("""let score = 10;
score = 20;

console.log(score);""")
    
    # 23
    md("## Constants Cannot Be Reassigned")
    
    # 24
    code("""const COUNTRY = "India";
console.log(COUNTRY);

// COUNTRY = "USA";""")
    
    # 25
    md("## Best Practices")
    
    # 26
    code("""let studentName = "Alice";
let totalMarks = 450;
let isPassed = true;

console.log(studentName);
console.log(totalMarks);
console.log(isPassed);""")
    
    # 27
    md("## Exercise")
    
    # 28
    code("""// Create these variables:
//
// yourName
// yourAge
// yourCity
// yourCountry
//
// Print all values.""")
    
    # 29
    md("## Summary\n\n- Variables store values.\n- Prefer let and const.\n- Avoid var in modern JavaScript.")
    
    # 30
    md("## Practice Questions\n\n1. What is a variable?\n2. Difference between var, let and const?\n3. Why use const?\n4. What are naming rules?")
    
    # ==========================================================
    # Save Notebook
    # ==========================================================
    
    output_file = Path("what_are_variables.nnb")
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(notebook, f, indent=2, ensure_ascii=False)
    
    print("=" * 60)
    print("Node.js Notebook (.nnb) Created Successfully")
    print(f"Location: {output_file.resolve()}")
    print(f"Total Cells: {len(notebook['cells'])}")
    print("=" * 60)
    print("\nTo open in VS Code:")
    print("1. Install 'Node.js Notebooks (REPL)' extension")
    print("2. Open the .nnb file in VS Code")
    print("3. Run cells with Shift+Enter")
    print("=" * 60)
    
    return notebook

# Run the script
if __name__ == "__main__":
    create_nnb_notebook()