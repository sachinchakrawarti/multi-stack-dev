# The `this` Keyword

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is `this`?](#what-is-this)
- [Why Do We Need `this`?](#why-do-we-need-this)
- [How `this` Works](#how-this-works)
- [Syntax](#syntax)
- [`this` in Different Contexts](#this-in-different-contexts)
- [Examples](#examples)
- [Arrow Functions and `this`](#arrow-functions-and-this)
- [Common Rules of `this`](#common-rules-of-this)
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

- Understand what the `this` keyword is.
- Learn how `this` changes in different situations.
- Understand `this` inside objects, functions, and classes.
- Learn how arrow functions handle `this`.
- Avoid common mistakes involving `this`.

---

# Introduction

Imagine you say,

> "I am a teacher."

The meaning of **I** depends on **who is speaking**.

Similarly, in JavaScript, the meaning of `this` depends on **how a function is called**, not where it is written.

Unlike normal variables, the value of `this` is determined **at runtime**.

Understanding `this` is essential for writing object-oriented JavaScript, event handlers, classes, React applications, and Node.js programs.

---

# What is `this`?

The `this` keyword is a special JavaScript keyword that refers to an object.

**Which object?**

It depends on **how the current function is invoked**.

Example

```javascript
const person = {

    name: "Sachin",

    greet() {

        console.log(this.name);

    }

};

person.greet();
```

Output

```
Sachin
```

Here, `this` refers to the `person` object.

---

# Why Do We Need `this`?

The `this` keyword allows us to:

- Access an object's own properties.
- Reuse functions with different objects.
- Build classes and objects.
- Avoid hardcoding object names.
- Support object-oriented programming.

Without `this`, methods would not know which object they belong to.

---

# How `this` Works

Execution Flow

```text
Function Called
       │
       ▼
How was it called?
       │
       ├───────────────┐
       ▼               ▼
Object Method     Normal Function
       │               │
       ▼               ▼
this = Object     Depends on Mode
```

The value of `this` is decided **when the function is called**, not when it is created.

---

# Syntax

```javascript
const object = {

    property: value,

    method() {

        console.log(this.property);

    }

};
```

---

# `this` in Different Contexts

## 1. Inside an Object Method

```javascript
const car = {

    brand: "Tesla",

    showBrand() {

        console.log(this.brand);

    }

};

car.showBrand();
```

Output

```
Tesla
```

Here, `this` refers to `car`.

---

## 2. Inside a Regular Function

```javascript
function display() {

    console.log(this);

}

display();
```

In browsers:

- Non-strict mode → `window`
- Strict mode → `undefined`

---

## 3. Inside a Constructor Function

```javascript
function Student(name) {

    this.name = name;

}

const student = new Student("Rahul");

console.log(student.name);
```

Output

```
Rahul
```

Here, `this` refers to the newly created object.

---

## 4. Inside a Class

```javascript
class User {

    constructor(name) {

        this.name = name;

    }

    showName() {

        console.log(this.name);

    }

}

const user = new User("John");

user.showName();
```

Output

```
John
```

---

## 5. Inside an Event Listener

```javascript
button.addEventListener("click", function () {

    console.log(this);

});
```

Here, `this` refers to the HTML button that triggered the event.

---

# Examples

## Example 1 — Object Method

```javascript
const employee = {

    name: "Alice",

    work() {

        console.log(this.name);

    }

};

employee.work();
```

---

## Example 2 — Constructor Function

```javascript
function Book(title) {

    this.title = title;

}

const book = new Book("JavaScript");

console.log(book.title);
```

---

## Example 3 — Class

```javascript
class Animal {

    constructor(name) {

        this.name = name;

    }

    speak() {

        console.log(this.name);

    }

}

const dog = new Animal("Dog");

dog.speak();
```

---

## Example 4 — Callback Problem

```javascript
const person = {

    name: "Sachin",

    greet() {

        setTimeout(function () {

            console.log(this.name);

        }, 1000);

    }

};

person.greet();
```

Output

```
undefined
```

The callback has its own `this`.

---

# Arrow Functions and `this`

Arrow functions **do not create their own `this`**.

Instead, they inherit `this` from the surrounding scope.

Example

```javascript
const person = {

    name: "Sachin",

    greet() {

        setTimeout(() => {

            console.log(this.name);

        }, 1000);

    }

};

person.greet();
```

Output

```
Sachin
```

This is one of the biggest reasons arrow functions are widely used in callbacks.

---

# Common Rules of `this`

| Situation | Value of `this` |
|-----------|-----------------|
| Global (Browser, non-strict) | `window` |
| Global (Strict Mode) | `undefined` |
| Object Method | The object |
| Constructor (`new`) | Newly created object |
| Class Method | Class instance |
| Event Handler | Element that triggered the event |
| Arrow Function | Inherits from parent scope |

---

# Real-World Use Cases

The `this` keyword is used in:

- Object methods.
- JavaScript classes.
- React class components.
- Event listeners.
- Constructor functions.
- DOM manipulation.
- Game development.
- Node.js applications.

Example

```javascript
class BankAccount {

    constructor(balance) {

        this.balance = balance;

    }

}
```

---

# Advantages

Using `this` provides several benefits.

- Supports object-oriented programming.
- Eliminates hardcoded object names.
- Makes methods reusable.
- Improves code readability.
- Enables dynamic object behavior.

---

# Limitations

The `this` keyword can sometimes be confusing because:

- Its value changes depending on how a function is called.
- Callbacks often lose the expected `this`.
- Beginners frequently confuse arrow functions with regular functions.

---

# Common Mistakes

## Forgetting `new`

❌ Incorrect

```javascript
function User(name) {

    this.name = name;

}

const user = User("John");
```

Always use `new` with constructor functions.

---

## Losing `this` Inside a Callback

❌ Incorrect

```javascript
setTimeout(function () {

    console.log(this.name);

}, 1000);
```

---

✅ Correct

```javascript
setTimeout(() => {

    console.log(this.name);

}, 1000);
```

---

## Using Arrow Functions as Object Methods

❌ Incorrect

```javascript
const person = {

    name: "John",

    greet: () => {

        console.log(this.name);

    }

};
```

Arrow functions should generally **not** be used as object methods because they inherit `this` from the outer scope.

---

# Best Practices

- Use regular functions for object methods.
- Use arrow functions for callbacks.
- Always use `new` with constructor functions.
- Prefer classes for modern object-oriented JavaScript.
- Understand how a function is called before using `this`.
- Avoid relying on the global `this`.

---

# Summary

In this lesson, you learned:

- What the `this` keyword is.
- How JavaScript determines the value of `this`.
- `this` in objects, functions, constructors, classes, and event handlers.
- Arrow functions and lexical `this`.
- Common mistakes and best practices.

The `this` keyword is a core JavaScript concept that becomes essential when working with objects, classes, frameworks like React, and browser APIs.

---

# Interview Questions

1. What is the `this` keyword in JavaScript?
2. How is the value of `this` determined?
3. What is the difference between `this` in regular and arrow functions?
4. What does `this` refer to inside a constructor function?
5. Why do callbacks sometimes lose `this`?
6. Why should arrow functions generally not be used as object methods?
7. What does `this` refer to inside a class method?

---

# Practice Exercise

1. Create an object with a method that prints one of its properties using `this`.
2. Create a constructor function using `new`.
3. Create a class with two methods using `this`.
4. Demonstrate the difference between a regular function and an arrow function inside `setTimeout()`.
5. Build a simple `Student` object that displays its name using `this`.

---

# Key Takeaway

> **The `this` keyword refers to an object determined by how a function is called. Understanding its behavior in objects, constructors, classes, callbacks, and arrow functions is essential for mastering JavaScript and writing reliable, object-oriented code.**

---

# Next Lesson

<h2>
➡️ <a href="../0026_bind_call_apply/bind_call_apply.md" style="color:#1E90FF; text-decoration:none;">
<strong><code>bind()</code>, <code>call()</code>, and <code>apply()</code></strong>
</a>
</h2>