# Python for Machine Learning

> **Goal:** Learn the Python concepts required to build Machine Learning and Deep Learning applications.

---

# Why Python for Machine Learning?

Python is the most popular language for AI because it is:

- Easy to learn
- Simple to read
- Rich ecosystem
- Large community
- Excellent ML libraries

---

# Python Installation

Recommended Distribution

- Python 3.12+
- pip
- Virtual Environment (venv)

Useful Tools

- VS Code
- Jupyter Notebook
- Google Colab

---

# Variables

Variables store values.

Example

```python
name = "Alice"
age = 25
learning_rate = 0.01
```

---

# Data Types

| Type | Example |
|------|---------|
| int | 10 |
| float | 3.14 |
| str | "Python" |
| bool | True |
| complex | 3+2j |

---

# Operators

Arithmetic

```python
+
-
*
/
%
**
//
```

Comparison

```python
==
!=
<
>
<=
>=
```

Logical

```python
and
or
not
```

---

# Type Conversion

```python
int("10")
float(5)
str(100)
bool(1)
```

---

# Input and Output

```python
name = input("Enter name: ")
print(name)
```

---

# Strings

Common Operations

```python
name.upper()
name.lower()
name.strip()
name.split()
len(name)
```

Formatting

```python
f"Hello {name}"
```

---

# Lists

Ordered and mutable.

```python
numbers = [1, 2, 3]
```

Operations

```python
append()
remove()
sort()
reverse()
pop()
```

Iteration

```python
for n in numbers:
    print(n)
```

---

# Tuples

Ordered and immutable.

```python
point = (10, 20)
```

---

# Sets

Unordered collection of unique values.

```python
colors = {"red", "blue", "green"}
```

Operations

```python
add()
remove()
union()
intersection()
```

---

# Dictionaries

Store key-value pairs.

```python
student = {
    "name": "Alice",
    "age": 22
}
```

Access

```python
student["name"]
student.get("age")
```

---

# Conditional Statements

```python
if score >= 90:
    print("A")
elif score >= 75:
    print("B")
else:
    print("C")
```

---

# Loops

For Loop

```python
for i in range(5):
    print(i)
```

While Loop

```python
while True:
    break
```

---

# Functions

```python
def square(x):
    return x * x
```

Lambda

```python
square = lambda x: x * x
```

---

# Modules

Import libraries.

```python
import math
import random
```

Specific import

```python
from math import sqrt
```

---

# Exception Handling

```python
try:
    value = int(input())
except ValueError:
    print("Invalid input")
```

---

# File Handling

Read

```python
with open("data.txt") as f:
    data = f.read()
```

Write

```python
with open("output.txt", "w") as f:
    f.write("Hello")
```

---

# List Comprehensions

```python
squares = [x*x for x in range(10)]
```

Conditional

```python
even = [x for x in range(10) if x % 2 == 0]
```

---

# Object-Oriented Programming

Class

```python
class Student:

    def __init__(self, name):
        self.name = name

    def greet(self):
        print(self.name)
```

Create Object

```python
s = Student("Alice")
s.greet()
```

---

# NumPy

Purpose

- Fast numerical computing
- Multidimensional arrays

Example

```python
import numpy as np

arr = np.array([1,2,3])
```

Common Operations

```python
shape
reshape()
sum()
mean()
dot()
transpose()
```

---

# Pandas

Purpose

- Data analysis
- Data cleaning

Example

```python
import pandas as pd

df = pd.read_csv("data.csv")
```

Common Operations

```python
head()
tail()
info()
describe()
dropna()
fillna()
groupby()
```

---

# Matplotlib

Purpose

- Data visualization

Example

```python
import matplotlib.pyplot as plt

plt.plot(x, y)
plt.show()
```

Common Charts

- Line
- Bar
- Scatter
- Histogram

---

# Scikit-learn

Purpose

- Machine Learning

Common Modules

```python
train_test_split

LinearRegression

LogisticRegression

DecisionTreeClassifier

RandomForestClassifier

KMeans

PCA
```

---

# Jupyter Notebook

Useful Shortcuts

- Run Cell → Shift + Enter
- Add Cell → A / B
- Delete Cell → D D

Benefits

- Interactive coding
- Visualization
- Experimentation

---

# Virtual Environments

Create

```bash
python -m venv .venv
```

Activate (Windows)

```bash
.venv\Scripts\activate
```

Install Packages

```bash
pip install numpy pandas matplotlib scikit-learn
```

Export Dependencies

```bash
pip freeze > requirements.txt
```

---

# Python Best Practices

- Use meaningful variable names.
- Follow PEP 8 style guidelines.
- Write reusable functions.
- Keep functions small.
- Use virtual environments.
- Add comments only when necessary.
- Use version control (Git).

---

# ML Workflow in Python

```text
Collect Data
      ↓
Load Data
      ↓
Clean Data
      ↓
Explore Data
      ↓
Feature Engineering
      ↓
Train Model
      ↓
Evaluate Model
      ↓
Deploy Model
```

---

# Essential Libraries

| Library | Purpose |
|----------|---------|
| NumPy | Numerical computing |
| Pandas | Data manipulation |
| Matplotlib | Visualization |
| Scikit-learn | Machine Learning |
| TensorFlow | Deep Learning |
| PyTorch | Deep Learning |
| OpenCV | Computer Vision |
| NLTK | Natural Language Processing |

---

# Summary

- Learn Python syntax and core programming concepts.
- Master built-in data structures (lists, tuples, sets, dictionaries).
- Use functions and classes to write reusable code.
- Handle files and exceptions safely.
- Use NumPy for numerical computation.
- Use Pandas for data analysis.
- Visualize data with Matplotlib.
- Build Machine Learning models using Scikit-learn.
- Use virtual environments and package management for reproducible projects.