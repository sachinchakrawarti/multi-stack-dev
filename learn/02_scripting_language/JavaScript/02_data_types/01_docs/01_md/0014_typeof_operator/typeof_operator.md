# The `typeof` Operator in JavaScript

## Introduction

The **`typeof`** operator is a built-in JavaScript operator used to determine the **data type** of a value or variable.

It is one of the most commonly used operators for debugging, validating input, and writing conditional logic based on data types.

---

# What Is the `typeof` Operator?

The `typeof` operator returns a string that represents the type of its operand.

Syntax:

```javascript
typeof value
```

or

```javascript
typeof(value)
```

Both forms are valid.

---

# Why Use `typeof`?

The `typeof` operator helps you:

- Identify the data type of a value.
- Debug unexpected values.
- Validate function arguments.
- Write safer conditional statements.
- Prevent runtime errors caused by incorrect data types.

---

# Checking Primitive Data Types

## Number

```javascript
console.log(typeof 100);
```

Output

```text
number
```

---

## BigInt

```javascript
console.log(typeof 12345678901234567890n);
```

Output

```text
bigint
```

---

## String

```javascript
console.log(typeof "JavaScript");
```

Output

```text
string
```

---

## Boolean

```javascript
console.log(typeof true);
```

Output

```text
boolean
```

---

## Undefined

```javascript
let value;

console.log(typeof value);
```

Output

```text
undefined
```

---

## Null

```javascript
console.log(typeof null);
```

Output

```text
object
```

Although `typeof null` returns `"object"`, **`null` is a primitive data type**. This is a well-known historical bug in JavaScript that has been kept for backward compatibility.

---

## Symbol

```javascript
const id = Symbol("id");

console.log(typeof id);
```

Output

```text
symbol
```

---

# Checking Reference Data Types

## Object

```javascript
const person = {
    name: "Sachin"
};

console.log(typeof person);
```

Output

```text
object
```

---

## Array

```javascript
const colors = ["Red", "Green", "Blue"];

console.log(typeof colors);
```

Output

```text
object
```

Arrays are objects in JavaScript.

To check if a value is an array, use:

```javascript
console.log(Array.isArray(colors));
```

Output

```text
true
```

---

## Function

Functions have a special return value.

```javascript
function greet() {}

console.log(typeof greet);
```

Output

```text
function
```

Although functions are objects internally, `typeof` returns `"function"`.

---

# `typeof` with Variables

```javascript
let age = 25;
let language = "JavaScript";
let isStudent = true;

console.log(typeof age);
console.log(typeof language);
console.log(typeof isStudent);
```

Output

```text
number
string
boolean
```

---

# `typeof` with Expressions

```javascript
console.log(typeof (10 + 20));
console.log(typeof ("Hello" + " World"));
console.log(typeof (10 > 5));
```

Output

```text
number
string
boolean
```

---

# `typeof` with Uninitialized Variables

```javascript
let city;

console.log(typeof city);
```

Output

```text
undefined
```

---

# `typeof` and Undeclared Variables

Unlike most operations, `typeof` does not throw an error for undeclared variables.

```javascript
console.log(typeof username);
```

Output

```text
undefined
```

This makes `typeof` useful when checking whether a variable exists.

---

# Common Return Values

| Expression | Result |
|------------|--------|
| `typeof 100` | `"number"` |
| `typeof 10n` | `"bigint"` |
| `typeof "Hello"` | `"string"` |
| `typeof true` | `"boolean"` |
| `typeof undefined` | `"undefined"` |
| `typeof null` | `"object"` |
| `typeof Symbol()` | `"symbol"` |
| `typeof {}` | `"object"` |
| `typeof []` | `"object"` |
| `typeof function(){}` | `"function"` |

---

# Real-World Example

Validate a user's age before processing it.

```javascript
function printAge(age) {
    if (typeof age === "number") {
        console.log("Age:", age);
    } else {
        console.log("Invalid age.");
    }
}

printAge(22);
printAge("22");
```

Output

```text
Age: 22
Invalid age.
```

---

# Best Practices

- Use `typeof` to validate primitive data types.
- Use `Array.isArray()` for arrays instead of `typeof`.
- Use strict equality (`===`) when comparing the returned string.
- Remember that `typeof null` returns `"object"`.

Example:

```javascript
if (typeof score === "number") {
    console.log("Valid score");
}
```

---

# Common Mistakes

## Expecting `typeof null` to Return `"null"`

```javascript
console.log(typeof null);
```

Output

```text
object
```

This is expected behavior in JavaScript.

---

## Using `typeof` for Arrays

Incorrect:

```javascript
console.log(typeof []);
```

Output

```text
object
```

Correct:

```javascript
console.log(Array.isArray([]));
```

Output

```text
true
```

---

## Comparing with Incorrect Strings

Incorrect:

```javascript
typeof age === "Number"
```

Correct:

```javascript
typeof age === "number"
```

The returned type names are lowercase.

---

# Interview Questions

1. What is the `typeof` operator?
2. What does `typeof` return?
3. Why does `typeof null` return `"object"`?
4. What does `typeof` return for arrays?
5. How do you correctly check if a value is an array?
6. What does `typeof function(){}` return?
7. Can `typeof` be used on undeclared variables?
8. What is the difference between `typeof` and `Array.isArray()`?
9. Why should you compare `typeof` results using `===`?
10. List the possible values returned by `typeof`.

---

# Summary

- `typeof` is used to determine the type of a value or variable.
- It always returns a string.
- It works well with primitive data types.
- Arrays return `"object"`, so use `Array.isArray()` instead.
- Functions return `"function"`.
- `typeof null` returns `"object"` due to a historical JavaScript bug.

---

# Key Points

- `typeof` returns the data type as a string.
- Primitive types have predictable results.
- Arrays require `Array.isArray()`.
- Functions return `"function"`.
- `typeof` can safely check undeclared variables.
- Always remember the `typeof null` exception.

---

# Next Topic

# `type conversion`