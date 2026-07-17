# Boolean Data Type in JavaScript

## Introduction

The **Boolean** data type represents one of two possible values:

- `true`
- `false`

Booleans are primarily used to make decisions in a program. They determine whether a condition is true or false and are commonly used with conditional statements, loops, and comparison operators.

---

# What Is a Boolean?

A **Boolean** is a primitive data type that represents a logical value.

It can only have one of two values:

- `true`
- `false`

Example:

```javascript
let isStudent = true;
let hasLicense = false;
```

---

# Why Use Booleans?

Booleans help JavaScript make decisions.

For example:

- Is a user logged in?
- Is a product in stock?
- Has a payment been completed?
- Is a number greater than another?

Example:

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}
```

Output

```text
Welcome!
```

---

# Creating Boolean Values

Boolean values can be assigned directly.

```javascript
let isOnline = true;
let isAdmin = false;

console.log(isOnline);
console.log(isAdmin);
```

Output

```text
true
false
```

---

# Checking the Data Type

Use the `typeof` operator.

```javascript
let isStudent = true;

console.log(typeof isStudent);
```

Output

```text
boolean
```

---

# Boolean Expressions

Comparison operators return Boolean values.

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 !== 5);
```

Output

```text
true
false
true
true
```

---

# Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal | `10 == "10"` |
| `===` | Strict Equal | `10 === 10` |
| `!=` | Not Equal | `10 != 5` |
| `!==` | Strict Not Equal | `10 !== "10"` |
| `>` | Greater Than | `10 > 5` |
| `<` | Less Than | `5 < 10` |
| `>=` | Greater Than or Equal | `10 >= 10` |
| `<=` | Less Than or Equal | `5 <= 10` |

Example:

```javascript
console.log(20 >= 15);
```

Output

```text
true
```

---

# Logical Operators

Logical operators combine Boolean values.

## AND (`&&`)

Returns `true` only if both conditions are true.

```javascript
console.log(true && true);
console.log(true && false);
```

Output

```text
true
false
```

---

## OR (`||`)

Returns `true` if at least one condition is true.

```javascript
console.log(true || false);
console.log(false || false);
```

Output

```text
true
false
```

---

## NOT (`!`)

Reverses a Boolean value.

```javascript
console.log(!true);
console.log(!false);
```

Output

```text
false
true
```

---

# Boolean in Conditional Statements

Booleans are commonly used with `if` statements.

```javascript
let isMember = true;

if (isMember) {
    console.log("Discount Applied");
}
```

Output

```text
Discount Applied
```

---

# Boolean in Loops

```javascript
let isRunning = true;

while (isRunning) {
    console.log("Program Running");
    isRunning = false;
}
```

Output

```text
Program Running
```

---

# Boolean Conversion

The `Boolean()` function converts values into Boolean values.

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
```

Output

```text
true
false
true
false
```

---

# Truthy and Falsy Values

Some values automatically convert to `true` or `false`.

## Falsy Values

JavaScript has **only 8 falsy values**:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is considered **truthy**.

Examples:

```javascript
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
```

Output

```text
false
false
false
false
```

---

## Truthy Values

Examples of truthy values:

```javascript
Boolean(1)
Boolean(-5)
Boolean("Hello")
Boolean([])
Boolean({})
Boolean(function(){})
```

Output

```text
true
true
true
true
true
true
```

---

# Real-World Example

```javascript
const isLoggedIn = true;
const hasSubscription = false;

if (isLoggedIn && hasSubscription) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
```

Output

```text
Access Denied
```

---

# Best Practices

- Use descriptive Boolean variable names.
- Prefer names that start with `is`, `has`, `can`, or `should`.
- Use strict equality (`===`) whenever possible.
- Avoid comparing Boolean values with `true` or `false` unnecessarily.

Good:

```javascript
if (isLoggedIn) {
    console.log("Welcome");
}
```

Less Preferred:

```javascript
if (isLoggedIn === true) {
    console.log("Welcome");
}
```

---

# Common Mistakes

## Using Assignment Instead of Comparison

Incorrect:

```javascript
if (isLoggedIn = true) {
    console.log("Welcome");
}
```

Correct:

```javascript
if (isLoggedIn === true) {
    console.log("Welcome");
}
```

Or simply:

```javascript
if (isLoggedIn) {
    console.log("Welcome");
}
```

---

## Confusing `==` and `===`

```javascript
console.log(10 == "10");
```

Output

```text
true
```

```javascript
console.log(10 === "10");
```

Output

```text
false
```

Always prefer `===`.

---

## Forgetting Truthy and Falsy Values

```javascript
let username = "";

if (username) {
    console.log("Valid");
}
```

Nothing is printed because an empty string is falsy.

---

# Interview Questions

1. What is a Boolean data type?
2. How many values can a Boolean have?
3. What does the `Boolean()` function do?
4. What is the difference between `==` and `===`?
5. What are logical operators?
6. What are truthy and falsy values?
7. Name all JavaScript falsy values.
8. Why should you use strict equality?
9. How are Booleans used in conditional statements?
10. What is the `!` operator?

---

# Summary

- Boolean is a primitive data type.
- It has only two values: `true` and `false`.
- Comparison operators return Boolean values.
- Logical operators combine Boolean expressions.
- JavaScript automatically converts values to Boolean in many situations.
- Understanding truthy and falsy values is essential for writing reliable code.

---

# Key Points

- Boolean stores logical values.
- `typeof true` returns `"boolean"`.
- Use `===` instead of `==`.
- Use meaningful Boolean variable names.
- Learn JavaScript's truthy and falsy values.
- Booleans are heavily used in conditions and loops.

---

# Next Topic

# `Undefined`