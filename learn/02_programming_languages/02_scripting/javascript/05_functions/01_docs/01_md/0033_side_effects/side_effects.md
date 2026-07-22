# Side Effects

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Side Effects?](#what-are-side-effects)
- [Why Should We Understand Side Effects?](#why-should-we-understand-side-effects)
- [How Side Effects Work](#how-side-effects-work)
- [Types of Side Effects](#types-of-side-effects)
- [Pure Functions vs Side Effects](#pure-functions-vs-side-effects)
- [Examples](#examples)
- [Managing Side Effects](#managing-side-effects)
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

- Understand what Side Effects are.
- Identify functions that produce Side Effects.
- Differentiate between Pure Functions and Impure Functions.
- Learn how to manage Side Effects effectively.
- Write cleaner and more maintainable JavaScript code.

---

# Introduction

Imagine writing in a notebook.

If you simply **read** a page, nothing changes.

However, if you **write** on the page, erase something, or tear out a page, the notebook's state changes.

A **Side Effect** in programming is similar.

Whenever a function changes something **outside of itself**, it creates a Side Effect.

Understanding Side Effects is essential because they affect program behavior, debugging, testing, and maintainability.

---

# What are Side Effects?

A **Side Effect** is any observable change outside the function's local scope.

A function has a Side Effect if it:

- Modifies global variables.
- Changes an object passed by reference.
- Writes to a file.
- Sends a network request.
- Updates the DOM.
- Displays output.
- Reads user input.
- Updates a database.
- Uses timers.

Example

```javascript
let counter = 0;

function increment() {

    counter++;

}
```

This function changes a global variable.

Therefore, it has a Side Effect.

---

# Why Should We Understand Side Effects?

Understanding Side Effects helps you:

- Write predictable programs.
- Avoid unexpected bugs.
- Improve testing.
- Build scalable applications.
- Separate business logic from external operations.

Modern frameworks like **React** encourage minimizing unnecessary Side Effects.

---

# How Side Effects Work

```text
Function Executes
        │
        ▼
Reads or Changes
External State
        │
        ▼
Program State Changes
```

Unlike Pure Functions, Side Effects interact with something outside the function.

---

# Types of Side Effects

Common Side Effects include:

### Updating Global Variables

```javascript
let score = 0;

function increaseScore() {

    score++;

}
```

---

### Modifying Objects

```javascript
function updateUser(user) {

    user.name = "Sachin";

}
```

---

### Printing Output

```javascript
function greet() {

    console.log("Hello");

}
```

---

### API Requests

```javascript
fetch("https://example.com/api/users");
```

---

### DOM Manipulation

```javascript
document.body.style.background = "black";
```

---

### File Operations

```javascript
fs.writeFileSync("data.txt", "Hello");
```

---

### Database Updates

```javascript
database.save(user);
```

---

# Pure Functions vs Side Effects

| Pure Function | Function with Side Effects |
|---------------|----------------------------|
| No external changes | Changes external state |
| Predictable | May produce different outcomes |
| Easy to test | Harder to test |
| Same input → Same output | Output may depend on external factors |
| No hidden behavior | Hidden behavior possible |

---

# Examples

## Example 1 — Pure Function

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

No Side Effects.

---

## Example 2 — Global Variable

```javascript
let count = 0;

function increase() {

    count++;

}
```

Side Effect:

```
Global variable changed.
```

---

## Example 3 — Console Output

```javascript
function greet(name) {

    console.log(`Hello ${name}`);

}
```

Even printing to the console is considered a Side Effect because it affects the external environment.

---

## Example 4 — Object Mutation

```javascript
function updateAge(person) {

    person.age = 25;

}
```

This modifies the original object.

A better approach:

```javascript
function updateAge(person) {

    return {

        ...person,

        age: 25

    };

}
```

---

# Managing Side Effects

Good applications isolate Side Effects.

A common pattern is:

```text
Input
    │
    ▼
Pure Functions
    │
    ▼
Result
    │
    ▼
Side Effect
(API, Database, DOM, File)
```

Business logic remains pure, while Side Effects are handled separately.

---

# Real-World Use Cases

Side Effects are necessary in many situations.

Examples include:

- Saving user data.
- Logging information.
- Sending emails.
- Making API requests.
- Updating the browser UI.
- Writing files.
- Reading sensor data.
- Database operations.
- Authentication systems.

Without Side Effects, applications could not interact with users or external systems.

---

# Advantages

Although Pure Functions are preferred, Side Effects are essential.

They allow applications to:

- Communicate with servers.
- Store information.
- Display results.
- Interact with users.
- Access hardware.
- Persist application state.

---

# Limitations

Poorly managed Side Effects can cause:

- Difficult debugging.
- Hidden dependencies.
- Unexpected behavior.
- Hard-to-test code.
- Performance issues.
- Race conditions in asynchronous programs.

---

# Common Mistakes

## Modifying Global Variables

❌ Incorrect

```javascript
let total = 0;

function add(price) {

    total += price;

}
```

---

✅ Better

```javascript
function add(total, price) {

    return total + price;

}
```

---

## Mutating Objects

❌ Incorrect

```javascript
function rename(user) {

    user.name = "John";

}
```

---

✅ Better

```javascript
function rename(user) {

    return {

        ...user,

        name: "John"

    };

}
```

---

## Mixing Business Logic with Side Effects

❌

```javascript
function calculateTotal(price) {

    console.log(price);

    return price * 1.18;

}
```

---

✅ Better

```javascript
function calculateTotal(price) {

    return price * 1.18;

}

console.log(calculateTotal(100));
```

---

# Best Practices

- Keep business logic pure.
- Isolate Side Effects.
- Avoid unnecessary global variables.
- Avoid mutating objects directly.
- Use immutable programming techniques.
- Handle asynchronous Side Effects carefully.
- Keep Side Effects predictable.

---

# Summary

In this lesson, you learned:

- What Side Effects are.
- Types of Side Effects.
- Difference between Pure Functions and Side Effects.
- Why Side Effects are necessary.
- How to manage them effectively.
- Common mistakes and best practices.

Every JavaScript application contains Side Effects, but good software design keeps them isolated and controlled.

---

# Interview Questions

1. What is a Side Effect?
2. Why are Side Effects important?
3. Can a Pure Function have Side Effects?
4. Is `console.log()` considered a Side Effect?
5. Why are API calls Side Effects?
6. How can Side Effects be minimized?
7. Why are Side Effects harder to test?

---

# Practice Exercise

1. Identify the Side Effects in five JavaScript programs.
2. Convert an Impure Function into a Pure Function.
3. Rewrite an object mutation using object spread syntax.
4. Separate business logic from DOM updates.
5. Build a small application where calculations are pure and API calls are isolated.

---

# Key Takeaway

> **A Side Effect is any change a function makes outside its own scope, such as modifying variables, updating the DOM, making API requests, or writing files. While Side Effects are essential for real-world applications, keeping them isolated from Pure Functions leads to cleaner, more maintainable, and easier-to-test JavaScript code.**

---

# Next Lesson

<h2>
➡️ <a href="../0034_best_practices/best_practices.md" style="color:#1E90FF; text-decoration:none;">
<strong>Best Practices</strong>
</a>
</h2>