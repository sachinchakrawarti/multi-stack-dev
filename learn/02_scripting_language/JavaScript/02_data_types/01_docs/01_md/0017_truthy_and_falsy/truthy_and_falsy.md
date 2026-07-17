# Truthy and Falsy Values in JavaScript

## Introduction

In JavaScript, every value can be evaluated as either **truthy** or **falsy** when used in a Boolean context, such as an `if` statement, `while` loop, logical expression, or ternary operator.

A **truthy** value behaves like `true`, while a **falsy** value behaves like `false`.

Understanding truthy and falsy values is essential because JavaScript automatically converts values to Boolean when evaluating conditions.

---

# What Are Truthy and Falsy Values?

JavaScript performs **Boolean coercion** when evaluating conditions.

Example:

```javascript
if ("Hello") {
    console.log("Executed");
}
```

Output

```text
Executed
```

Although `"Hello"` is not the Boolean value `true`, JavaScript treats it as **truthy**.

---

# What Are Falsy Values?

Falsy values are values that automatically convert to `false`.

JavaScript has **only 8 falsy values**.

| Falsy Value | Description |
|-------------|-------------|
| `false` | Boolean false |
| `0` | Number zero |
| `-0` | Negative zero |
| `0n` | BigInt zero |
| `""` | Empty string |
| `null` | Intentional empty value |
| `undefined` | Uninitialized value |
| `NaN` | Not-a-Number |

Example:

```javascript
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
```

Output

```text
false
false
false
false
false
false
```

---

# What Are Truthy Values?

Every value that is **not falsy** is truthy.

Common truthy values include:

- Non-zero numbers
- Non-empty strings
- Arrays
- Objects
- Functions
- Dates
- Maps
- Sets

Example:

```javascript
console.log(Boolean(1));
console.log(Boolean(-5));
console.log(Boolean("JavaScript"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));
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

# Truthy and Falsy in `if` Statements

```javascript
let username = "Sachin";

if (username) {
    console.log("User Found");
}
```

Output

```text
User Found
```

Example with a falsy value:

```javascript
let username = "";

if (username) {
    console.log("User Found");
} else {
    console.log("No Username");
}
```

Output

```text
No Username
```

---

# Truthy and Falsy in Loops

```javascript
let count = 3;

while (count) {
    console.log(count);
    count--;
}
```

Output

```text
3
2
1
```

When `count` becomes `0`, the loop stops because `0` is falsy.

---

# Logical AND (`&&`)

The `&&` operator returns the first falsy value or the last truthy value.

Example:

```javascript
console.log(true && true);
console.log(true && false);
```

Output

```text
true
false
```

Example:

```javascript
console.log("Hello" && 100);
```

Output

```text
100
```

---

# Logical OR (`||`)

The `||` operator returns the first truthy value.

```javascript
console.log("" || "Guest");
```

Output

```text
Guest
```

Example:

```javascript
console.log("Sachin" || "Guest");
```

Output

```text
Sachin
```

---

# Logical NOT (`!`)

The `!` operator converts a value to a Boolean and reverses it.

```javascript
console.log(!true);
console.log(!false);
```

Output

```text
false
true
```

Example:

```javascript
console.log(!"Hello");
console.log(!0);
```

Output

```text
false
true
```

---

# Double NOT (`!!`)

Use `!!` to convert any value to a Boolean.

```javascript
console.log(!!"JavaScript");
console.log(!!0);
```

Output

```text
true
false
```

---

# Using Default Values

The `||` operator is commonly used to provide default values.

```javascript
let username = "";

let displayName = username || "Guest";

console.log(displayName);
```

Output

```text
Guest
```

---

# Real-World Example

```javascript
const user = {
    name: ""
};

const name = user.name || "Anonymous";

console.log(name);
```

Output

```text
Anonymous
```

---

# Checking Empty Arrays and Objects

Many beginners think empty arrays and empty objects are falsy.

```javascript
console.log(Boolean([]));
console.log(Boolean({}));
```

Output

```text
true
true
```

Both are **truthy**.

---

# Best Practices

- Understand JavaScript's eight falsy values.
- Use `===` for precise comparisons.
- Avoid relying too much on implicit Boolean conversion.
- Use meaningful conditional expressions.
- Use `??` (Nullish Coalescing Operator) when only `null` or `undefined` should trigger a default value.

Example:

```javascript
const username = null;

console.log(username ?? "Guest");
```

Output

```text
Guest
```

---

# Common Mistakes

## Assuming Empty Arrays Are Falsy

```javascript
if ([]) {
    console.log("Executed");
}
```

Output

```text
Executed
```

Empty arrays are truthy.

---

## Assuming Empty Objects Are Falsy

```javascript
if ({}) {
    console.log("Executed");
}
```

Output

```text
Executed
```

Empty objects are also truthy.

---

## Using `||` When `0` Is a Valid Value

```javascript
let count = 0;

console.log(count || 100);
```

Output

```text
100
```

If `0` is a valid value, use the nullish coalescing operator:

```javascript
console.log(count ?? 100);
```

Output

```text
0
```

---

# Interview Questions

1. What are truthy and falsy values?
2. How many falsy values exist in JavaScript?
3. Name all eight falsy values.
4. Are empty arrays truthy or falsy?
5. Are empty objects truthy or falsy?
6. What does the `!!` operator do?
7. How does the `||` operator work?
8. What is the difference between `||` and `??`?
9. Why should you understand truthy and falsy values?
10. What is Boolean coercion?

---

# Summary

- JavaScript automatically converts values to Boolean in conditional contexts.
- There are only **8 falsy values**.
- Every other value is truthy.
- Empty arrays and empty objects are truthy.
- Logical operators (`&&`, `||`, and `!`) work with truthy and falsy values.
- Understanding truthy and falsy values helps write cleaner and more reliable code.

---

# Key Points

- Truthy values behave like `true`.
- Falsy values behave like `false`.
- JavaScript has exactly **8 falsy values**.
- `!!` converts any value to a Boolean.
- `||` returns the first truthy value.
- `??` is preferred when only `null` or `undefined` should trigger a default value.

---

# Next Topic

# `nan`