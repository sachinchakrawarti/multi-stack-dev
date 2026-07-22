# Immediately Invoked Function Expression (IIFE)

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is an IIFE?](#what-is-an-iife)
- [Why Do We Need IIFE?](#why-do-we-need-iife)
- [How IIFE Works](#how-iife-works)
- [Syntax](#syntax)
- [Types of IIFE](#types-of-iife)
- [Examples](#examples)
- [IIFE vs Normal Functions](#iife-vs-normal-functions)
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

- Understand what an IIFE is.
- Learn why IIFEs were introduced.
- Write different types of IIFEs.
- Understand how IIFEs create private scope.
- Identify real-world uses of IIFEs.

---

# Introduction

Imagine you need to perform a task **only once**.

For example, when a web page loads, you want to initialize settings, create configuration variables, or set up an application.

Instead of creating a function and calling it separately, JavaScript allows you to **create and execute the function immediately**.

This is called an **Immediately Invoked Function Expression (IIFE)**.

Before ES6 introduced block scope with `let` and `const`, IIFEs were widely used to avoid polluting the global namespace.

---

# What is an IIFE?

An **Immediately Invoked Function Expression (IIFE)** is a function that is:

- Defined as an expression.
- Executed immediately after it is created.
- Usually used to create a private scope.

Example

```javascript
(function () {

    console.log("Hello from IIFE!");

})();
```

Output

```
Hello from IIFE!
```

The function runs immediately after its definition.

---

# Why Do We Need IIFE?

IIFEs solve several problems.

They help to:

- Avoid global variables.
- Create private scope.
- Execute initialization code immediately.
- Prevent variable name conflicts.
- Encapsulate code.
- Improve application organization.

Before ES6, IIFEs were one of the best ways to simulate private variables.

---

# How IIFE Works

Example

```javascript
(function () {

    console.log("Executed");

})();
```

Execution Flow

```text
Function Created
        │
        ▼
Wrapped Inside ()
        │
        ▼
Immediately Invoked
        │
        ▼
Execution Finished
```

Unlike normal functions, no separate function call is required.

---

# Syntax

Basic Syntax

```javascript
(function () {

    // Code

})();
```

Arrow Function IIFE

```javascript
(() => {

    // Code

})();
```

Named IIFE

```javascript
(function initialize() {

    console.log("App Started");

})();
```

---

# Types of IIFE

## Anonymous IIFE

```javascript
(function () {

    console.log("Anonymous");

})();
```

---

## Named IIFE

```javascript
(function app() {

    console.log("Application Loaded");

})();
```

---

## Arrow Function IIFE

```javascript
(() => {

    console.log("Arrow IIFE");

})();
```

---

## Async IIFE

```javascript
(async function () {

    console.log("Async IIFE");

})();
```

This is useful when using `await` outside a regular async function.

---

# Examples

## Example 1 — Basic IIFE

```javascript
(function () {

    console.log("Welcome!");

})();
```

---

## Example 2 — IIFE with Parameters

```javascript
(function (name) {

    console.log("Hello " + name);

})("Sachin");
```

Output

```
Hello Sachin
```

---

## Example 3 — Returning a Value

```javascript
const result = (function () {

    return 100;

})();

console.log(result);
```

Output

```
100
```

---

## Example 4 — Private Variables

```javascript
const counter = (function () {

    let count = 0;

    return {

        increment() {

            count++;

            console.log(count);

        }

    };

})();

counter.increment();
counter.increment();
```

Output

```
1
2
```

The variable `count` cannot be accessed directly from outside.

---

# IIFE vs Normal Functions

| IIFE | Normal Function |
|------|-----------------|
| Executes immediately | Executes only when called |
| Creates private scope | Scope depends on where it's called |
| Mostly used once | Can be reused multiple times |
| No separate function call | Requires explicit invocation |

Example

Normal Function

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

IIFE

```javascript
(function () {

    console.log("Hello");

})();
```

---

# Real-World Use Cases

IIFEs are commonly used for:

- Application initialization.
- Configuration setup.
- Creating private variables.
- Encapsulating third-party libraries.
- Avoiding global namespace pollution.
- Module pattern (before ES6 modules).

Example

```javascript
const App = (function () {

    const version = "1.0";

    function start() {

        console.log("Application Started");

    }

    return {

        start

    };

})();

App.start();
```

---

# Advantages

IIFEs provide several benefits.

- Immediate execution.
- Private scope.
- Prevent global variable pollution.
- Cleaner code organization.
- Encapsulation.
- Useful for initialization logic.

---

# Limitations

IIFEs also have some drawbacks.

- Cannot be reused after execution.
- May confuse beginners.
- Less necessary with ES6 modules and block scope.
- Overuse can reduce readability.

---

# Common Mistakes

## Forgetting Parentheses

❌ Incorrect

```javascript
function () {

    console.log("Hello");

}();
```

This produces a syntax error.

---

✅ Correct

```javascript
(function () {

    console.log("Hello");

})();
```

---

## Forgetting the Final `()`

```javascript
(function () {

    console.log("Hello");

});
```

The function is defined but never executed.

---

## Using Global Variables Inside IIFE

```javascript
let count = 0;

(function () {

    count++;

})();
```

Prefer local variables whenever possible.

---

# Best Practices

- Use IIFEs for one-time initialization.
- Keep IIFEs small and focused.
- Prefer ES6 modules for large applications.
- Use descriptive names for named IIFEs.
- Use arrow-function IIFEs where appropriate.
- Avoid unnecessary nesting.

---

# Summary

In this lesson, you learned:

- What an IIFE is.
- Why IIFEs are useful.
- How they work.
- Different types of IIFEs.
- Creating private scope.
- Real-world applications.
- Advantages, limitations, and best practices.

Although ES6 modules have reduced the need for IIFEs, understanding them is still important because many existing JavaScript libraries and legacy applications use this pattern.

---

# Interview Questions

1. What is an IIFE?
2. Why were IIFEs introduced?
3. How does an IIFE prevent global namespace pollution?
4. What is the difference between an IIFE and a normal function?
5. Can an IIFE accept parameters?
6. Can an IIFE return a value?
7. Are IIFEs still useful after ES6?

---

# Practice Exercise

1. Create a basic IIFE that prints a message.
2. Write an IIFE that accepts a parameter.
3. Create an IIFE that returns a value.
4. Build a simple counter using an IIFE and private variables.
5. Rewrite a normal function as an IIFE.

---

# Key Takeaway

> **An Immediately Invoked Function Expression (IIFE) is a function that executes as soon as it is created, providing a private scope and preventing unnecessary global variables. It was a key pattern in JavaScript before ES6 modules and block-scoped variables.**

---

# Next Lesson

<h2>
➡️ <a href="../0020_generator_functions/generator_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Generator Functions</strong>
</a>
</h2>