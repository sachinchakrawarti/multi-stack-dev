# Recursive Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Recursive Functions?](#what-are-recursive-functions)
- [Why Do We Need Recursive Functions?](#why-do-we-need-recursive-functions)
- [How Recursive Functions Work](#how-recursive-functions-work)
- [Syntax](#syntax)
- [Components of Recursion](#components-of-recursion)
- [Call Stack](#call-stack)
- [Examples](#examples)
- [Recursion vs Iteration](#recursion-vs-iteration)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Limitations](#limitations)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what recursive functions are.
- Learn how recursion works internally.
- Identify the base case and recursive case.
- Compare recursion with loops.
- Solve common programming problems using recursion.

---

# Introduction

Imagine standing between two mirrors.

Each mirror reflects the other repeatedly, creating an endless chain of reflections.

A recursive function behaves similarly—it **calls itself** repeatedly until a stopping condition is reached.

Recursion is one of the most elegant programming techniques and is widely used in algorithms, tree traversal, searching, parsing, and many advanced computer science problems.

---

# What are Recursive Functions?

A **recursive function** is a function that calls itself directly or indirectly until a specific stopping condition (called the **base case**) is reached.

Example

```javascript
function countDown(number) {

    if (number === 0) {

        console.log("Done!");

        return;

    }

    console.log(number);

    countDown(number - 1);

}

countDown(5);
```

Output

```
5
4
3
2
1
Done!
```

---

# Why Do We Need Recursive Functions?

Recursion is useful when solving problems that can be divided into smaller versions of the same problem.

Examples include:

- Tree traversal
- File system navigation
- Nested object processing
- Mathematical calculations
- Backtracking algorithms
- Divide-and-conquer algorithms

Instead of writing complex loops, recursion often provides a cleaner solution.

---

# How Recursive Functions Work

Example

```javascript
function print(number) {

    if (number === 0) {

        return;

    }

    console.log(number);

    print(number - 1);

}

print(3);
```

Execution Flow

```text
print(3)
   │
   ▼
print(2)
   │
   ▼
print(1)
   │
   ▼
print(0)
   │
   ▼
Base Case Reached
   │
   ▼
Return
   │
   ▼
Return
   │
   ▼
Return
```

Each function call waits until the next one finishes.

---

# Syntax

```javascript
function functionName(parameter) {

    if (baseCondition) {

        return;

    }

    // Recursive work

    functionName(modifiedParameter);

}
```

---

# Components of Recursion

Every recursive function has two important parts.

## 1. Base Case

The condition that stops recursion.

```javascript
if (number === 0) {

    return;

}
```

Without a base case, recursion continues forever.

---

## 2. Recursive Case

The part where the function calls itself.

```javascript
countDown(number - 1);
```

Each recursive call should move closer to the base case.

---

# Call Stack

Each recursive function call is stored in the **Call Stack**.

Example

```javascript
function demo(number) {

    if (number === 0) {

        return;

    }

    demo(number - 1);

}

demo(3);
```

Call Stack

```text
demo(3)
   │
demo(2)
   │
demo(1)
   │
demo(0)
```

After reaching the base case, the stack begins to unwind.

```text
demo(0)
   ▲
demo(1)
   ▲
demo(2)
   ▲
demo(3)
```

---

# Examples

## Example 1 — Countdown

```javascript
function countdown(number) {

    if (number === 0) {

        console.log("Finished");

        return;

    }

    console.log(number);

    countdown(number - 1);

}

countdown(5);
```

---

## Example 2 — Factorial

```javascript
function factorial(number) {

    if (number === 1) {

        return 1;

    }

    return number * factorial(number - 1);

}

console.log(factorial(5));
```

Output

```
120
```

---

## Example 3 — Sum of Numbers

```javascript
function sum(number) {

    if (number === 1) {

        return 1;

    }

    return number + sum(number - 1);

}

console.log(sum(5));
```

Output

```
15
```

---

## Example 4 — Fibonacci Series

```javascript
function fibonacci(number) {

    if (number <= 1) {

        return number;

    }

    return fibonacci(number - 1) + fibonacci(number - 2);

}

console.log(fibonacci(6));
```

Output

```
8
```

---

# Recursion vs Iteration

| Recursion | Iteration |
|-----------|-----------|
| Uses function calls | Uses loops |
| Uses the Call Stack | Uses loop variables |
| Cleaner for recursive problems | Often faster |
| Easier for trees and graphs | Better for simple repetition |
| May cause stack overflow | Memory efficient |

Example using a loop

```javascript
for (let i = 5; i > 0; i--) {

    console.log(i);

}
```

Example using recursion

```javascript
function count(number) {

    if (number === 0) {

        return;

    }

    console.log(number);

    count(number - 1);

}
```

---

# Real-World Use Cases

Recursive functions are commonly used for:

- File system traversal
- Folder searching
- Tree traversal
- DOM traversal
- JSON parsing
- Menu generation
- Graph algorithms
- Artificial Intelligence algorithms

Example

```text
Root Folder
│
├── Documents
│   ├── Resume.pdf
│   └── Notes.txt
│
├── Images
│   ├── Photo1.jpg
│   └── Photo2.jpg
│
└── Videos
```

A recursive function can visit every folder and subfolder automatically.

---

# Advantages

Recursive functions offer many benefits.

- Elegant code.
- Easier tree processing.
- Natural problem-solving approach.
- Reduces complex nested loops.
- Excellent for divide-and-conquer algorithms.

---

# Limitations

Recursion also has some drawbacks.

- Slower than loops for simple tasks.
- Uses additional memory.
- Risk of stack overflow.
- Harder to debug for beginners.

---

# Common Mistakes

## Forgetting the Base Case

❌ Incorrect

```javascript
function test(number) {

    test(number - 1);

}
```

This causes infinite recursion.

---

## Base Case Never Reached

```javascript
function test(number) {

    if (number === 0) {

        return;

    }

    test(number + 1);

}
```

The value moves away from the base case.

---

## Changing the Wrong Value

Always ensure each recursive call moves toward the stopping condition.

---

# Best Practices

- Always define a base case.
- Ensure every recursive call approaches the base case.
- Keep recursive functions simple.
- Use recursion only when it makes the solution clearer.
- Consider loops for straightforward repetitive tasks.
- Avoid deep recursion unless necessary.

---

# Summary

In this lesson, you learned:

- What recursive functions are.
- Why recursion is useful.
- Base case and recursive case.
- How the call stack works.
- Recursion versus iteration.
- Practical examples.
- Advantages, limitations, and best practices.

Recursive functions are a fundamental programming concept and are widely used in algorithms, data structures, and many advanced JavaScript applications.

---

# Interview Questions

1. What is recursion?
2. What is a recursive function?
3. Why is the base case important?
4. What happens if there is no base case?
5. What is the call stack?
6. When should recursion be preferred over loops?
7. What is a stack overflow?

---

# Practice Exercise

1. Write a recursive countdown function.
2. Calculate the factorial of a number using recursion.
3. Find the sum of numbers from 1 to `n`.
4. Generate Fibonacci numbers recursively.
5. Compare recursive and iterative solutions for the same problem.

---

# Key Takeaway

> **A recursive function solves a problem by calling itself repeatedly until a base case is reached. Recursion is a powerful technique for solving hierarchical, repetitive, and divide-and-conquer problems in a clean and elegant way.**

---

# Next Lesson

<h2>
➡️ <a href="../0019_iife/iife.md" style="color:#1E90FF; text-decoration:none;">
<strong>Immediately Invoked Function Expression (IIFE)</strong>
</a>
</h2>