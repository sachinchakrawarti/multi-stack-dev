from notebook_create import PythonNotebook

nb = PythonNotebook("What Are Variables")

# 1
nb.title("What Are Variables?")

# 2
nb.objectives(
    "Understand variables",
    "Create variables",
    "Assign values",
    "Print variables",
    "Follow naming rules"
)

# 3
nb.theory(
    "Variables are names that refer to values stored in memory. "
    "They allow us to store and reuse data in a program."
)

# 4
nb.code("""print("Hello, Python!")""")

# 5
nb.heading("Creating Variables")

# 6
nb.code("""
name = "Sachin"
age = 25

print(name)
print(age)
""")

# 7
nb.heading("Assigning Values")

# 8
nb.code("""
city = "Delhi"
country = "India"

print(city)
print(country)
""")

# 9
nb.heading("Printing Variables")

# 10
nb.code("""
language = "Python"

print(language)
""")

# 11
nb.heading("Multiple Assignment")

# 12
nb.code("""
x, y, z = 10, 20, 30

print(x)
print(y)
print(z)
""")

# 13
nb.heading("Variable Types")

# 14
nb.code("""
name = "John"
age = 20
height = 5.8
student = True

print(type(name))
print(type(age))
print(type(height))
print(type(student))
""")

# 15
nb.heading("Dynamic Typing")

# 16
nb.code("""
value = 100
print(value)

value = "Python"
print(value)
""")

# 17
nb.heading("Naming Rules")

# 18
nb.code("""
first_name = "Alice"
student_age = 21
_marks = 95

print(first_name)
print(student_age)
print(_marks)
""")

# 19
nb.heading("Invalid Variable Names")

# 20
nb.code("""
# 2name = "John"
# first-name = "John"
# class = "Python"

print("Invalid examples are commented.")
""")

# 21
nb.heading("Constants")

# 22
nb.code("""
PI = 3.14159

print(PI)
""")

# 23
nb.heading("Best Practices")

# 24
nb.code("""
student_name = "Rahul"
total_marks = 450
is_passed = True

print(student_name)
print(total_marks)
print(is_passed)
""")

# 25
nb.heading("Common Mistakes")

# 26
nb.code("""
name = "Alice"

# Name = "Bob"

print(name)
""")

# 27
nb.exercise("""
Create variables for:

- your_name
- your_age
- your_city

Print all three values.
""")

# 28
nb.code("""
your_name = "Your Name"
your_age = 20
your_city = "Your City"

print(your_name)
print(your_age)
print(your_city)
""")

# 29
nb.summary(
    "Variables store values.",
    "Python variables do not require a type declaration.",
    "Use meaningful names.",
    "Follow Python naming conventions."
)

# 30
nb.quiz(
    "Which keyword is used to declare variables in Python?",
    "No keyword is required",
    "var",
    "let",
    "const"
)

nb.save("what_are_variables.ipynb")