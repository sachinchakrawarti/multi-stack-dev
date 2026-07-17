# Boolean Data Type in JavaScript

## Introduction

The **Boolean** data type is one of JavaScript's **primitive data types**. It represents only two possible values:

- `true`
- `false`

Booleans are primarily used for **decision making**, **comparisons**, **logical operations**, **loops**, and **conditional statements**.

---

# What is a Boolean?

A Boolean is a data type that represents a logical value.

Example:

```javascript
let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);
```

Output

```text
true
false
```

---

# Creating Boolean Values

## Using Boolean Literals

```javascript
const hasLicense = true;
const isAdmin = false;

console.log(hasLicense);
console.log(isAdmin);
```

Output

```text
true
false
```

---

## Using the Boolean Constructor

```javascript
const a = Boolean(true);
const b = Boolean(false);

console.log(a);
console.log(b);
```

Output

```text
true
false
```

Although valid, using Boolean literals is generally preferred.

---

# typeof Boolean

Use the `typeof` operator to determine the data type.

```javascript
const isOnline = true;

console.log(typeof isOnline);
```

Output

```text
boolean
```

---

# Boolean from Comparisons

Comparison operators always return Boolean values.

```javascript
console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);
console.log(10 !== 10);
```

Output

```text
true
false
true
false
```

---

# Boolean in Conditional Statements

```javascript
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome!");
}
```

Output

```text
Welcome!
```

---

# Boolean with if...else

```javascript
const age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}
```

Output

```text
Eligible to vote
```

---

# Boolean in Loops

```javascript
let running = true;
let count = 1;

while (running) {
    console.log(count);

    if (count === 3) {
        running = false;
    }

    count++;
}
```

Output

```text
1
2
3
```

---

# Logical Operators

## AND (`&&`)

Returns `true` only if both values are true.

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

Returns `true` if at least one value is true.

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

# Truthy Values

The following values are converted to `true`.

```javascript
Boolean(1);
Boolean(100);
Boolean(-5);
Boolean("JavaScript");
Boolean([]);
Boolean({});
Boolean(function(){});
Boolean(Infinity);
```

All produce:

```text
true
```

---

# Falsy Values

JavaScript has only a few falsy values.

```javascript
Boolean(false);
Boolean(0);
Boolean(-0);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);
```

Output

```text
false
false
false
false
false
false
false
```

---

# Boolean with Comparison Operators

```javascript
const x = 10;
const y = 20;

console.log(x < y);
console.log(x > y);
console.log(x == y);
console.log(x != y);
```

Output

```text
true
false
false
true
```

---

# Boolean with Strict Equality

```javascript
console.log(10 == "10");
console.log(10 === "10");
```

Output

```text
true
false
```

Use `===` to compare both value and type.

---

# Boolean in Ternary Operator

```javascript
const age = 20;

const result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);
```

Output

```text
Adult
```

---

# Real-World Example

```javascript
const user = {
    username: "Sachin",
    isPremium: true,
    isVerified: false
};

if (user.isPremium) {
    console.log("Premium features enabled");
}
```

Output

```text
Premium features enabled
```

---

# typeof Examples

```javascript
console.log(typeof true);
console.log(typeof false);
```

Output

```text
boolean
boolean
```

---

# Boolean vs Number

| Boolean | Number |
|----------|--------|
| `true` | `1` (when converted) |
| `false` | `0` (when converted) |
| Logical values | Numeric values |
| Used in conditions | Used in calculations |

---

# Best Practices

- Use Boolean values for conditions.
- Use meaningful variable names like `isLoggedIn`, `hasPermission`, and `isAvailable`.
- Prefer strict equality (`===`) over loose equality (`==`).
- Keep Boolean expressions simple and readable.
- Avoid comparing Boolean values with `true` or `false` unnecessarily.

Example:

```javascript
if (isLoggedIn) {
    console.log("Welcome");
}
```

Instead of:

```javascript
if (isLoggedIn === true) {
    console.log("Welcome");
}
```

---

# Common Mistakes

## Using Assignment Instead of Comparison

Incorrect

```javascript
if (isAdmin = true) {
    console.log("Admin");
}
```

Correct

```javascript
if (isAdmin === true) {
    console.log("Admin");
}
```

Or simply:

```javascript
if (isAdmin) {
    console.log("Admin");
}
```

---

## Confusing `==` and `===`

```javascript
console.log(true == 1);
console.log(true === 1);
```

Output

```text
true
false
```

---

## Assuming Every Value is False

```javascript
if ("Hello") {
    console.log("Runs");
}
```

Output

```text
Runs
```

Non-empty strings are truthy.

---

## Ignoring Falsy Values

```javascript
if (0) {
    console.log("Never runs");
}
```

Output

```text
No output
```

---

# Interview Questions

1. What is the Boolean data type in JavaScript?
2. How many Boolean values exist?
3. What is the difference between `==` and `===`?
4. What are truthy and falsy values?
5. What does `Boolean()` do?
6. What is the result of `Boolean("")`?
7. What does `typeof true` return?
8. Why should `===` be preferred over `==`?
9. How are Booleans used in conditional statements?
10. What are logical operators in JavaScript?

---

# Summary

- Boolean is a primitive data type.
- It has only two values: `true` and `false`.
- Used for conditions, comparisons, loops, and logical operations.
- Comparison operators return Boolean values.
- `Boolean()` converts values into Boolean.
- JavaScript has truthy and falsy values.
- Use strict equality (`===`) for safer comparisons.
- Booleans are fundamental to decision-making in JavaScript.

---

# Next Topic

**0008_undefined**