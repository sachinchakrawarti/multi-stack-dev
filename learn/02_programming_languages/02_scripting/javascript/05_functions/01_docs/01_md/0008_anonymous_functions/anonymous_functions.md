# Anonymous Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is an Anonymous Function?](#what-is-anonymous-function)
- [Why Do We Need Anonymous Functions?](#why-do-we-need-anonymous-functions)
- [Syntax](#syntax)
- [How Anonymous Functions Work](#how-anonymous-functions-work)
- [Anonymous Function vs Named Function](#anonymous-function-vs-named-function)
- [Examples](#examples)
- [Anonymous Functions as Callbacks](#anonymous-functions-as-callbacks)
- [Anonymous Functions with Timers](#anonymous-functions-with-timers)
- [Anonymous Functions with Events](#anonymous-functions-with-events)
- [Anonymous Functions with Array Methods](#anonymous-functions-with-array-methods)
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

- Understand what an anonymous function is.
- Differentiate anonymous and named functions.
- Use anonymous functions in callbacks and event handlers.
- Apply anonymous functions in array methods.
- Follow best practices when using anonymous functions.

---

# Introduction

In JavaScript, not every function requires a name. Sometimes a function is created only to perform a task once, such as responding to a button click, processing an array, or executing after a delay.

Instead of declaring a separate named function, JavaScript allows you to create a **function without a name**. This is called an **Anonymous Function**.

Anonymous functions are one of the most commonly used function types in modern JavaScript and are widely used in frameworks such as React, Node.js, Vue, Angular, and Express.

---

# What is an Anonymous Function?

An **Anonymous Function** is a function that **does not have a name**.

Unlike a function declaration, it cannot be called directly by name. Instead, it is usually:

- Assigned to a variable
- Passed as an argument
- Returned from another function
- Executed immediately

Example:

```javascript
const greet = function () {
    console.log("Hello!");
};

greet();
```

The function itself has no name, but it can be executed through the variable `greet`.

---

# Why Do We Need Anonymous Functions?

Anonymous functions are useful when a function is needed only once.

They are commonly used for:

- Callback functions
- Event handlers
- Timers
- Array methods
- Promise handling
- Asynchronous programming

Instead of creating a separate named function, an anonymous function keeps the code shorter and closer to where it is used.

---

# Syntax

## Basic Syntax

```javascript
function () {

    // Code

}
```

Since an anonymous function has no name, it is usually assigned to a variable.

```javascript
const greet = function () {

    console.log("Hello!");

};
```

---

# How Anonymous Functions Work

Example:

```javascript
const add = function (a, b) {

    return a + b;

};

console.log(add(10, 20));
```

Execution Flow

```text
Create Variable
       │
       ▼
Create Anonymous Function
       │
       ▼
Assign Function to Variable
       │
       ▼
Call Variable
       │
       ▼
Execute Function
       │
       ▼
Return Result
```

---

# Anonymous Function vs Named Function

| Feature | Anonymous Function | Named Function |
|----------|--------------------|----------------|
| Function Name | ❌ No | ✅ Yes |
| Reusable | Through Variable | Directly |
| Common in Callbacks | ✅ Yes | Rare |
| Easier Debugging | ❌ No | ✅ Yes |
| Short Syntax | ✅ Yes | ❌ No |

---

# Examples

## Example 1 — Store in a Variable

```javascript
const welcome = function () {

    console.log("Welcome to JavaScript!");

};

welcome();
```

---

## Example 2 — Return a Value

```javascript
const square = function (number) {

    return number * number;

};

console.log(square(6));
```

Output

```
36
```

---

## Example 3 — Multiple Parameters

```javascript
const calculateArea = function (length, width) {

    return length * width;

};

console.log(calculateArea(10, 5));
```

Output

```
50
```

---

# Anonymous Functions as Callbacks

Callbacks are one of the most common uses of anonymous functions.

```javascript
function greet(callback) {

    console.log("Hello");

    callback();

}

greet(function () {

    console.log("Welcome!");

});
```

Output

```
Hello
Welcome!
```

---

# Anonymous Functions with Timers

```javascript
setTimeout(function () {

    console.log("Executed after 2 seconds");

}, 2000);
```

The function executes automatically after two seconds.

---

# Anonymous Functions with Events

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {

    console.log("Button Clicked");

});
```

Whenever the button is clicked, the anonymous function executes.

---

# Anonymous Functions with Array Methods

Anonymous functions are heavily used with array methods.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {

    console.log(number);

});
```

Output

```
1
2
3
4
5
```

---

# Advantages

Anonymous functions provide several advantages.

- Less code.
- Ideal for one-time tasks.
- Excellent for callbacks.
- Common in asynchronous programming.
- Easy to pass as arguments.
- Improves code readability in many situations.

---

# Limitations

Anonymous functions also have some disadvantages.

- Harder to debug.
- Cannot be called directly by name.
- Difficult to reuse.
- Excessive use can reduce readability.

---

# Common Mistakes

## Forgetting to Store the Function

❌ Incorrect

```javascript
function () {

    console.log("Hello");

}
```

Produces a syntax error.

---

✅ Correct

```javascript
const greet = function () {

    console.log("Hello");

};
```

---

## Trying to Call the Function Without a Variable

❌ Incorrect

```javascript
function () {

}();
```

---

✅ Correct

```javascript
(function () {

    console.log("Executed");

})();
```

This is called an **Immediately Invoked Function Expression (IIFE)**, which will be covered later.

---

## Overusing Anonymous Functions

Avoid deeply nested anonymous functions.

❌

```javascript
setTimeout(function () {

    numbers.forEach(function () {

        users.map(function () {

        });

    });

});
```

Instead, break complex logic into reusable functions.

---

# Best Practices

- Use anonymous functions for one-time tasks.
- Prefer arrow functions in modern JavaScript when appropriate.
- Keep anonymous functions short.
- Avoid deeply nested callbacks.
- Use named functions for reusable logic.
- Write clear and readable code.

---

# Summary

In this lesson, you learned:

- What an anonymous function is.
- Why anonymous functions are useful.
- How anonymous functions work.
- Using anonymous functions with callbacks.
- Using anonymous functions with timers.
- Using anonymous functions with events.
- Using anonymous functions with array methods.
- Advantages and limitations.
- Best practices for writing anonymous functions.

Anonymous functions are an essential part of modern JavaScript development and are widely used in frontend and backend applications.

---

# Interview Questions

1. What is an anonymous function?
2. How does an anonymous function differ from a named function?
3. Where are anonymous functions commonly used?
4. Why are anonymous functions popular in callbacks?
5. Can an anonymous function be reused?
6. What are the advantages of anonymous functions?
7. What are the disadvantages of anonymous functions?

---

# Practice Exercise

1. Create an anonymous function that prints your name.
2. Write an anonymous function that returns the square of a number.
3. Use an anonymous function with `setTimeout()`.
4. Use an anonymous function with `addEventListener()`.
5. Use an anonymous function with `forEach()` to print an array.

---

# Key Takeaway

> **Anonymous functions are unnamed functions primarily used for one-time tasks such as callbacks, event handling, timers, and array processing. They make JavaScript code more concise, flexible, and expressive.**

---

# Next Lesson

<h2>
➡️ <a href="../0009_arrow_functions/arrow_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Arrow Functions</strong>
</a>
</h2>