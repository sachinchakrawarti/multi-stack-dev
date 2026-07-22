# Parameters

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Parameters?](#what-are-parameters)
- [Why Do We Need Parameters?](#why-do-we-need-parameters)
- [Function Without Parameters](#function-without-parameters)
- [Function With Parameters](#function-with-parameters)
- [How Parameters Work](#how-parameters-work)
- [Types of Parameters](#types-of-parameters)
- [Examples](#examples)
- [Parameters vs Arguments](#parameters-vs-arguments)
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

- Understand what parameters are.
- Differentiate between parameters and arguments.
- Create functions with single and multiple parameters.
- Explain how JavaScript handles parameters.
- Write reusable functions using parameters.

---

# Introduction

Imagine ordering food at a restaurant.

The chef follows the same recipe every time, but the ingredients you choose may change.

Similarly, a JavaScript function performs the same task, but the **input values** can change every time the function is called.

These input placeholders are called **parameters**.

Parameters make functions reusable, flexible, and powerful.

---

# What are Parameters?

A **parameter** is a variable declared inside the parentheses of a function definition.

It acts as a placeholder that receives a value when the function is called.

Example:

```javascript
function greet(name) {

    console.log("Hello " + name);

}
```

Here,

```javascript
name
```

is the **parameter**.

---

# Why Do We Need Parameters?

Without parameters, a function can only perform the same operation every time.

Parameters allow functions to:

- Accept different values.
- Produce different outputs.
- Reduce duplicate code.
- Increase flexibility.
- Improve reusability.

---

# Function Without Parameters

```javascript
function welcome() {

    console.log("Welcome!");

}

welcome();
```

Output

```
Welcome!
```

The output is always the same because no input is accepted.

---

# Function With Parameters

```javascript
function greet(name) {

    console.log("Hello " + name);

}

greet("Sachin");

greet("Alice");

greet("John");
```

Output

```
Hello Sachin
Hello Alice
Hello John
```

The function logic remains the same, but the output changes according to the parameter value.

---

# How Parameters Work

Consider the following example.

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
Arguments Assigned
        │
        ▼
Function Executes
        │
        ▼
Result Returned
```

Parameters receive values only when the function is executed.

---

# Types of Parameters

## Single Parameter

```javascript
function square(number) {

    return number * number;

}
```

---

## Multiple Parameters

```javascript
function add(a, b) {

    return a + b;

}
```

---

## No Parameters

```javascript
function hello() {

    console.log("Hello");

}
```

---

# Examples

## Example 1 — Greeting

```javascript
function greet(name) {

    console.log("Hello " + name);

}

greet("JavaScript");
```

---

## Example 2 — Addition

```javascript
function add(a, b) {

    return a + b;

}

console.log(add(10, 20));
```

---

## Example 3 — Rectangle Area

```javascript
function calculateArea(length, width) {

    return length * width;

}

console.log(calculateArea(12, 5));
```

---

## Example 4 — Student Information

```javascript
function student(name, age, city) {

    console.log(name);

    console.log(age);

    console.log(city);

}

student("Sachin", 24, "Bhopal");
```

---

# Parameters vs Arguments

Many beginners confuse these two terms.

| Parameters | Arguments |
|------------|-----------|
| Declared in the function definition | Passed during the function call |
| Variables | Actual values |
| Receive data | Send data |
| Exist inside the function | Exist outside the function |

Example

```javascript
function greet(name) {

    console.log(name);

}

greet("Sachin");
```

- `name` → Parameter
- `"Sachin"` → Argument

---

# Real-World Use Cases

Parameters are used in almost every JavaScript application.

Examples include:

- User login
- Payment processing
- Form validation
- Search functionality
- Calculator applications
- API requests
- Shopping cart calculations
- Report generation

Example

```javascript
function calculateDiscount(price, discount) {

    return price - (price * discount / 100);

}
```

---

# Advantages

Using parameters provides many benefits.

- Makes functions reusable.
- Reduces duplicate code.
- Accepts dynamic input.
- Improves maintainability.
- Makes applications more flexible.

---

# Limitations

Parameters themselves have very few limitations, but developers should be aware of the following:

- Incorrect values can produce unexpected results.
- Missing values may return `undefined`.
- Too many parameters can reduce readability.
- Poor parameter naming makes code confusing.

---

# Common Mistakes

## Confusing Parameters with Arguments

❌ Incorrect Explanation

```javascript
function greet(name) {

}

greet("Sachin");
```

Calling `"Sachin"` a parameter.

---

✅ Correct

- `name` → Parameter
- `"Sachin"` → Argument

---

## Forgetting Required Parameters

```javascript
function greet(name) {

    console.log(name);

}

greet();
```

Output

```
undefined
```

---

## Poor Parameter Names

❌

```javascript
function add(x, y) {

}
```

Better

```javascript
function add(firstNumber, secondNumber) {

}
```

Meaningful names improve readability.

---

# Best Practices

- Use meaningful parameter names.
- Keep the number of parameters reasonable.
- Pass only the required data.
- Validate important parameter values.
- Document complex parameters.
- Use default parameters when appropriate (covered in the next lesson).

---

# Summary

In this lesson, you learned:

- What parameters are.
- Why parameters are important.
- How parameters work.
- Different types of parameters.
- The difference between parameters and arguments.
- Real-world applications.
- Common mistakes and best practices.

Parameters allow a single function to work with different inputs, making code reusable and efficient.

---

# Interview Questions

1. What is a parameter in JavaScript?
2. What is the difference between parameters and arguments?
3. Can a function have multiple parameters?
4. What happens if a parameter is not provided?
5. Why are parameters important?
6. Can a function have no parameters?
7. What are good parameter naming practices?

---

# Practice Exercise

1. Write a function that accepts your name as a parameter.
2. Create a function that adds two numbers.
3. Create a function that calculates the area of a rectangle.
4. Write a function with three parameters.
5. Explain the difference between parameters and arguments using your own example.

---

# Key Takeaway

> **Parameters are variables declared in a function definition that act as placeholders for incoming values. They make functions reusable, flexible, and capable of handling different inputs without changing the function's logic.**

---

# Next Lesson

<h2>
➡️ <a href="../0011_arguments/arguments.md" style="color:#1E90FF; text-decoration:none;">
<strong>Arguments</strong>
</a>
</h2>