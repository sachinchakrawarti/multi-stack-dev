# What are Functions?

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Do We Need Functions?](#why-do-we-need-functions)
- [Definition](#definition)
- [Real-World Analogy](#real-world-analogy)
- [How Functions Work](#how-functions-work)
- [Syntax](#syntax)
- [Basic Example](#basic-example)
- [More Examples](#more-examples)
- [Visual Flow](#visual-flow)
- [Internal Working](#internal-working)
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

- Understand what a function is.
- Explain why functions are important.
- Understand how functions work.
- Write and call simple JavaScript functions.
- Identify real-world uses of functions.

---

# Introduction

Functions are one of the most important concepts in JavaScript.

A function is a reusable block of code that performs a specific task. Instead of writing the same code repeatedly, developers write it once inside a function and call it whenever needed.

Functions help organize programs into smaller, reusable, and manageable pieces, making code easier to read, test, and maintain.

Almost every JavaScript application—from simple websites to large enterprise systems—relies heavily on functions.

---

# Why Do We Need Functions?

Imagine writing the same code hundreds of times.

Without functions:

- Code becomes repetitive.
- Programs become difficult to maintain.
- Bugs become harder to fix.
- Development becomes slower.

Functions solve these problems by allowing us to:

- Write code once.
- Reuse it anywhere.
- Reduce duplication.
- Improve readability.
- Build modular applications.

---

# Definition

> **A function is a reusable block of code designed to perform a specific task. It can accept input, process it, and optionally return a result.**

---

# Real-World Analogy

Think about a **coffee machine**.

You press a button.

The machine:

- Receives your request.
- Processes it.
- Makes coffee.
- Returns your drink.

You don't need to know how the machine works internally.

A JavaScript function works in the same way.

```
Input
   ↓
Function
   ↓
Output
```

---

# How Functions Work

A function usually follows these steps:

1. The function is created.
2. The function waits until it is called.
3. When called, JavaScript executes its code.
4. The function performs its task.
5. It may return a value.
6. The program continues execution.

---

# Syntax

```javascript
function functionName(parameters) {
    // code
    return value;
}
```

---

# Basic Example

```javascript
function greet() {
    console.log("Hello, JavaScript!");
}

greet();
```

Output

```
Hello, JavaScript!
```

---

# More Examples

## Example 1 — Addition Function

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

Output

```
30
```

---

## Example 2 — Greeting Function

```javascript
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Sachin"));
```

Output

```
Hello Sachin
```

---

## Example 3 — Calculate Square

```javascript
function square(number) {
    return number * number;
}

console.log(square(8));
```

Output

```
64
```

---

# Visual Flow

```text
Function Call
      │
      ▼
Receive Input
      │
      ▼
Execute Code
      │
      ▼
Return Result
      │
      ▼
Continue Program
```

---

# Internal Working

When JavaScript encounters a function:

1. It stores the function in memory.
2. The function is **not executed immediately**.
3. It executes only when called.
4. JavaScript creates a new execution context.
5. The function finishes execution.
6. Control returns to the previous code.

---

# Real-World Use Cases

Functions are used in almost every JavaScript application.

Examples include:

- Form validation
- Calculator applications
- Login systems
- Shopping carts
- Event handling
- API requests
- Database operations
- DOM manipulation
- Data processing
- Animation

---

# Advantages

- Reusable code
- Less duplication
- Easy maintenance
- Better readability
- Modular programming
- Easier debugging
- Better collaboration
- Improved scalability

---

# Limitations

- Too many small functions can reduce readability.
- Poorly named functions make code confusing.
- Deeply nested function calls can be difficult to debug.

---

# Common Mistakes

## ❌ Incorrect

Forgetting to call the function.

```javascript
function greet() {
    console.log("Hello");
}

greet;
```

Nothing happens.

---

## ✅ Correct

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output

```
Hello
```

---

# Best Practices

- Give functions meaningful names.
- Keep each function focused on one task.
- Avoid duplicate code.
- Keep functions short and readable.
- Return values instead of using global variables whenever possible.
- Add comments only when necessary.
- Follow consistent coding standards.

---

# Summary

In this lesson, you learned:

- What a function is.
- Why functions are important.
- How functions work.
- Basic function syntax.
- How to call a function.
- Practical examples of functions.
- Advantages of using functions.
- Common mistakes and best practices.

---

# Interview Questions

1. What is a function in JavaScript?
2. Why do we use functions?
3. What are the advantages of functions?
4. Can a function return a value?
5. What is the difference between defining and calling a function?

---

# Practice Exercise

1. Create a function that prints your name.
2. Create a function that adds two numbers.
3. Create a function that returns the square of a number.
4. Create a greeting function that accepts a person's name.

---

# Key Takeaway

> **Functions are reusable building blocks of JavaScript that help organize code, eliminate repetition, and make applications easier to develop, maintain, and scale.**

---

# Next Lesson

<h2>
➡️ <a href="../0002_why_use_functions/why_use_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Why Use Functions?</strong>
</a>
</h2>