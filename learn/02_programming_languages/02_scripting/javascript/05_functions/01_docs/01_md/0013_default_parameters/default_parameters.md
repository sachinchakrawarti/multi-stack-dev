# Default Parameters

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Default Parameters?](#what-are-default-parameters)
- [Why Do We Need Default Parameters?](#why-do-we-need-default-parameters)
- [How Default Parameters Work](#how-default-parameters-work)
- [Syntax](#syntax)
- [Examples](#examples)
- [Default Parameters vs Traditional Approach](#default-parameters-vs-traditional-approach)
- [Default Parameters with Expressions](#default-parameters-with-expressions)
- [Default Parameters with Objects and Arrays](#default-parameters-with-objects-and-arrays)
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

- Understand what default parameters are.
- Learn why default parameters were introduced in ES6.
- Assign default values to function parameters.
- Use expressions as default parameter values.
- Apply default parameters in real-world JavaScript programs.

---

# Introduction

Imagine ordering a pizza online.

If you don't choose the crust type, the restaurant automatically selects the **Regular Crust**.

Similarly, JavaScript allows functions to automatically use a **default value** whenever an argument is missing or `undefined`.

This feature is called **Default Parameters**.

Default parameters were introduced in **ECMAScript 6 (ES6)** and make functions cleaner, safer, and easier to read.

---

# What are Default Parameters?

A **Default Parameter** is a parameter that has a predefined value.

If the caller does not provide an argument—or explicitly passes `undefined`—JavaScript uses the default value instead.

Example

```javascript
function greet(name = "Guest") {

    console.log("Hello " + name);

}

greet();

greet("Sachin");
```

Output

```
Hello Guest
Hello Sachin
```

---

# Why Do We Need Default Parameters?

Before ES6, developers had to manually check whether a parameter had a value.

Example

```javascript
function greet(name) {

    name = name || "Guest";

    console.log("Hello " + name);

}
```

Default parameters eliminate the need for this extra code.

Benefits include:

- Cleaner code.
- Fewer conditional checks.
- Better readability.
- Easier maintenance.
- More reliable functions.

---

# How Default Parameters Work

Consider this example.

```javascript
function multiply(a, b = 2) {

    return a * b;

}

multiply(10);
```

Execution Flow

```text
Function Called
       │
       ▼
Arguments Checked
       │
       ▼
Is Argument Missing?
       │
  ┌────┴────┐
  │         │
 Yes        No
  │         │
Use Default │
Value       │
  │         │
  └────┬────┘
       ▼
Execute Function
       │
       ▼
Return Result
```

---

# Syntax

```javascript
function functionName(parameter = defaultValue) {

    // Code

}
```

Example

```javascript
function greet(name = "Guest") {

    console.log(name);

}
```

---

# Examples

## Example 1 — Greeting

```javascript
function greet(name = "Guest") {

    console.log("Hello " + name);

}

greet();

greet("Alice");
```

---

## Example 2 — Calculator

```javascript
function add(a, b = 10) {

    return a + b;

}

console.log(add(5));

console.log(add(5, 20));
```

Output

```
15
25
```

---

## Example 3 — Rectangle Area

```javascript
function calculateArea(length, width = 1) {

    return length * width;

}

console.log(calculateArea(10));

console.log(calculateArea(10, 5));
```

---

## Example 4 — User Role

```javascript
function createUser(name, role = "User") {

    console.log(name);

    console.log(role);

}

createUser("Sachin");

createUser("John", "Admin");
```

---

# Default Parameters vs Traditional Approach

### Before ES6

```javascript
function greet(name) {

    name = name || "Guest";

    console.log(name);

}
```

---

### ES6 Default Parameters

```javascript
function greet(name = "Guest") {

    console.log(name);

}
```

The ES6 approach is shorter, clearer, and easier to understand.

---

# Default Parameters with Expressions

Default values can be expressions.

```javascript
function calculate(price, tax = price * 0.18) {

    return price + tax;

}

console.log(calculate(1000));
```

Output

```
1180
```

---

They can also call other functions.

```javascript
function getYear() {

    return 2026;

}

function showYear(year = getYear()) {

    console.log(year);

}

showYear();
```

---

# Default Parameters with Objects and Arrays

### Object

```javascript
function createUser(user = {}) {

    console.log(user);

}

createUser();
```

---

### Array

```javascript
function printNumbers(numbers = []) {

    console.log(numbers);

}

printNumbers();
```

Using empty objects and arrays helps prevent runtime errors.

---

# Real-World Use Cases

Default parameters are widely used in:

- User registration
- Configuration settings
- API requests
- Form handling
- Search filters
- Pagination
- React components
- Utility functions

Example

```javascript
function fetchData(page = 1, limit = 10) {

    console.log(page);

    console.log(limit);

}
```

---

# Advantages

Default parameters provide many benefits.

- Cleaner syntax.
- Less code.
- Better readability.
- Prevents `undefined` values.
- Improves function reliability.
- Reduces conditional statements.

---

# Limitations

Although useful, default parameters have some considerations.

- Only used when the argument is `undefined`.
- Passing `null` does **not** use the default value.
- Overusing default values can hide programming mistakes.

Example

```javascript
function greet(name = "Guest") {

    console.log(name);

}

greet(null);
```

Output

```
null
```

---

# Common Mistakes

## Confusing `null` and `undefined`

```javascript
function greet(name = "Guest") {

    console.log(name);

}

greet(null);
```

Output

```
null
```

Default values are **not** used for `null`.

---

## Forgetting the Default Value

```javascript
function add(a, b) {

    return a + b;

}

console.log(add(5));
```

Output

```
NaN
```

Better

```javascript
function add(a, b = 0) {

    return a + b;

}
```

---

## Using Too Many Default Parameters

Avoid assigning unnecessary default values to every parameter.

Keep your function signatures simple and meaningful.

---

# Best Practices

- Use default values only when appropriate.
- Choose meaningful default values.
- Keep function signatures clean.
- Use empty arrays and objects when needed.
- Document important default values.
- Avoid relying on defaults for required parameters.

---

# Summary

In this lesson, you learned:

- What default parameters are.
- Why they were introduced.
- How they work.
- The syntax of default parameters.
- Using expressions as default values.
- Using objects and arrays as defaults.
- Advantages, limitations, and best practices.

Default parameters make JavaScript functions more flexible and reduce unnecessary code.

---

# Interview Questions

1. What are default parameters?
2. When are default values used?
3. Are default parameters an ES5 or ES6 feature?
4. What happens when `null` is passed?
5. Can default values be expressions?
6. Can another function be used as a default value?
7. Why are default parameters useful?

---

# Practice Exercise

1. Write a greeting function with a default name.
2. Create a calculator function with a default second parameter.
3. Write a function that uses an object as a default parameter.
4. Experiment with passing `undefined` and `null`.
5. Rewrite an old ES5 function using default parameters.

---

# Key Takeaway

> **Default parameters allow functions to automatically use predefined values when arguments are missing or `undefined`. They simplify code, improve readability, and make JavaScript functions more reliable and reusable.**

---

# Next Lesson

<h2>
➡️ <a href="../0014_rest_parameters/rest_parameters.md" style="color:#1E90FF; text-decoration:none;">
<strong>Rest Parameters</strong>
</a>
</h2>