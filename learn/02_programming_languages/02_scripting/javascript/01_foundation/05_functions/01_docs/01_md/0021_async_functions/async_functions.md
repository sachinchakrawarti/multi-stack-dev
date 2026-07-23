# Async Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Async Functions?](#what-are-async-functions)
- [Why Do We Need Async Functions?](#why-do-we-need-async-functions)
- [How Async Functions Work](#how-async-functions-work)
- [Syntax](#syntax)
- [The `async` Keyword](#the-async-keyword)
- [The `await` Keyword](#the-await-keyword)
- [Promise vs Async/Await](#promise-vs-asyncawait)
- [Examples](#examples)
- [Error Handling](#error-handling)
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

- Understand Async Functions.
- Learn the `async` and `await` keywords.
- Write asynchronous JavaScript code.
- Handle errors using `try...catch`.
- Compare Promises with Async/Await.

---

# Introduction

Imagine you order food online.

After placing the order, you don't stop everything and wait for the delivery person. Instead, you continue watching a movie, working, or studying.

When the food arrives, you receive a notification and continue with the next step.

JavaScript works similarly.

Many operations take time to complete, such as:

- Fetching data from a server
- Reading a file
- Querying a database
- Waiting for a timer
- Downloading images

Instead of blocking the entire program, JavaScript allows these tasks to run asynchronously.

**Async Functions** provide a clean and readable way to work with asynchronous operations.

---

# What are Async Functions?

An **Async Function** is a function declared using the `async` keyword.

It automatically returns a **Promise**.

Inside an async function, the `await` keyword can pause execution until a Promise is resolved.

Example

```javascript
async function greet() {

    return "Hello World";

}

greet().then(console.log);
```

Output

```
Hello World
```

Even though a string is returned, JavaScript wraps it inside a Promise.

---

# Why Do We Need Async Functions?

Before Async/Await, asynchronous programming relied on:

- Callbacks
- Callback Hell
- Promises using `.then()`

Async/Await makes asynchronous code:

- Easier to read.
- Easier to write.
- Easier to debug.
- More similar to synchronous code.
- Better for error handling.

---

# How Async Functions Work

Execution Flow

```text
Async Function Starts
         │
         ▼
Execute Code
         │
         ▼
await Promise
         │
         ▼
Pause Function
         │
         ▼
Promise Resolves
         │
         ▼
Resume Execution
         │
         ▼
Return Promise
```

Only the async function pauses.

The rest of the JavaScript program continues running.

---

# Syntax

Basic Syntax

```javascript
async function functionName() {

    const result = await promise;

    return result;

}
```

Arrow Function

```javascript
const fetchData = async () => {

    return "Done";

};
```

---

# The `async` Keyword

The `async` keyword tells JavaScript that the function is asynchronous.

Example

```javascript
async function message() {

    return "Learning JavaScript";

}

message().then(console.log);
```

Output

```
Learning JavaScript
```

Even though a string is returned, JavaScript converts it into a Promise.

---

# The `await` Keyword

The `await` keyword pauses execution until a Promise completes.

Example

```javascript
function delay() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Finished");

        }, 2000);

    });

}

async function run() {

    const result = await delay();

    console.log(result);

}

run();
```

Output (after 2 seconds)

```
Finished
```

---

# Promise vs Async/Await

Promise

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

Async/Await

```javascript
async function getData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

Async/Await is generally easier to understand.

---

# Examples

## Example 1 — Basic Async Function

```javascript
async function hello() {

    return "Hello";

}

hello().then(console.log);
```

---

## Example 2 — Waiting with `await`

```javascript
function wait() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Completed");

        }, 1000);

    });

}

async function execute() {

    const result = await wait();

    console.log(result);

}

execute();
```

---

## Example 3 — Multiple Awaits

```javascript
async function process() {

    console.log("Start");

    await Promise.resolve();

    console.log("Middle");

    await Promise.resolve();

    console.log("End");

}

process();
```

---

## Example 4 — Fetch API

```javascript
async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);

}

getUsers();
```

---

# Error Handling

Errors inside async functions should be handled using `try...catch`.

Example

```javascript
async function fetchData() {

    try {

        throw new Error("Something went wrong");

    } catch (error) {

        console.log(error.message);

    }

}

fetchData();
```

Output

```
Something went wrong
```

---

# Real-World Use Cases

Async Functions are used extensively in modern JavaScript.

Examples include:

- API requests
- Database operations
- Authentication
- File uploads
- Image downloads
- Payment processing
- Cloud services
- Node.js applications

Example

```javascript
const response = await fetch(apiURL);
```

---

# Advantages

Async Functions provide several benefits.

- Cleaner syntax.
- Easier debugging.
- Better readability.
- Better error handling.
- Avoid Callback Hell.
- Work naturally with Promises.

---

# Limitations

Async Functions also have limitations.

- Only work with Promises.
- `await` can only be used inside async functions.
- Excessive sequential awaits may reduce performance.
- Beginners may misunderstand asynchronous execution.

---

# Common Mistakes

## Forgetting `async`

❌ Incorrect

```javascript
function loadData() {

    await fetch(url);

}
```

This causes a syntax error.

---

✅ Correct

```javascript
async function loadData() {

    await fetch(url);

}
```

---

## Forgetting `await`

```javascript
async function loadData() {

    const response = fetch(url);

    console.log(response);

}
```

Output

```
Promise { ... }
```

Correct

```javascript
const response = await fetch(url);
```

---

## Ignoring Errors

Always use `try...catch` when awaiting operations that may fail.

---

# Best Practices

- Use Async/Await instead of deeply nested callbacks.
- Handle errors using `try...catch`.
- Use `Promise.all()` for parallel operations when possible.
- Keep async functions focused on one task.
- Avoid unnecessary `await` statements.
- Write meaningful function names.

---

# Summary

In this lesson, you learned:

- What Async Functions are.
- The `async` keyword.
- The `await` keyword.
- How Async/Await works.
- Promise vs Async/Await.
- Error handling.
- Real-world applications.
- Advantages, limitations, and best practices.

Async Functions are now the standard way to write asynchronous JavaScript and are used extensively in browsers, Node.js, React, Express, and modern web applications.

---

# Interview Questions

1. What is an Async Function?
2. What does the `async` keyword do?
3. What does the `await` keyword do?
4. Can `await` be used outside an async function?
5. What does an async function return?
6. How do you handle errors in async functions?
7. What is the difference between Promises and Async/Await?

---

# Practice Exercise

1. Create a basic async function that returns a message.
2. Create a Promise that resolves after 3 seconds.
3. Use `await` to wait for the Promise.
4. Fetch data from a public API using `fetch()`.
5. Handle errors using `try...catch`.

---

# Key Takeaway

> **Async Functions combine the `async` and `await` keywords to write asynchronous JavaScript code that is clean, readable, and easier to maintain. They simplify working with Promises while providing powerful error handling and improved code organization.**

---

# Next Lesson

<h2>
➡️ <a href="../0022_scope/scope.md" style="color:#1E90FF; text-decoration:none;">
<strong>Scope</strong>
</a>
</h2>