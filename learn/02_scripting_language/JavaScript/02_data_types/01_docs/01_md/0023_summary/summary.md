# JavaScript Data Types: Summary

## Introduction

In this module, you learned about **JavaScript Data Types**, one of the fundamental concepts of the language.

Every value in JavaScript has a data type, and understanding these data types is essential for writing reliable, readable, and efficient programs.

This chapter summarizes all the important concepts covered throughout the module.

---

# What Are Data Types?

A **data type** defines the kind of value that a variable can store.

Examples:

```javascript
const age = 25;
const name = "Sachin";
const isStudent = true;
```

Each variable stores a different type of data.

---

# Categories of Data Types

JavaScript data types are divided into two categories.

## Primitive Data Types

Primitive data types store a single immutable value.

They include:

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol

Example:

```javascript
const score = 95;
const language = "JavaScript";
const isLoggedIn = true;
```

---

## Non-Primitive (Reference) Data Types

Reference data types store collections of values or more complex data.

Examples include:

- Object
- Array
- Function
- Date
- Map
- Set

Example:

```javascript
const student = {
    name: "Sachin",
    age: 22
};
```

---

# Primitive vs Reference Types

| Primitive Types | Reference Types |
|-----------------|-----------------|
| Store a single value | Store multiple or complex values |
| Immutable | Mutable |
| Compared by value | Compared by reference |
| Stored directly | Stored by reference |

---

# Important Data Types

## Number

Stores integers and floating-point numbers.

```javascript
const marks = 90;
const price = 99.99;
```

---

## BigInt

Stores very large integers.

```javascript
const population = 12345678901234567890n;
```

---

## String

Stores text.

```javascript
const course = "JavaScript";
```

---

## Boolean

Stores either `true` or `false`.

```javascript
const isOnline = true;
```

---

## Undefined

Represents a declared variable that has not yet been assigned a value.

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
const address = null;
```

---

## Symbol

Creates unique identifiers.

```javascript
const id = Symbol("id");
```

---

# Objects and Arrays

Objects store related data using key-value pairs.

```javascript
const employee = {
    name: "Sachin",
    age: 22
};
```

Arrays store ordered collections of values.

```javascript
const colors = ["Red", "Green", "Blue"];
```

---

# Functions

Functions are first-class objects in JavaScript.

```javascript
function greet() {
    console.log("Hello");
}
```

Functions can be assigned to variables, passed as arguments, and returned from other functions.

---

# The `typeof` Operator

The `typeof` operator returns the type of a value.

```javascript
console.log(typeof 100);
console.log(typeof "JavaScript");
console.log(typeof true);
```

Output

```text
number
string
boolean
```

Remember:

```javascript
typeof null;
```

Output

```text
object
```

This is a historical JavaScript behavior.

---

# Type Conversion

Type conversion is the explicit conversion of one data type to another.

Example:

```javascript
const age = Number("25");

console.log(age);
```

Output

```text
25
```

---

# Type Coercion

Type coercion is the automatic conversion of data types by JavaScript.

Example:

```javascript
console.log("10" * 2);
```

Output

```text
20
```

---

# Truthy and Falsy Values

JavaScript automatically converts values to Boolean in conditional statements.

### Falsy Values

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

Every other value is truthy.

---

# NaN

`NaN` stands for **Not-a-Number**.

It represents an invalid numeric result.

```javascript
console.log(Number("Hello"));
```

Output

```text
NaN
```

Use:

```javascript
Number.isNaN(value);
```

to check for `NaN`.

---

# Infinity

`Infinity` represents a value greater than any finite number.

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

Use:

```javascript
Number.isFinite(value);
```

to determine whether a number is finite.

---

# Best Practices

- Use meaningful variable names.
- Prefer `const` over `let`.
- Avoid using `var`.
- Use strict equality (`===`).
- Perform explicit type conversion.
- Validate user input.
- Use `Array.isArray()` to detect arrays.
- Use `Number.isNaN()` to check for `NaN`.
- Use `Number.isFinite()` to check for infinite values.
- Write readable and maintainable code.

---

# Common Mistakes

Avoid these common mistakes:

- Using `==` instead of `===`.
- Storing numbers as strings.
- Confusing `null` and `undefined`.
- Assuming arrays are not objects.
- Comparing `NaN` directly.
- Forgetting type conversion.
- Relying too much on automatic type coercion.
- Comparing objects or arrays by value.
- Assuming empty arrays or objects are falsy.

---

# Quick Revision Table

| Topic | Key Point |
|--------|-----------|
| Primitive Types | Immutable values |
| Reference Types | Mutable objects |
| `typeof` | Returns the data type |
| Arrays | Use `Array.isArray()` |
| Functions | First-class objects |
| Type Conversion | Explicit conversion |
| Type Coercion | Automatic conversion |
| Truthy/Falsy | Boolean evaluation |
| `NaN` | Invalid numeric value |
| `Infinity` | Infinite numeric value |
| Equality | Prefer `===` |

---

# Module Checklist

By completing this module, you should be able to:

- Explain what data types are.
- Identify all primitive data types.
- Differentiate between primitive and reference types.
- Use the `typeof` operator.
- Work with objects and arrays.
- Understand functions as objects.
- Perform type conversion.
- Understand type coercion.
- Identify truthy and falsy values.
- Handle `NaN` and `Infinity`.
- Follow JavaScript best practices.
- Avoid common mistakes.

---

# Final Takeaways

- Every value in JavaScript has a data type.
- JavaScript has **7 primitive data types** and **1 non-primitive built-in data type (Object)**.
- Arrays and functions are specialized objects.
- Use explicit type conversion whenever possible.
- Prefer strict equality (`===`) over loose equality (`==`).
- Write clean, readable, and predictable code by understanding how JavaScript handles different data types.

---

# Congratulations!

🎉 You have successfully completed the **JavaScript Data Types** module.

You now have a solid understanding of one of the most important concepts in JavaScript programming.

---

# Next Topic

# `faq`