# JavaScript Data Types: Interview Questions and Answers

## Introduction

JavaScript data types are one of the most frequently asked topics in technical interviews. Interviewers often test your understanding of primitive and non-primitive data types, type conversion, type coercion, `typeof`, `NaN`, `Infinity`, arrays, objects, and functions.

This chapter contains commonly asked interview questions along with clear and concise answers.

---

# 1. What Are Data Types?

**Answer:**

A **data type** defines the kind of value a variable can store. It also determines what operations can be performed on that value.

Example:

```javascript
const age = 25;
const name = "Sachin";
const isStudent = true;
```

Here:

- `age` → Number
- `name` → String
- `isStudent` → Boolean

---

# 2. How Many Data Types Are There in JavaScript?

**Answer:**

JavaScript has **eight built-in data types**.

### Primitive Data Types

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol

### Non-Primitive (Reference) Data Types

- Object

Arrays, functions, dates, maps, and sets are specialized kinds of objects.

---

# 3. What Is the Difference Between Primitive and Non-Primitive Data Types?

| Primitive | Non-Primitive |
|-----------|---------------|
| Store a single value | Store collections or complex data |
| Immutable | Mutable |
| Compared by value | Compared by reference |
| Stored directly | Stored by reference |

Example:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Output

```text
10
```

---

# 4. What Is the `typeof` Operator?

**Answer:**

The `typeof` operator returns the data type of a value as a string.

Example:

```javascript
console.log(typeof "JavaScript");
```

Output

```text
string
```

---

# 5. Why Does `typeof null` Return `"object"`?

**Answer:**

This is a historical bug in JavaScript.

Although `null` is a primitive data type, `typeof null` returns `"object"` for backward compatibility.

```javascript
console.log(typeof null);
```

Output

```text
object
```

---

# 6. Why Does `typeof []` Return `"object"`?

**Answer:**

Arrays are specialized objects in JavaScript.

To check whether a value is an array:

```javascript
console.log(Array.isArray([]));
```

Output

```text
true
```

---

# 7. What Is the Difference Between `==` and `===`?

| `==` | `===` |
|------|--------|
| Loose equality | Strict equality |
| Performs type coercion | No type coercion |
| Compares values | Compares values and types |

Example:

```javascript
console.log(10 == "10");
console.log(10 === "10");
```

Output

```text
true
false
```

---

# 8. What Is Type Conversion?

**Answer:**

Type conversion is the **explicit conversion** of one data type into another.

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

# 9. What Is Type Coercion?

**Answer:**

Type coercion is the **automatic conversion** of one data type into another by JavaScript.

Example:

```javascript
console.log("10" * 2);
```

Output

```text
20
```

---

# 10. What Is `NaN`?

**Answer:**

`NaN` stands for **Not-a-Number**.

It represents an invalid numeric result.

```javascript
console.log(Number("Hello"));
```

Output

```text
NaN
```

---

# 11. How Do You Check for `NaN`?

**Answer:**

Use `Number.isNaN()`.

```javascript
const value = Number("Hello");

console.log(Number.isNaN(value));
```

Output

```text
true
```

---

# 12. What Is `Infinity`?

**Answer:**

`Infinity` is a special numeric value representing a number greater than any finite number.

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

---

# 13. What Are Truthy and Falsy Values?

**Answer:**

Truthy values behave like `true`.

Falsy values behave like `false`.

JavaScript has **eight falsy values**:

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

# 14. Are Empty Arrays Truthy or Falsy?

**Answer:**

Empty arrays are **truthy**.

```javascript
console.log(Boolean([]));
```

Output

```text
true
```

---

# 15. Are Empty Objects Truthy or Falsy?

**Answer:**

Empty objects are also **truthy**.

```javascript
console.log(Boolean({}));
```

Output

```text
true
```

---

# 16. How Do You Check Whether a Value Is an Array?

**Answer:**

Use `Array.isArray()`.

```javascript
console.log(Array.isArray([1, 2, 3]));
```

Output

```text
true
```

---

# 17. Why Are Arrays and Objects Called Reference Types?

**Answer:**

Because variables store references (memory addresses) instead of the actual objects.

Example:

```javascript
const a = [1, 2];
const b = a;

b.push(3);

console.log(a);
```

Output

```text
[1, 2, 3]
```

Both variables reference the same array.

---

# 18. Why Are Functions Called First-Class Objects?

**Answer:**

Functions are objects that can:

- Be assigned to variables.
- Be passed as arguments.
- Be returned from other functions.
- Have properties and methods.

Example:

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

Output

```text
Hello
```

---

# 19. What Is the Difference Between `null` and `undefined`?

| `null` | `undefined` |
|--------|-------------|
| Intentional empty value | Variable declared but not assigned |
| Assigned by the programmer | Assigned by JavaScript |

Example:

```javascript
let city;
let address = null;

console.log(city);
console.log(address);
```

Output

```text
undefined
null
```

---

# 20. Why Should You Use `===` Instead of `==`?

**Answer:**

Because `===` compares both the value and the data type without performing type coercion.

This makes code more predictable and reduces bugs.

---

# Quick Revision Table

| Question | Short Answer |
|----------|--------------|
| Primitive data types? | Number, BigInt, String, Boolean, Undefined, Null, Symbol |
| Non-primitive type? | Object |
| `typeof null` | `"object"` |
| `typeof []` | `"object"` |
| Check array | `Array.isArray()` |
| Check NaN | `Number.isNaN()` |
| Check finite number | `Number.isFinite()` |
| Strict equality | `===` |
| Loose equality | `==` |
| Type conversion | Explicit |
| Type coercion | Automatic |
| Empty array | Truthy |
| Empty object | Truthy |
| `10 / 0` | `Infinity` |
| `typeof NaN` | `"number"` |

---

# Tips for Interviews

- Learn all **7 primitive data types**.
- Understand that **Object** is the only non-primitive built-in data type.
- Remember that arrays and functions are objects.
- Always explain the difference between **type conversion** and **type coercion**.
- Know why `typeof null` returns `"object"`.
- Prefer `===` over `==`.
- Use `Array.isArray()` for arrays.
- Use `Number.isNaN()` instead of comparing with `NaN`.

---

# Summary

- JavaScript data types are a fundamental interview topic.
- Primitive values are compared by value, while objects are compared by reference.
- Understanding `typeof`, `NaN`, `Infinity`, truthy/falsy values, and type conversion is essential.
- Interviewers often ask about JavaScript's historical quirks, such as `typeof null`.
- Practicing these questions will strengthen your understanding and improve interview performance.

---

# Next Topic

# `Summary`