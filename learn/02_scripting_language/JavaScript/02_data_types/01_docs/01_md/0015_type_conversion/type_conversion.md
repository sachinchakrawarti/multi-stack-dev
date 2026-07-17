# Type Conversion in JavaScript

## Introduction

**Type Conversion** is the process of converting a value from one data type to another **explicitly (manually)**.

JavaScript provides built-in functions to convert values into different data types such as **Number**, **String**, **Boolean**, and **BigInt**.

Understanding type conversion is important because many applications receive data as strings (for example, from user input) but need to process it as numbers or other data types.

---

# What Is Type Conversion?

Type conversion is the **explicit conversion** of one data type into another.

The programmer intentionally performs the conversion using built-in functions.

Example:

```javascript
let age = "25";

let numberAge = Number(age);

console.log(numberAge);
```

Output

```text
25
```

The value changes from a **string** to a **number**.

---

# Why Is Type Conversion Important?

Type conversion helps you:

- Process user input correctly.
- Perform mathematical calculations.
- Display values as text.
- Validate data before using it.
- Avoid unexpected behavior.

---

# Converting to Number

Use the `Number()` function.

```javascript
console.log(Number("100"));
console.log(Number("99.5"));
```

Output

```text
100
99.5
```

---

## Invalid Number Conversion

```javascript
console.log(Number("JavaScript"));
```

Output

```text
NaN
```

---

## Number Conversion Examples

```javascript
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(""));
```

Output

```text
1
0
0
0
```

---

# Converting to String

Use the `String()` function.

```javascript
console.log(String(100));
console.log(String(true));
console.log(String(null));
```

Output

```text
100
true
null
```

---

## Using `toString()`

Many values also support the `toString()` method.

```javascript
let score = 95;

console.log(score.toString());
```

Output

```text
95
```

> **Note:** `null` and `undefined` do not have a `toString()` method.

---

# Converting to Boolean

Use the `Boolean()` function.

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(""));
```

Output

```text
true
false
true
false
```

---

## Common Boolean Conversions

| Value | Result |
|--------|--------|
| `Boolean(1)` | `true` |
| `Boolean(0)` | `false` |
| `Boolean("")` | `false` |
| `Boolean("Hello")` | `true` |
| `Boolean(null)` | `false` |
| `Boolean(undefined)` | `false` |
| `Boolean([])` | `true` |
| `Boolean({})` | `true` |

---

# Converting to BigInt

Use the `BigInt()` function.

```javascript
console.log(BigInt(100));
```

Output

```text
100n
```

Example:

```javascript
const value = BigInt("12345678901234567890");

console.log(value);
```

Output

```text
12345678901234567890n
```

---

# Parsing Numbers from Strings

Sometimes a string contains extra characters.

## parseInt()

Extracts an integer.

```javascript
console.log(parseInt("100px"));
```

Output

```text
100
```

---

## parseFloat()

Extracts a floating-point number.

```javascript
console.log(parseFloat("99.95kg"));
```

Output

```text
99.95
```

---

# Difference Between `Number()` and `parseInt()`

```javascript
console.log(Number("100px"));
```

Output

```text
NaN
```

```javascript
console.log(parseInt("100px"));
```

Output

```text
100
```

`Number()` requires the entire string to be a valid number, while `parseInt()` reads numeric characters until it encounters a non-numeric character.

---

# Real-World Example

User input from an HTML form is usually a string.

```javascript
let quantity = "5";
let price = "200";

let total = Number(quantity) * Number(price);

console.log(total);
```

Output

```text
1000
```

---

# Type Conversion vs Type Coercion

| Type Conversion | Type Coercion |
|-----------------|---------------|
| Explicit (manual) | Implicit (automatic) |
| Done by the programmer | Done by JavaScript |
| Uses functions like `Number()` | Happens automatically during operations |

Example of conversion:

```javascript
Number("10");
```

Example of coercion:

```javascript
"10" * 2
```

Output

```text
20
```

---

# Best Practices

- Use explicit type conversion whenever possible.
- Validate input before converting.
- Use `Number()` for complete numeric strings.
- Use `parseInt()` or `parseFloat()` only when extracting numbers from mixed strings.
- Avoid relying on automatic conversions.

---

# Common Mistakes

## Forgetting to Convert User Input

```javascript
let a = "10";
let b = "20";

console.log(a + b);
```

Output

```text
1020
```

Correct:

```javascript
console.log(Number(a) + Number(b));
```

Output

```text
30
```

---

## Using `parseInt()` for Decimal Values

```javascript
console.log(parseInt("99.99"));
```

Output

```text
99
```

Use:

```javascript
console.log(parseFloat("99.99"));
```

Output

```text
99.99
```

---

## Calling `toString()` on `null`

```javascript
let value = null;

// value.toString();
```

This causes a `TypeError`.

Instead, use:

```javascript
console.log(String(value));
```

Output

```text
null
```

---

# Interview Questions

1. What is type conversion?
2. What is the difference between type conversion and type coercion?
3. How do you convert a string to a number?
4. What is the difference between `Number()` and `parseInt()`?
5. When should you use `parseFloat()`?
6. What does `Boolean("")` return?
7. Why is explicit type conversion preferred?
8. What happens when `Number("Hello")` is executed?
9. Can `null` use the `toString()` method?
10. How do you convert a value to a string?

---

# Summary

- Type conversion is the explicit conversion of one data type to another.
- JavaScript provides `Number()`, `String()`, `Boolean()`, and `BigInt()` for conversion.
- `parseInt()` and `parseFloat()` extract numeric values from strings.
- Explicit conversion makes code more predictable and easier to understand.
- Understanding type conversion helps prevent bugs and unexpected results.

---

# Key Points

- Type conversion is performed manually.
- `Number()` converts values to numbers.
- `String()` converts values to strings.
- `Boolean()` converts values to Boolean values.
- `BigInt()` converts values to BigInt.
- Prefer explicit conversion over automatic coercion.

---

# Next Topic

# `Type Coercion`