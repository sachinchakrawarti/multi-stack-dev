# Symbol Data Type in JavaScript

## Introduction

The **Symbol** data type is one of JavaScript's **seven primitive data types**.

A **Symbol** is a unique and immutable value that is primarily used as an object property key. Even if two Symbols have the same description, they are always different.

Symbols were introduced in **ES6 (ECMAScript 2015)** to help developers create unique property identifiers and avoid property name conflicts.

---

# What Is a Symbol?

A **Symbol** is a primitive value that is always unique.

Every time you create a Symbol, JavaScript generates a new unique value.

Example:

```javascript
const id = Symbol();

console.log(id);
```

Output

```text
Symbol()
```

---

# Characteristics of Symbol

- Primitive data type.
- Every Symbol is unique.
- Immutable (cannot be changed).
- Commonly used as object property keys.
- Introduced in ES6 (ECMAScript 2015).

---

# Creating Symbols

Use the `Symbol()` function.

```javascript
const id = Symbol();
const userId = Symbol();
```

Although both were created the same way, they are different values.

```javascript
console.log(id === userId);
```

Output

```text
false
```

---

# Symbol with Description

A Symbol can have an optional description.

```javascript
const id = Symbol("id");

console.log(id);
```

Output

```text
Symbol(id)
```

The description is only for debugging and does not affect uniqueness.

---

# Checking the Data Type

Use the `typeof` operator.

```javascript
const id = Symbol("user");

console.log(typeof id);
```

Output

```text
symbol
```

---

# Symbol Uniqueness

Even Symbols with the same description are different.

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output

```text
false
```

Each Symbol is unique.

---

# Using Symbols as Object Keys

Symbols are commonly used as object property keys.

```javascript
const id = Symbol("id");

const user = {
    name: "Sachin",
    [id]: 101
};

console.log(user[id]);
```

Output

```text
101
```

Notice the square brackets (`[]`) around the Symbol.

---

# Why Use Symbols?

Symbols prevent property name collisions.

Without Symbols:

```javascript
const user = {
    id: 101
};

user.id = 202;

console.log(user.id);
```

Output

```text
202
```

With Symbols:

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

const user = {
    [id1]: 101,
    [id2]: 202
};

console.log(user[id1]);
console.log(user[id2]);
```

Output

```text
101
202
```

Both properties coexist because the Symbols are unique.

---

# Symbol Properties

Normal object properties are listed by `Object.keys()`.

```javascript
const id = Symbol("id");

const user = {
    name: "Sachin",
    [id]: 101
};

console.log(Object.keys(user));
```

Output

```text
["name"]
```

The Symbol property is not included.

---

# Accessing Symbol Properties

Use `Object.getOwnPropertySymbols()`.

```javascript
const id = Symbol("id");

const user = {
    [id]: 101
};

console.log(Object.getOwnPropertySymbols(user));
```

Output

```text
[Symbol(id)]
```

---

# Global Symbols

JavaScript provides a global Symbol registry using `Symbol.for()`.

```javascript
const id1 = Symbol.for("user");
const id2 = Symbol.for("user");

console.log(id1 === id2);
```

Output

```text
true
```

Unlike `Symbol()`, `Symbol.for()` returns the same Symbol for the same key.

---

# Getting the Global Symbol Key

Use `Symbol.keyFor()`.

```javascript
const id = Symbol.for("employee");

console.log(Symbol.keyFor(id));
```

Output

```text
employee
```

---

# Converting Symbols

Symbols cannot be automatically converted to strings.

Incorrect:

```javascript
const id = Symbol("id");

console.log("ID: " + id);
```

Output

```text
TypeError
```

Correct:

```javascript
const id = Symbol("id");

console.log(id.toString());
```

Output

```text
Symbol(id)
```

---

# Real-World Example

Using a Symbol to create a private object property.

```javascript
const employeeId = Symbol("employeeId");

const employee = {
    name: "Sachin",
    department: "IT",
    [employeeId]: 5001
};

console.log(employee.name);
console.log(employee[employeeId]);
```

Output

```text
Sachin
5001
```

The Symbol property is hidden from normal object enumeration.

---

# Best Practices

- Use Symbols when unique object property keys are needed.
- Use `Symbol.for()` only when a shared global Symbol is required.
- Do not use Symbols for ordinary object properties.
- Use descriptive names for easier debugging.

---

# Common Mistakes

## Assuming Two Symbols Are Equal

```javascript
const a = Symbol("id");
const b = Symbol("id");

console.log(a === b);
```

Output

```text
false
```

Each Symbol is unique.

---

## Forgetting Bracket Notation

Incorrect:

```javascript
const id = Symbol("id");

const user = {
    id: 101
};
```

Correct:

```javascript
const id = Symbol("id");

const user = {
    [id]: 101
};
```

---

## Concatenating Symbols with Strings

Incorrect:

```javascript
const id = Symbol("id");

console.log("ID: " + id);
```

Output

```text
TypeError
```

Use:

```javascript
console.log(id.toString());
```

---

# Interview Questions

1. What is a Symbol in JavaScript?
2. Is Symbol a primitive data type?
3. Why were Symbols introduced?
4. Are two Symbols with the same description equal?
5. What does `typeof Symbol()` return?
6. What is `Symbol.for()`?
7. What is `Symbol.keyFor()`?
8. Why are Symbols used as object property keys?
9. Why doesn't `Object.keys()` return Symbol properties?
10. How do you convert a Symbol to a string?

---

# Summary

- Symbol is a primitive data type introduced in ES6.
- Every Symbol created with `Symbol()` is unique.
- Symbols are commonly used as object property keys.
- `typeof` returns `"symbol"`.
- Symbol properties are hidden from normal object enumeration.
- Use `Symbol.for()` to create or retrieve global Symbols.

---

# Key Points

- Symbol is a primitive data type.
- Every Symbol is unique.
- Symbols are immutable.
- `typeof Symbol()` returns `"symbol"`.
- Use Symbols to avoid object property name conflicts.
- Access Symbol properties using bracket notation.

---

# Next Topic

# `Object`