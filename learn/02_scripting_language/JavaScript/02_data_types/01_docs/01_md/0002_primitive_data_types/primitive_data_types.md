# Primitive Data Types in JavaScript

## Introduction

Primitive data types are the **basic building blocks** of JavaScript. They represent single, immutable values and are used to store simple pieces of data such as numbers, text, and boolean values.

JavaScript provides **seven primitive data types**. These data types are predefined by the language and form the foundation of every JavaScript program.

---

# What Are Primitive Data Types?

A **primitive data type** stores a **single value** instead of a collection of values.

Primitive values are:

- Immutable
- Stored by value
- Compared by value
- Fast and memory efficient

Example:

```javascript
let age = 25;
let language = "JavaScript";
let isStudent = true;
```

Each variable stores a single primitive value.

---

# Characteristics of Primitive Data Types

Primitive values have the following characteristics:

- Store only one value.
- Cannot contain properties or methods directly.
- Immutable (cannot be changed after creation).
- Assigned and copied by value.
- Compared using their actual values.

Example:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output

```text
10
20
```

Changing `b` does not affect `a` because primitive values are copied by value.

---

# JavaScript Primitive Data Types

JavaScript has **seven primitive data types**.

| Data Type | Description | Example |
|-----------|-------------|---------|
| Number | Integer and floating-point numbers | `100` |
| BigInt | Very large integers | `100n` |
| String | Text data | `"Hello"` |
| Boolean | Logical values | `true` |
| Undefined | Variable declared but not assigned | `undefined` |
| Null | Intentional absence of a value | `null` |
| Symbol | Unique identifier | `Symbol()` |

---

# 1. Number

The **Number** data type represents both integers and decimal numbers.

Example:

```javascript
let age = 25;
let price = 99.99;
```

Numbers can be used for arithmetic operations.

```javascript
let total = 50 + 25;

console.log(total);
```

Output

```text
75
```

---

# 2. BigInt

The **BigInt** data type is used for integers that are too large for the Number type.

Example:

```javascript
let bigNumber = 123456789012345678901234567890n;
```

Notice the `n` suffix.

---

# 3. String

A **String** stores text.

Strings can be enclosed in:

- Double quotes (`" "`)
- Single quotes (`' '`)
- Backticks (`` ` ` ``)

Example:

```javascript
let firstName = "Sachin";
let lastName = 'Kumar';
let language = `JavaScript`;
```

Strings can be concatenated.

```javascript
let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output

```text
Sachin Kumar
```

---

# 4. Boolean

A **Boolean** has only two possible values.

- `true`
- `false`

Example:

```javascript
let isLoggedIn = true;
let hasPermission = false;
```

Booleans are commonly used in conditions.

```javascript
if (isLoggedIn) {
    console.log("Welcome");
}
```

Output

```text
Welcome
```

---

# 5. Undefined

A variable that has been declared but has not been assigned a value contains `undefined`.

Example:

```javascript
let city;

console.log(city);
```

Output

```text
undefined
```

---

# 6. Null

The **null** value represents an intentional absence of a value.

Example:

```javascript
let selectedUser = null;
```

Unlike `undefined`, `null` is assigned intentionally.

---

# 7. Symbol

A **Symbol** creates a unique identifier.

Example:

```javascript
const id = Symbol("id");
const anotherId = Symbol("id");

console.log(id === anotherId);
```

Output

```text
false
```

Even symbols with the same description are unique.

---

# Primitive Values Are Immutable

Primitive values cannot be changed after they are created.

Example:

```javascript
let language = "JavaScript";

language[0] = "P";

console.log(language);
```

Output

```text
JavaScript
```

The original string remains unchanged.

---

# Primitive Values Are Copied by Value

When one primitive variable is assigned to another, JavaScript copies the actual value.

Example:

```javascript
let x = 100;
let y = x;

y = 200;

console.log(x);
console.log(y);
```

Output

```text
100
200
```

---

# Checking Primitive Data Types

The `typeof` operator returns the type of most primitive values.

Example:

```javascript
console.log(typeof 100);
console.log(typeof 100n);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol());
```

Output

```text
number
bigint
string
boolean
undefined
symbol
```

Special case:

```javascript
console.log(typeof null);
```

Output

```text
object
```

This is a well-known historical behavior in JavaScript.

---

# Real-World Example

```javascript
let productName = "Laptop";
let price = 65000;
let isAvailable = true;
let discount = null;
let serialNumber = 987654321234567890n;

console.log(productName);
console.log(price);
console.log(isAvailable);
console.log(discount);
console.log(serialNumber);
```

---

# Best Practices

- Use meaningful variable names.
- Prefer `const` when values do not change.
- Use `null` intentionally.
- Avoid changing variable types unnecessarily.
- Use `typeof` to inspect unknown values.

---

# Common Mistakes

## Confusing `null` and `undefined`

```javascript
let a;
let b = null;
```

These values have different meanings.

---

## Using Numbers as Strings

```javascript
let age = "25";
```

Instead of:

```javascript
let age = 25;
```

---

## Forgetting the `n` in BigInt

Incorrect:

```javascript
let big = 123456789012345678901234567890;
```

Correct:

```javascript
let big = 123456789012345678901234567890n;
```

---

# Interview Questions

1. What are primitive data types?
2. How many primitive data types does JavaScript have?
3. What is the difference between `null` and `undefined`?
4. Why are primitive values immutable?
5. What does `typeof` return for each primitive data type?
6. What is BigInt used for?
7. Why is `typeof null` equal to `"object"`?
8. What is a Symbol?
9. How are primitive values copied?
10. Why are primitive data types faster than reference types?

---

# Summary

- Primitive data types store single values.
- JavaScript has **7 primitive data types**.
- Primitive values are immutable.
- Primitive values are copied by value.
- The `typeof` operator identifies most primitive data types.
- `null` is a special case because `typeof null` returns `"object"`.

---

# Key Points

- Number stores numeric values.
- BigInt stores very large integers.
- String stores text.
- Boolean stores `true` or `false`.
- Undefined means no value has been assigned.
- Null represents an intentional empty value.
- Symbol creates unique identifiers.

---

# Next Topic

# `Non Primitive Data Types`