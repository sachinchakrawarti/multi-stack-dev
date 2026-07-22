# Anonymous Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is an Anonymous Function?](#what-is-anonymous-function)
- [Why Use Anonymous Functions?](#why-use-anonymous-functions)
- [Basic Syntax](#basic-syntax)
- [How Anonymous Functions Work](#how-anonymous-functions-work)
- [Anonymous Function vs Named Function](#anonymous-function-vs-named-function)
- [Examples](#examples)
- [Anonymous Functions as Callbacks](#anonymous-functions-as-callbacks)
- [Anonymous Functions with Timers](#anonymous-functions-with-timers)
- [Anonymous Functions with Event Listeners](#anonymous-functions-with-event-listeners)
- [Anonymous Functions in Array Methods](#anonymous-functions-in-array-methods)
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
- Explain why anonymous functions are useful.
- Use anonymous functions in callbacks and events.
- Differentiate anonymous and named functions.
- Write clean and effective anonymous functions.

---

# Introduction

In JavaScript, not every function needs a name.

Sometimes a function is required only once—for example, when responding to a button click, processing an array, or executing code after a delay.

Instead of creating a separate named function, JavaScript allows you to create a function **without a name**.

This is called an **Anonymous Function**.

Anonymous functions are one of the most frequently used function types in modern JavaScript and are widely used in frameworks like **React**, **Node.js**, **Vue**, and **Angular**.

---

# What is an Anonymous Function?

An **Anonymous Function** is a function that **does not have a name**.

Instead of assigning a name, it is usually:

- Stored in a variable.
- Passed as an argument.
- Returned from another function.
- Executed immediately.

Example:

```javascript
const greet = function () {
    console.log("Hello!");
};

greet();
```

The function has **no name**, but it can still be executed using the variable.

---

# Why Use Anonymous Functions?

Anonymous functions make code more concise and flexible.

They are commonly used when:

- A function is needed only once.
- Passing a function as an argument.
- Handling events.
- Working with timers.
- Processing arrays.
- Writing callbacks.

Using a named function for these situations would often create unnecessary code.

---

# Basic Syntax

```javascript
function () {

    // Code

}
```

Anonymous functions cannot exist alone.

They are usually used like this:

```javascript
const greet = function () {

    console.log("Hello!");

};
```

---

# How Anonymous Functions Work

```javascript
const welcome = function () {

    console.log("Welcome!");

};

welcome();
```

Execution Flow

```text
Create Variable
       │
       ▼
Create Anonymous Function
       │
       ▼
Store Function
       │
       ▼
Call Variable
       │
       ▼
Execute Function
```

---

# Anonymous Function vs Named Function

| Feature | Anonymous Function | Named Function |
|----------|--------------------|----------------|
| Has a name | ❌ | ✅ |
| Can be reused directly | Through variable | Directly |
| Common in callbacks | ✅ | Rare |
| Better debugging | ❌ | ✅ |
| Shorter syntax | ✅ | ❌ |

---

# Examples

## Example 1 — Store in a Variable

```javascript
const message = function () {

    console.log("Welcome to JavaScript");

};

message();
```

---

## Example 2 — Return a Value

```javascript
const multiply = function (a, b) {

    return a * b;

};

console.log(multiply(4, 6));
```

---

## Example 3 — Multiple Parameters

```javascript
const student = function (name, age) {

    console.log(name);

    console.log(age);

};

student("Sachin", 24);
```

---

# Anonymous Functions as Callbacks

One of the biggest uses of anonymous functions is **callbacks**.

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

```text
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

The function executes automatically after the specified delay.

---

# Anonymous Functions with Event Listeners

```javascript
button.addEventListener("click", function () {

    console.log("Button Clicked");

});
```

Whenever the button is clicked, the anonymous function runs.

---

# Anonymous Functions in Array Methods

Anonymous functions are heavily used with array methods.

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {

    console.log(number);

});
```

Output

```text
1
2
3
4
```

---

# Advantages

Anonymous functions offer several benefits.

- Less code.
- Easy to pass as arguments.
- Perfect for callbacks.
- Great for event handling.
- Common in asynchronous programming.
- Improve code readability when used appropriately.

---

# Limitations

Anonymous functions also have some drawbacks.

- Harder to debug.
- No meaningful function name.
- Difficult to reuse.
- Can reduce readability if overused.

---

# Common Mistakes

## Forgetting to Assign the Function

❌ Incorrect

```javascript
function () {

    console.log("Hello");

}
```

This produces a syntax error.

---

✅ Correct

```javascript
const greet = function () {

    console.log("Hello");

};
```

---

## Trying to Call It Without a Variable

❌ Incorrect

```javascript
function () {

}();
```

---

✅ Correct

```javascript
(function () {

})();
```

This is called an **Immediately Invoked Function Expression (IIFE)**, which you'll learn in a later lesson.

---

## Using Anonymous Functions Everywhere

Creating anonymous functions for every task can make large applications harder to debug.

Use named functions when reuse or debugging is important.

---

# Best Practices

- Use anonymous functions for one-time tasks.
- Prefer arrow functions in modern JavaScript when appropriate.
- Keep anonymous functions short.
- Avoid deeply nested anonymous callbacks.
- Use meaningful named functions when logic becomes complex.

---

# Summary

In this lesson, you learned:

- What an anonymous function is.
- Why anonymous functions are widely used.
- How they work.
- Their role in callbacks, timers, event listeners, and array methods.
- Advantages and limitations.
- Best practices for writing anonymous functions.

Anonymous functions are a core part of modern JavaScript and are used extensively in real-world applications.

---

# Interview Questions

1. What is an anonymous function?
2. Why are anonymous functions useful?
3. Where are anonymous functions commonly used?
4. Can an anonymous function be reused?
5. What is the difference between anonymous and named functions?
6. Why are anonymous functions common in callbacks?
7. What are the disadvantages of anonymous functions?

---

# Practice Exercise

1. Create an anonymous function that prints your name.
2. Write an anonymous function that adds two numbers.
3. Use an anonymous function with `setTimeout()`.
4. Use an anonymous function with `forEach()`.
5. Compare anonymous and named functions with examples.

---

# Key Takeaway

> **Anonymous functions are unnamed functions that are commonly used for one-time operations such as callbacks, event handling, timers, and array processing. They make JavaScript flexible, concise, and powerful.**

---

# Next Lesson

<h2>
➡️ <a href="../0009_arrow_functions/arrow_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Arrow Functions</strong>
</a>
</h2>