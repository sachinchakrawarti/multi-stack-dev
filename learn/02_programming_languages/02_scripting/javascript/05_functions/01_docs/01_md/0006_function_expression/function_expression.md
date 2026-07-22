# Function Expression

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is a Function Expression?](#what-is-a-function-expression)
- [Why Do We Need Function Expressions?](#why-do-we-need-function-expressions)
- [Function Declaration vs Function Expression](#function-declaration-vs-function-expression)
- [Basic Syntax](#basic-syntax)
- [How Function Expressions Work](#how-function-expressions-work)
- [Anonymous Function Expressions](#anonymous-function-expressions)
- [Named Function Expressions](#named-function-expressions)
- [Examples](#examples)
- [Hoisting Behavior](#hoisting-behavior)
- [When Should You Use Function Expressions?](#when-should-you-use-function-expressions)
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

- Explain what a function expression is.
- Differentiate between function declarations and function expressions.
- Create anonymous and named function expressions.
- Understand hoisting behavior.
- Decide when function expressions are the better choice.

---

# Introduction

In the previous lesson, you learned that a **Function Declaration** creates a reusable function using the `function` keyword.

JavaScript also allows functions to be treated as **values**.

Just as you can store a number, string, object, or array inside a variable, you can also store a function inside a variable.

When a function is created and assigned to a variable, it is called a **Function Expression**.

This is one of the most important concepts in JavaScript because functions are **first-class citizens**, meaning they can be stored, passed, and returned just like any other value.

---

# What is a Function Expression?

A **Function Expression** is a function that is assigned to a variable.

Instead of creating the function directly, the function becomes the value of a variable.

```javascript
const greet = function () {
    console.log("Hello!");
};
```

Here:

- `greet` is the variable.
- The function is stored inside the variable.
- The variable can be used to execute the function.

---

# Why Do We Need Function Expressions?

Function expressions provide flexibility that function declarations cannot.

They allow developers to:

- Store functions in variables.
- Pass functions as arguments.
- Return functions from other functions.
- Create callbacks.
- Build dynamic applications.
- Write functional programming code.

Many modern JavaScript frameworks rely heavily on function expressions.

---

# Function Declaration vs Function Expression

Although both create functions, they behave differently.

| Feature | Function Declaration | Function Expression |
|----------|----------------------|---------------------|
| Has a name | ✅ Required | Optional |
| Stored in variable | ❌ | ✅ |
| Hoisted | ✅ Yes | ❌ No |
| Executable before definition | ✅ | ❌ |
| Common in modern JS | ✅ | ✅ |

---

# Basic Syntax

```javascript
const variableName = function (parameters) {

    // Code

    return value;

};
```

Notice the semicolon at the end.

Since the function is assigned to a variable, the statement ends with `;`.

---

# How Function Expressions Work

JavaScript processes the following code:

```javascript
const add = function (a, b) {

    return a + b;

};
```

Internally:

```text
Create Variable
       │
       ▼
Create Function
       │
       ▼
Store Function Inside Variable
       │
       ▼
Wait Until Variable Is Called
       │
       ▼
Execute Function
```

Unlike function declarations, JavaScript does **not** fully hoist the function body.

---

# Anonymous Function Expressions

Most function expressions are **anonymous**, meaning they have no name.

```javascript
const greet = function () {

    console.log("Hello");

};

greet();
```

The variable name becomes the way to access the function.

---

# Named Function Expressions

A function expression can also have its own name.

```javascript
const calculate = function multiply(a, b) {

    return a * b;

};

console.log(calculate(5, 4));
```

Here:

- Variable name → `calculate`
- Internal function name → `multiply`

Named function expressions are mainly useful for debugging because the function name appears in stack traces.

---

# Examples

## Example 1 — Basic Function Expression

```javascript
const welcome = function () {

    console.log("Welcome!");

};

welcome();
```

---

## Example 2 — Returning a Value

```javascript
const square = function (number) {

    return number * number;

};

console.log(square(8));
```

---

## Example 3 — Multiple Parameters

```javascript
const area = function (length, width) {

    return length * width;

};

console.log(area(10, 5));
```

---

## Example 4 — Function Stored in a Variable

```javascript
const sayHello = function () {

    console.log("Hello JavaScript!");

};

sayHello();
```

---

# Hoisting Behavior

This is one of the biggest differences.

## Function Declaration

Works.

```javascript
greet();

function greet() {

    console.log("Hello");

}
```

---

## Function Expression

Produces an error.

```javascript
greet();

const greet = function () {

    console.log("Hello");

};
```

Output

```text
ReferenceError
```

The variable exists, but it cannot be used before it is initialized.

---

# When Should You Use Function Expressions?

Function expressions are ideal when:

- Creating callback functions.
- Assigning functions to variables.
- Passing functions as arguments.
- Returning functions.
- Writing modular code.
- Working with React components.
- Using event listeners.

---

# Real-World Use Cases

Function expressions are common in:

## Event Listeners

```javascript
button.addEventListener("click", function () {

    console.log("Button clicked");

});
```

---

## Timers

```javascript
setTimeout(function () {

    console.log("Executed");

}, 1000);
```

---

## Array Methods

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (number) {

    console.log(number);

});
```

---

## Frameworks

React, Vue, Angular, Express.js, and Node.js frequently use function expressions.

---

# Common Mistakes

## Calling Before Assignment

❌ Incorrect

```javascript
calculate();

const calculate = function () {

};
```

---

## Forgetting the Semicolon

❌

```javascript
const greet = function () {

}
```

✅

```javascript
const greet = function () {

};
```

---

## Confusing Variable Name and Function Name

```javascript
const greet = function hello() {

};
```

You call:

```javascript
greet();
```

Not:

```javascript
hello();
```

---

# Best Practices

- Use `const` instead of `var`.
- Prefer anonymous function expressions unless a name is useful for debugging.
- Keep functions focused on one responsibility.
- Use descriptive variable names.
- Avoid creating unnecessarily large functions.
- Use arrow functions where appropriate (covered in the next lesson).

---

# Summary

In this lesson, you learned:

- What a function expression is.
- How it differs from a function declaration.
- Anonymous and named function expressions.
- Hoisting behavior.
- Practical uses in modern JavaScript.
- Best practices for writing function expressions.

Function expressions make JavaScript more flexible by allowing functions to be treated like any other value.

---

# Interview Questions

1. What is a function expression?
2. How does it differ from a function declaration?
3. Are function expressions hoisted?
4. What is an anonymous function?
5. What is a named function expression?
6. Why are function expressions useful in callbacks?
7. Why is `const` preferred over `var` for function expressions?

---

# Practice Exercise

1. Create a function expression that prints your name.
2. Write a function expression to calculate the area of a rectangle.
3. Create a named function expression.
4. Try calling a function expression before it is defined and observe the error.
5. Rewrite a function declaration as a function expression.

---

# Key Takeaway

> **A function expression treats a function as a value by storing it inside a variable. This makes JavaScript more flexible and enables powerful concepts such as callbacks, higher-order functions, and functional programming.**

---

# Next Lesson

<h2>
➡️ <a href="../0007_arrow_functions/arrow_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Arrow Functions</strong>
</a>
</h2>