# Function Syntax

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is Function Syntax?](#what-is-function-syntax)
- [Why is Function Syntax Important?](#why-is-function-syntax-important)
- [Anatomy of a Function](#anatomy-of-a-function)
- [Basic Function Syntax](#basic-function-syntax)
- [Understanding Each Part](#understanding-each-part)
- [Step-by-Step Execution](#step-by-step-execution)
- [Syntax Variations](#syntax-variations)
- [Examples](#examples)
- [Common Syntax Errors](#common-syntax-errors)
- [Naming Conventions](#naming-conventions)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand the syntax of JavaScript functions.
- Identify each part of a function declaration.
- Write syntactically correct functions.
- Understand how JavaScript interprets function syntax.
- Avoid common syntax mistakes.

---

# Introduction

Before JavaScript can execute a function, it must know **how the function is written**. Every function follows a specific structure known as **function syntax**.

Syntax is simply the set of grammatical rules that JavaScript expects. If these rules are not followed, the program will produce syntax errors and fail to run.

Understanding function syntax is the first step toward writing clean, reusable, and professional JavaScript code.

---

# What is Function Syntax?

Function syntax defines **how a function should be declared**.

It specifies:

- The `function` keyword
- The function name
- Parentheses for parameters
- Curly braces for the function body
- Optional `return` statement

Every function follows this basic structure.

---

# Why is Function Syntax Important?

Correct syntax allows JavaScript to:

- Recognize a function.
- Store it in memory.
- Accept input values.
- Execute statements.
- Return results.
- Detect programming errors.

Even a missing parenthesis or curly brace can prevent an entire program from running.

---

# Anatomy of a Function

Consider the following function:

```javascript
function add(a, b) {
    return a + b;
}
```

It consists of several parts.

| Part | Purpose |
|------|---------|
| `function` | Declares a new function |
| `add` | Function name |
| `(a, b)` | Parameters |
| `{ }` | Function body |
| `return` | Sends a value back |
| `a + b` | Expression being returned |

---

# Basic Function Syntax

```javascript
function functionName(parameter1, parameter2) {

    // Code to execute

    return value;

}
```

Not every function requires parameters or a return statement, but every function must follow the correct syntax.

---

# Understanding Each Part

## 1. Function Keyword

Every function declaration begins with the `function` keyword.

```javascript
function greet() {

}
```

This tells JavaScript that a new function is being created.

---

## 2. Function Name

The function name identifies the function.

```javascript
function calculateTotal() {

}
```

Choose names that clearly describe the task performed.

---

## 3. Parentheses

Parentheses contain the parameters.

```javascript
function greet(name) {

}
```

If no parameters are needed, leave them empty.

```javascript
function greet() {

}
```

---

## 4. Parameters

Parameters receive data passed into the function.

```javascript
function multiply(a, b) {

}
```

They act like variables available only inside the function.

---

## 5. Function Body

The function body contains the statements that execute when the function is called.

```javascript
function greet() {

    console.log("Hello");

}
```

Everything inside the curly braces belongs to the function.

---

## 6. Return Statement

The `return` statement sends a value back to the caller.

```javascript
function square(number) {
    return number * number;
}
```

The return statement is optional.

---

# Step-by-Step Execution

When JavaScript encounters a function declaration:

```text
Read Function
      │
      ▼
Store in Memory
      │
      ▼
Wait Until Called
      │
      ▼
Receive Arguments
      │
      ▼
Execute Statements
      │
      ▼
Return Result
      │
      ▼
Continue Execution
```

---

# Syntax Variations

## Function Without Parameters

```javascript
function welcome() {
    console.log("Welcome!");
}
```

---

## Function With Parameters

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

---

## Function With Return Value

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Function With Multiple Parameters

```javascript
function student(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}
```

---

# Examples

## Example 1

```javascript
function hello() {
    console.log("Hello World");
}

hello();
```

---

## Example 2

```javascript
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));
```

---

## Example 3

```javascript
function introduce(name, profession) {

    console.log("Name:", name);

    console.log("Profession:", profession);

}

introduce("Sachin", "Developer");
```

---

# Common Syntax Errors

## Missing Parentheses

❌ Incorrect

```javascript
function greet {

}
```

✅ Correct

```javascript
function greet() {

}
```

---

## Missing Curly Braces

❌ Incorrect

```javascript
function greet()

console.log("Hello");
```

✅ Correct

```javascript
function greet() {

    console.log("Hello");

}
```

---

## Missing Function Name

❌ Incorrect

```javascript
function () {

}
```

✅ Correct

```javascript
function greet() {

}
```

---

## Misspelled Keyword

❌ Incorrect

```javascript
funtion greet() {

}
```

✅ Correct

```javascript
function greet() {

}
```

---

# Naming Conventions

Good function names should:

- Start with a verb.
- Describe the task.
- Use camelCase.
- Be meaningful.
- Be easy to read.

Good examples:

```javascript
calculateTotal()
sendEmail()
validateForm()
findUser()
displayMessage()
```

Poor examples:

```javascript
abc()
xyz()
test()
temp()
myFunction()
```

---

# Best Practices

- Use descriptive function names.
- Keep functions short.
- Write one responsibility per function.
- Maintain proper indentation.
- Return values whenever appropriate.
- Avoid unnecessary global variables.
- Follow consistent formatting.

---

# Summary

In this lesson, you learned:

- What function syntax is.
- The different parts of a function.
- How JavaScript interprets function declarations.
- The role of parameters and return statements.
- Common syntax mistakes.
- Professional naming conventions and best practices.

Mastering function syntax provides the foundation for all advanced JavaScript function concepts.

---

# Interview Questions

1. What is function syntax?
2. What are the different parts of a JavaScript function?
3. Is the `return` statement mandatory?
4. What is the purpose of parameters?
5. Why are curly braces required?
6. What happens if parentheses are missing?
7. What naming convention is commonly used for JavaScript functions?

---

# Practice Exercise

1. Write a function that displays your name.
2. Create a function that accepts two numbers and returns their sum.
3. Create a function with three parameters.
4. Identify the different parts of a function declaration.
5. Intentionally create syntax errors and fix them.

---

# Key Takeaway

> **Function syntax is the grammar of JavaScript functions. By understanding each part of a function declaration, you can write clean, readable, reusable, and error-free code.**

---

# Next Lesson

<h2>
➡️ <a href="../0004_types_of_functions/types_of_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Types of Functions</strong>
</a>
</h2>