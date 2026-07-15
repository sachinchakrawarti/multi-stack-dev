# What Are Variables in JavaScript?

## Introduction

Variables are one of the most fundamental concepts in JavaScript. They act as **named containers** that store data in memory. Instead of working directly with values, you store them in variables and use the variable names throughout your program.

Variables make code easier to read, write, maintain, and reuse.

---

# Definition

A **variable** is a named storage location that holds a value.

The value stored inside a variable can change during program execution (except when using `const`).

Think of a variable as a labeled box.

```text
+----------------+
| Name: age      |
| Value: 21      |
+----------------+
```

Whenever you need the value, you use the variable name.

---

# Why Do We Need Variables?

Without variables:

```javascript
console.log("Sachin");
console.log("Sachin");
console.log("Sachin");
```

With variables:

```javascript
const name = "Sachin";

console.log(name);
console.log(name);
console.log(name);
```

Advantages:

- Reuse values
- Improve readability
- Reduce duplication
- Make code easier to update
- Simplify debugging

---

# Real-Life Analogy

Imagine your kitchen.

Instead of remembering where sugar is stored, you keep it inside a container labeled **Sugar**.

```text
Container Label → Sugar
Stored Item     → Sugar
```

Similarly,

```javascript
const city = "Bhopal";
```

- Variable name → `city`
- Stored value → `"Bhopal"`

---

# Syntax

JavaScript provides three keywords to declare variables.

```javascript
var variableName = value;

let variableName = value;

const variableName = value;
```

Examples:

```javascript
var age = 21;

let country = "India";

const pi = 3.14159;
```

---

# Variable Components

Every variable has three parts.

```javascript
let score = 95;
```

| Part | Value |
|------|-------|
| Keyword | `let` |
| Variable Name | `score` |
| Assigned Value | `95` |

---

# Example

```javascript
const name = "Sachin";

let age = 22;

let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
```

Output

```text
Sachin
22
true
```

---

# Variables Store Different Types of Data

Variables can store almost any type of value.

### Number

```javascript
let age = 25;
```

---

### String

```javascript
let name = "Sachin";
```

---

### Boolean

```javascript
let isLoggedIn = true;
```

---

### Array

```javascript
let colors = ["Red", "Blue", "Green"];
```

---

### Object

```javascript
let student = {
    name: "Sachin",
    age: 22
};
```

---

### Null

```javascript
let result = null;
```

---

### Undefined

```javascript
let value;
```

---

# Variables Can Change

Using `let`

```javascript
let score = 50;

score = 90;

console.log(score);
```

Output

```text
90
```

---

Using `const`

```javascript
const country = "India";

country = "USA";
```

Output

```text
TypeError
```

---

# Variable Naming Examples

Good

```javascript
let firstName;

let totalMarks;

let userAge;

const MAX_USERS = 100;
```

Bad

```javascript
let 123name;

let my-name;

let let;

let class;
```

---

# Memory Representation

```text
Memory

+----------------------+
| age     → 22         |
| city    → "Bhopal"   |
| isAdmin → false      |
+----------------------+
```

---

# How Variables Work

```text
Write Variable
       │
       ▼
JavaScript Engine
       │
       ▼
Allocate Memory
       │
       ▼
Store Value
       │
       ▼
Use Variable Anywhere
```

---

# Best Practices

- Use meaningful names.
- Prefer `const` whenever possible.
- Use `let` if the value changes.
- Avoid `var` in modern JavaScript.
- Use camelCase for variable names.
- Keep variable names descriptive.

Good

```javascript
const studentName = "Sachin";

let totalMarks = 450;
```

Avoid

```javascript
let x;

let abc;

let temp1;
```

---

# Common Mistakes

Using a variable before declaring it

```javascript
console.log(age);

let age = 20;
```

---

Using reserved keywords

```javascript
let class = 10;
```

---

Using spaces

```javascript
let first name = "Sachin";
```

---

Using invalid characters

```javascript
let user-name = "Sachin";
```

---

# Key Points

- Variables store data.
- Variables have names.
- Variables make programs reusable.
- JavaScript uses `var`, `let`, and `const`.
- Variables can store different data types.
- `const` variables cannot be reassigned.
- `let` variables can be updated.
- Modern JavaScript recommends using `let` and `const`.

---

# Summary

Variables are the foundation of JavaScript programming. They allow developers to store, retrieve, and manipulate data efficiently. By using meaningful variable names and choosing the appropriate declaration keyword (`let` or `const`), you can write clean, maintainable, and professional JavaScript code.