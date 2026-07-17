# Type Coercion in JavaScript

## Introduction

**Type Coercion** is the automatic conversion of one data type to another by JavaScript during the execution of a program.

Unlike **Type Conversion**, which is performed explicitly by the programmer, **Type Coercion** happens automatically when JavaScript evaluates expressions involving different data types.

Understanding type coercion is essential because it can produce results that are sometimes unexpected.

---

# What Is Type Coercion?

Type coercion is the **implicit (automatic)** conversion of data types by JavaScript.

Example:

```javascript
console.log("10" + 5);
```

Output

```text
105
```

JavaScript automatically converts `5` into the string `"5"` and concatenates the values.

---

# Why Does Type Coercion Happen?

JavaScript is a **dynamically typed language**.

Variables do not have fixed data types, so JavaScript automatically converts values when needed to perform operations.

---

# Type Coercion with the `+` Operator

If one operand is a string, JavaScript converts the other operand to a string.

```javascript
console.log("100" + 50);
```

Output

```text
10050
```

Example:

```javascript
console.log("Age: " + 22);
```

Output

```text
Age: 22
```

---

# Type Coercion with Arithmetic Operators

Operators such as `-`, `*`, `/`, and `%` usually convert strings to numbers.

```javascript
console.log("10" - 2);
console.log("10" * 2);
console.log("10" / 2);
console.log("10" % 3);
```

Output

```text
8
20
5
1
```

---

# Boolean Coercion

Boolean values are converted to numbers in arithmetic operations.

```javascript
console.log(true + 1);
console.log(false + 1);
```

Output

```text
2
1
```

Explanation:

- `true` becomes `1`
- `false` becomes `0`

---

# Null Coercion

```javascript
console.log(null + 5);
```

Output

```text
5
```

`null` is converted to `0`.

---

# Undefined Coercion

```javascript
console.log(undefined + 5);
```

Output

```text
NaN
```

`undefined` cannot be converted into a valid number for arithmetic.

---

# Empty String Coercion

```javascript
console.log("" + 100);
```

Output

```text
100
```

The result is a string.

Example:

```javascript
console.log("" - 100);
```

Output

```text
-100
```

Here, the empty string is converted to the number `0`.

---

# Equality and Type Coercion

## Loose Equality (`==`)

The `==` operator performs type coercion before comparing values.

```javascript
console.log(10 == "10");
```

Output

```text
true
```

JavaScript converts `"10"` to the number `10`.

---

## Strict Equality (`===`)

The `===` operator compares both value and data type.

```javascript
console.log(10 === "10");
```

Output

```text
false
```

No type coercion occurs.

---

# Common Type Coercion Examples

```javascript
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);
console.log("5" == 5);
console.log("5" === 5);
```

Output

```text
52
3
10
2.5
true
false
```

---

# Truthy and Falsy Coercion

JavaScript automatically converts values to Boolean in conditional statements.

```javascript
if ("Hello") {
    console.log("Executed");
}
```

Output

```text
Executed
```

Example:

```javascript
if (0) {
    console.log("Won't execute");
}
```

No output is produced because `0` is falsy.

---

# Type Conversion vs Type Coercion

| Type Conversion | Type Coercion |
|-----------------|---------------|
| Explicit (manual) | Implicit (automatic) |
| Performed by the programmer | Performed by JavaScript |
| Uses functions like `Number()` | Happens during expression evaluation |
| Easier to understand | Can produce unexpected results |

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

# Real-World Example

User input from a form is usually a string.

```javascript
let quantity = "2";
let price = 500;

console.log(quantity * price);
```

Output

```text
1000
```

JavaScript automatically converts `"2"` to the number `2`.

However:

```javascript
console.log(quantity + price);
```

Output

```text
2500
```

The `+` operator performs string concatenation because one operand is a string.

---

# Best Practices

- Prefer explicit type conversion over automatic coercion.
- Use strict equality (`===`) instead of loose equality (`==`).
- Be careful when using the `+` operator with strings.
- Validate data types before performing operations.
- Avoid relying on implicit conversions in complex code.

---

# Common Mistakes

## Using `==` Instead of `===`

```javascript
console.log(0 == false);
```

Output

```text
true
```

Preferred:

```javascript
console.log(0 === false);
```

Output

```text
false
```

---

## Assuming `+` Always Adds Numbers

```javascript
console.log("10" + 5);
```

Output

```text
105
```

Convert explicitly if numeric addition is required.

---

## Unexpected Results with `null`

```javascript
console.log(null + 1);
```

Output

```text
1
```

`null` is converted to `0`.

---

# Interview Questions

1. What is type coercion in JavaScript?
2. What is the difference between type coercion and type conversion?
3. Why does `"10" + 5` produce `"105"`?
4. Why does `"10" - 5` produce `5`?
5. What is the difference between `==` and `===`?
6. Why should you prefer strict equality?
7. What happens when `undefined` is used in arithmetic?
8. What happens when `null` is used in arithmetic?
9. How are Boolean values coerced into numbers?
10. Why can type coercion lead to bugs?

---

# Summary

- Type coercion is the automatic conversion of data types by JavaScript.
- The `+` operator often performs string concatenation.
- Arithmetic operators usually convert strings to numbers.
- Loose equality (`==`) performs type coercion.
- Strict equality (`===`) does not perform type coercion.
- Understanding coercion helps prevent unexpected behavior.

---

# Key Points

- Type coercion is automatic.
- JavaScript performs coercion during expression evaluation.
- `+` behaves differently from other arithmetic operators.
- Use `===` instead of `==`.
- Prefer explicit type conversion for predictable code.
- Learn common coercion rules to avoid bugs.

---

# Next Topic

# `Truthy And Falsy`