# Number Data Type in JavaScript

## Introduction

The **Number** data type is used to represent numeric values in JavaScript.

Unlike many programming languages that have separate data types for integers and floating-point numbers, JavaScript uses a single **Number** type for both.

Examples:

```javascript
let age = 25;
let price = 99.99;
let temperature = -10;
```

All of these values are of type `number`.

---

# What Is a Number?

A **Number** represents numeric data that can be used in mathematical calculations.

Examples:

```javascript
let marks = 95;
let salary = 45000;
let pi = 3.14159;
```

Numbers can be:

- Positive
- Negative
- Whole numbers
- Decimal numbers
- Scientific notation values

---

# Creating Numbers

## Integer Numbers

```javascript
let age = 22;
let score = 100;
```

---

## Floating-Point Numbers

```javascript
let price = 99.99;
let height = 5.8;
```

---

## Negative Numbers

```javascript
let temperature = -15;
let balance = -500;
```

---

## Scientific Notation

JavaScript supports scientific notation.

```javascript
let distance = 1.5e6;

console.log(distance);
```

Output

```text
1500000
```

Example:

```javascript
let smallNumber = 2.5e-3;

console.log(smallNumber);
```

Output

```text
0.0025
```

---

# Checking Number Type

Use the `typeof` operator.

```javascript
let age = 25;

console.log(typeof age);
```

Output

```text
number
```

---

# Number Operations

JavaScript supports standard arithmetic operations.

## Addition

```javascript
console.log(10 + 5);
```

Output

```text
15
```

---

## Subtraction

```javascript
console.log(10 - 5);
```

Output

```text
5
```

---

## Multiplication

```javascript
console.log(10 * 5);
```

Output

```text
50
```

---

## Division

```javascript
console.log(10 / 5);
```

Output

```text
2
```

---

## Modulus (Remainder)

```javascript
console.log(10 % 3);
```

Output

```text
1
```

---

## Exponentiation

```javascript
console.log(2 ** 3);
```

Output

```text
8
```

---

# Number Precision

JavaScript uses the IEEE 754 floating-point standard.

Because of this, some decimal calculations may produce unexpected results.

Example:

```javascript
console.log(0.1 + 0.2);
```

Output

```text
0.30000000000000004
```

This is a common floating-point precision issue.

---

# Number Limits

JavaScript numbers have maximum and minimum safe values.

## Maximum Safe Integer

```javascript
console.log(Number.MAX_SAFE_INTEGER);
```

Output

```text
9007199254740991
```

---

## Minimum Safe Integer

```javascript
console.log(Number.MIN_SAFE_INTEGER);
```

Output

```text
-9007199254740991
```

For larger integers, use **BigInt**.

---

# Special Number Values

JavaScript provides several special numeric values.

## NaN (Not a Number)

Represents an invalid numerical operation.

```javascript
console.log("Hello" / 2);
```

Output

```text
NaN
```

Check for NaN:

```javascript
console.log(Number.isNaN(NaN));
```

Output

```text
true
```

---

## Infinity

Represents a value larger than any finite number.

```javascript
console.log(1 / 0);
```

Output

```text
Infinity
```

---

## Negative Infinity

```javascript
console.log(-1 / 0);
```

Output

```text
-Infinity
```

---

# Number Methods

## toFixed()

Formats a number to a fixed number of decimal places.

```javascript
let price = 99.4567;

console.log(price.toFixed(2));
```

Output

```text
99.46
```

---

## toString()

Converts a number into a string.

```javascript
let age = 25;

console.log(age.toString());
```

Output

```text
"25"
```

---

## valueOf()

Returns the primitive value of a Number object.

```javascript
let num = 100;

console.log(num.valueOf());
```

Output

```text
100
```

---

# Number Conversion

## String to Number

Using `Number()`:

```javascript
let age = "25";

console.log(Number(age));
```

Output

```text
25
```

---

## Using parseInt()

```javascript
console.log(parseInt("100px"));
```

Output

```text
100
```

---

## Using parseFloat()

```javascript
console.log(parseFloat("99.99"));
```

Output

```text
99.99
```

---

# Useful Number Methods

## Number.isInteger()

Checks whether a value is an integer.

```javascript
console.log(Number.isInteger(10));
```

Output

```text
true
```

---

## Number.isFinite()

Checks whether a value is finite.

```javascript
console.log(Number.isFinite(100));
```

Output

```text
true
```

---

## Number.isNaN()

Checks whether a value is NaN.

```javascript
console.log(Number.isNaN(NaN));
```

Output

```text
true
```

---

# Math Object

JavaScript provides the `Math` object for mathematical operations.

## Square Root

```javascript
console.log(Math.sqrt(25));
```

Output

```text
5
```

---

## Random Number

```javascript
console.log(Math.random());
```

Output

```text
0.583421
```

(Random value)

---

## Rounding

```javascript
console.log(Math.round(4.6));
```

Output

```text
5
```

---

# Real-World Example

```javascript
const productPrice = 799.99;
const taxRate = 0.18;

const totalPrice = productPrice + (productPrice * taxRate);

console.log(totalPrice);
```

Output

```text
943.9882
```

Rounded:

```javascript
console.log(totalPrice.toFixed(2));
```

Output

```text
943.99
```

---

# Best Practices

- Use numbers for calculations only.
- Use `Number.isNaN()` instead of `isNaN()`.
- Use `toFixed()` when displaying currency values.
- Use `BigInt` for very large integers.
- Be careful with floating-point calculations.

---

# Common Mistakes

## Treating Numbers as Strings

```javascript
console.log("10" + "5");
```

Output

```text
105
```

Instead of:

```javascript
console.log(10 + 5);
```

Output

```text
15
```

---

## Ignoring Floating-Point Precision

```javascript
console.log(0.1 + 0.2);
```

Output

```text
0.30000000000000004
```

---

## Exceeding Safe Integer Limits

```javascript
let large = 9007199254740992;
```

Use `BigInt` when dealing with extremely large integers.

---

# Interview Questions

1. What is the Number data type in JavaScript?
2. Does JavaScript have separate integer and float types?
3. What is `NaN`?
4. What is the difference between `parseInt()` and `parseFloat()`?
5. What is `Infinity`?
6. Why does `0.1 + 0.2` not equal exactly `0.3`?
7. What is `Number.MAX_SAFE_INTEGER`?
8. When should you use BigInt instead of Number?
9. What does `toFixed()` do?
10. How do you check whether a value is a number?

---

# Summary

- JavaScript uses a single `Number` type for all numeric values.
- Numbers can be integers, decimals, negative values, or scientific notation.
- JavaScript follows the IEEE 754 floating-point standard.
- Special numeric values include `NaN`, `Infinity`, and `-Infinity`.
- Number methods help with formatting and validation.
- Use `BigInt` for integers larger than the safe integer range.

---

# Key Points

- Number is a primitive data type.
- Integers and decimals use the same type.
- `typeof 100` returns `"number"`.
- JavaScript numbers can experience floating-point precision issues.
- Use Number methods and the Math object for calculations.

---

# Next Topic

# `Bigint`