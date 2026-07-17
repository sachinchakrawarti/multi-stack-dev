# NaN (Not-a-Number) in JavaScript

## Introduction

**NaN** stands for **Not-a-Number**.

It is a special value in JavaScript that represents the result of an **invalid or undefined mathematical operation**.

Although its name suggests that it is "not a number," **NaN actually belongs to the Number data type**.

Understanding `NaN` is important because it frequently appears when working with user input, calculations, and data conversion.

---

# What Is NaN?

`NaN` is a special numeric value that indicates an invalid number.

Example:

```javascript
console.log(0 / 0);
```

Output

```text
NaN
```

The expression cannot produce a valid numeric result.

---

# Why Does NaN Occur?

`NaN` appears when JavaScript cannot perform a valid numeric operation.

Common causes include:

- Invalid mathematical calculations
- Converting non-numeric strings to numbers
- Undefined arithmetic operations
- Invalid function results

---

# Examples of NaN

## Invalid Number Conversion

```javascript
console.log(Number("JavaScript"));
```

Output

```text
NaN
```

---

## Invalid Arithmetic

```javascript
console.log(0 / 0);
```

Output

```text
NaN
```

---

## Arithmetic with Undefined

```javascript
console.log(undefined + 10);
```

Output

```text
NaN
```

---

## Invalid Multiplication

```javascript
console.log("Hello" * 5);
```

Output

```text
NaN
```

---

## Invalid Square Root

```javascript
console.log(Math.sqrt(-1));
```

Output

```text
NaN
```

---

# Type of NaN

Although `NaN` means "Not-a-Number," its type is still `"number"`.

```javascript
console.log(typeof NaN);
```

Output

```text
number
```

---

# Comparing NaN

One unique property of `NaN` is that it is **not equal to anything**, including itself.

```javascript
console.log(NaN == NaN);
console.log(NaN === NaN);
```

Output

```text
false
false
```

---

# Checking for NaN

## Using `Number.isNaN()`

This is the recommended way.

```javascript
let result = Number("Hello");

console.log(Number.isNaN(result));
```

Output

```text
true
```

---

## Using `isNaN()`

```javascript
console.log(isNaN("Hello"));
```

Output

```text
true
```

However, `isNaN()` performs type coercion before checking.

Example:

```javascript
console.log(isNaN("100"));
```

Output

```text
false
```

The string `"100"` is converted to the number `100`.

---

# Difference Between `Number.isNaN()` and `isNaN()`

```javascript
console.log(Number.isNaN("Hello"));
```

Output

```text
false
```

Example:

```javascript
console.log(isNaN("Hello"));
```

Output

```text
true
```

`Number.isNaN()` checks only whether the value is actually `NaN`.

`isNaN()` first converts the value to a number, which can produce different results.

---

# NaN in Calculations

Once `NaN` appears in a calculation, it usually propagates.

```javascript
console.log(NaN + 10);
console.log(NaN * 5);
console.log(NaN / 2);
```

Output

```text
NaN
NaN
NaN
```

---

# Real-World Example

```javascript
let input = "ABC";

let age = Number(input);

if (Number.isNaN(age)) {
    console.log("Please enter a valid number.");
}
```

Output

```text
Please enter a valid number.
```

---

# Common Sources of NaN

| Expression | Result |
|------------|--------|
| `Number("Hello")` | `NaN` |
| `0 / 0` | `NaN` |
| `"ABC" * 5` | `NaN` |
| `undefined + 1` | `NaN` |
| `Math.sqrt(-1)` | `NaN` |

---

# Best Practices

- Use `Number.isNaN()` to check for `NaN`.
- Validate user input before calculations.
- Convert strings to numbers explicitly.
- Avoid relying on automatic type coercion.
- Handle invalid calculations gracefully.

---

# Common Mistakes

## Comparing NaN Directly

Incorrect:

```javascript
if (value === NaN) {
    console.log("Invalid");
}
```

This condition is never true.

Correct:

```javascript
if (Number.isNaN(value)) {
    console.log("Invalid");
}
```

---

## Assuming NaN Is Not a Number Type

```javascript
console.log(typeof NaN);
```

Output

```text
number
```

`NaN` is a special value of the Number data type.

---

## Using `isNaN()` Without Understanding Type Coercion

```javascript
console.log(isNaN("Hello"));
```

Output

```text
true
```

Use `Number.isNaN()` when you want to check only for the actual `NaN` value.

---

# Interview Questions

1. What does `NaN` stand for?
2. Is `NaN` a number data type?
3. Why does `typeof NaN` return `"number"`?
4. Why is `NaN === NaN` false?
5. How do you correctly check for `NaN`?
6. What is the difference between `isNaN()` and `Number.isNaN()`?
7. What happens when `NaN` is used in arithmetic?
8. Can `Number("Hello")` produce `NaN`?
9. Why is input validation important when dealing with `NaN`?
10. Give three examples that produce `NaN`.

---

# Summary

- `NaN` stands for **Not-a-Number**.
- It represents an invalid numeric result.
- `typeof NaN` returns `"number"`.
- `NaN` is not equal to any value, including itself.
- Use `Number.isNaN()` to check for `NaN`.
- Proper input validation helps prevent unexpected `NaN` values.

---

# Key Points

- `NaN` is a special Number value.
- Invalid mathematical operations often produce `NaN`.
- `NaN !== NaN`.
- Use `Number.isNaN()` instead of direct comparison.
- `isNaN()` performs type coercion.
- Handle `NaN` carefully in calculations.

---

# Next Topic

# `Infinity`