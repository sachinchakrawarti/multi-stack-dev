# What Are Data Types in JavaScript?

## Introduction

In JavaScript, every value has a **data type**. A data type tells JavaScript what kind of data a variable stores and what operations can be performed on it.

Examples of data include:

- Numbers
- Text
- True/False values
- Objects
- Arrays
- Functions

Understanding data types is one of the most important concepts in JavaScript because almost every program works with different kinds of data.

---

# Why Do We Need Data Types?

Imagine a calculator.

A calculator can perform mathematical operations on numbers:

```javascript
10 + 20
```

Output:

```text
30
```

But if we try to add two names:

```javascript
"John" + "Doe"
```

Output:

```text
JohnDoe
```

JavaScript behaves differently because numbers and strings are different data types.

---

# Definition

A **data type** is a classification that specifies what type of value a variable holds.

Example:

```javascript
let age = 25;
```

Here,

- Variable → `age`
- Value → `25`
- Data Type → Number

Example:

```javascript
let name = "Sachin";
```

Here,

- Variable → `name`
- Value → `"Sachin"`
- Data Type → String

---

# Example

```javascript
let age = 22;
let name = "Sachin";
let isStudent = true;

console.log(age);
console.log(name);
console.log(isStudent);
```

Output

```text
22
Sachin
true
```

---

# JavaScript Data Types

JavaScript has **two main categories** of data types.

## 1. Primitive Data Types

Primitive data types store a single value.

They are:

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol

Example:

```javascript
let age = 22;
```

---

## 2. Non-Primitive (Reference) Data Types

Reference data types can store collections of values or more complex entities.

Examples:

- Object
- Array
- Function
- Date
- Map
- Set

Example:

```javascript
const person = {
    name: "Sachin",
    age: 22
};
```

---

# Primitive Data Types

## Number

Stores integers and decimal numbers.

```javascript
let marks = 95;
let price = 99.99;
```

---

## BigInt

Stores very large integers.

```javascript
let big = 12345678901234567890n;
```

---

## String

Stores text.

```javascript
let language = "JavaScript";
```

---

## Boolean

Stores either `true` or `false`.

```javascript
let isLoggedIn = true;
```

---

## Undefined

A variable that has been declared but not assigned a value.

```javascript
let city;

console.log(city);
```

Output

```text
undefined
```

---

## Null

Represents an intentional empty value.

```javascript
let data = null;
```

---

## Symbol

Creates a unique identifier.

```javascript
const id = Symbol("id");
```

---

# Reference Data Types

## Object

```javascript
const student = {
    name: "Sachin",
    age: 22
};
```

---

## Array

```javascript
const colors = [
    "Red",
    "Green",
    "Blue"
];
```

---

## Function

```javascript
function greet() {
    console.log("Hello");
}
```

---

# typeof Operator

The `typeof` operator returns the data type of a value.

Example:

```javascript
console.log(typeof 25);
```

Output

```text
number
```

Example:

```javascript
console.log(typeof "Hello");
```

Output

```text
string
```

Example:

```javascript
console.log(typeof true);
```

Output

```text
boolean
```

---

# Example

```javascript
console.log(typeof 100);
console.log(typeof "JavaScript");
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
```

Output

```text
number
string
boolean
undefined
object
object
function
```

---

# Why Data Types Matter

Data types help JavaScript:

- Store data correctly
- Perform valid operations
- Prevent logical errors
- Improve code readability
- Optimize memory usage

---

# Real-World Example

A shopping website may store:

```javascript
let productName = "Laptop";
let price = 65000;
let inStock = true;
let discount = null;
```

Each variable has a different data type based on the information it represents.

---

# Best Practices

- Use meaningful variable names.
- Understand the difference between primitive and reference types.
- Use `const` whenever possible.
- Use `typeof` to inspect values.
- Avoid relying on automatic type conversion.

---

# Common Mistakes

Using a number as a string:

```javascript
let age = "25";
```

Instead of:

```javascript
let age = 25;
```

---

Confusing `null` and `undefined`.

```javascript
let a;
let b = null;
```

These are different values with different meanings.

---

Thinking arrays have their own `typeof` result.

```javascript
typeof []
```

Output

```text
object
```

Use:

```javascript
Array.isArray([])
```

Output

```text
true
```

---

# Interview Questions

1. What is a data type?
2. How many primitive data types are there in JavaScript?
3. What is the difference between primitive and reference data types?
4. What does the `typeof` operator do?
5. What is the difference between `null` and `undefined`?
6. Why does `typeof []` return `"object"`?
7. What is a Symbol?
8. What is BigInt?
9. How are objects stored in memory?
10. Why are data types important?

---

# Summary

- Every value in JavaScript has a data type.
- JavaScript data types are divided into Primitive and Non-Primitive.
- Primitive values store a single value.
- Reference values store objects and collections.
- The `typeof` operator identifies most data types.
- Understanding data types is essential for writing reliable JavaScript programs.

---

# Next Topic

**0002_primitive_data_types**