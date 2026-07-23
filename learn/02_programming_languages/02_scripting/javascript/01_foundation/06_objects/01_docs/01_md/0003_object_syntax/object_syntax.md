# Object Syntax in JavaScript

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Learn Object Syntax?](#why-learn-object-syntax)
- [Basic Object Syntax](#basic-object-syntax)
- [Object Structure Explained](#object-structure-explained)
- [Creating Objects](#creating-objects)
- [Different Value Types](#different-value-types)
- [Multiple Examples](#multiple-examples)
- [Visual Representation](#visual-representation)
- [Internal Working](#internal-working)
- [Common Syntax Rules](#common-syntax-rules)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercises](#practice-exercises)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand the syntax of JavaScript objects.
- Create objects using object literals.
- Define properties and values.
- Store different data types inside an object.
- Follow proper object syntax conventions.

---

# Introduction

Before working with objects, you must understand how they are written.

JavaScript provides an easy and readable way to create objects using **object literal syntax**.

An object consists of one or more **properties**, where each property has:

- a **key** (property name)
- a **value**

These are written as **key-value pairs**.

---

# Why Learn Object Syntax?

Object syntax is used everywhere in JavaScript.

Examples include:

- User profiles
- Product information
- API responses
- Configuration objects
- React props
- JSON data
- Game objects
- Database records

Understanding object syntax is essential because almost every JavaScript application works with objects.

---

# Basic Object Syntax

```javascript
const objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
```

General structure:

- Curly braces `{}` define the object.
- Each property consists of a **key** and a **value**.
- A colon (`:`) separates the key and value.
- Properties are separated by commas.

---

# Object Structure Explained

Example:

```javascript
const person = {
    name: "Alice",
    age: 24,
    city: "London"
};
```

Explanation:

| Part | Meaning |
|------|---------|
| `{}` | Object literal |
| `name` | Property (key) |
| `"Alice"` | Value |
| `:` | Separates key and value |
| `,` | Separates properties |

---

# Creating Objects

## Example 1

```javascript
const student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};
```

---

## Example 2

```javascript
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 65000
};
```

---

## Example 3

```javascript
const country = {
    name: "India",
    capital: "New Delhi",
    population: 1400000000
};
```

---

# Different Value Types

Object values can be of any JavaScript data type.

```javascript
const user = {
    name: "John",
    age: 25,
    isAdmin: false,
    skills: ["HTML", "CSS", "JavaScript"],
    address: {
        city: "Delhi",
        country: "India"
    },
    greet: function () {
        console.log("Hello");
    }
};
```

Objects can store:

- String
- Number
- Boolean
- Null
- Undefined
- Array
- Object
- Function

---

# Multiple Examples

## Product

```javascript
const product = {
    id: 101,
    name: "Keyboard",
    price: 1500,
    inStock: true
};
```

---

## Employee

```javascript
const employee = {
    id: 501,
    name: "Amit",
    department: "IT",
    salary: 70000
};
```

---

## Book

```javascript
const book = {
    title: "JavaScript Guide",
    author: "David",
    pages: 420
};
```

---

# Visual Representation

```text
person
│
├── name → Alice
├── age  → 24
└── city → London
```

Each property has a unique name and an associated value.

---

# Internal Working

When an object is created, JavaScript stores it in memory.

```text
person
   │
   ▼
Memory
──────────────────────────
name  → Alice
age   → 24
city  → London
──────────────────────────
```

The variable stores a **reference** to the object, not the actual object itself.

---

# Common Syntax Rules

- Objects use curly braces `{}`.
- Properties are written as `key: value`.
- Separate properties with commas.
- The last property does not require a trailing comma (although one is allowed).
- Keys can be identifiers or strings.
- Values can be any valid JavaScript data type.

Example:

```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
```

---

# Common Mistakes

## ❌ Missing Colon

```javascript
const person = {
    name "John"
};
```

---

## ✅ Correct

```javascript
const person = {
    name: "John"
};
```

---

## ❌ Missing Comma

```javascript
const car = {
    brand: "BMW"
    model: "X5"
};
```

---

## ✅ Correct

```javascript
const car = {
    brand: "BMW",
    model: "X5"
};
```

---

## ❌ Using Assignment Operator

```javascript
const user = {
    age = 25
};
```

---

## ✅ Correct

```javascript
const user = {
    age: 25
};
```

---

# Best Practices

- Use meaningful property names.
- Use camelCase for keys.
- Keep related data together.
- Format objects with proper indentation.
- Prefer `const` when declaring objects.
- Keep objects readable and organized.

---

# Summary

- Objects are written using curly braces.
- Objects contain key-value pairs.
- Keys and values are separated by a colon.
- Properties are separated by commas.
- Objects can store any JavaScript data type.
- Object literal syntax is the most common way to create objects.

---

# Interview Questions

1. What is the syntax for creating an object?
2. What is an object literal?
3. What separates a key and a value?
4. Can object values be functions?
5. Can an object contain another object?
6. What data types can object values have?
7. Why is object literal syntax commonly used?

---

# Practice Exercises

1. Create a student object with four properties.
2. Create a product object.
3. Create an employee object.
4. Create a book object.
5. Create an object containing another object.
6. Create an object containing an array.
7. Create an object containing a function.

---

# Key Takeaway

> **JavaScript object syntax uses curly braces and key-value pairs to organize related data into a clear, flexible, and reusable structure.**

---

# Next Lesson

<h2>
➡️ <a href="../0004_creating_objects/creating_objects.md" style="color:#1E90FF;text-decoration:none;">
<strong>Creating Objects</strong>
</a>
</h2>