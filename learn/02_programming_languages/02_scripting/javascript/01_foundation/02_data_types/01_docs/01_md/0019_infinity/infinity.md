# Infinity in JavaScript

## Introduction

**Infinity** is a special numeric value in JavaScript that represents a number **greater than any finite number**.

It is part of the **Number** data type and is used when a mathematical operation produces a value that exceeds JavaScript's maximum finite numeric limit or when dividing a number by zero.

JavaScript also has **negative infinity**, represented by `-Infinity`.

---

# What Is Infinity?

`Infinity` is a built-in global property that represents positive infinity.

Example:

```javascript
console.log(Infinity);
```

Output

```text
Infinity
```

---

# Why Does Infinity Occur?

Infinity can occur when:

- A number is divided by zero.
- A calculation exceeds the maximum representable number.
- Certain mathematical operations produce an infinite result.

---

# Dividing by Zero

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

Example:

```javascript
console.log(-10 / 0);
```

Output

```text
-Infinity
```

---

# Overflow

If a calculation exceeds JavaScript's maximum finite value, the result becomes `Infinity`.

```javascript
console.log(Number.MAX_VALUE * 2);
```

Output

```text
Infinity
```

---

# Type of Infinity

Although `Infinity` is a special value, it belongs to the **Number** data type.

```javascript
console.log(typeof Infinity);
```

Output

```text
number
```

---

# Positive and Negative Infinity

JavaScript supports both positive and negative infinity.

```javascript
console.log(Infinity);
console.log(-Infinity);
```

Output

```text
Infinity
-Infinity
```

---

# Arithmetic with Infinity

## Addition

```javascript
console.log(Infinity + 100);
```

Output

```text
Infinity
```

---

## Multiplication

```javascript
console.log(Infinity * 2);
```

Output

```text
Infinity
```

---

## Division

```javascript
console.log(Infinity / 2);
```

Output

```text
Infinity
```

---

## Multiplication by Zero

```javascript
console.log(Infinity * 0);
```

Output

```text
NaN
```

Because the result is mathematically undefined.

---

# Comparing Infinity

```javascript
console.log(Infinity > 1000000);
```

Output

```text
true
```

Example:

```javascript
console.log(Infinity === Infinity);
```

Output

```text
true
```

---

# Checking for Infinity

## Using `Number.isFinite()`

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

## Using `Number.isFinite()` with Negative Infinity

```javascript
console.log(Number.isFinite(-Infinity));
```

Output

```text
false
```

---

# Common Operations

```javascript
console.log(10 / 0);
console.log(-10 / 0);
console.log(Infinity + 50);
console.log(Infinity - Infinity);
```

Output

```text
Infinity
-Infinity
Infinity
NaN
```

---

# Difference Between Infinity and NaN

| Infinity | NaN |
|----------|-----|
| Represents an infinitely large number | Represents an invalid numeric result |
| Valid Number value | Valid Number value |
| Can be compared | Cannot be compared with itself |
| `Infinity === Infinity` → `true` | `NaN === NaN` → `false` |

---

# Real-World Example

Prevent division by zero.

```javascript
let total = 100;
let people = 0;

let average = total / people;

if (!Number.isFinite(average)) {
    console.log("Cannot divide by zero.");
}
```

Output

```text
Cannot divide by zero.
```

---

# Useful Number Constants

JavaScript provides several useful numeric constants.

```javascript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
```

Output

```text
1.7976931348623157e+308
5e-324
Infinity
-Infinity
```

---

# Best Practices

- Avoid dividing by zero unless intentionally handling the result.
- Use `Number.isFinite()` to verify calculations.
- Validate user input before mathematical operations.
- Handle `Infinity` separately from `NaN`.
- Use meaningful error handling when infinite values are not expected.

---

# Common Mistakes

## Assuming Division by Zero Throws an Error

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

JavaScript does not throw an exception.

---

## Confusing Infinity with NaN

```javascript
console.log(Infinity === NaN);
```

Output

```text
false
```

These are completely different values.

---

## Forgetting to Check for Infinite Results

```javascript
let result = 100 / 0;

console.log(result);
```

Output

```text
Infinity
```

Always verify calculations when division by zero is possible.

---

# Interview Questions

1. What is `Infinity` in JavaScript?
2. Is `Infinity` a Number data type?
3. What happens when you divide a number by zero?
4. What is the difference between `Infinity` and `NaN`?
5. What does `typeof Infinity` return?
6. What is `-Infinity`?
7. How do you check whether a value is finite?
8. Why does `Infinity * 0` return `NaN`?
9. What is `Number.POSITIVE_INFINITY`?
10. When should you use `Number.isFinite()`?

---

# Summary

- `Infinity` represents a value greater than any finite number.
- It belongs to the **Number** data type.
- Dividing a positive number by zero produces `Infinity`.
- Dividing a negative number by zero produces `-Infinity`.
- Use `Number.isFinite()` to check whether a value is finite.
- Handle infinite values carefully to avoid unexpected behavior.

---

# Key Points

- `Infinity` is a special Number value.
- `typeof Infinity` returns `"number"`.
- `10 / 0` returns `Infinity`.
- `-10 / 0` returns `-Infinity`.
- `Infinity * 0` results in `NaN`.
- `Number.isFinite()` is the recommended way to detect infinite values.

---

# Next Topic

# `Best Practices`