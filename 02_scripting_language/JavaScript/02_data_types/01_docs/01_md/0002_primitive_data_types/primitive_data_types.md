# Primitive Data Types in JavaScript

## Introduction

Primitive data types are the most basic types of values in JavaScript. They represent a **single, immutable value**, meaning the value itself cannot be changed after it is created. When you modify a primitive value, JavaScript creates a new value instead of changing the existing one.

Primitive values are stored directly in memory and are copied by **value**, not by reference.

JavaScript has **seven primitive data types**:

1. Number
2. BigInt
3. String
4. Boolean
5. Undefined
6. Null
7. Symbol

---

# What Are Primitive Data Types?

A primitive data type stores a single value and does not contain methods or properties of its own (although JavaScript temporarily wraps primitives with objects when needed).

Example:

```javascript
let age = 22;
let name = "Sachin";
let isStudent = true;
```

Each variable stores a single primitive value.

---

# Characteristics of Primitive Data Types

- Store a single value.
- Immutable.
- Stored directly in stack memory.
- Compared by value.
- Copied by value.

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

Changing `b` does not affect `a`.

---

# 1. Number

The `Number` type stores both integers and floating-point numbers.

Examples:

```javascript
let age = 25;
let marks = 98.5;
let temperature = -12;
```

Output

```text
25
98.5
-12
```

---

## Special Number Values

```javascript
Infinity
-Infinity
NaN
```

Example:

```javascript
console.log(10 / 0);
console.log(-10 / 0);
console.log("Hello" / 2);
```

Output

```text
Infinity
-Infinity
NaN
```

---

# 2. BigInt

`BigInt` is used to represent integers larger than the maximum safe integer supported by `Number`.

Example:

```javascript
let bigNumber = 123456789012345678901234567890n;
```

Notice the **`n`** at the end.

Example:

```javascript
console.log(bigNumber);
```

Output

```text
123456789012345678901234567890n
```

---

# 3. String

A `String` stores textual data.

Strings can use:

- Single quotes
- Double quotes
- Backticks

Example:

```javascript
let firstName = "Sachin";
let city = 'Bhopal';
let language = `JavaScript`;
```

Output

```text
Sachin
Bhopal
JavaScript
```

---

# String Example

```javascript
let greeting = "Hello";
let name = "Sachin";

console.log(greeting + " " + name);
```

Output

```text
Hello Sachin
```

---

# Template Literals

Backticks allow string interpolation.

Example:

```javascript
let name = "Sachin";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output

```text
My name is Sachin and I am 22 years old.
```

---

# 4. Boolean

A Boolean stores either:

```text
true
false
```

Example:

```javascript
let isOnline = true;
let hasLicense = false;
```

Output

```text
true
false
```

---

# Boolean Example

```javascript
let age = 18;

console.log(age >= 18);
```

Output

```text
true
```

---

# 5. Undefined

A variable that has been declared but has not yet been assigned a value has the value `undefined`.

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

# Undefined Example

```javascript
let student;

console.log(typeof student);
```

Output

```text
undefined
```

---

# 6. Null

`null` represents an intentional absence of a value.

Example:

```javascript
let user = null;
```

Output

```text
null
```

---

# Null vs Undefined

```javascript
let a;
let b = null;

console.log(a);
console.log(b);
```

Output

```text
undefined
null
```

Difference:

- `undefined` → value not assigned
- `null` → value intentionally empty

---

# 7. Symbol

A `Symbol` creates a unique identifier.

Example:

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

Output

```text
false
```

Even though both have the same description, each Symbol is unique.

---

# Checking Primitive Types

Use the `typeof` operator.

Example:

```javascript
console.log(typeof 100);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof 100n);
```

Output

```text
number
string
boolean
undefined
object
symbol
bigint
```

**Note:**

`typeof null` returns `"object"` due to a historical JavaScript bug.

---

# Primitive Data Types Summary

| Data Type | Example |
|-----------|---------|
| Number | `25` |
| BigInt | `100n` |
| String | `"Hello"` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| Symbol | `Symbol("id")` |

---

# Primitive vs Reference Types

| Primitive | Reference |
|-----------|-----------|
| Number | Object |
| String | Array |
| Boolean | Function |
| Null | Date |
| Undefined | Map |
| Symbol | Set |
| BigInt | Custom Objects |

Primitive values are copied by value, while reference values are copied by reference.

---

# Real-World Example

```javascript
let productName = "Laptop";
let price = 59999;
let available = true;
let discount = null;
let serialNumber = 98765432101234567890n;
```

Each variable uses an appropriate primitive data type.

---

# Best Practices

- Use meaningful variable names.
- Choose the correct data type for each value.
- Use `const` whenever the value does not change.
- Use template literals instead of string concatenation when appropriate.
- Avoid unnecessary type conversions.

---

# Common Mistakes

Using quotes around numbers:

```javascript
let age = "25";
```

Instead of:

```javascript
let age = 25;
```

---

Confusing `null` and `undefined`.

---

Expecting `typeof null` to return `"null"`.

```javascript
typeof null
```

Output

```text
object
```

---

Comparing Symbols.

```javascript
Symbol("id") === Symbol("id")
```

Output

```text
false
```

---

# Interview Questions

1. What are primitive data types?
2. How many primitive data types are there in JavaScript?
3. What is the difference between `null` and `undefined`?
4. What is `BigInt`?
5. Why does `typeof null` return `"object"`?
6. What are Symbols used for?
7. What is the difference between primitive and reference data types?
8. How are primitive values stored in memory?
9. What does immutable mean?
10. What is the difference between `Number` and `BigInt`?

---

# Summary

- JavaScript has **seven primitive data types**.
- Primitive values store a single immutable value.
- They are copied by value.
- `Number` stores numeric values.
- `BigInt` stores very large integers.
- `String` stores text.
- `Boolean` stores `true` or `false`.
- `Undefined` means no value has been assigned.
- `Null` represents an intentional empty value.
- `Symbol` creates unique identifiers.
- Use `typeof` to identify most primitive data types.

---

# Next Topic

**0003_non_primitive_data_types**