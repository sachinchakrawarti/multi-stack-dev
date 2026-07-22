# Rest Parameters

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Rest Parameters?](#what-are-rest-parameters)
- [Why Do We Need Rest Parameters?](#why-do-we-need-rest-parameters)
- [How Rest Parameters Work](#how-rest-parameters-work)
- [Syntax](#syntax)
- [Rules of Rest Parameters](#rules-of-rest-parameters)
- [Rest Parameters vs Arguments Object](#rest-parameters-vs-arguments-object)
- [Examples](#examples)
- [Rest Parameters with Arrow Functions](#rest-parameters-with-arrow-functions)
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

- Understand what Rest Parameters are.
- Learn why Rest Parameters were introduced.
- Accept a variable number of arguments in a function.
- Differentiate between Rest Parameters and the `arguments` object.
- Use Rest Parameters in real-world JavaScript applications.

---

# Introduction

Imagine you are creating a calculator application.

Sometimes the user wants to add **2 numbers**, sometimes **5 numbers**, and sometimes **100 numbers**.

Creating separate functions for each case would be inefficient.

JavaScript solves this problem using **Rest Parameters**.

Rest Parameters allow a function to accept **any number of arguments** and collect them into a single array.

This feature was introduced in **ECMAScript 6 (ES6)**.

---

# What are Rest Parameters?

A **Rest Parameter** is a special parameter prefixed with three dots (`...`) that collects all remaining arguments into an array.

Example

```javascript
function showNumbers(...numbers) {

    console.log(numbers);

}

showNumbers(10, 20, 30, 40);
```

Output

```
[10, 20, 30, 40]
```

The variable `numbers` becomes a real JavaScript array.

---

# Why Do We Need Rest Parameters?

Before ES6, developers used the `arguments` object.

Although useful, it has several limitations.

Rest Parameters provide:

- Cleaner syntax.
- Real array methods.
- Better readability.
- Better compatibility with arrow functions.
- Easier maintenance.

---

# How Rest Parameters Work

Example

```javascript
function total(...numbers) {

    console.log(numbers);

}

total(5, 10, 15);
```

Execution Flow

```text
Function Called
       │
       ▼
Arguments Received
       │
       ▼
Collect Remaining Arguments
       │
       ▼
Store Them Inside an Array
       │
       ▼
Execute Function
```

---

# Syntax

```javascript
function functionName(...parameter) {

    // Code

}
```

Example

```javascript
function greet(...names) {

    console.log(names);

}
```

---

# Rules of Rest Parameters

### Rule 1 — Only One Rest Parameter

✅ Correct

```javascript
function demo(...values) {

}
```

❌ Incorrect

```javascript
function demo(...a, ...b) {

}
```

---

### Rule 2 — Must Be the Last Parameter

✅ Correct

```javascript
function student(name, age, ...subjects) {

}
```

❌ Incorrect

```javascript
function student(...subjects, name) {

}
```

---

### Rule 3 — Rest Parameter Creates an Array

```javascript
function print(...items) {

    console.log(Array.isArray(items));

}

print(1, 2, 3);
```

Output

```
true
```

---

# Rest Parameters vs Arguments Object

| Rest Parameters | `arguments` Object |
|-----------------|-------------------|
| Introduced in ES6 | Available since ES5 |
| Real Array | Array-like Object |
| Works with Arrow Functions | Not Available in Arrow Functions |
| Supports Array Methods | Requires Conversion |
| Cleaner Syntax | Older Syntax |

Example using Rest Parameters

```javascript
function add(...numbers) {

    return numbers.reduce((sum, number) => sum + number, 0);

}
```

---

# Examples

## Example 1 — Sum of Numbers

```javascript
function add(...numbers) {

    let total = 0;

    for (const number of numbers) {

        total += number;

    }

    return total;

}

console.log(add(10, 20, 30, 40));
```

Output

```
100
```

---

## Example 2 — Student Subjects

```javascript
function student(name, ...subjects) {

    console.log(name);

    console.log(subjects);

}

student("Sachin", "HTML", "CSS", "JavaScript");
```

Output

```
Sachin
["HTML", "CSS", "JavaScript"]
```

---

## Example 3 — Finding Maximum Number

```javascript
function maximum(...numbers) {

    return Math.max(...numbers);

}

console.log(maximum(10, 25, 8, 100, 40));
```

Output

```
100
```

---

## Example 4 — Counting Arguments

```javascript
function count(...items) {

    console.log(items.length);

}

count(1, 2, 3, 4, 5);
```

Output

```
5
```

---

# Rest Parameters with Arrow Functions

Arrow functions fully support Rest Parameters.

```javascript
const multiply = (...numbers) => {

    return numbers.reduce((total, value) => total * value, 1);

};

console.log(multiply(2, 3, 4));
```

Output

```
24
```

---

# Real-World Use Cases

Rest Parameters are widely used in:

- Calculator applications
- Shopping carts
- Logging utilities
- Event handlers
- API utilities
- React components
- Express middleware
- Utility libraries

Example

```javascript
function logMessages(...messages) {

    messages.forEach(message => console.log(message));

}
```

---

# Advantages

Rest Parameters provide several benefits.

- Accept unlimited arguments.
- Produce cleaner code.
- Return a real array.
- Work with arrow functions.
- Easy to combine with array methods.
- Improve readability.

---

# Limitations

Rest Parameters also have some considerations.

- Only one Rest Parameter is allowed.
- Must always be the last parameter.
- Unsupported in older browsers without transpilation.

---

# Common Mistakes

## Placing the Rest Parameter First

❌ Incorrect

```javascript
function demo(...items, name) {

}
```

---

✅ Correct

```javascript
function demo(name, ...items) {

}
```

---

## Using Multiple Rest Parameters

❌ Incorrect

```javascript
function test(...a, ...b) {

}
```

JavaScript allows only one Rest Parameter.

---

## Confusing Rest with Spread

```javascript
function add(...numbers) {

}
```

Here,

`...` collects values.

```javascript
add(...array);
```

Here,

`...` spreads values.

Although both use the same operator, they perform different tasks.

---

# Best Practices

- Use Rest Parameters when the number of arguments is unknown.
- Place the Rest Parameter at the end.
- Give meaningful names like `...numbers` or `...students`.
- Combine Rest Parameters with array methods.
- Prefer Rest Parameters over the old `arguments` object.

---

# Summary

In this lesson, you learned:

- What Rest Parameters are.
- Why they were introduced in ES6.
- How Rest Parameters work.
- Rules for using Rest Parameters.
- Differences between Rest Parameters and the `arguments` object.
- Real-world applications.
- Advantages, limitations, and best practices.

Rest Parameters provide a clean and modern way to accept any number of arguments in JavaScript functions.

---

# Interview Questions

1. What are Rest Parameters?
2. Why were Rest Parameters introduced?
3. What is the difference between Rest Parameters and the `arguments` object?
4. Can a function have multiple Rest Parameters?
5. Why must the Rest Parameter be the last parameter?
6. Do Rest Parameters create an array?
7. Can Rest Parameters be used in arrow functions?

---

# Practice Exercise

1. Create a function that adds unlimited numbers using Rest Parameters.
2. Create a function that prints multiple student names.
3. Find the maximum value using Rest Parameters.
4. Count the number of arguments passed to a function.
5. Rewrite an old `arguments` object example using Rest Parameters.

---

# Key Takeaway

> **Rest Parameters (`...`) allow a function to collect any number of arguments into a real array, making JavaScript functions more flexible, readable, and easier to work with than the older `arguments` object.**

---

# Next Lesson

<h2>
➡️ <a href="../0015_spread_operator/spread_operator.md" style="color:#1E90FF; text-decoration:none;">
<strong>Spread Operator</strong>
</a>
</h2>