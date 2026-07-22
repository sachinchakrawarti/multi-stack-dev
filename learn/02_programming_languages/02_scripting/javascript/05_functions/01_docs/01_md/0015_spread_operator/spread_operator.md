# Spread Operator

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is the Spread Operator?](#what-is-the-spread-operator)
- [Why Do We Need the Spread Operator?](#why-do-we-need-the-spread-operator)
- [How the Spread Operator Works](#how-the-spread-operator-works)
- [Syntax](#syntax)
- [Spread vs Rest Operator](#spread-vs-rest-operator)
- [Using Spread with Arrays](#using-spread-with-arrays)
- [Using Spread with Objects](#using-spread-with-objects)
- [Using Spread with Function Calls](#using-spread-with-function-calls)
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

- Understand what the Spread Operator is.
- Differentiate between Spread and Rest operators.
- Use the Spread Operator with arrays, objects, and functions.
- Create copies and merge data efficiently.
- Apply the Spread Operator in real-world JavaScript applications.

---

# Introduction

Imagine you have two baskets of fruits and want to place all the fruits into a new basket.

Instead of moving each fruit one by one, you could simply **pour the contents** of both baskets into the new basket.

The **Spread Operator (`...`)** works similarly.

It takes the elements of an array, object properties, or iterable values and **spreads** them into another array, object, or function call.

Introduced in **ECMAScript 6 (ES6)**, the Spread Operator makes JavaScript code shorter, cleaner, and more readable.

---

# What is the Spread Operator?

The **Spread Operator (`...`)** expands an iterable (such as an array or string) or an object's properties into individual elements.

Example

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output

```
10 20 30
```

The array is expanded into individual values.

---

# Why Do We Need the Spread Operator?

Before ES6, copying or merging arrays and objects required loops or helper methods.

The Spread Operator simplifies these tasks.

Benefits include:

- Cleaner syntax.
- Easier array copying.
- Easy object cloning.
- Simple array merging.
- Better readability.
- Immutable programming patterns.

---

# How the Spread Operator Works

Example

```javascript
const colors = ["Red", "Green", "Blue"];

console.log(...colors);
```

Execution Flow

```text
Array
 │
 ▼
Spread (...)
 │
 ▼
Individual Elements
 │
 ▼
Used in Array
Function
or Object
```

---

# Syntax

```javascript
...value
```

Examples

```javascript
const copy = [...array];

const merged = [...array1, ...array2];

const object = {...user};

functionName(...values);
```

---

# Spread vs Rest Operator

Although both use the `...` syntax, they perform different jobs.

| Spread Operator | Rest Operator |
|-----------------|---------------|
| Expands values | Collects values |
| Used while calling functions | Used while defining functions |
| Expands arrays and objects | Collects function arguments |
| Used on the right side | Used in function parameters |

Example

Spread

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Rest

```javascript
function print(...numbers) {

    console.log(numbers);

}
```

---

# Using Spread with Arrays

## Copying an Array

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

---

## Merging Arrays

```javascript
const frontend = ["HTML", "CSS"];

const backend = ["Node.js", "MongoDB"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);
```

---

## Adding New Elements

```javascript
const numbers = [2, 3];

const newNumbers = [1, ...numbers, 4];

console.log(newNumbers);
```

Output

```
[1, 2, 3, 4]
```

---

# Using Spread with Objects

## Copying an Object

```javascript
const user = {

    name: "Sachin",
    age: 24

};

const copy = {

    ...user

};

console.log(copy);
```

---

## Merging Objects

```javascript
const personal = {

    name: "Sachin"

};

const professional = {

    role: "Developer"

};

const profile = {

    ...personal,
    ...professional

};

console.log(profile);
```

---

## Updating Object Properties

```javascript
const user = {

    name: "Sachin",
    age: 24

};

const updatedUser = {

    ...user,
    age: 25

};

console.log(updatedUser);
```

---

# Using Spread with Function Calls

The Spread Operator can pass array elements as individual function arguments.

```javascript
function add(a, b, c) {

    return a + b + c;

}

const numbers = [10, 20, 30];

console.log(add(...numbers));
```

Output

```
60
```

---

# Examples

## Example 1 — Copy an Array

```javascript
const fruits = ["Apple", "Banana"];

const copy = [...fruits];

console.log(copy);
```

---

## Example 2 — Merge Arrays

```javascript
const odd = [1, 3, 5];

const even = [2, 4, 6];

const numbers = [...odd, ...even];

console.log(numbers);
```

---

## Example 3 — Clone an Object

```javascript
const student = {

    name: "John",
    city: "Delhi"

};

const clone = {

    ...student

};

console.log(clone);
```

---

## Example 4 — Function Arguments

```javascript
function multiply(a, b, c) {

    return a * b * c;

}

const values = [2, 3, 4];

console.log(multiply(...values));
```

Output

```
24
```

---

# Real-World Use Cases

The Spread Operator is widely used in modern JavaScript.

Examples include:

- React state updates.
- Redux reducers.
- Cloning objects.
- Merging configuration objects.
- Shopping cart updates.
- API data processing.
- Copying arrays.
- Function argument expansion.

Example

```javascript
const cart = [...oldCart, newItem];
```

---

# Advantages

The Spread Operator offers many benefits.

- Cleaner syntax.
- Easier copying.
- Easy merging.
- Supports immutable programming.
- Improves readability.
- Reduces boilerplate code.

---

# Limitations

The Spread Operator also has some limitations.

- Performs a shallow copy.
- Deeply nested objects are still shared.
- Large objects may affect performance.
- Works only with iterable values (for array spreading).

---

# Common Mistakes

## Confusing Spread with Rest

❌ Incorrect understanding

```javascript
function demo(...numbers) {

}
```

This is **Rest**, not Spread.

---

✅ Spread

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

---

## Assuming It Creates a Deep Copy

```javascript
const user = {

    profile: {

        age: 24

    }

};

const copy = {

    ...user

};

copy.profile.age = 30;

console.log(user.profile.age);
```

Output

```
30
```

Only the first level is copied.

---

## Spreading Non-Iterable Values

```javascript
console.log(...100);
```

This throws an error because numbers are not iterable.

---

# Best Practices

- Use the Spread Operator instead of manual loops for copying.
- Prefer Spread over `Object.assign()` for simple object cloning.
- Use Spread for immutable updates.
- Remember that Spread performs a shallow copy.
- Combine Spread with Rest for cleaner function design.

---

# Summary

In this lesson, you learned:

- What the Spread Operator is.
- Why it was introduced.
- How it works.
- Differences between Spread and Rest.
- Using Spread with arrays.
- Using Spread with objects.
- Using Spread with function calls.
- Advantages, limitations, and best practices.

The Spread Operator is one of the most frequently used ES6 features and is essential for modern JavaScript development.

---

# Interview Questions

1. What is the Spread Operator?
2. What is the difference between Spread and Rest Operators?
3. How do you copy an array using Spread?
4. How do you merge two objects using Spread?
5. Does the Spread Operator create a deep copy?
6. Can Spread be used with function arguments?
7. Why is the Spread Operator popular in React?

---

# Practice Exercise

1. Copy an array using the Spread Operator.
2. Merge three arrays into one.
3. Clone an object and update one property.
4. Pass an array as function arguments using Spread.
5. Demonstrate the difference between Spread and Rest Operators.

---

# Key Takeaway

> **The Spread Operator (`...`) expands arrays, objects, and iterable values into individual elements, making copying, merging, updating, and passing data simpler, cleaner, and more efficient in modern JavaScript.**

---

# Next Lesson

<h2>
➡️ <a href="../0016_callback_functions/callback_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Callback Functions</strong>
</a>
</h2>