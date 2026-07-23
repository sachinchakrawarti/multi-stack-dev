# Arguments

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Arguments?](#what-are-arguments)
- [Why Do We Need Arguments?](#why-do-we-need-arguments)
- [How Arguments Work](#how-arguments-work)
- [Arguments vs Parameters](#arguments-vs-parameters)
- [Types of Arguments](#types-of-arguments)
- [The `arguments` Object](#the-arguments-object)
- [Examples](#examples)
- [Real-World Use Cases](#real-world-use-cases)
- [Advantages](#advantages)
- [Limitations](#limitations)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand what arguments are.
- Differentiate between arguments and parameters.
- Learn how JavaScript passes arguments to functions.
- Understand the `arguments` object.
- Write functions using different types of arguments.

---

# Introduction

In the previous lesson, you learned about **parameters**, which are placeholders defined inside a function.

Now it's time to learn about **arguments**.

Whenever a function is called, we provide actual values to its parameters. These actual values are called **arguments**.

Arguments allow the same function to work with different data every time it is executed.

---

# What are Arguments?

An **argument** is the actual value passed to a function when it is called.

Example:

```javascript
function greet(name) {

    console.log("Hello " + name);

}

greet("Sachin");
```

In this example:

- `name` → Parameter
- `"Sachin"` → Argument

The parameter receives the argument when the function executes.

---

# Why Do We Need Arguments?

Without arguments, functions would always produce the same result.

Arguments allow functions to:

- Accept dynamic data.
- Perform different calculations.
- Reuse the same function.
- Reduce duplicate code.
- Make applications interactive.

---

# How Arguments Work

Consider this example:

```javascript
function multiply(a, b) {

    return a * b;

}

multiply(5, 4);
```

Execution Flow

```text
Function Declared
        │
        ▼
Parameters Created
        │
        ▼
Function Called
        │
        ▼
Arguments Passed
        │
        ▼
Arguments Assigned to Parameters
        │
        ▼
Function Executes
        │
        ▼
Result Returned
```

Here,

- `5` becomes the value of `a`
- `4` becomes the value of `b`

---

# Arguments vs Parameters

Although these terms are often used interchangeably, they have different meanings.

| Parameters | Arguments |
|------------|-----------|
| Declared in the function definition | Passed during the function call |
| Variables | Actual values |
| Receive data | Send data |
| Exist inside the function | Exist outside the function |

Example

```javascript
function add(a, b) {

    return a + b;

}

add(10, 20);
```

- `a` and `b` → Parameters
- `10` and `20` → Arguments

---

# Types of Arguments

## Single Argument

```javascript
function greet(name) {

    console.log(name);

}

greet("JavaScript");
```

---

## Multiple Arguments

```javascript
function add(a, b) {

    console.log(a + b);

}

add(15, 25);
```

---

## No Arguments

```javascript
function hello() {

    console.log("Hello");

}

hello();
```

---

## Extra Arguments

JavaScript allows passing more arguments than parameters.

```javascript
function add(a, b) {

    console.log(a + b);

}

add(10, 20, 30, 40);
```

Extra arguments are ignored unless accessed using the `arguments` object or rest parameters.

---

## Missing Arguments

```javascript
function add(a, b) {

    console.log(a + b);

}

add(10);
```

Output

```
NaN
```

because `b` is `undefined`.

---

# The `arguments` Object

Inside a regular function, JavaScript provides a special object called `arguments`.

It contains all arguments passed to the function.

Example

```javascript
function showArguments() {

    console.log(arguments);

}

showArguments(10, 20, 30);
```

Output

```text
Arguments(3) [10, 20, 30]
```

You can access individual arguments.

```javascript
function showArguments() {

    console.log(arguments[0]);

    console.log(arguments[1]);

}

showArguments("HTML", "CSS");
```

Output

```
HTML
CSS
```

> **Note:** Arrow functions do **not** have their own `arguments` object. Modern JavaScript often uses **Rest Parameters (`...args`)** instead.

---

# Examples

## Example 1 — Greeting

```javascript
function greet(name) {

    console.log("Hello " + name);

}

greet("Sachin");
```

---

## Example 2 — Calculator

```javascript
function multiply(a, b) {

    return a * b;

}

console.log(multiply(5, 8));
```

---

## Example 3 — Student Details

```javascript
function student(name, age, city) {

    console.log(name);

    console.log(age);

    console.log(city);

}

student("Sachin", 24, "Bhopal");
```

---

## Example 4 — Using the `arguments` Object

```javascript
function total() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {

        sum += arguments[i];

    }

    return sum;

}

console.log(total(10, 20, 30, 40));
```

Output

```
100
```

---

# Real-World Use Cases

Arguments are used in almost every JavaScript application.

Examples include:

- Login credentials
- Search keywords
- Product information
- API requests
- Payment details
- User registration
- Form submissions
- Mathematical calculations

Example

```javascript
function login(username, password) {

    console.log(username);

    console.log(password);

}
```

---

# Advantages

Arguments provide many benefits.

- Pass dynamic values.
- Make functions reusable.
- Reduce code duplication.
- Support flexible programming.
- Allow user input processing.

---

# Limitations

Arguments also have some considerations.

- Missing arguments may produce `undefined`.
- Incorrect argument types may cause errors.
- Too many arguments reduce readability.
- Order of arguments is important.

---

# Common Mistakes

## Confusing Parameters and Arguments

❌ Incorrect

Calling `"Sachin"` a parameter.

```javascript
greet("Sachin");
```

---

✅ Correct

- `name` → Parameter
- `"Sachin"` → Argument

---

## Passing Arguments in the Wrong Order

```javascript
function introduce(name, age) {

    console.log(name, age);

}

introduce(25, "John");
```

Output

```
25 John
```

Always pass arguments in the correct order.

---

## Forgetting Required Arguments

```javascript
function divide(a, b) {

    return a / b;

}

divide(20);
```

Since `b` is `undefined`, the result becomes `NaN`.

---

# Best Practices

- Pass arguments in the correct order.
- Use meaningful values.
- Validate important arguments.
- Avoid unnecessary arguments.
- Use default parameters when appropriate.
- Use rest parameters for variable numbers of arguments.

---

# Summary

In this lesson, you learned:

- What arguments are.
- Why arguments are important.
- How arguments work.
- The difference between arguments and parameters.
- The `arguments` object.
- Real-world applications.
- Best practices and common mistakes.

Arguments provide the actual data that allows functions to perform useful work with different inputs.

---

# Interview Questions

1. What is an argument in JavaScript?
2. What is the difference between arguments and parameters?
3. What happens if too many arguments are passed?
4. What happens if too few arguments are passed?
5. What is the `arguments` object?
6. Do arrow functions have an `arguments` object?
7. Why are arguments important?

---

# Practice Exercise

1. Write a function that accepts two arguments and returns their sum.
2. Create a function that prints three student details using arguments.
3. Experiment with passing extra arguments.
4. Experiment with missing arguments.
5. Use the `arguments` object to calculate the sum of multiple numbers.

---

# Key Takeaway

> **Arguments are the actual values passed to a function when it is called. They provide data to parameters, making functions flexible, reusable, and capable of handling different inputs every time they execute.**

---

# Next Lesson

<h2>
➡️ <a href="../0012_return_statement/return_statement.md" style="color:#1E90FF; text-decoration:none;">
<strong>Return Statement</strong>
</a>
</h2>