# Function Declaration

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is a Function Declaration?](#what-is-a-function-declaration)
- [Why Use Function Declarations?](#why-use-function-declarations)
- [Basic Syntax](#basic-syntax)
- [Anatomy of a Function Declaration](#anatomy-of-a-function-declaration)
- [How Function Declarations Work](#how-function-declarations-work)
- [Calling a Function](#calling-a-function)
- [Function Declaration vs Function Call](#function-declaration-vs-function-call)
- [Hoisting](#hoisting)
- [Examples](#examples)
- [Real-World Use Cases](#real-world-use-cases)
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

- Understand what a function declaration is.
- Write correctly declared JavaScript functions.
- Explain how function declarations work.
- Understand function hoisting.
- Know when to use function declarations.

---

# Introduction

Functions are one of the most powerful features of JavaScript. Before a function can be executed, it must first be **declared**.

A **function declaration** is the traditional and most commonly used way to create functions in JavaScript. It provides a clear structure, improves readability, and allows code to be reused throughout an application.

Whether you're developing a simple website or a large enterprise application, you'll encounter function declarations everywhere.

---

# What is a Function Declaration?

A **function declaration** is a named function created using the `function` keyword.

It defines a reusable block of code that can be called whenever needed.

Unlike normal statements, declaring a function **does not execute it**. JavaScript stores the function in memory, waiting until it is called.

---

# Why Use Function Declarations?

Function declarations provide several advantages.

They allow you to:

- Reuse code instead of writing it repeatedly.
- Organize related logic into one place.
- Improve readability.
- Simplify debugging.
- Make programs easier to maintain.
- Separate different responsibilities within an application.

Without functions, large applications would become difficult to manage.

---

# Basic Syntax

```javascript
function functionName(parameters) {

    // Code to execute

    return value;

}
```

Every function declaration starts with the **`function`** keyword followed by the function name, parentheses, and curly braces.

---

# Anatomy of a Function Declaration

Consider the following example:

```javascript
function add(a, b) {
    return a + b;
}
```

Each part has a specific purpose.

| Part | Description |
|------|-------------|
| `function` | Declares a function |
| `add` | Function name |
| `(a, b)` | Parameters |
| `{}` | Function body |
| `return` | Sends a value back |
| `a + b` | Expression being returned |

---

# How Function Declarations Work

When JavaScript encounters a function declaration, the following happens:

```text
Read Function
      │
      ▼
Store in Memory
      │
      ▼
Wait Until Called
      │
      ▼
Receive Arguments
      │
      ▼
Execute Statements
      │
      ▼
Return Result
      │
      ▼
Continue Program
```

A declared function remains available until the program finishes or the scope ends.

---

# Calling a Function

Declaring a function simply defines it.

To execute the code, you must **call** the function.

```javascript
function greet() {
    console.log("Hello JavaScript!");
}

greet();
```

Output

```
Hello JavaScript!
```

The parentheses `()` after the function name tell JavaScript to execute it.

---

# Function Declaration vs Function Call

These two concepts are often confused.

### Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

This creates the function but does **not** execute it.

---

### Function Call

```javascript
greet();
```

This executes the function.

Think of it like writing a recipe versus cooking the meal.

- **Declaration** → Writing the recipe.
- **Call** → Following the recipe to prepare the food.

---

# Hoisting

One unique feature of function declarations is **hoisting**.

JavaScript moves function declarations to memory before executing the rest of the code.

Because of this, you can call a function before it appears in the source code.

```javascript
greet();

function greet() {
    console.log("Hello!");
}
```

Output

```
Hello!
```

This works because the function is hoisted.

---

# Examples

## Example 1 — Simple Function

```javascript
function welcome() {
    console.log("Welcome!");
}

welcome();
```

---

## Example 2 — Function with Parameters

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Sachin");
```

---

## Example 3 — Returning a Value

```javascript
function square(number) {
    return number * number;
}

let result = square(5);

console.log(result);
```

Output

```
25
```

---

## Example 4 — Multiple Parameters

```javascript
function calculateArea(length, width) {

    return length * width;

}

console.log(calculateArea(10, 5));
```

---

# Real-World Use Cases

Function declarations are commonly used for:

- Form validation
- Authentication
- Shopping cart calculations
- Payment processing
- Mathematical operations
- API requests
- Utility functions
- Data formatting
- Report generation
- Business logic

---

# Common Mistakes

## Forgetting Parentheses

❌ Incorrect

```javascript
function greet {

}
```

✅ Correct

```javascript
function greet() {

}
```

---

## Forgetting to Call the Function

```javascript
function welcome() {
    console.log("Welcome");
}
```

Nothing happens because the function was never called.

Correct:

```javascript
welcome();
```

---

## Using Duplicate Function Names

❌

```javascript
function test() {

}

function test() {

}
```

The second declaration replaces the first one.

Use meaningful and unique names instead.

---

# Best Practices

- Use descriptive names.
- Keep one responsibility per function.
- Keep functions small and focused.
- Use camelCase naming.
- Return values when appropriate.
- Avoid unnecessary global variables.
- Add comments only when the logic is complex.

---

# Summary

In this lesson, you learned:

- What a function declaration is.
- How function declarations are written.
- The different parts of a function declaration.
- The difference between declaring and calling a function.
- How hoisting works.
- Best practices for writing function declarations.

Function declarations are the foundation upon which more advanced JavaScript function concepts are built.

---

# Interview Questions

1. What is a function declaration?
2. What is the difference between declaring and calling a function?
3. What is hoisting?
4. Why are function declarations hoisted?
5. What are the parts of a function declaration?
6. Can a function declaration have no parameters?
7. Why should function names be descriptive?

---

# Practice Exercise

1. Create a function that prints your name.
2. Write a function that adds two numbers.
3. Create a function that returns the cube of a number.
4. Call a function before its declaration and observe the result.
5. Write three meaningful function declarations for a library management system.

---

# Key Takeaway

> **A function declaration is the standard way to define reusable logic in JavaScript. It creates a named, reusable block of code that is hoisted by JavaScript, making it one of the most widely used and beginner-friendly ways to write functions.**

---

# Next Lesson

<h2>
➡️ <a href="../0006_function_expression/function_expression.md" style="color:#1E90FF; text-decoration:none;">
<strong>Function Expression</strong>
</a>
</h2>