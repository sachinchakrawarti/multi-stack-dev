# JavaScript Operators

## Overview

Operators are special symbols and keywords used to perform operations on values and variables.

Operators allow JavaScript programs to:

- Perform calculations
- Compare values
- Assign values
- Make logical decisions
- Manipulate data
- Control program behavior

---

# Module Structure

```text
03_operators/

├── 01_docs/
│   ├── 01_md/
│   └── 02_pdf/
│
├── 02_code/
│
├── 03_notes/
│
├── 04_ppt/
│
├── 05_assessments/
│
└── assets/
```

---

# Learning Objectives

After completing this module, you will understand:

- What operators are in JavaScript.
- Why operators are required.
- Different types of operators.
- How operators work internally.
- Operator precedence and associativity.
- Real-world usage of operators.

---

# Topics Covered

## 01. Introduction to Operators

| Lesson | Topic |
|---|---|
|0001|What Are Operators|
|0002|Why Use Operators|
|0003|Operator Syntax|
|0004|Types of Operators|

---

# 02. Arithmetic Operators

Used for mathematical calculations.

Topics:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Modulus `%`
- Exponentiation `**`

Example:

```javascript
let total = 10 + 20;

console.log(total);
```

Output:

```
30
```

---

# 03. Assignment Operators

Used to assign values to variables.

Topics:

- Assignment `=`
- Add assignment `+=`
- Subtract assignment `-=`
- Multiply assignment `*=`
- Divide assignment `/=`
- Modulus assignment `%=`

Example:

```javascript
let price = 100;

price += 50;

console.log(price);
```

Output:

```
150
```

---

# 04. Comparison Operators

Used to compare two values.

Topics:

- Greater than `>`
- Less than `<`
- Greater than or equal `>=`
- Less than or equal `<=`
- Equality `==`
- Strict equality `===`
- Not equal `!=`
- Strict not equal `!==`

Example:

```javascript
console.log(10 > 5);
```

Output:

```
true
```

---

# 05. Equality Operators

Topics:

- Loose equality `==`
- Strict equality `===`

Example:

```javascript
console.log(5 == "5");

console.log(5 === "5");
```

Output:

```
true
false
```

---

# 06. Logical Operators

Used to combine conditions.

Topics:

- AND `&&`
- OR `||`
- NOT `!`

Example:

```javascript
let age = 20;

console.log(age >= 18 && age <= 60);
```

---

# 07. Bitwise Operators

Works with binary numbers.

Topics:

- AND `&`
- OR `|`
- XOR `^`
- NOT `~`
- Left shift `<<`
- Right shift `>>`

Example:

```javascript
console.log(5 & 1);
```

---

# 08. Unary Operators

Operators that work with one operand.

Topics:

- Unary plus `+`
- Unary minus `-`
- Increment `++`
- Decrement `--`
- typeof
- delete
- void

Example:

```javascript
let number = 10;

number++;

console.log(number);
```

Output:

```
11
```

---

# 09. Increment and Decrement

Topics:

- Pre-increment
- Post-increment
- Pre-decrement
- Post-decrement

Example:

```javascript
let x = 5;

console.log(++x);
```

---

# 10. String Operators

JavaScript supports string concatenation.

Example:

```javascript
let firstName = "Sachin";

let result = firstName + " Kumar";

console.log(result);
```

Output:

```
Sachin Kumar
```

---

# 11. Ternary Operator

Short form of if-else.

Syntax:

```javascript
condition ? value1 : value2;
```

Example:

```javascript
let age = 20;

let result = age >= 18 
? "Adult" 
: "Minor";
```

---

# 12. Modern JavaScript Operators

## Nullish Coalescing

```javascript
let name = null;

console.log(name ?? "Guest");
```

Output:

```
Guest
```

---

## Optional Chaining

```javascript
user?.profile?.name;
```

---

# 13. Special Operators

Topics:

- typeof operator
- instanceof operator
- in operator
- delete operator
- void operator
- comma operator

---

# 14. Advanced Concepts

Topics:

- Operator precedence
- Operator associativity
- Short-circuit evaluation

Example:

```javascript
false && console.log("Hello");
```

The second expression never executes.

---

# Code Examples

All practical examples are available in:

```
02_code/
```

Format:

```
0001_topic_name/
└── topic_name.nnb
```

---

# Assessments

Practice files are available in:

```
05_assessments/
```

Includes:

- MCQ
- True/False
- Find the Error
- Predict Output
- Complete Code
- Debugging Challenge
- Mini Projects
- Mock Tests

---

# Real-World Applications

Operators are used in:

- Calculators
- Banking systems
- Authentication systems
- Shopping carts
- Games
- Data validation
- API development
- React applications
- Node.js applications

---

# Recommended Learning Order

Follow this sequence:

```
01 What Are Operators
        ↓
02 Why Use Operators
        ↓
03 Operator Syntax
        ↓
04 Types of Operators
        ↓
05 Arithmetic Operators
        ↓
06 Assignment Operators
        ↓
07 Comparison Operators
        ↓
08 Logical Operators
        ↓
09 Advanced Operators
        ↓
10 Practice Projects
```

---

# Next Module

<h2>
➡️ <a href="../04_control_flow/README.md" style="color:#1E90FF;text-decoration:none;">
<strong>04 Control Flow</strong>
</a>
</h2>