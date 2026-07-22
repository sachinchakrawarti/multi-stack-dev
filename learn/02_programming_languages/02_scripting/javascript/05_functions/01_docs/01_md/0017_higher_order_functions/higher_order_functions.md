# Higher-Order Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Higher-Order Functions?](#what-are-higher-order-functions)
- [Why Do We Need Higher-Order Functions?](#why-do-we-need-higher-order-functions)
- [How Higher-Order Functions Work](#how-higher-order-functions-work)
- [Syntax](#syntax)
- [Characteristics of Higher-Order Functions](#characteristics-of-higher-order-functions)
- [Passing Functions as Arguments](#passing-functions-as-arguments)
- [Returning Functions](#returning-functions)
- [Built-in Higher-Order Functions](#built-in-higher-order-functions)
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

- Understand what Higher-Order Functions are.
- Learn why Higher-Order Functions are useful.
- Pass functions as arguments.
- Return functions from other functions.
- Use built-in Higher-Order Functions effectively.

---

# Introduction

Imagine a manager in a company.

The manager doesn't perform every task personally. Instead, the manager assigns tasks to employees and coordinates their work.

A **Higher-Order Function (HOF)** behaves similarly.

Instead of performing every operation itself, it can:

- Accept other functions as input.
- Return new functions as output.

This makes JavaScript programs more reusable, modular, and flexible.

Higher-Order Functions are one of the most powerful features of JavaScript because **functions are first-class objects**.

---

# What are Higher-Order Functions?

A **Higher-Order Function** is a function that:

- Accepts one or more functions as arguments, **or**
- Returns another function.

If either condition is true, it is considered a Higher-Order Function.

Example

```javascript
function greet(name) {

    console.log("Hello " + name);

}

function process(callback) {

    callback("Sachin");

}

process(greet);
```

Here,

- `process()` is a Higher-Order Function.
- `greet()` is the callback function.

---

# Why Do We Need Higher-Order Functions?

Higher-Order Functions make programs:

- More reusable.
- Easier to maintain.
- Less repetitive.
- More readable.
- More flexible.
- Functional in design.

Without Higher-Order Functions, developers would write similar code repeatedly.

---

# How Higher-Order Functions Work

```javascript
function execute(callback) {

    callback();

}
```

Execution Flow

```text
Function Called
       │
       ▼
Receive Function
       │
       ▼
Execute Callback
       │
       ▼
Return Result
```

A Higher-Order Function controls **when** and **how** another function executes.

---

# Syntax

```javascript
function higherOrder(callback) {

    callback();

}
```

Returning a function

```javascript
function createGreeting() {

    return function() {

        console.log("Hello");

    };

}
```

---

# Characteristics of Higher-Order Functions

A Higher-Order Function must satisfy at least one of these conditions:

### Accepts Functions

```javascript
function execute(callback) {

    callback();

}
```

---

### Returns Functions

```javascript
function createFunction() {

    return function() {

        console.log("Returned Function");

    };

}
```

---

# Passing Functions as Arguments

Example

```javascript
function add(a, b) {

    return a + b;

}

function calculator(operation, x, y) {

    return operation(x, y);

}

console.log(calculator(add, 10, 20));
```

Output

```
30
```

---

# Returning Functions

Functions can also return other functions.

Example

```javascript
function multiplier(number) {

    return function(value) {

        return value * number;

    };

}

const double = multiplier(2);

console.log(double(10));
```

Output

```
20
```

---

# Built-in Higher-Order Functions

JavaScript provides many built-in Higher-Order Functions.

### `forEach()`

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(number) {

    console.log(number);

});
```

---

### `map()`

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(function(number) {

    return number * 2;

});

console.log(doubled);
```

---

### `filter()`

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter(function(number) {

    return number > 20;

});

console.log(result);
```

---

### `reduce()`

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce(function(sum, number) {

    return sum + number;

}, 0);

console.log(total);
```

---

# Examples

## Example 1 — Greeting

```javascript
function greet(name) {

    console.log("Hello " + name);

}

function process(callback) {

    callback("Alice");

}

process(greet);
```

---

## Example 2 — Calculator

```javascript
function multiply(a, b) {

    return a * b;

}

function calculate(operation, x, y) {

    return operation(x, y);

}

console.log(calculate(multiply, 5, 4));
```

---

## Example 3 — Returning Functions

```javascript
function greeting(message) {

    return function(name) {

        console.log(message + " " + name);

    };

}

const welcome = greeting("Welcome");

welcome("Sachin");
```

---

## Example 4 — Using `map()`

```javascript
const prices = [100, 200, 300];

const discounted = prices.map(function(price) {

    return price * 0.9;

});

console.log(discounted);
```

---

# Real-World Use Cases

Higher-Order Functions are used throughout JavaScript.

Examples include:

- React event handlers.
- Array processing.
- API response handling.
- Authentication middleware.
- Logging.
- Form validation.
- Express middleware.
- Functional programming libraries.

Example

```javascript
users.filter(user => user.isActive);
```

---

# Advantages

Higher-Order Functions offer many benefits.

- Reduce duplicate code.
- Increase code reuse.
- Improve readability.
- Support functional programming.
- Make applications modular.
- Simplify array operations.

---

# Limitations

Higher-Order Functions also have some considerations.

- May be confusing for beginners.
- Excessive nesting reduces readability.
- Overuse may complicate debugging.
- Anonymous functions can reduce code clarity.

---

# Common Mistakes

## Calling Instead of Passing a Function

❌ Incorrect

```javascript
process(greet());
```

---

✅ Correct

```javascript
process(greet);
```

---

## Forgetting to Return a Function

```javascript
function create() {

    function demo() {

        console.log("Hello");

    }

}
```

Correct

```javascript
function create() {

    return function() {

        console.log("Hello");

    };

}
```

---

## Misusing `map()`

```javascript
numbers.map(function(number) {

    console.log(number);

});
```

Use `forEach()` when you only want to print values.

---

# Best Practices

- Keep callback functions small.
- Use descriptive function names.
- Prefer arrow functions where appropriate.
- Avoid unnecessary nesting.
- Use built-in Higher-Order Functions instead of manual loops when suitable.
- Return values consistently.

---

# Summary

In this lesson, you learned:

- What Higher-Order Functions are.
- Why they are useful.
- Passing functions as arguments.
- Returning functions.
- Built-in Higher-Order Functions.
- Real-world applications.
- Advantages, limitations, and best practices.

Higher-Order Functions are one of JavaScript's most powerful features and form the foundation of modern frameworks like React, functional programming techniques, and many built-in array methods.

---

# Interview Questions

1. What is a Higher-Order Function?
2. Why are Higher-Order Functions useful?
3. Can a function return another function?
4. Name some built-in Higher-Order Functions.
5. What is the difference between a callback and a Higher-Order Function?
6. Why are Higher-Order Functions important in functional programming?
7. How are Higher-Order Functions used in React?

---

# Practice Exercise

1. Create a Higher-Order Function that accepts a callback.
2. Write a function that returns another function.
3. Use `map()` to square all numbers in an array.
4. Use `filter()` to find even numbers.
5. Use `reduce()` to calculate the total of an array.

---

# Key Takeaway

> **A Higher-Order Function is a function that accepts other functions as arguments or returns a function. They enable reusable, modular, and expressive code, making them a fundamental concept in modern JavaScript development.**

---

# Next Lesson

<h2>
➡️ <a href="../0018_recursive_functions/recursive_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Recursive Functions</strong>
</a>
</h2>