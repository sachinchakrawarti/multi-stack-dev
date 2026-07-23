# Named Function Expression

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is a Named Function Expression?](#what-is-a-named-function-expression)
- [Why Use Named Function Expressions?](#why-use-named-function-expressions)
- [Basic Syntax](#basic-syntax)
- [How It Works](#how-it-works)
- [Function Name vs Variable Name](#function-name-vs-variable-name)
- [Accessing the Function](#accessing-the-function)
- [Examples](#examples)
- [Advantages](#advantages)
- [Limitations](#limitations)
- [Named Function Expression vs Anonymous Function Expression](#named-function-expression-vs-anonymous-function-expression)
- [Real-World Use Cases](#real-world-use-cases)
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

- Understand what a Named Function Expression is.
- Differentiate between named and anonymous function expressions.
- Explain why the function has two names.
- Understand where the internal function name can be used.
- Apply Named Function Expressions in real-world JavaScript.

---

# Introduction

In the previous lesson, you learned that a **Function Expression** stores a function inside a variable.

Most function expressions are **anonymous**, meaning they have no name.

However, JavaScript also allows you to give a name to the function itself.

This is called a **Named Function Expression (NFE)**.

Although Named Function Expressions are less common than anonymous ones, they are extremely useful for **debugging**, **recursion**, and writing more maintainable code.

---

# What is a Named Function Expression?

A **Named Function Expression** is a function expression in which the function has its own name.

```javascript
const greet = function sayHello() {
    console.log("Hello!");
};
```

Notice there are **two identifiers**:

- `greet` → Variable name
- `sayHello` → Function name

The variable stores the function.

The function name exists mainly inside the function itself.

---

# Why Use Named Function Expressions?

Named Function Expressions provide several benefits.

They help developers:

- Produce better debugging information.
- Write recursive functions.
- Improve code readability.
- Make stack traces easier to understand.
- Give meaningful names to anonymous callbacks.

---

# Basic Syntax

```javascript
const variableName = function functionName(parameters) {

    // Function body

};
```

Example

```javascript
const add = function calculate(a, b) {

    return a + b;

};
```

---

# How It Works

When JavaScript executes the code,

```javascript
const greet = function sayHello() {

    console.log("Hello");

};
```

the following happens:

```text
Create Variable
       │
       ▼
Create Named Function
       │
       ▼
Store Function Inside Variable
       │
       ▼
Call Variable
       │
       ▼
Execute Function
```

The function name (`sayHello`) exists **inside the function**, while the variable (`greet`) is used outside.

---

# Function Name vs Variable Name

This is one of the most confusing parts for beginners.

```javascript
const add = function calculate(a, b) {

    return a + b;

};
```

| Name | Purpose |
|------|----------|
| `add` | Variable used outside the function |
| `calculate` | Internal function name |

To execute the function:

```javascript
add(5, 10);
```

Not

```javascript
calculate(5, 10);
```

The internal name is **not available outside**.

---

# Accessing the Function

Inside the function, the internal name can be used.

```javascript
const greet = function sayHello() {

    console.log("Inside Function");

    console.log(sayHello);

};

greet();
```

Outside the function:

```javascript
console.log(sayHello);
```

Output

```text
ReferenceError
```

The internal function name is private to the function body.

---

# Examples

## Example 1 — Basic Named Function Expression

```javascript
const welcome = function greetUser() {

    console.log("Welcome!");

};

welcome();
```

---

## Example 2 — Returning a Value

```javascript
const square = function calculateSquare(number) {

    return number * number;

};

console.log(square(5));
```

---

## Example 3 — Recursive Function

One advantage of Named Function Expressions is recursion.

```javascript
const factorial = function fact(n) {

    if (n <= 1)
        return 1;

    return n * fact(n - 1);

};

console.log(factorial(5));
```

Output

```text
120
```

Even if the variable name changes, the recursive call still works because it uses the function's own name.

---

## Example 4 — Better Debugging

```javascript
const divide = function calculateDivision(a, b) {

    return a / b;

};
```

If an error occurs, developer tools often display:

```text
calculateDivision()
```

instead of

```text
anonymous()
```

making debugging much easier.

---

# Advantages

Named Function Expressions provide several advantages.

- Better debugging.
- Easier recursion.
- More descriptive stack traces.
- Improved readability.
- Self-documenting code.

---

# Limitations

Despite their advantages, Named Function Expressions are not always necessary.

- Slightly longer syntax.
- Internal function name cannot be used outside.
- Less commonly used in everyday JavaScript.
- Beginners may confuse the two names.

---

# Named Function Expression vs Anonymous Function Expression

| Feature | Anonymous | Named |
|---------|-----------|--------|
| Function has a name | ❌ | ✅ |
| Variable stores function | ✅ | ✅ |
| Easier debugging | ❌ | ✅ |
| Supports recursion | Limited | ✅ |
| Commonly used | ✅ | Less Common |

---

# Real-World Use Cases

Named Function Expressions are useful in:

- Recursive algorithms
- Complex callbacks
- Framework development
- Debugging large applications
- Library development
- Error reporting

Most modern frameworks still prefer anonymous functions unless a name provides additional value.

---

# Common Mistakes

## Calling the Internal Function Name

❌ Incorrect

```javascript
const greet = function sayHello() {

};

sayHello();
```

Output

```text
ReferenceError
```

---

✅ Correct

```javascript
greet();
```

---

## Confusing the Two Names

```javascript
const multiply = function calculate(a, b) {

    return a * b;

};
```

Always call

```javascript
multiply();
```

not

```javascript
calculate();
```

---

# Best Practices

- Use Named Function Expressions only when the name adds value.
- Use meaningful internal names.
- Prefer anonymous function expressions for simple callbacks.
- Use Named Function Expressions for recursive logic.
- Keep function names descriptive.

---

# Summary

In this lesson, you learned:

- What a Named Function Expression is.
- How it differs from an anonymous function expression.
- Why there are two names.
- How JavaScript handles the internal function name.
- Practical uses such as recursion and debugging.

Although Named Function Expressions are less common, they are a valuable tool for writing maintainable JavaScript.

---

# Interview Questions

1. What is a Named Function Expression?
2. How does it differ from an anonymous function expression?
3. Why does a Named Function Expression have two names?
4. Can the internal function name be accessed outside the function?
5. Why are Named Function Expressions useful for recursion?
6. How do Named Function Expressions improve debugging?

---

# Practice Exercise

1. Create a Named Function Expression that prints your name.
2. Write a recursive factorial function using a Named Function Expression.
3. Compare anonymous and named function expressions.
4. Try calling the internal function name outside the function and observe the error.
5. Create three Named Function Expressions with meaningful names.

---

# Key Takeaway

> **A Named Function Expression combines the flexibility of a function expression with the clarity of a named function. It is especially useful for recursion, debugging, and writing self-documenting JavaScript code.**

---

# Next Lesson

<h2>
➡️ <a href="../0008_anonymous_functions/anonymous_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Anonymous Function</strong>
</a>
</h2>