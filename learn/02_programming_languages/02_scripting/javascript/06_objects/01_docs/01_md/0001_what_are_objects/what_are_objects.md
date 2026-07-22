# What Are Objects in JavaScript?

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Do We Need Objects?](#why-do-we-need-objects)
- [Definition](#definition)
- [Characteristics of Objects](#characteristics-of-objects)
- [Real-World Analogy](#real-world-analogy)
- [How Objects Work](#how-objects-work)
- [Basic Syntax](#basic-syntax)
- [Creating Your First Object](#creating-your-first-object)
- [More Examples](#more-examples)
- [Visual Representation](#visual-representation)
- [Internal Working](#internal-working)
- [Objects vs Primitive Data Types](#objects-vs-primitive-data-types)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Limitations](#limitations)
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

- Understand what JavaScript objects are.
- Explain why objects are used.
- Create simple objects.
- Understand properties and values.
- Differentiate objects from primitive data types.
- Identify real-world use cases for objects.

---

# Introduction

As applications become larger, storing data in separate variables becomes difficult to manage.

Imagine storing information about a student:

```javascript
let name = "Sachin";
let age = 22;
let city = "Bhopal";
let course = "JavaScript";
```

This works for a few values, but what if there are hundreds of students?

JavaScript solves this problem using **objects**.

Objects allow us to group related information together under a single variable.

---

# Why Do We Need Objects?

Without objects:

```javascript
let firstName = "John";
let lastName = "Doe";
let age = 25;
let email = "john@example.com";
```

With objects:

```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john@example.com"
};
```

Objects make code:

- Cleaner
- Easier to understand
- Easier to maintain
- More reusable

---

# Definition

An **object** is a collection of **key-value pairs**.

Each key is called a **property**, and each property stores a value.

```javascript
const car = {
    brand: "Tesla",
    model: "Model Y",
    color: "White"
};
```

Here,

- `brand` → property
- `"Tesla"` → value

---

# Characteristics of Objects

JavaScript objects have several important characteristics:

- Store multiple related values.
- Use key-value pairs.
- Can store any data type.
- Can contain functions (methods).
- Are mutable.
- Are reference data types.
- Can contain nested objects.
- Can grow or shrink dynamically.

---

# Real-World Analogy

Think about a **Student ID Card**.

```text
Student
│
├── Name
├── Roll Number
├── Age
├── Course
└── College
```

Instead of storing each value separately, everything belongs to one student.

Similarly,

```javascript
const student = {
    name: "Rahul",
    rollNo: 101,
    age: 20,
    course: "Computer Science"
};
```

---

# How Objects Work

Objects group related information together.

```text
Object
   │
   ├── Property → Value
   ├── Property → Value
   ├── Property → Value
   └── Property → Value
```

Every property has a unique name inside the object.

---

# Basic Syntax

```javascript
const objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
```

---

# Creating Your First Object

```javascript
const person = {
    name: "Alice",
    age: 24,
    city: "London"
};

console.log(person);
```

Output

```text
{
  name: 'Alice',
  age: 24,
  city: 'London'
}
```

---

# More Examples

## Example 1 — Product

```javascript
const product = {
    id: 1,
    name: "Laptop",
    price: 65000
};

console.log(product);
```

---

## Example 2 — Book

```javascript
const book = {
    title: "JavaScript Guide",
    author: "John Smith",
    pages: 450
};

console.log(book);
```

---

## Example 3 — Employee

```javascript
const employee = {
    id: 501,
    name: "Amit",
    department: "IT",
    salary: 70000
};

console.log(employee);
```

---

# Visual Representation

```text
person
│
├── name  → Alice
├── age   → 24
└── city  → London
```

---

# Internal Working

Internally, an object is stored as a reference in memory.

```text
Variable
person
   │
   ▼
Memory
──────────────────────
name  → Alice
age   → 24
city  → London
──────────────────────
```

Unlike primitive values, objects are stored by **reference**, not by value.

---

# Objects vs Primitive Data Types

| Primitive | Object |
|-----------|---------|
| Stores one value | Stores multiple values |
| Immutable (strings, numbers, etc.) | Mutable |
| Copied by value | Copied by reference |
| Simple | Complex |
| Lightweight | Flexible |

---

# Real-World Use Cases

Objects are used everywhere in JavaScript.

Examples include:

- User profiles
- Products
- Orders
- API responses
- Student records
- Bank accounts
- Games
- Shopping carts
- Configuration settings
- React component props

---

# Advantages

- Organizes related data.
- Improves readability.
- Makes code reusable.
- Supports nested structures.
- Easy to extend.
- Represents real-world entities naturally.

---

# Limitations

- Slightly more memory usage than primitives.
- Reference behavior can confuse beginners.
- Deep copying requires extra care.

---

# Common Mistakes

## ❌ Using multiple variables

```javascript
let name = "John";
let age = 30;
let city = "Delhi";
```

## ✅ Use an object

```javascript
const person = {
    name: "John",
    age: 30,
    city: "Delhi"
};
```

---

## ❌ Duplicate property names

```javascript
const user = {
    name: "John",
    name: "Alice"
};
```

Only the last value is retained.

---

# Best Practices

- Use meaningful property names.
- Group related data together.
- Keep objects organized.
- Use `const` when the object reference doesn't change.
- Avoid unnecessary nesting.
- Use camelCase for property names.

---

# Summary

- Objects store data using key-value pairs.
- Objects group related information together.
- They are mutable reference types.
- Objects can store any data type.
- They are heavily used in modern JavaScript applications.
- Almost every JavaScript application relies on objects.

---

# Interview Questions

1. What is an object in JavaScript?
2. How are objects different from primitive data types?
3. What is a property?
4. Can an object store functions?
5. Why are objects called reference types?
6. What are key-value pairs?
7. Where are objects used in real-world applications?

---

# Practice Exercises

1. Create a student object.
2. Create a car object with five properties.
3. Create a book object.
4. Create a product object.
5. Create an employee object.
6. Store an array inside an object.
7. Store another object inside an object.

---

# Key Takeaway

> **Objects are the foundation of JavaScript because they allow us to represent real-world entities by grouping related data into a single, organized structure.**

---

# Next Lesson

<h2>
➡️ <a href="../0002_why_use_objects/why_use_objects.md" style="color:#1E90FF;text-decoration:none;">
<strong>Why Use Objects</strong>
</a>
</h2>