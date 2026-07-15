# The `const` Keyword in JavaScript

## Introduction

The `const` keyword is used to declare **constant variables** in JavaScript. It was introduced in **ECMAScript 2015 (ES6)** along with `let`.

Variables declared with `const` are **block-scoped**, **cannot be reassigned**, and **must be initialized** at the time of declaration.

In modern JavaScript development, `const` is the **preferred choice** for declaring variables because it helps prevent accidental reassignment and makes code easier to understand and maintain.

---

# Syntax

```javascript
const variableName = value;
```

Example:

```javascript
const country = "India";
```

---

# Basic Examples

## Example 1

```javascript
const name = "Sachin";

console.log(name);
```

Output

```text
Sachin
```

---

## Example 2

```javascript
const pi = 3.14159;

console.log(pi);
```

Output

```text
3.14159
```

---

## Example 3

```javascript
const isLoggedIn = true;

console.log(isLoggedIn);
```

Output

```text
true
```

---

# Initialization Is Required

Unlike `let` and `var`, a `const` variable **must** be assigned a value when it is declared.

Correct:

```javascript
const city = "Bhopal";
```

Incorrect:

```javascript
const city;
```

Output

```text
SyntaxError: Missing initializer in const declaration
```

---

# Reassignment

A `const` variable **cannot** be assigned a new value.

Example:

```javascript
const age = 22;

age = 25;
```

Output

```text
TypeError
```

---

# Redeclaration

A `const` variable cannot be redeclared in the same scope.

Incorrect:

```javascript
const language = "JavaScript";

const language = "Python";
```

Output

```text
SyntaxError
```

---

# Block Scope

Like `let`, `const` is **block-scoped**.

Example:

```javascript
if (true) {

    const message = "Hello";

    console.log(message);

}
```

Output

```text
Hello
```

Outside the block:

```javascript
console.log(message);
```

Output

```text
ReferenceError
```

---

# `const` with Objects

A common misconception is that `const` makes objects completely immutable.

Actually, `const` prevents **reassignment of the variable**, but the contents of the object can still be modified.

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

However, reassigning the object is not allowed.

```javascript
student = {};
```

Output

```text
TypeError
```

---

# `const` with Arrays

The same rule applies to arrays.

Example:

```javascript
const colors = ["Red", "Green"];

colors.push("Blue");

console.log(colors);
```

Output

```text
["Red", "Green", "Blue"]
```

Reassignment is not allowed.

```javascript
colors = [];
```

Output

```text
TypeError
```

---

# Hoisting

Variables declared with `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until the declaration is executed.

Example:

```javascript
console.log(pi);

const pi = 3.14;
```

Output

```text
ReferenceError
```

---

# Memory Example

```javascript
const company = "OpenAI";

const version = 1;

const active = true;
```

Memory

```text
company → "OpenAI"

version → 1

active  → true
```

---

# Advantages of `const`

- Block-scoped
- Prevents reassignment
- Prevents accidental changes
- Makes code more predictable
- Recommended for modern JavaScript
- Improves readability

---

# Limitations of `const`

- Must be initialized during declaration
- Cannot be reassigned
- Cannot be redeclared in the same scope

---

# `const` vs `let`

| Feature | `const` | `let` |
|----------|----------|--------|
| Scope | Block | Block |
| Reassignment | ❌ No | ✅ Yes |
| Redeclaration | ❌ No | ❌ No |
| Initialization Required | ✅ Yes | ❌ No |
| Preferred by Default | ✅ Yes | Only when needed |

---

# `const` vs `var`

| Feature | `const` | `var` |
|----------|----------|--------|
| Scope | Block | Function |
| Reassignment | ❌ No | ✅ Yes |
| Redeclaration | ❌ No | ✅ Yes |
| Hoisting | Yes (TDZ) | Yes (`undefined`) |
| Modern Recommendation | ✅ Yes | ❌ No |

---

# When Should You Use `const`?

Use `const` when the value should not be reassigned.

Examples:

```javascript
const appName = "BookQubit";

const maxUsers = 100;

const taxRate = 18;
```

You should also use `const` for:

- Arrays
- Objects
- Functions
- Configuration values
- API URLs
- Fixed settings

---

# Common Mistakes

## Forgetting Initialization

Incorrect:

```javascript
const name;
```

Output

```text
SyntaxError
```

---

## Reassigning a Constant

```javascript
const country = "India";

country = "USA";
```

Output

```text
TypeError
```

---

## Assuming Objects Are Immutable

```javascript
const user = {
    age: 22
};

user.age = 23;
```

This is valid because only the object's properties are being modified.

---

# Best Practices

- Use `const` by default.
- Use `let` only when reassignment is required.
- Give constants meaningful names.
- Use uppercase names for fixed configuration values (optional).

Example:

```javascript
const MAX_USERS = 100;

const API_URL = "https://example.com/api";
```

---

# Interview Questions

### 1. What is `const`?

`const` is a keyword used to declare block-scoped variables whose bindings cannot be reassigned.

---

### 2. Can `const` variables be reassigned?

No.

---

### 3. Can `const` variables be redeclared?

No.

---

### 4. Is `const` block-scoped?

Yes.

---

### 5. Can object properties declared with `const` be modified?

Yes.

Only the variable binding is constant, not the contents of the object.

---

### 6. Is `const` hoisted?

Yes, but it remains in the Temporal Dead Zone until its declaration.

---

### 7. Which keyword should be used by default?

`const`.

Use `let` only when a variable's value needs to change.

---

# Key Points

- `const` was introduced in ES6 (2015).
- It is block-scoped.
- It must be initialized during declaration.
- It cannot be reassigned.
- It cannot be redeclared in the same scope.
- Objects and arrays declared with `const` can still have their contents modified.
- It is the preferred choice for declaring variables in modern JavaScript.

---

# Summary

The `const` keyword is the recommended way to declare variables in modern JavaScript. It creates block-scoped bindings that cannot be reassigned, making programs safer and easier to maintain. While objects and arrays declared with `const` can still have their contents modified, the variable itself cannot point to a different value. As a best practice, use `const` by default and switch to `let` only when reassignment is necessary.