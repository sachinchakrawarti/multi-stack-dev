# BigInt Data Type in JavaScript

## Introduction

The **BigInt** data type is a primitive data type introduced in **ECMAScript 2020 (ES11)**. It is used to represent integers that are **larger than the maximum safe integer supported by the Number data type**.

The `Number` data type can safely represent integers only between:

- `-(2^53 - 1)`
- `(2^53 - 1)`

These values are available as:

```javascript
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER
```

For numbers beyond this range, JavaScript may lose precision. BigInt solves this problem.

---

# What is BigInt?

A **BigInt** is a primitive data type that can store integers of **arbitrary length** without losing precision.

Example:

```javascript
const population = 1234567890123456789012345678901234567890n;

console.log(population);
```

Output

```text
1234567890123456789012345678901234567890n
```

---

# Characteristics of BigInt

- Primitive data type.
- Stores very large integers.
- Supports arbitrary precision.
- Cannot store decimal values.
- Introduced in ES2020.
- Uses the suffix `n`.
- Supports arithmetic operations.
- Cannot be mixed directly with the Number type.

---

# Why BigInt?

The Number type loses precision for large integers.

Example

```javascript
console.log(Number.MAX_SAFE_INTEGER);
```

Output

```text
9007199254740991
```

Adding one works correctly.

```javascript
console.log(Number.MAX_SAFE_INTEGER + 1);
```

Output

```text
9007199254740992
```

Adding two produces an incorrect result.

```javascript
console.log(Number.MAX_SAFE_INTEGER + 2);
```

Output

```text
9007199254740992
```

This happens because the value exceeds the safe integer limit.

---

# Creating BigInt

## Using the `n` Suffix

```javascript
const num = 12345678901234567890n;

console.log(num);
```

Output

```text
12345678901234567890n
```

---

## Using the BigInt Constructor

```javascript
const value = BigInt(100);

console.log(value);
```

Output

```text
100n
```

---

## From a String

```javascript
const large = BigInt("999999999999999999999999999999");

console.log(large);
```

Output

```text
999999999999999999999999999999n
```

---

# Type of BigInt

```javascript
const num = 100n;

console.log(typeof num);
```

Output

```text
bigint
```

---

# Arithmetic Operations

## Addition

```javascript
const a = 100n;
const b = 50n;

console.log(a + b);
```

Output

```text
150n
```

---

## Subtraction

```javascript
console.log(100n - 20n);
```

Output

```text
80n
```

---

## Multiplication

```javascript
console.log(20n * 5n);
```

Output

```text
100n
```

---

## Division

BigInt division removes the decimal part.

```javascript
console.log(10n / 3n);
```

Output

```text
3n
```

---

## Modulus

```javascript
console.log(10n % 3n);
```

Output

```text
1n
```

---

## Exponentiation

```javascript
console.log(2n ** 10n);
```

Output

```text
1024n
```

---

# Comparison Operators

```javascript
console.log(10n > 5n);
console.log(10n < 20n);
console.log(10n === 10n);
```

Output

```text
true
true
true
```

---

# Comparing Number and BigInt

```javascript
console.log(10n == 10);
```

Output

```text
true
```

---

```javascript
console.log(10n === 10);
```

Output

```text
false
```

Strict equality checks both value and type.

---

# Mixing Number and BigInt

This causes an error.

```javascript
const a = 10n;
const b = 5;

console.log(a + b);
```

Output

```text
TypeError
```

Convert one type before performing arithmetic.

```javascript
console.log(a + BigInt(b));
```

Output

```text
15n
```

---

# Converting BigInt to Number

```javascript
const big = 500n;

console.log(Number(big));
```

Output

```text
500
```

---

# Converting Number to BigInt

```javascript
const num = 500;

console.log(BigInt(num));
```

Output

```text
500n
```

---

# BigInt Cannot Store Decimals

```javascript
BigInt(10.5);
```

Output

```text
RangeError
```

BigInt only supports whole numbers.

---

# BigInt in Objects

```javascript
const account = {
    id: 12345678901234567890n,
    balance: 999999999999999999n
};

console.log(account);
```

Output

```text
{
  id: 12345678901234567890n,
  balance: 999999999999999999n
}
```

---

# Real-World Examples

## Banking Systems

```javascript
const totalMoney = 999999999999999999999999n;

console.log(totalMoney);
```

---

## Blockchain

```javascript
const walletBalance = 1000000000000000000000n;

console.log(walletBalance);
```

---

## Scientific Computation

```javascript
const stars = 98765432109876543210987654321n;

console.log(stars);
```

---

# BigInt vs Number

| Feature | Number | BigInt |
|---------|---------|---------|
| Primitive | Yes | Yes |
| Decimal Support | Yes | No |
| Large Integers | Limited | Unlimited |
| Precision | Limited | Exact |
| Type | number | bigint |
| Suffix | None | n |

---

# Best Practices

- Use `Number` for normal calculations.
- Use `BigInt` only for very large integers.
- Avoid mixing `Number` and `BigInt`.
- Convert types explicitly.
- Use BigInt for financial, blockchain, and scientific applications requiring very large integers.

---

# Common Mistakes

## Mixing Types

```javascript
10n + 5;
```

Produces a `TypeError`.

---

## Using Decimals

```javascript
BigInt(5.8);
```

Produces a `RangeError`.

---

## Forgetting the `n`

```javascript
const num = 99999999999999999999;
```

This creates a Number and may lose precision.

Correct:

```javascript
const num = 99999999999999999999n;
```

---

# Interview Questions

1. What is BigInt in JavaScript?
2. Why was BigInt introduced?
3. What is the maximum safe integer in JavaScript?
4. How do you create a BigInt?
5. Can BigInt store decimal values?
6. What happens when you mix Number and BigInt?
7. What is the difference between `==` and `===` with BigInt?
8. How do you convert Number to BigInt?
9. How do you convert BigInt to Number?
10. When should BigInt be used?

---

# Summary

- BigInt is a primitive data type introduced in ES2020.
- It stores integers of arbitrary size without losing precision.
- BigInt values end with the `n` suffix.
- BigInt does not support decimal numbers.
- Arithmetic operations are supported between BigInt values.
- Number and BigInt cannot be mixed directly.
- BigInt is useful for blockchain, finance, cryptography, and scientific computing.

---

# Next Topic

**0006_string**