# What Is Python?

## 1. Definition

**Python is a high-level, general-purpose programming language used to create software and solve problems.**

Python is known for:

* Simple syntax
* Readability
* Easy learning
* Large libraries
* Large community
* Wide range of applications

---

# 2. Simple Definition

> **Python is a programming language that allows humans to give instructions to computers.**

Example:

```python
print("Hello, World!")
```

Output:

```text
Hello, World!
```

---

# 3. What Is a Programming Language?

### Definition

A **programming language** is a language used to write instructions that a computer can execute.

Examples:

* Python
* Java
* JavaScript
* C
* C++
* Go
* Rust

Example Python instruction:

```python
print("Hello")
```

The instruction tells Python to display `Hello`.

---

# 4. Why Is Python Called High-Level?

### Definition

A **high-level programming language** provides features that make programming easier for humans.

Python hides many low-level computer details.

For example:

```python
total = price * quantity
```

We can write this without manually controlling CPU registers or memory addresses.

### Remember

> **High-level = easier for humans to write and understand.**

---

# 5. What Does General-Purpose Mean?

### Definition

A **general-purpose programming language** can be used to create many different types of software.

Python can be used for:

* Web development
* API development
* Automation
* Data analysis
* Machine learning
* Artificial intelligence
* Scientific computing
* Testing
* Database programming
* Desktop applications

### Remember

> **General-purpose = useful for many types of problems.**

---

# 6. Python Is Readable

Python syntax is designed to be relatively easy to read.

Example:

```python
name = "Sachin"

print(name)
```

The purpose of the code is easy to understand.

This readability is one of Python's major strengths.

---

# 7. Python Uses Indentation

Python uses **indentation** to organize blocks of code.

Example:

```python
age = 20

if age >= 18:
    print("Adult")
```

The `print()` statement is inside the `if` block because it is indented.

### Definition

**Indentation** means adding spaces at the beginning of a line to show the structure of code.

Python commonly uses **4 spaces** for indentation.

---

# 8. Python Is Dynamically Typed

### Definition

**Dynamic typing** means Python determines the type of a value during program execution.

Example:

```python
age = 25
name = "Python"
price = 99.50
```

Python understands:

```text
age   → int
name  → str
price → float
```

We do not normally have to declare these types before assigning the values.

---

# 9. Python Is Case-Sensitive

### Definition

**Case-sensitive** means uppercase and lowercase letters are treated as different.

For example:

```python
name = "Python"
```

and:

```python
Name = "Python"
```

are different variables.

These are different:

```text
name
Name
NAME
```

---

# 10. Python Source File

### Definition

A **Python source file** is a file containing Python code.

Python source files normally use the:

```text
.py
```

extension.

Example:

```text
hello.py
calculator.py
main.py
app.py
```

Example file:

```python
print("Hello Python")
```

---

# 11. Python Interpreter

### Definition

A **Python interpreter** is software that processes and executes Python programs.

For example:

```powershell
python hello.py
```

The Python implementation processes the program and produces the result.

---

# 12. CPython

### Definition

**CPython is the reference implementation of Python.**

It is primarily written in the **C programming language**.

When most people install Python from the official Python distribution, they are using CPython.

---

# 13. Python Interactive Mode

Python can also be used interactively.

Run:

```powershell
python
```

You may see:

```text
>>>
```

Then you can type:

```python
>>> 10 + 20
30
```

This is useful for:

* Learning
* Experimenting
* Testing small pieces of code
* Checking expressions

---

# 14. Python Standard Library

### Definition

The **Python Standard Library** is a collection of modules that come with Python.

It provides tools for many common tasks.

Examples:

```python
import math

print(math.sqrt(25))
```

Output:

```text
5.0
```

The standard library includes modules for:

* Mathematics
* Files
* Dates and times
* JSON
* Regular expressions
* Operating systems
* Networking
* Testing
* Logging

---

# 15. Python Libraries

### Definition

A **library** is reusable code that provides functionality that programmers can use in their applications.

Popular Python libraries include:

| Library      | Purpose              |
| ------------ | -------------------- |
| NumPy        | Numerical computing  |
| Pandas       | Data analysis        |
| Matplotlib   | Data visualization   |
| SciPy        | Scientific computing |
| Scikit-learn | Machine learning     |
| PyTorch      | Deep learning        |
| TensorFlow   | Machine learning     |
| OpenCV       | Computer vision      |

---

# 16. Python Packages

### Definition

A **package** is a way of organizing and distributing Python code.

Packages can be installed using package-management tools such as `pip`.

Example:

```powershell
python -m pip install requests
```

---

# 17. Where Is Python Used?

Python is used in many areas.

```text
Python
│
├── Web Development
├── API Development
├── Automation
├── Data Analysis
├── Machine Learning
├── Artificial Intelligence
├── Scientific Computing
├── Computer Vision
├── Testing
├── Database Programming
└── Education
```

