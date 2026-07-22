# Callback Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Callback Functions?](#what-are-callback-functions)
- [Why Do We Need Callback Functions?](#why-do-we-need-callback-functions)
- [How Callback Functions Work](#how-callback-functions-work)
- [Syntax](#syntax)
- [Types of Callback Functions](#types-of-callback-functions)
- [Examples](#examples)
- [Synchronous vs Asynchronous Callbacks](#synchronous-vs-asynchronous-callbacks)
- [Callback Hell](#callback-hell)
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

- Understand what callback functions are.
- Learn why callback functions are important.
- Differentiate between synchronous and asynchronous callbacks.
- Use callback functions in practical JavaScript programs.
- Understand callback hell and how to avoid it.

---

# Introduction

Imagine you order food at a restaurant.

You place your order and continue talking with your friends.

When the food is ready, the waiter calls your name.

You don't keep asking every second if the food is ready—you simply provide a way to be notified.

A **callback function** works in the same way.

Instead of waiting continuously, you provide a function that JavaScript executes **later**, when a specific task has finished.

Callbacks are one of the most important concepts in JavaScript and form the foundation of asynchronous programming.

---

# What are Callback Functions?

A **callback function** is a function that is **passed as an argument to another function** and is executed after a specific operation is completed.

Example

```javascript
function greet(name) {

    console.log("Hello " + name);

}

function processUser(callback) {

    callback("Sachin");

}

processUser(greet);
```

Output

```
Hello Sachin
```

Here:

- `greet()` is the callback function.
- `processUser()` receives and executes it.

---

# Why Do We Need Callback Functions?

Callbacks make programs flexible and reusable.

They allow JavaScript to:

- Execute code later.
- Handle asynchronous operations.
- Reuse logic.
- Separate responsibilities.
- Respond to events.
- Process data after tasks complete.

Without callbacks, many browser features such as button clicks, timers, and API requests would not work efficiently.

---

# How Callback Functions Work

Example

```javascript
function execute(callback) {

    console.log("Task Started");

    callback();

    console.log("Task Finished");

}

function completed() {

    console.log("Callback Executed");

}

execute(completed);
```

Execution Flow

```text
Function Called
       │
       ▼
Main Function Executes
       │
       ▼
Callback Received
       │
       ▼
Callback Executed
       │
       ▼
Remaining Code Executes
```

---

# Syntax

```javascript
function main(callback) {

    callback();

}

function task() {

    console.log("Task Completed");

}

main(task);
```

---

# Types of Callback Functions

## Synchronous Callback

Executed immediately.

```javascript
function calculate(a, b, callback) {

    callback(a + b);

}

calculate(10, 20, function(result) {

    console.log(result);

});
```

---

## Asynchronous Callback

Executed later after another task completes.

```javascript
setTimeout(function() {

    console.log("Executed After 2 Seconds");

}, 2000);
```

---

# Examples

## Example 1 — Greeting

```javascript
function greet(name) {

    console.log("Hello " + name);

}

function welcome(callback) {

    callback("Alice");

}

welcome(greet);
```

---

## Example 2 — Calculator

```javascript
function add(a, b, callback) {

    const result = a + b;

    callback(result);

}

add(5, 10, function(answer) {

    console.log(answer);

});
```

---

## Example 3 — Timer

```javascript
setTimeout(function() {

    console.log("Time's up!");

}, 3000);
```

---

## Example 4 — Array Processing

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach(function(number) {

    console.log(number);

});
```

The function passed to `forEach()` is a callback.

---

# Synchronous vs Asynchronous Callbacks

| Synchronous Callback | Asynchronous Callback |
|----------------------|-----------------------|
| Executes immediately | Executes later |
| Blocks until finished | Does not block execution |
| Simple operations | Timers, APIs, events |
| Runs in order | Runs after an event or delay |

Example

Synchronous

```javascript
[1, 2, 3].forEach(function(item) {

    console.log(item);

});
```

Asynchronous

```javascript
setTimeout(function() {

    console.log("Done");

}, 1000);
```

---

# Callback Hell

When many callbacks are nested inside one another, the code becomes difficult to read and maintain.

Example

```javascript
login(function() {

    getProfile(function() {

        getOrders(function() {

            processPayment(function() {

                console.log("Finished");

            });

        });

    });

});
```

This deeply nested structure is known as **Callback Hell** or the **Pyramid of Doom**.

Modern JavaScript solves this using:

- Promises
- Async/Await

---

# Real-World Use Cases

Callback functions are used everywhere in JavaScript.

Examples include:

- Button click events
- Mouse events
- Keyboard events
- API requests
- Database operations
- File reading
- Timers
- Array methods (`map()`, `filter()`, `forEach()`, `reduce()`)

Example

```javascript
button.addEventListener("click", function() {

    console.log("Button Clicked");

});
```

---

# Advantages

Callback functions provide several benefits.

- Promote code reuse.
- Support asynchronous programming.
- Separate logic into smaller functions.
- Improve flexibility.
- Power event-driven programming.

---

# Limitations

Callbacks also have some drawbacks.

- Nested callbacks reduce readability.
- Error handling becomes difficult.
- Callback Hell makes maintenance harder.
- Complex applications benefit more from Promises and Async/Await.

---

# Common Mistakes

## Calling Instead of Passing a Callback

❌ Incorrect

```javascript
execute(greet());
```

The function executes immediately.

---

✅ Correct

```javascript
execute(greet);
```

The function reference is passed.

---

## Forgetting to Execute the Callback

```javascript
function run(callback) {

    callback;

}
```

Nothing happens.

Correct

```javascript
function run(callback) {

    callback();

}
```

---

## Too Many Nested Callbacks

Avoid deeply nested callback structures.

Instead, use:

- Promises
- Async/Await

---

# Best Practices

- Use descriptive callback names.
- Keep callback functions small.
- Avoid Callback Hell.
- Use arrow functions when appropriate.
- Prefer Promises or Async/Await for complex asynchronous code.
- Handle errors properly.

---

# Summary

In this lesson, you learned:

- What callback functions are.
- Why callback functions are important.
- How callback functions work.
- Synchronous and asynchronous callbacks.
- Callback Hell.
- Real-world applications.
- Advantages, limitations, and best practices.

Callback functions are one of the core building blocks of JavaScript and are essential for event-driven and asynchronous programming.

---

# Interview Questions

1. What is a callback function?
2. Why are callback functions used?
3. What is the difference between synchronous and asynchronous callbacks?
4. What is Callback Hell?
5. How can Callback Hell be avoided?
6. Name some JavaScript methods that use callbacks.
7. Why are callbacks important in event handling?

---

# Practice Exercise

1. Write a function that accepts another function as a callback.
2. Create a calculator using callback functions.
3. Use `setTimeout()` with a callback.
4. Use `forEach()` to print all array elements.
5. Rewrite nested callbacks using Promises (after learning Promises).

---

# Key Takeaway

> **A callback function is a function passed as an argument to another function and executed later or after a specific task completes. Callbacks are fundamental to JavaScript's event-driven and asynchronous programming model.**

---

# Next Lesson

<h2>
➡️ <a href="../0017_higher_order_functions/higher_order_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Higher-Order Functions</strong>
</a>
</h2>