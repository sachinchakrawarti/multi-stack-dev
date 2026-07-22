# `bind()`, `call()`, and `apply()`

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are `bind()`, `call()`, and `apply()`?](#what-are-bind-call-and-apply)
- [Why Do We Need Them?](#why-do-we-need-them)
- [How They Work](#how-they-work)
- [Syntax](#syntax)
- [`call()` Method](#call-method)
- [`apply()` Method](#apply-method)
- [`bind()` Method](#bind-method)
- [`call()` vs `apply()` vs `bind()`](#call-vs-apply-vs-bind)
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

- Understand `call()`, `apply()`, and `bind()`.
- Control the value of `this`.
- Borrow methods from other objects.
- Understand the differences between these three methods.
- Use them in real-world JavaScript applications.

---

# Introduction

Imagine two employees working in different departments.

One employee knows how to generate reports, while the other does not.

Instead of writing the same code again, the second employee temporarily uses the first employee's reporting tool.

Similarly, JavaScript allows one object to **borrow methods** from another object.

The methods **`call()`**, **`apply()`**, and **`bind()`** let us control what `this` refers to when a function executes.

---

# What are `bind()`, `call()`, and `apply()`?

These are built-in methods available on every JavaScript function.

They allow us to:

- Change the value of `this`.
- Borrow methods.
- Reuse existing functions.
- Pass arguments in different ways.

---

# Why Do We Need Them?

Without these methods:

- Functions may lose their intended `this`.
- Code becomes repetitive.
- Methods cannot easily be shared.
- Callback functions may behave unexpectedly.

They provide flexibility while writing reusable JavaScript code.

---

# How They Work

```text
Function Created
        │
        ▼
Choose Object
        │
        ▼
call()
apply()
bind()
        │
        ▼
this Points to Selected Object
        │
        ▼
Function Executes
```

---

# Syntax

### `call()`

```javascript
functionName.call(thisObject, arg1, arg2);
```

---

### `apply()`

```javascript
functionName.apply(thisObject, [arg1, arg2]);
```

---

### `bind()`

```javascript
const newFunction = functionName.bind(thisObject);
```

---

# `call()` Method

`call()` immediately invokes a function with a specified value of `this`.

Example

```javascript
const person = {

    name: "Sachin"

};

function greet(city) {

    console.log(`Hello ${this.name} from ${city}`);

}

greet.call(person, "Bhopal");
```

Output

```
Hello Sachin from Bhopal
```

---

# `apply()` Method

`apply()` is similar to `call()`, but arguments are passed as an array.

Example

```javascript
const person = {

    name: "Sachin"

};

function greet(city, country) {

    console.log(`${this.name} lives in ${city}, ${country}`);

}

greet.apply(person, ["Bhopal", "India"]);
```

Output

```
Sachin lives in Bhopal, India
```

---

# `bind()` Method

Unlike `call()` and `apply()`, `bind()` does **not** execute the function immediately.

Instead, it returns a **new function** with `this` permanently bound.

Example

```javascript
const person = {

    name: "Sachin"

};

function greet() {

    console.log(`Hello ${this.name}`);

}

const welcome = greet.bind(person);

welcome();
```

Output

```
Hello Sachin
```

---

# `call()` vs `apply()` vs `bind()`

| Feature | `call()` | `apply()` | `bind()` |
|----------|----------|-----------|-----------|
| Executes immediately | ✅ Yes | ✅ Yes | ❌ No |
| Returns new function | ❌ No | ❌ No | ✅ Yes |
| Arguments | Individually | Array | Individually (during binding or invocation) |
| Changes `this` | ✅ Yes | ✅ Yes | ✅ Yes |

---

# Examples

## Example 1 — Method Borrowing

```javascript
const person1 = {

    name: "Sachin"

};

const person2 = {

    name: "Rahul"

};

function introduce() {

    console.log(`I am ${this.name}`);

}

introduce.call(person1);

introduce.call(person2);
```

Output

```
I am Sachin
I am Rahul
```

---

## Example 2 — Using `apply()`

```javascript
function add(a, b) {

    console.log(a + b);

}

add.apply(null, [10, 20]);
```

Output

```
30
```

---

## Example 3 — Using `bind()`

```javascript
const student = {

    name: "Aman"

};

function display() {

    console.log(this.name);

}

const showStudent = display.bind(student);

showStudent();
```

Output

```
Aman
```

---

## Example 4 — Callback Problem Solved

```javascript
const person = {

    name: "Sachin",

    greet() {

        setTimeout(function () {

            console.log(this.name);

        }.bind(this), 1000);

    }

};

person.greet();
```

Output

```
Sachin
```

`bind()` ensures that `this` still refers to the `person` object.

---

# Real-World Use Cases

These methods are commonly used in:

- Event handlers.
- React class components.
- Callback functions.
- Method borrowing.
- Library development.
- Object-oriented programming.
- API wrappers.
- Utility functions.

Example

```javascript
button.addEventListener(
    "click",
    person.greet.bind(person)
);
```

---

# Advantages

Using `bind()`, `call()`, and `apply()` provides several benefits.

- Controls `this`.
- Reduces duplicate code.
- Supports method borrowing.
- Improves code reuse.
- Solves callback context issues.
- Useful in frameworks and libraries.

---

# Limitations

These methods also have some limitations.

- Beginners often confuse them.
- Excessive use can reduce readability.
- Arrow functions ignore `bind()`, `call()`, and `apply()` because they inherit `this` lexically.

---

# Common Mistakes

## Forgetting that `bind()` Returns a Function

❌ Incorrect

```javascript
const result = greet.bind(person);

console.log(result);
```

This logs the bound function itself.

---

✅ Correct

```javascript
const result = greet.bind(person);

result();
```

---

## Passing Arguments Incorrectly to `apply()`

❌ Incorrect

```javascript
greet.apply(person, "Delhi");
```

---

✅ Correct

```javascript
greet.apply(person, ["Delhi"]);
```

---

## Using `call()` with an Array

❌ Incorrect

```javascript
greet.call(person, ["Delhi"]);
```

---

✅ Correct

```javascript
greet.call(person, "Delhi");
```

---

## Using `bind()` on Arrow Functions

Arrow functions ignore `bind()` because they don't have their own `this`.

---

# Best Practices

- Use `call()` when arguments are known individually.
- Use `apply()` when arguments are already in an array.
- Use `bind()` for callbacks and event handlers.
- Prefer arrow functions for simple callbacks.
- Avoid unnecessary rebinding.
- Write reusable methods instead of duplicate functions.

---

# Summary

In this lesson, you learned:

- What `bind()`, `call()`, and `apply()` are.
- How they control the value of `this`.
- Method borrowing.
- Differences between the three methods.
- Real-world applications.
- Common mistakes and best practices.

These methods are essential tools for managing function execution context and writing reusable JavaScript code.

---

# Interview Questions

1. What is the purpose of `call()`?
2. What is the difference between `call()` and `apply()`?
3. How is `bind()` different from `call()`?
4. What does `bind()` return?
5. Can arrow functions use `bind()`?
6. What is method borrowing?
7. When would you use `apply()` instead of `call()`?

---

# Practice Exercise

1. Create two objects and borrow a method using `call()`.
2. Use `apply()` to pass an array of arguments.
3. Create a bound function using `bind()`.
4. Fix a callback that loses its `this` context using `bind()`.
5. Compare the outputs of `call()`, `apply()`, and `bind()`.

---

# Key Takeaway

> **`call()`, `apply()`, and `bind()` allow you to control the value of `this` in JavaScript functions. `call()` and `apply()` invoke functions immediately, while `bind()` creates a new function with a permanently bound context, making them powerful tools for method borrowing, callbacks, and reusable code.**

---

# Next Lesson

<h2>
➡️ <a href="../0027_constructor_functions/constructor_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Constructor Functions</strong>
</a>
</h2>