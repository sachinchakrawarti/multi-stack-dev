# Redeclaration vs Reassignment in JavaScript

## Introduction

Two concepts that often confuse JavaScript beginners are **redeclaration** and **reassignment**. Although they sound similar, they have very different meanings.

Understanding the difference is essential because the behavior depends on whether a variable is declared using **`var`**, **`let`**, or **`const`**.

---

# What Is Redeclaration?

**Redeclaration** means declaring the **same variable again** in the **same scope**.

General syntax:

```javascript
let age = 22;

let age = 25;
```

In this example, the variable `age` is declared twice.

---

# What Is Reassignment?

**Reassignment** means changing the **value** stored in an already declared variable.

Example:

```javascript
let age = 22;

age = 25;
```

Here, the variable is declared only once, but its value changes.

---

# Simple Comparison

```text
Declaration
      │
      ▼
let age = 22;

      │
      ▼
Reassignment
      │
      ▼
age = 25;

----------------------------

Redeclaration
      │
      ▼
let age = 22;

let age = 25;
```

---

# Redeclaration with `var`

`var` allows redeclaration in the same scope.

Example:

```javascript
var city = "Bhopal";

var city = "Delhi";

console.log(city);
```

Output

```text
Delhi
```

Although allowed, redeclaration with `var` can make code harder to understand and maintain.

---

# Reassignment with `var`

`var` also allows reassignment.

```javascript
var score = 50;

score = 95;

console.log(score);
```

Output

```text
95
```

---

# Redeclaration with `let`

`let` does **not** allow redeclaration in the same scope.

Example:

```javascript
let age = 22;

let age = 25;
```

Output

```text
SyntaxError
```

---

# Reassignment with `let`

`let` allows reassignment.

```javascript
let age = 22;

age = 25;

console.log(age);
```

Output

```text
25
```

---

# Redeclaration with `const`

`const` does **not** allow redeclaration.

```javascript
const pi = 3.14;

const pi = 3.14159;
```

Output

```text
SyntaxError
```

---

# Reassignment with `const`

`const` variables cannot be reassigned.

```javascript
const country = "India";

country = "USA";
```

Output

```text
TypeError
```

---

# Comparison Table

| Feature | `var` | `let` | `const` |
|----------|--------|--------|----------|
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Block Scoped | ❌ No | ✅ Yes | ✅ Yes |

---

# Memory Representation

Initial state:

```javascript
let name = "Sachin";
```

Memory

```text
name → "Sachin"
```

After reassignment:

```javascript
name = "Rahul";
```

Memory

```text
name → "Rahul"
```

The same variable now stores a new value.

---

# Redeclaration in Different Scopes

Redeclaring a variable with the same name is allowed if it is in a different scope.

Example:

```javascript
let city = "Bhopal";

if (true) {

    let city = "Delhi";

    console.log(city);

}

console.log(city);
```

Output

```text
Delhi
Bhopal
```

These are two different variables because they belong to different scopes.

---

# Object Example

The variable itself cannot be reassigned if declared with `const`, but object properties can be changed.

Example:

```javascript
const student = {

    name: "Sachin",

    age: 22

};

student.age = 23;

console.log(student);
```

Output

```text
{
    name: "Sachin",
    age: 23
}
```

Reassigning the object is not allowed.

```javascript
student = {};
```

Output

```text
TypeError
```

---

# Array Example

```javascript
const colors = ["Red", "Blue"];

colors.push("Green");

console.log(colors);
```

Output

```text
["Red", "Blue", "Green"]
```

However:

```javascript
colors = [];
```

Output

```text
TypeError
```

---

# Real-World Example

```javascript
let balance = 1000;

balance = balance + 500;

console.log(balance);
```

Output

```text
1500
```

This is a typical use of reassignment.

---

# Common Mistakes

## Redeclaring a `let` Variable

```javascript
let username = "Sachin";

let username = "Rahul";
```

Output

```text
SyntaxError
```

---

## Reassigning a `const`

```javascript
const tax = 18;

tax = 20;
```

Output

```text
TypeError
```

---

## Assuming Object Properties Cannot Change

```javascript
const user = {

    age: 22

};

user.age = 23;
```

This is valid because only the property is changing, not the variable binding.

---

# Best Practices

- Use `const` by default.
- Use `let` only when reassignment is needed.
- Avoid `var` in modern JavaScript.
- Do not redeclare variables unnecessarily.
- Keep variable names meaningful.
- Limit the scope of variables to where they are needed.

---

# Interview Questions

### 1. What is redeclaration?

Redeclaration means declaring the same variable again in the same scope.

---

### 2. What is reassignment?

Reassignment means changing the value of an already declared variable.

---

### 3. Can `var` be redeclared?

Yes.

---

### 4. Can `let` be redeclared in the same scope?

No.

---

### 5. Can `const` be reassigned?

No.

---

### 6. Can properties of a `const` object be modified?

Yes.

The object reference remains constant, but its contents can change.

---

# Key Points

- Redeclaration creates a new declaration for the same variable name.
- Reassignment changes the value of an existing variable.
- `var` allows both redeclaration and reassignment.
- `let` allows reassignment but not redeclaration in the same scope.
- `const` allows neither redeclaration nor reassignment.
- `const` objects and arrays can still have their contents modified.
- Understanding the difference helps prevent common JavaScript errors.

---

# Summary

Redeclaration and reassignment are two distinct operations in JavaScript. **Redeclaration** creates another declaration for the same variable name, while **reassignment** changes the value of an existing variable. Modern JavaScript encourages using `const` by default and `let` only when a variable's value needs to change. Mastering these concepts leads to cleaner, safer, and more maintainable code.