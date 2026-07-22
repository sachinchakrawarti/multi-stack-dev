# Return Statement

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is the Return Statement?](#what-is-the-return-statement)
- [Why Do We Need the Return Statement?](#why-do-we-need-the-return-statement)
- [How the Return Statement Works](#how-the-return-statement-works)
- [Syntax](#syntax)
- [Types of Return Values](#types-of-return-values)
- [Examples](#examples)
- [Returning Multiple Values](#returning-multiple-values)
- [Return vs Console.log()](#return-vs-consolelog)
- [What Happens After Return?](#what-happens-after-return)
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

- Understand the purpose of the `return` statement.
- Differentiate between `return` and `console.log()`.
- Return different types of values from functions.
- Know what happens after a `return` statement executes.
- Write reusable functions using return values.

---

# Introduction

Functions perform tasks, but many functions also need to **send a result back** to the code that called them.

Imagine using a calculator.

You enter two numbers and press the **Add** button.

The calculator doesn't simply display that it performed an addition—it **returns the answer**.

JavaScript functions work the same way.

The **`return` statement** sends a value back to the caller and immediately ends the execution of the function.

---

# What is the Return Statement?

The **`return` statement** is used to send a value back from a function.

Once a `return` statement is executed:

- The function stops executing.
- The specified value is returned.
- Control goes back to the code that called the function.

Example

```javascript
function add(a, b) {

    return a + b;

}

const result = add(10, 20);

console.log(result);
```

Output

```
30
```

---

# Why Do We Need the Return Statement?

Without `return`, a function cannot send data back to the caller.

The `return` statement allows functions to:

- Produce results.
- Perform calculations.
- Return objects or arrays.
- Return boolean values.
- Build reusable code.
- Pass data between functions.

---

# How the Return Statement Works

Consider the following example.

```javascript
function multiply(a, b) {

    return a * b;

}

const answer = multiply(5, 6);

console.log(answer);
```

Execution Flow

```text
Function Called
       │
       ▼
Parameters Receive Values
       │
       ▼
Execute Function Body
       │
       ▼
Return Statement Executes
       │
       ▼
Function Stops
       │
       ▼
Returned Value Stored
       │
       ▼
Continue Program
```

---

# Syntax

```javascript
function functionName() {

    return value;

}
```

---

# Types of Return Values

JavaScript functions can return almost any type of value.

## Return a Number

```javascript
function square(number) {

    return number * number;

}
```

---

## Return a String

```javascript
function greet(name) {

    return "Hello " + name;

}
```

---

## Return a Boolean

```javascript
function isAdult(age) {

    return age >= 18;

}
```

---

## Return an Array

```javascript
function colors() {

    return ["Red", "Green", "Blue"];

}
```

---

## Return an Object

```javascript
function createUser() {

    return {

        name: "Sachin",
        age: 24

    };

}
```

---

## Return Another Function

```javascript
function outer() {

    return function () {

        console.log("Inner Function");

    };

}

const fn = outer();

fn();
```

---

# Examples

## Example 1 — Calculator

```javascript
function add(a, b) {

    return a + b;

}

console.log(add(5, 8));
```

---

## Example 2 — Greeting

```javascript
function greet(name) {

    return "Hello " + name;

}

console.log(greet("Sachin"));
```

---

## Example 3 — Even or Odd

```javascript
function isEven(number) {

    return number % 2 === 0;

}

console.log(isEven(8));
```

---

## Example 4 — Returning an Object

```javascript
function student() {

    return {

        name: "Sachin",
        city: "Bhopal"

    };

}

console.log(student());
```

---

# Returning Multiple Values

A function can return only **one value** directly.

To return multiple pieces of data, return an object or an array.

Example

```javascript
function student() {

    return {

        name: "Sachin",
        age: 24,
        city: "Bhopal"

    };

}

console.log(student());
```

---

# Return vs Console.log()

Many beginners confuse these two.

| `return` | `console.log()` |
|-----------|-----------------|
| Sends a value back | Prints a value to the console |
| Ends function execution | Does not stop execution |
| Can be stored in a variable | Cannot be stored automatically |
| Used for calculations | Used for debugging and displaying information |

Example

```javascript
function add(a, b) {

    return a + b;

}

const result = add(10, 20);
```

vs

```javascript
function add(a, b) {

    console.log(a + b);

}

const result = add(10, 20);

console.log(result);
```

Output

```
30
undefined
```

The second function prints the value but returns nothing.

---

# What Happens After Return?

Once JavaScript reaches a `return` statement, the function stops immediately.

Example

```javascript
function test() {

    console.log("Start");

    return;

    console.log("End");

}

test();
```

Output

```
Start
```

The last statement never executes.

---

# Real-World Use Cases

The `return` statement is used everywhere in JavaScript applications.

Examples include:

- Mathematical calculations
- Form validation
- API responses
- Authentication
- Search functions
- Data filtering
- React components
- Utility functions

Example

```javascript
function calculateDiscount(price, discount) {

    return price - (price * discount / 100);

}
```

---

# Advantages

Using the `return` statement provides many benefits.

- Makes functions reusable.
- Produces useful results.
- Improves code organization.
- Enables function composition.
- Makes testing easier.

---

# Limitations

The `return` statement also has some limitations.

- Only one value can be returned directly.
- Code after `return` is never executed.
- Forgetting `return` may produce `undefined`.

---

# Common Mistakes

## Forgetting the Return Statement

❌ Incorrect

```javascript
function add(a, b) {

    a + b;

}

console.log(add(5, 6));
```

Output

```
undefined
```

---

✅ Correct

```javascript
function add(a, b) {

    return a + b;

}
```

---

## Writing Code After Return

❌

```javascript
function test() {

    return 10;

    console.log("Hello");

}
```

The `console.log()` statement never executes.

---

## Confusing Return with Console.log()

```javascript
function greet() {

    console.log("Hello");

}
```

This prints `"Hello"` but returns `undefined`.

---

# Best Practices

- Return meaningful values.
- Keep functions focused on one task.
- Avoid unnecessary code after `return`.
- Use objects when multiple values are needed.
- Use `console.log()` for debugging, not as a replacement for `return`.
- Write descriptive function names.

---

# Summary

In this lesson, you learned:

- What the `return` statement is.
- Why it is important.
- How it works.
- Different types of return values.
- Returning objects and arrays.
- The difference between `return` and `console.log()`.
- What happens after `return`.
- Best practices and common mistakes.

The `return` statement is one of the most important concepts in JavaScript because it allows functions to produce results and communicate with other parts of the program.

---

# Interview Questions

1. What is the purpose of the `return` statement?
2. What happens after a `return` statement executes?
3. Can a function return multiple values directly?
4. What is the difference between `return` and `console.log()`?
5. What happens if a function has no `return` statement?
6. Can a function return another function?
7. Why is the `return` statement important?

---

# Practice Exercise

1. Write a function that returns the sum of two numbers.
2. Create a function that returns whether a number is even.
3. Write a function that returns an object containing your details.
4. Compare `return` and `console.log()` using your own examples.
5. Create a function that returns another function and execute it.

---

# Key Takeaway

> **The `return` statement sends a value back to the caller and immediately ends function execution. It allows functions to produce reusable results, making JavaScript programs modular, flexible, and efficient.**

---

# Next Lesson

<h2>
➡️ <a href="../0013_default_parameters/default_parameters.md" style="color:#1E90FF; text-decoration:none;">
<strong>Default Parameters</strong>
</a>
</h2>