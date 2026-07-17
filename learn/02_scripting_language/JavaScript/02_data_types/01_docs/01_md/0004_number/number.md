# Number Data Type in JavaScript

## Introduction

The **Number** data type is one of JavaScript's primitive data types. It is used to represent both **integers** and **floating-point (decimal)** numbers.

Unlike many programming languages that have separate data types such as `int`, `float`, `double`, or `long`, JavaScript uses a single **Number** type for almost all numeric values.

Numbers are commonly used for:

- Mathematical calculations
- Counting values
- Measurements
- Financial calculations
- Scientific computations
- Storing IDs
- Game scores
- Coordinates

---

# What is the Number Data Type?

A **Number** is a primitive data type that represents numeric values.

Example:

```javascript
let age = 22;
let temperature = 36.5;
let price = 999.99;

console.log(age);
console.log(temperature);
console.log(price);
```

Output

```text
22
36.5
999.99
```

---

# Characteristics of Number

- Primitive data type.
- Stores integers and floating-point numbers.
- Uses IEEE 754 double-precision floating-point format.
- Supports positive and negative values.
- Supports arithmetic operations.
- Can represent special values like `Infinity` and `NaN`.

---

# Creating Numbers

Numbers can be created using literals.

```javascript
let a = 10;
let b = 15.75;
let c = -50;
let d = 0;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

Output

```text
10
15.75
-50
0
```

---

# Integer Numbers

Integers are whole numbers without decimal points.

```javascript
let students = 120;
let marks = 95;
let year = 2026;

console.log(students);
console.log(marks);
console.log(year);
```

Output

```text
120
95
2026
```

---

# Floating-Point Numbers

Floating-point numbers contain decimal values.

```javascript
let pi = 3.14159;
let salary = 15250.75;

console.log(pi);
console.log(salary);
```

Output

```text
3.14159
15250.75
```

---

# Scientific Notation

JavaScript supports scientific notation.

```javascript
let large = 5e6;
let small = 2e-5;

console.log(large);
console.log(small);
```

Output

```text
5000000
0.00002
```

---

# Number Constructor

Numbers can also be created using the `Number()` constructor.

```javascript
let num = Number(150);

console.log(num);
```

Output

```text
150
```

---

# Arithmetic Operations

## Addition

```javascript
console.log(20 + 10);
```

Output

```text
30
```

---

## Subtraction

```javascript
console.log(20 - 10);
```

Output

```text
10
```

---

## Multiplication

```javascript
console.log(20 * 10);
```

Output

```text
200
```

---

## Division

```javascript
console.log(20 / 10);
```

Output

```text
2
```

---

## Modulus

```javascript
console.log(20 % 3);
```

Output

```text
2
```

---

## Exponentiation

```javascript
console.log(2 ** 5);
```

Output

```text
32
```

---

# Increment Operator

```javascript
let x = 10;

x++;

console.log(x);
```

Output

```text
11
```

---

# Decrement Operator

```javascript
let x = 10;

x--;

console.log(x);
```

Output

```text
9
```

---

# Special Number Values

## Infinity

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

---

## Negative Infinity

```javascript
console.log(-10 / 0);
```

Output

```text
-Infinity
```

---

## NaN (Not a Number)

```javascript
console.log("Hello" * 5);
```

Output

```text
NaN
```

---

# Number Methods

## toFixed()

Rounds a number to a fixed number of decimal places.

```javascript
let pi = 3.141592;

console.log(pi.toFixed(2));
```

Output

```text
3.14
```

---

## toPrecision()

Formats a number to the specified precision.

```javascript
let num = 123.4567;

console.log(num.toPrecision(5));
```

Output

```text
123.46
```

---

## toString()

Converts a number into a string.

```javascript
let num = 100;

console.log(num.toString());
```

Output

```text
100
```

---

## valueOf()

Returns the primitive value.

```javascript
let num = 50;

console.log(num.valueOf());
```

Output

```text
50
```

---

# Number Properties

## Maximum Value

```javascript
console.log(Number.MAX_VALUE);
```

---

## Minimum Value

```javascript
console.log(Number.MIN_VALUE);
```

---

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

---

## EPSILON

```javascript
console.log(Number.EPSILON);
```

---

# Checking Numbers

## Number.isInteger()

```javascript
console.log(Number.isInteger(25));
console.log(Number.isInteger(5.5));
```

Output

```text
true
false
```

---

## Number.isFinite()

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

## Number.isNaN()

```javascript
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));
```

Output

```text
true
false
```

---

# Parsing Numbers

## Number()

```javascript
console.log(Number("100"));
```

Output

```text
100
```

---

## parseInt()

```javascript
console.log(parseInt("150px"));
```

Output

```text
150
```

---

## parseFloat()

```javascript
console.log(parseFloat("12.75kg"));
```

Output

```text
12.75
```

---

# Floating Point Precision

```javascript
console.log(0.1 + 0.2);
```

Output

```text
0.30000000000000004
```

This happens because floating-point numbers are stored using the IEEE 754 standard.

---

# Real-World Example

```javascript
const productPrice = 799.99;
const quantity = 3;

const total = productPrice * quantity;

console.log(total);
```

Output

```text
2399.97
```

---

# Best Practices

- Use descriptive variable names.
- Use `Number.isNaN()` instead of the global `isNaN()`.
- Avoid floating-point comparisons using `==`.
- Use `Number.isInteger()` when integers are required.
- Use `parseInt()` and `parseFloat()` carefully.
- Use `BigInt` for integers larger than `Number.MAX_SAFE_INTEGER`.

---

# Common Mistakes

## Dividing by Zero

```javascript
console.log(10 / 0);
```

Output

```text
Infinity
```

---

## Invalid Mathematical Operations

```javascript
console.log("JavaScript" * 5);
```

Output

```text
NaN
```

---

## Floating Point Precision Errors

```javascript
console.log(0.1 + 0.2 === 0.3);
```

Output

```text
false
```

---

## Forgetting String Conversion

```javascript
console.log("10" + 5);
```

Output

```text
105
```

---

# Interview Questions

1. What is the Number data type in JavaScript?
2. Does JavaScript have separate integer and float types?
3. What is IEEE 754?
4. What is `NaN`?
5. What is `Infinity`?
6. What is `Number.MAX_SAFE_INTEGER`?
7. What is the difference between `Number()` and `parseInt()`?
8. What is `Number.isNaN()`?
9. Why does `0.1 + 0.2` not equal `0.3`?
10. When should you use `BigInt` instead of `Number`?

---

# Summary

- Number is a primitive data type.
- It represents both integers and floating-point values.
- JavaScript uses IEEE 754 double-precision floating-point numbers.
- Numbers support arithmetic operations and built-in methods.
- Special values include `Infinity`, `-Infinity`, and `NaN`.
- `Number` provides useful methods and properties for working with numeric values.
- Use `BigInt` when dealing with very large integers.

---

# Next Topic

**0005_bigint**