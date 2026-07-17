# JavaScript Data Types: Frequently Asked Questions (FAQ)

## Introduction

This chapter answers some of the most frequently asked questions about JavaScript data types. These questions are commonly asked by beginners, students, and interviewers.

---

# 1. What Is a Data Type?

A **data type** defines the kind of value that a variable stores.

Example:

```javascript
const age = 25;
const name = "Sachin";
const isStudent = true;
```

Here:

- `25` is a Number.
- `"Sachin"` is a String.
- `true` is a Boolean.

---

# 2. How Many Data Types Does JavaScript Have?

JavaScript has **eight built-in data types**.

### Primitive Data Types

- Number
- BigInt
- String
- Boolean
- Undefined
- Null
- Symbol

### Non-Primitive Data Type

- Object

Arrays, functions, dates, maps, and sets are all specialized objects.

---

# 3. What Is the Difference Between Primitive and Reference Data Types?

Primitive values:

- Store a single value.
- Are immutable.
- Are compared by value.

Reference values:

- Store complex data.
- Are mutable.
- Are compared by reference.

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

---

# 4. What Does the `typeof` Operator Do?

The `typeof` operator returns the type of a value.

Example:

```javascript
console.log(typeof 100);
console.log(typeof "Hello");
console.log(typeof true);
```

Output

```text
number
string
boolean
```

---

# 5. Why Does `typeof null` Return `"object"`?

This is a historical bug in JavaScript that has been preserved for backward compatibility.

```javascript
console.log(typeof null);
```

Output

```text
object
```

Although the result is `"object"`, `null` is a primitive data type.

---

# 6. Why Does `typeof []` Return `"object"`?

Arrays are implemented as objects in JavaScript.

To check whether a value is an array, use:

```javascript
console.log(Array.isArray([]));
```

Output

```text
true
```

---

# 7. What Is the Difference Between `==` and `===`?

`==` performs type coercion before comparison.

`===` compares both value and data type.

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

Use `===` in most situations.

---

# 8. What Is Type Conversion?

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

Type coercion is JavaScript's **automatic conversion** of one data type into another.

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

`NaN` means **Not-a-Number**.

It represents an invalid numeric result.

Example:

```javascript
console.log(Number("Hello"));
```

Output

```text
NaN
```

---

# 11. How Do I Check for `NaN`?

Use:

```javascript
Number.isNaN(value);
```

Example:

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

`Infinity` is a special Number value representing a value greater than any finite number.

Example:

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

---

# 13. How Do I Check Whether a Number Is Finite?

Use:

```javascript
Number.isFinite(value);
```

Example:

```javascript
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));
```

Output

```text
true
false
```

---

# 14. What Are Truthy and Falsy Values?

Falsy values behave like `false` in Boolean contexts.

Falsy values are:

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

All other values are truthy.

---

# 15. Are Empty Arrays Falsy?

No.

Empty arrays are **truthy**.

```javascript
console.log(Boolean([]));
```

Output

```text
true
```

---

# 16. Are Empty Objects Falsy?

No.

Empty objects are also **truthy**.

```javascript
console.log(Boolean({}));
```

Output

```text
true
```

---

# 17. Why Are Arrays and Objects Compared by Reference?

Because variables store references to the same object in memory.

Example:

```javascript
const a = [1, 2];
const b = [1, 2];

console.log(a === b);
```

Output

```text
false
```

Even though both arrays contain the same values, they are different objects.

---

# 18. Can a Variable Store Different Data Types?

Yes.

JavaScript is a **dynamically typed** language.

```javascript
let value = 100;

value = "JavaScript";

value = true;

console.log(value);
```

Output

```text
true
```

---

# 19. What Is the Best Way to Check for an Array?

Always use:

```javascript
Array.isArray(value);
```

instead of:

```javascript
typeof value
```

---

# 20. What Are the Best Practices When Working with Data Types?

- Use meaningful variable names.
- Prefer `const` over `let`.
- Avoid using `var`.
- Use strict equality (`===`).
- Perform explicit type conversion.
- Validate user input.
- Use `Array.isArray()` for arrays.
- Use `Number.isNaN()` for `NaN`.
- Use `Number.isFinite()` for infinite values.
- Write clean and readable code.

---

# Quick Reference Table

| Question | Answer |
|----------|--------|
| Primitive data types | Number, BigInt, String, Boolean, Undefined, Null, Symbol |
| Non-primitive data type | Object |
| Check array | `Array.isArray()` |
| Check NaN | `Number.isNaN()` |
| Check Infinity | `Number.isFinite()` |
| `typeof null` | `"object"` |
| `typeof []` | `"object"` |
| Strict equality | `===` |
| Loose equality | `==` |
| Explicit conversion | Type Conversion |
| Automatic conversion | Type Coercion |
| Empty array | Truthy |
| Empty object | Truthy |

---

# Summary

In this FAQ, you learned answers to the most common questions about JavaScript data types.

You should now understand:

- What data types are.
- Primitive and reference data types.
- The `typeof` operator.
- Type conversion and type coercion.
- Truthy and falsy values.
- `NaN` and `Infinity`.
- Arrays, objects, and functions.
- Common interview questions and best practices.

---

# Congratulations!

🎉 You have successfully completed the **JavaScript Data Types** module.

You are now ready to move on to the next JavaScript topic with a solid understanding of how JavaScript stores, manages, and works with different kinds of data.