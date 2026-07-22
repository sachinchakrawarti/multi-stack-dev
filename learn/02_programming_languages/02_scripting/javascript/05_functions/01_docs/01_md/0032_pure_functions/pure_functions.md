# Pure Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Pure Functions?](#what-are-pure-functions)
- [Why Do We Need Pure Functions?](#why-do-we-need-pure-functions)
- [Characteristics of Pure Functions](#characteristics-of-pure-functions)
- [How Pure Functions Work](#how-pure-functions-work)
- [Syntax](#syntax)
- [Pure Functions vs Impure Functions](#pure-functions-vs-impure-functions)
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

- Understand what Pure Functions are.
- Identify the characteristics of Pure Functions.
- Differentiate between Pure and Impure Functions.
- Write predictable and reusable functions.
- Apply Pure Functions in modern JavaScript development.

---

# Introduction

Imagine a vending machine.

If you insert **₹20** and press the button for a bottle of water, the machine always gives you the same bottle.

No matter how many times you repeat the action, the output is always the same for the same input.

A **Pure Function** behaves in exactly the same way.

Given the same input, it always produces the same output and never changes anything outside itself.

Pure Functions are a core concept in **Functional Programming** and are widely used in React, Redux, Node.js, and many modern JavaScript applications.

---

# What are Pure Functions?

A **Pure Function** is a function that satisfies two rules:

1. It always returns the same output for the same input.
2. It does not produce any side effects.

Example

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

Calling the function repeatedly with the same values always returns the same result.

---

# Why Do We Need Pure Functions?

Pure Functions make programs easier to understand and maintain.

Benefits include:

- Predictable behavior.
- Easier debugging.
- Better testing.
- Reusable code.
- No hidden changes.
- Better performance optimization.

---

# Characteristics of Pure Functions

A function is considered pure if:

- It depends only on its input parameters.
- It does not modify external variables.
- It does not change objects outside the function.
- It does not perform file operations.
- It does not make API calls.
- It does not update the DOM.
- It always produces the same output for the same input.

---

# How Pure Functions Work

```text
Input
   │
   ▼
Pure Function
   │
   ▼
Output

Same Input
      │
      ▼
Same Output
```

The function only depends on its arguments.

---

# Syntax

```javascript
function multiply(a, b) {

    return a * b;

}
```

---

# Pure Functions vs Impure Functions

| Pure Function | Impure Function |
|---------------|-----------------|
| Same input → Same output | Output may change |
| No side effects | Has side effects |
| Easy to test | Harder to test |
| Predictable | Less predictable |
| Does not modify external state | May modify external state |

---

# Examples

## Example 1 — Pure Function

```javascript
function square(number) {

    return number * number;

}

console.log(square(5));
```

Output

```
25
```

---

## Example 2 — Another Pure Function

```javascript
function fullName(firstName, lastName) {

    return `${firstName} ${lastName}`;

}

console.log(fullName("Sachin", "Chakrawarti"));
```

Output

```
Sachin Chakrawarti
```

---

## Example 3 — Impure Function

```javascript
let counter = 0;

function increment() {

    counter++;

    return counter;

}
```

This function is **not pure** because it modifies an external variable.

---

## Example 4 — Pure Version

```javascript
function increment(value) {

    return value + 1;

}

console.log(increment(10));
```

Output

```
11
```

---

# Real-World Use Cases

Pure Functions are commonly used in:

- React components.
- Redux reducers.
- Mathematical calculations.
- Data formatting.
- Utility libraries.
- Sorting algorithms.
- Filtering data.
- Validation functions.
- Functional programming.

Example

```javascript
function calculateTax(price) {

    return price * 0.18;

}
```

---

# Advantages

Pure Functions provide many benefits.

- Easy to understand.
- Easy to test.
- Highly reusable.
- Predictable output.
- Safer code.
- Supports parallel execution.
- Easier debugging.
- Better optimization.

---

# Limitations

Pure Functions also have some limitations.

- Cannot directly update databases.
- Cannot make API requests.
- Cannot manipulate the DOM.
- Some real-world tasks require side effects.

In practice, applications combine Pure Functions with controlled side-effect functions.

---

# Common Mistakes

## Modifying External Variables

❌ Incorrect

```javascript
let total = 0;

function add(value) {

    total += value;

}
```

---

✅ Correct

```javascript
function add(total, value) {

    return total + value;

}
```

---

## Changing Objects

❌ Incorrect

```javascript
function updateUser(user) {

    user.age++;

    return user;

}
```

---

✅ Correct

```javascript
function updateUser(user) {

    return {

        ...user,

        age: user.age + 1

    };

}
```

---

## Using Random Values

❌

```javascript
function generate() {

    return Math.random();

}
```

The output changes every time.

---

# Best Practices

- Return new values instead of modifying existing ones.
- Avoid changing external variables.
- Keep functions small and focused.
- Pass all required data as parameters.
- Avoid hidden dependencies.
- Use Pure Functions whenever possible.

---

# Summary

In this lesson, you learned:

- What Pure Functions are.
- Their characteristics.
- The difference between Pure and Impure Functions.
- Real-world applications.
- Advantages and limitations.
- Common mistakes.
- Best practices.

Pure Functions make JavaScript applications more predictable, maintainable, and easier to test.

---

# Interview Questions

1. What is a Pure Function?
2. What are the two rules of a Pure Function?
3. What is a side effect?
4. Why are Pure Functions easier to test?
5. How are Pure Functions used in React?
6. Can a Pure Function modify global variables?
7. Why are Pure Functions important in Functional Programming?

---

# Practice Exercise

1. Write a Pure Function that adds two numbers.
2. Convert an Impure Function into a Pure Function.
3. Create a Pure Function that formats a full name.
4. Build a tax calculator using a Pure Function.
5. Identify Pure and Impure Functions in an existing JavaScript project.

---

# Key Takeaway

> **A Pure Function always produces the same output for the same input and never causes side effects. Because of their predictability, reusability, and ease of testing, Pure Functions are a fundamental concept in modern JavaScript and Functional Programming.**

---

# Next Lesson

<h2>
➡️ <a href="../0033_side_effects/side_effects.md" style="color:#1E90FF; text-decoration:none;">
<strong>Side Effects</strong>
</a>
</h2>