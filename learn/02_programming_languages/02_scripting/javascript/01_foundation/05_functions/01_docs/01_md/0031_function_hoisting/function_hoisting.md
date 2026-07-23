# Function Hoisting

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is Function Hoisting?](#what-is-function-hoisting)
- [Why Do We Need to Understand Hoisting?](#why-do-we-need-to-understand-hoisting)
- [How Function Hoisting Works](#how-function-hoisting-works)
- [Function Declaration Hoisting](#function-declaration-hoisting)
- [Function Expression Hoisting](#function-expression-hoisting)
- [Arrow Function Hoisting](#arrow-function-hoisting)
- [Hoisting with var, let, and const](#hoisting-with-var-let-and-const)
- [Examples](#examples)
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

- Understand Function Hoisting.
- Differentiate between declaration and expression hoisting.
- Understand how `var`, `let`, and `const` affect hoisting.
- Avoid common hoisting-related bugs.
- Write cleaner and more predictable JavaScript code.

---

# Introduction

Imagine a teacher collecting all student names before class begins.

Even if a student speaks later, the teacher already knows the student's name because attendance was taken first.

JavaScript behaves similarly.

Before executing your code, JavaScript scans it and **moves certain declarations into memory**.

This behavior is called **Hoisting**.

Understanding hoisting helps explain why some functions work before they are written, while others produce errors.

---

# What is Function Hoisting?

**Function Hoisting** is JavaScript's behavior of making **Function Declarations** available before the code reaches their actual location.

This happens during the **Memory Creation Phase** of the JavaScript Execution Context.

Example

```javascript
sayHello();

function sayHello() {

    console.log("Hello!");

}
```

Output

```
Hello!
```

Although `sayHello()` is called before its declaration, JavaScript successfully executes it because Function Declarations are hoisted.

---

# Why Do We Need to Understand Hoisting?

Understanding hoisting helps you:

- Avoid confusing bugs.
- Understand JavaScript's execution model.
- Differentiate between function types.
- Write predictable code.
- Perform better in interviews.

---

# How Function Hoisting Works

```text
JavaScript File
        │
        ▼
Memory Creation Phase
        │
        ├── Variables Reserved
        ├── Function Declarations Stored
        ▼
Execution Phase
        │
        ▼
Statements Execute Line by Line
```

Function declarations are stored entirely during the memory phase.

---

# Function Declaration Hoisting

Function Declarations are fully hoisted.

Example

```javascript
greet();

function greet() {

    console.log("Welcome!");

}
```

Output

```
Welcome!
```

JavaScript internally treats it like:

```javascript
function greet() {

    console.log("Welcome!");

}

greet();
```

---

# Function Expression Hoisting

Function Expressions are **not fully hoisted**.

Example

```javascript
greet();

var greet = function () {

    console.log("Hello");

};
```

Output

```
TypeError: greet is not a function
```

Reason:

Only the variable `greet` is hoisted.

Initially it becomes:

```javascript
var greet = undefined;
```

Later the function is assigned.

---

# Arrow Function Hoisting

Arrow Functions behave exactly like Function Expressions.

Example

```javascript
sayHi();

const sayHi = () => {

    console.log("Hi");

};
```

Output

```
ReferenceError
```

The function cannot be used before initialization.

---

# Hoisting with `var`, `let`, and `const`

## Using `var`

```javascript
console.log(age);

var age = 22;
```

Output

```
undefined
```

`var` is hoisted and initialized with `undefined`.

---

## Using `let`

```javascript
console.log(age);

let age = 22;
```

Output

```
ReferenceError
```

`let` is hoisted but remains inside the **Temporal Dead Zone (TDZ)** until initialized.

---

## Using `const`

```javascript
console.log(age);

const age = 22;
```

Output

```
ReferenceError
```

`const` also stays inside the Temporal Dead Zone.

---

# Examples

## Example 1 — Function Declaration

```javascript
display();

function display() {

    console.log("JavaScript");

}
```

Output

```
JavaScript
```

---

## Example 2 — Function Expression

```javascript
show();

var show = function () {

    console.log("Function Expression");

};
```

Output

```
TypeError
```

---

## Example 3 — Arrow Function

```javascript
calculate();

const calculate = () => {

    console.log("Arrow Function");

};
```

Output

```
ReferenceError
```

---

## Example 4 — Calling After Declaration

```javascript
const greet = () => {

    console.log("Hello");

};

greet();
```

Output

```
Hello
```

This is the recommended approach.

---

# Real-World Use Cases

Understanding hoisting is useful when:

- Debugging JavaScript applications.
- Reading legacy JavaScript code.
- Working with large codebases.
- Preparing for technical interviews.
- Understanding execution context.
- Learning Closures and Scope.
- Developing Node.js applications.
- Working with JavaScript frameworks.

---

# Advantages

Understanding hoisting provides several benefits.

- Easier debugging.
- Better understanding of execution context.
- Cleaner code organization.
- Improved interview performance.
- Prevents unexpected runtime errors.

---

# Limitations

Hoisting itself can also cause confusion.

- Makes execution less obvious.
- Causes bugs with `var`.
- Leads to unexpected `undefined` values.
- Different behavior for declarations and expressions.

---

# Common Mistakes

## Assuming Every Function is Hoisted

❌ Incorrect

```javascript
hello();

const hello = () => {

    console.log("Hello");

};
```

---

✅ Correct

```javascript
const hello = () => {

    console.log("Hello");

};

hello();
```

---

## Confusing Function Expressions with Declarations

❌

```javascript
greet();

var greet = function () {};
```

---

✅

```javascript
function greet() {}

greet();
```

---

## Using Variables Before Initialization

❌

```javascript
console.log(name);

let name = "Sachin";
```

---

✅

```javascript
let name = "Sachin";

console.log(name);
```

---

# Best Practices

- Declare functions before using them.
- Prefer `const` for Function Expressions and Arrow Functions.
- Avoid relying on hoisting.
- Avoid using `var`.
- Keep functions near where they are used.
- Write code in execution order for better readability.

---

# Summary

In this lesson, you learned:

- What Function Hoisting is.
- How JavaScript performs hoisting.
- Why Function Declarations are fully hoisted.
- Why Function Expressions and Arrow Functions are not.
- The behavior of `var`, `let`, and `const`.
- Common mistakes and best practices.

Understanding hoisting is essential for writing reliable JavaScript and for mastering advanced topics like execution contexts and closures.

---

# Interview Questions

1. What is Function Hoisting?
2. Which functions are fully hoisted?
3. Why are Function Expressions not fully hoisted?
4. How do Arrow Functions behave during hoisting?
5. What is the Temporal Dead Zone?
6. How does `var` differ from `let` during hoisting?
7. Why is relying on hoisting considered a bad practice?

---

# Practice Exercise

1. Write a Function Declaration and call it before its definition.
2. Repeat the same using a Function Expression and observe the error.
3. Repeat using an Arrow Function.
4. Compare the behavior of `var`, `let`, and `const`.
5. Draw the Memory Creation Phase and Execution Phase for a simple program.

---

# Key Takeaway

> **Function Hoisting allows JavaScript Function Declarations to be used before they appear in the source code because they are fully stored during the Memory Creation Phase. Function Expressions and Arrow Functions are not fully hoisted, so understanding these differences helps you write predictable and bug-free JavaScript code.**

---

# Next Lesson

<h2>
➡️ <a href="../0032_pure_functions/pure_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Pure Functions</strong>
</a>
</h2>