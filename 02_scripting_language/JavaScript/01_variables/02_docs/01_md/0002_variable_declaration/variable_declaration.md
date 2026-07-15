# Variable Declaration in JavaScript

## Introduction

Before you can use a variable in JavaScript, you must **declare** it. Variable declaration tells the JavaScript engine to create a named storage location in memory.

After declaring a variable, you can optionally assign a value to it. Understanding variable declaration is essential because almost every JavaScript program uses variables.

---

# What Is Variable Declaration?

**Variable declaration** is the process of creating a variable by giving it a name.

JavaScript provides three keywords to declare variables:

- `var`
- `let`
- `const`

General syntax:

```javascript
keyword variableName;
```

Example:

```javascript
let age;
```

At this point:

- Variable name: `age`
- Value: `undefined`

---

# Declaration vs Initialization

Many beginners confuse these two concepts.

## Declaration

Creating a variable.

```javascript
let age;
```

---

## Initialization

Assigning a value to a variable.

```javascript
age = 22;
```

---

## Declaration + Initialization

Both can be done in one statement.

```javascript
let age = 22;
```

---

# Syntax

## Using `var`

```javascript
var city = "Bhopal";
```

---

## Using `let`

```javascript
let country = "India";
```

---

## Using `const`

```javascript
const pi = 3.14159;
```

---

# Examples

## Example 1

```javascript
let name = "Sachin";

console.log(name);
```

Output

```text
Sachin
```

---

## Example 2

```javascript
let marks;

marks = 95;

console.log(marks);
```

Output

```text
95
```

---

## Example 3

```javascript
const company = "OpenAI";

console.log(company);
```

Output

```text
OpenAI
```

---

# Default Value

If a variable is declared but not initialized, JavaScript automatically assigns the value `undefined`.

Example:

```javascript
let language;

console.log(language);
```

Output

```text
undefined
```

---

# Declaring Multiple Variables

You can declare multiple variables in a single statement.

```javascript
let firstName = "Sachin",
    lastName = "Chakrawarti",
    age = 22;
```

Or, for better readability:

```javascript
let firstName = "Sachin";
let lastName = "Chakrawarti";
let age = 22;
```

The second approach is generally preferred.

---

# Variable Declaration Flow

```text
Declare Variable
        │
        ▼
Memory is Allocated
        │
        ▼
Value is Assigned
        │
        ▼
Variable Can Be Used
```

---

# Declaring Different Data Types

## Number

```javascript
let age = 22;
```

---

## String

```javascript
let name = "Sachin";
```

---

## Boolean

```javascript
let isStudent = true;
```

---

## Array

```javascript
let skills = ["HTML", "CSS", "JavaScript"];
```

---

## Object

```javascript
let user = {
    name: "Sachin",
    age: 22
};
```

---

## Null

```javascript
let result = null;
```

---

## Undefined

```javascript
let score;
```

---

# Memory Example

```javascript
let city = "Bhopal";
let temperature = 32;
let raining = false;
```

Memory representation:

```text
Memory

city         → "Bhopal"

temperature  → 32

raining      → false
```

---

# Good Practices

Declare variables close to where they are needed.

Good:

```javascript
const price = 499;

const tax = 18;
```

Avoid:

```javascript
let a;

let b;

let c;
```

without meaningful names or immediate use.

---

# Common Mistakes

## Using a Variable Before Declaration

```javascript
console.log(age);

let age = 22;
```

Result:

```text
ReferenceError
```

---

## Forgetting Initialization

```javascript
let marks;

console.log(marks);
```

Output:

```text
undefined
```

---

## Reassigning a `const`

```javascript
const pi = 3.14;

pi = 3.14159;
```

Result:

```text
TypeError
```

---

## Using Reserved Keywords

Incorrect:

```javascript
let class = 10;
```

Correct:

```javascript
let classNumber = 10;
```

---

# Best Practices

- Prefer `const` by default.
- Use `let` when the value needs to change.
- Avoid `var` in modern JavaScript.
- Give variables meaningful names.
- Initialize variables whenever possible.
- Declare one variable per line for better readability.

---

# Quick Comparison

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Declares a variable | ✅ | ✅ | ✅ |
| Can be reassigned | ✅ | ✅ | ❌ |
| Can be redeclared in the same scope | ✅ | ❌ | ❌ |
| Block scoped | ❌ | ✅ | ✅ |
| Recommended for modern code | ❌ | ✅ | ✅ |

---

# Key Points

- Variables must be declared before use.
- Declaration creates a variable.
- Initialization assigns a value.
- Uninitialized variables have the value `undefined`.
- Use `const` for values that should not change.
- Use `let` for values that may change.
- Avoid `var` in new JavaScript projects.

---

# Summary

Variable declaration is the first step in working with data in JavaScript. By declaring variables with `let` or `const`, assigning meaningful names, and initializing them appropriately, you can write clean, readable, and maintainable code. Understanding the difference between declaration and initialization is a key building block for learning more advanced JavaScript concepts.