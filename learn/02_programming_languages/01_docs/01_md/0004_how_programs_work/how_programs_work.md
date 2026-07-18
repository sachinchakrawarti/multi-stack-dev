# How Programs Work

## Introduction

A program is a collection of instructions that tells a computer how to perform specific tasks. However, computers cannot directly understand programming languages such as JavaScript, Python, Java, or C++.

Instead, a program goes through several stages before the computer can execute it. Understanding this process helps programmers write better code, debug errors, and understand how software works internally.

---

# What Is a Program?

A **program** is a sequence of instructions written in a programming language to solve a problem or perform a task.

Example tasks include:

- Calculating a student's grade
- Displaying a web page
- Playing a video
- Processing online payments
- Sending messages

---

# How a Program Works

The execution of a program generally follows these steps:

```text
Problem
   │
   ▼
Algorithm
   │
   ▼
Write Source Code
   │
   ▼
Compile / Interpret
   │
   ▼
Machine Code
   │
   ▼
CPU Execution
   │
   ▼
Output
```

---

# Step 1: Identify the Problem

Every program begins with a problem that needs to be solved.

Examples:

- Add two numbers
- Calculate salary
- Build a website
- Send an email
- Manage student records

---

# Step 2: Design an Algorithm

An **algorithm** is a step-by-step procedure for solving a problem.

Example:

```text
1. Read two numbers.
2. Add the numbers.
3. Display the result.
```

A good algorithm should be:

- Correct
- Efficient
- Easy to understand

---

# Step 3: Write Source Code

The algorithm is converted into a programming language.

Example (JavaScript):

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

The code written by the programmer is called **source code**.

---

# Step 4: Translate the Source Code

Computers understand only **machine language (binary)**.

The source code must be translated using:

- Compiler
- Interpreter
- Just-In-Time (JIT) Compiler (used by some modern languages)

After translation, the code becomes machine instructions that the CPU can execute.

---

# Step 5: Execute the Program

The CPU reads machine instructions one by one and performs the required operations.

These operations may include:

- Arithmetic calculations
- Memory access
- Input/output operations
- File handling
- Network communication

---

# Step 6: Produce the Output

After execution, the program produces the required result.

Examples:

- Display text on the screen
- Print a document
- Save data to a database
- Send an email
- Show a webpage

---

# Real-World Example

Suppose you log in to an online shopping website.

The following steps occur:

```text
User enters username and password
            │
            ▼
Browser sends request
            │
            ▼
Server receives request
            │
            ▼
Program verifies user credentials
            │
            ▼
Database checks user information
            │
            ▼
Result is returned
            │
            ▼
User is logged in
```

Thousands of programming instructions work together to complete this process in just a few seconds.

---

# Components Involved

A running program involves several components.

## Input

The data provided by the user or another system.

Examples:

- Keyboard input
- Mouse clicks
- Touchscreen input
- File data

---

## Processing

The computer performs calculations and logical operations.

Examples:

- Mathematical calculations
- Decision making
- Data validation
- Searching

---

## Output

The final result produced by the program.

Examples:

- Text
- Images
- Audio
- Video
- Reports

---

## Storage

Programs often store information for future use.

Examples:

- Files
- Databases
- Cloud storage

---

# Program Execution Cycle

Every running program follows the Input → Process → Output model.

```text
Input
   │
   ▼
Processing
   │
   ▼
Output
```

Many programs also include storage.

```text
Input
   │
   ▼
Processing
   │
   ▼
Storage
   │
   ▼
Output
```

---

# Example: Calculator Program

Suppose a calculator adds two numbers.

```text
Input
Number 1 = 10
Number 2 = 20

↓

Processing

10 + 20

↓

Output

30
```

---

# Example: Online Banking

```text
Input
Transfer ₹1000

↓

Processing
Check balance
Verify account
Update database

↓

Output
Transfer Successful
```

---

# Why Understanding Program Execution Is Important

Knowing how programs work helps you:

- Write efficient code
- Debug errors more effectively
- Understand how programming languages work
- Learn new technologies more easily
- Build reliable software

---

# Common Misconceptions

### Programs execute exactly as they are written.

Not always. High-level source code is first translated into machine instructions before execution.

---

### The CPU understands JavaScript or Python directly.

No. The CPU understands only machine language (binary instructions).

---

### All programming languages work the same way.

Different languages use different execution models, such as compilation, interpretation, or Just-In-Time (JIT) compilation.

---

# Best Practices

- Understand the problem before writing code.
- Design an algorithm first.
- Write clean and readable source code.
- Test programs thoroughly.
- Debug errors systematically.
- Optimize programs after they work correctly.

---

# Interview Questions

1. What is a program?
2. How does a computer execute a program?
3. What is source code?
4. Why is source code translated into machine code?
5. What is the difference between compilation and interpretation?
6. What are the main stages of program execution?
7. What is an algorithm?
8. Why does the CPU execute only machine language?
9. What are input, processing, and output?
10. Why is understanding program execution important?

---

# Summary

- A program is a collection of instructions that solves a problem or performs a task.
- Programs are written in high-level programming languages.
- Before execution, source code is translated into machine language.
- The CPU executes machine instructions to produce the desired output.
- Every program generally follows the Input → Process → Output cycle.
- Understanding how programs work is a fundamental concept for every programmer.

---

# Next Topic

**0005_programming_languages**