---

# 18. Python in Web Development

Python can be used to create:

* Websites
* Web applications
* REST APIs
* Backend services
* Microservices

Popular frameworks include:

* Django
* Flask
* FastAPI

---

# 19. Python in Data Science

Python is widely used for working with data.

For example:

```python
import pandas as pd

data = {
    "name": ["A", "B", "C"],
    "score": [80, 90, 85]
}

df = pd.DataFrame(data)

print(df)
```

Python can be used for:

* Data cleaning
* Data analysis
* Statistics
* Visualization
* Machine learning

---

# 20. Python in Automation

### Definition

**Automation** means using software to perform tasks automatically.

Python can automate:

* File management
* Data processing
* Reports
* Web tasks
* Testing
* System tasks

Example:

```python
from pathlib import Path

for file in Path(".").iterdir():
    print(file)
```

---

# 21. Python in Artificial Intelligence

Python is widely used in AI and machine learning.

Popular tools include:

* Scikit-learn
* TensorFlow
* Keras
* PyTorch

Python can be used for:

* Machine learning
* Deep learning
* Natural language processing
* Computer vision
* AI applications

---

# 22. Advantages of Python

### 1. Easy to Learn

Python has relatively simple syntax.

### 2. Readable

Python code is designed to be easy to understand.

### 3. Large Ecosystem

There are many libraries and frameworks.

### 4. Versatile

Python can be used in many technical fields.

### 5. Cross-Platform

Python can run on:

* Windows
* Linux
* macOS

### 6. Large Community

Python has a large worldwide developer community.

---

# 23. Limitations of Python

Python also has some limitations.

### 1. Performance

Some CPU-intensive programs can run slower than equivalent programs written in languages such as C or C++.

### 2. Memory Usage

Some Python programs may use more memory than equivalent lower-level implementations.

### 3. Mobile Development

Python is not normally the primary language for native mobile application development.

---

# 24. First Python Program

The traditional first Python program is:

```python
print("Hello, World!")
```

### Explanation

`print()` is a Python function used to display information.

```python
print("Hello, World!")
```

means:

> Display `Hello, World!` on the screen.

---

# 25. Important Python Terms

| Term           | Simple Definition                       |
| -------------- | --------------------------------------- |
| Python         | A programming language                  |
| Program        | A set of instructions for a computer    |
| Syntax         | Rules for writing code                  |
| Variable       | A name referring to a value             |
| Function       | Reusable block of code                  |
| Module         | A Python file containing reusable code  |
| Package        | Organized/distributed Python code       |
| Library        | Reusable functionality                  |
| Interpreter    | Software that processes Python programs |
| CPython        | Reference Python implementation         |
| Indentation    | Spaces used to structure Python code    |
| Dynamic Typing | Types are determined at runtime         |
| `.py`          | Python source-file extension            |
| REPL           | Interactive Python environment          |

---

# 26. Important Points to Remember

Remember these points:

1. **Python is a programming language.**
2. Python is **high-level**.
3. Python is **general-purpose**.
4. Python is **dynamically typed**.
5. Python is **case-sensitive**.
6. Python uses **indentation** to structure code.
7. Python source files normally use `.py`.
8. **CPython** is the reference implementation.
9. Python has a large **standard library**.
10. Python has a large **third-party ecosystem**.
11. Python is widely used in **data science and AI**.
12. Python can be used for **web development and automation**.

---

# 27. One-Minute Revision

### What is Python?

Python is a **high-level, general-purpose programming language**.

### Who uses Python?

Python is used by:

* Beginners
* Developers
* Data scientists
* Engineers
* Researchers
* Automation developers
* AI/ML developers

### What can Python do?

Python can be used to:

```text
Build
Analyze
Automate
Calculate
Visualize
Test
Predict
Process
```

---

# 28. Final Definition

> **Python is a high-level, general-purpose, dynamically typed programming language known for its readable syntax and wide range of applications.**

### Shortest Definition

> **Python is a programming language used to tell computers what to do.**

---

# 29. Quick Questions

### Q1. What is Python?

Python is a high-level, general-purpose programming language.

### Q2. Is Python easy to learn?

Yes. Its syntax is designed to be relatively readable and beginner-friendly.

### Q3. What file extension does Python use?

`.py`

### Q4. Is Python case-sensitive?

Yes.

### Q5. Does Python use indentation?

Yes.

### Q6. What is CPython?

CPython is the reference implementation of Python.

### Q7. Can Python be used for AI?

Yes.

### Q8. Can Python be used for web development?

Yes.

### Q9. Can Python automate tasks?

Yes.

### Q10. What is Python mainly known for?

Python is especially known for its **readability, versatility, and large ecosystem**.

