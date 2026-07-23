# Types of Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Learn Different Types of Functions?](#why-learn-different-types-of-functions)
- [Classification of JavaScript Functions](#classification-of-javascript-functions)
- [1. Function Declaration](#1-function-declaration)
- [2. Function Expression](#2-function-expression)
- [3. Anonymous Function](#3-anonymous-function)
- [4. Arrow Function](#4-arrow-function)
- [5. Immediately Invoked Function Expression (IIFE)](#5-immediately-invoked-function-expression-iife)
- [6. Callback Function](#6-callback-function)
- [7. Higher-Order Function](#7-higher-order-function)
- [8. Constructor Function](#8-constructor-function)
- [9. Generator Function](#9-generator-function)
- [10. Async Function](#10-async-function)
- [Comparison Table](#comparison-table)
- [Choosing the Right Function Type](#choosing-the-right-function-type)
- [Real-World Examples](#real-world-examples)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

## Learning Objectives

After completing this lesson, you will be able to:

- Identify the major types of JavaScript functions.
- Understand when each function type should be used.
- Compare different function styles.
- Recognize modern JavaScript function syntax.
- Choose the appropriate function type for different scenarios.

---

# Introduction

JavaScript is a flexible programming language that allows developers to create functions in multiple ways.

Although every function performs a task, different function types are designed for different programming needs.

For example:

- Some functions are best for reusable logic.
- Some are useful for event handling.
- Some simplify asynchronous programming.
- Some are used to create objects.

Understanding these function types is essential for writing modern JavaScript applications.

---

# Why Learn Different Types of Functions?

Imagine trying to build a house using only one tool.

It would be possible, but extremely inefficient.

Similarly, JavaScript provides multiple function types because different situations require different approaches.

Knowing when to use each type makes your code:

- Cleaner
- Faster to write
- Easier to maintain
- More readable
- More professional

---

# Classification of JavaScript Functions

JavaScript provides several commonly used function types.

```text
Functions
│
├── Function Declaration
├── Function Expression
├── Anonymous Function
├── Arrow Function
├── IIFE
├── Callback Function
├── Higher-Order Function
├── Constructor Function
├── Generator Function
└── Async Function
```

---

# 1. Function Declaration

The most common way to create a function.

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

### Characteristics

- Has a name.
- Hoisted.
- Easy to read.
- Best for reusable functions.

---

# 2. Function Expression

A function stored inside a variable.

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

### Characteristics

- Stored in variables.
- Not fully hoisted.
- Useful when passing functions around.

---

# 3. Anonymous Function

A function without a name.

```javascript
setTimeout(function () {
    console.log("Executed");
}, 1000);
```

### Characteristics

- No function name.
- Mostly used as callbacks.
- Often combined with function expressions.

---

# 4. Arrow Function

Introduced in ES6.

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

### Characteristics

- Short syntax.
- Lexical `this`.
- Popular in React and modern JavaScript.

---

# 5. Immediately Invoked Function Expression (IIFE)

Runs immediately after being created.

```javascript
(function () {
    console.log("Executed immediately");
})();
```

### Characteristics

- Executes once.
- Creates private scope.
- Prevents variable pollution.

---

# 6. Callback Function

Passed as an argument to another function.

```javascript
function greet(callback) {

    console.log("Hello");

    callback();

}

greet(function () {

    console.log("Welcome!");

});
```

### Characteristics

- Used extensively in asynchronous programming.
- Common in APIs and event handling.

---

# 7. Higher-Order Function

A function that accepts another function or returns one.

```javascript
function calculate(operation) {

    operation();

}

calculate(function () {

    console.log("Running");

});
```

Examples:

- `map()`
- `filter()`
- `reduce()`
- `forEach()`

---

# 8. Constructor Function

Used to create objects.

```javascript
function Student(name) {

    this.name = name;

}

const s1 = new Student("Sachin");

console.log(s1.name);
```

Before ES6 classes, constructor functions were widely used for object creation.

---

# 9. Generator Function

Generates values one at a time.

```javascript
function* numbers() {

    yield 1;

    yield 2;

    yield 3;

}

const iterator = numbers();

console.log(iterator.next());

console.log(iterator.next());
```

Useful for:

- Iterators
- Lazy evaluation
- Large datasets

---

# 10. Async Function

Designed for asynchronous programming.

```javascript
async function fetchData() {

    return "Data Loaded";

}

fetchData().then(console.log);
```

Frequently used with:

- `await`
- APIs
- Databases
- File systems

---

# Comparison Table

| Function Type | Named | Hoisted | Modern | Common Use |
|---------------|--------|----------|---------|------------|
| Function Declaration | ✅ | ✅ | ✅ | General Programming |
| Function Expression | Optional | ❌ | ✅ | Variables |
| Anonymous Function | ❌ | ❌ | ✅ | Callbacks |
| Arrow Function | Optional | ❌ | ✅ | Modern JavaScript |
| IIFE | Optional | ❌ | Less Common | Private Scope |
| Callback Function | Optional | Depends | ✅ | Async Programming |
| Higher-Order Function | Optional | Depends | ✅ | Functional Programming |
| Constructor Function | ✅ | ✅ | Legacy | Object Creation |
| Generator Function | ✅ | ✅ | ✅ | Iteration |
| Async Function | ✅ | ✅ | ✅ | APIs & Async Tasks |

---

# Choosing the Right Function Type

| Situation | Recommended Function |
|-----------|----------------------|
| General reusable logic | Function Declaration |
| Store function in variable | Function Expression |
| React components | Arrow Function |
| Event handlers | Arrow / Anonymous |
| Execute immediately | IIFE |
| API requests | Async Function |
| Array methods | Callback Function |
| Functional programming | Higher-Order Function |
| Object creation | Constructor Function |
| Lazy data generation | Generator Function |

---

# Real-World Examples

Different function types are used throughout JavaScript development.

| Application | Function Type |
|-------------|---------------|
| React Components | Arrow Functions |
| Express.js Routes | Callback Functions |
| API Requests | Async Functions |
| Event Listeners | Anonymous Functions |
| Array Methods | Higher-Order Functions |
| Object Factories | Constructor Functions |
| Iterators | Generator Functions |

---

# Summary

In this lesson, you learned:

- JavaScript supports multiple types of functions.
- Every function type serves a specific purpose.
- Modern JavaScript heavily relies on Arrow, Callback, Higher-Order, and Async functions.
- Understanding function types helps you write cleaner and more efficient applications.

The following lessons explore each function type in detail.

---

# Interview Questions

1. What are the different types of JavaScript functions?
2. What is the difference between a function declaration and a function expression?
3. Why were arrow functions introduced?
4. What is an IIFE?
5. What is a callback function?
6. What is a higher-order function?
7. When should async functions be used?
8. What is the purpose of generator functions?

---

# Practice Exercise

1. Write one example of each function type.
2. Convert a regular function into an arrow function.
3. Create a callback function.
4. Build a simple constructor function.
5. Create an async function that returns a message.

---

# Key Takeaway

> **JavaScript offers multiple function types because different programming situations require different solutions. Mastering these function types is essential for writing clean, modern, and professional JavaScript applications.**

---

# Next Lesson

<h2>
➡️ <a href="../0005_function_declaration/function_declaration.md" style="color:#1E90FF; text-decoration:none;">
<strong>Function Declaration</strong>
</a>
</h2>