# Methods

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Methods?](#what-are-methods)
- [Why Do We Need Methods?](#why-do-we-need-methods)
- [How Methods Work](#how-methods-work)
- [Syntax](#syntax)
- [Methods vs Functions](#methods-vs-functions)
- [Examples](#examples)
- [Method Shorthand](#method-shorthand)
- [Methods and the `this` Keyword](#methods-and-the-this-keyword)
- [Built-in Methods](#built-in-methods)
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

- Understand what methods are.
- Differentiate between functions and methods.
- Create methods using different syntaxes.
- Use the `this` keyword inside methods.
- Apply methods in real-world JavaScript applications.

---

# Introduction

Think about a **smartphone**.

A smartphone has:

- Data (brand, model, storage, battery)
- Actions (call, sendMessage, takePhoto)

The data represents its **properties**, while the actions represent its **methods**.

Similarly, in JavaScript, an object stores data in **properties** and behavior in **methods**.

Methods allow objects to perform actions.

---

# What are Methods?

A **Method** is simply a function that belongs to an object.

When a function is stored as the value of an object's property, it is called a **method**.

Example

```javascript
const student = {

    name: "Sachin",

    study() {

        console.log("Studying JavaScript...");

    }

};

student.study();
```

Output

```
Studying JavaScript...
```

Here,

- `name` is a property.
- `study()` is a method.

---

# Why Do We Need Methods?

Without methods, objects would only store data.

Methods allow objects to:

- Perform actions.
- Modify their own data.
- Interact with other objects.
- Organize related behavior.
- Support object-oriented programming.

Methods make objects intelligent rather than just containers of data.

---

# How Methods Work

```text
Object Created
      │
      ▼
Properties Added
      │
      ▼
Methods Added
      │
      ▼
Method Called
      │
      ▼
Action Performed
```

---

# Syntax

Traditional Syntax

```javascript
const person = {

    name: "John",

    greet: function () {

        console.log("Hello");

    }

};
```

Modern Method Shorthand

```javascript
const person = {

    name: "John",

    greet() {

        console.log("Hello");

    }

};
```

Both are equivalent.

---

# Methods vs Functions

| Function | Method |
|----------|---------|
| Independent | Belongs to an object |
| Called directly | Called through an object |
| May not use `this` | Usually uses `this` |
| Performs general tasks | Performs object-specific tasks |

Example Function

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

Example Method

```javascript
const person = {

    greet() {

        console.log("Hello");

    }

};

person.greet();
```

---

# Examples

## Example 1 — Student Object

```javascript
const student = {

    name: "Sachin",

    study() {

        console.log(`${this.name} is studying`);

    }

};

student.study();
```

Output

```
Sachin is studying
```

---

## Example 2 — Bank Account

```javascript
const account = {

    balance: 1000,

    deposit(amount) {

        this.balance += amount;

    }

};

account.deposit(500);

console.log(account.balance);
```

Output

```
1500
```

---

## Example 3 — Car Object

```javascript
const car = {

    brand: "Tesla",

    start() {

        console.log(`${this.brand} started`);

    }

};

car.start();
```

Output

```
Tesla started
```

---

## Example 4 — Calculator

```javascript
const calculator = {

    add(a, b) {

        return a + b;

    }

};

console.log(calculator.add(10, 20));
```

Output

```
30
```

---

# Method Shorthand

ES6 introduced a shorter way to define methods.

Old Syntax

```javascript
const user = {

    greet: function () {

        console.log("Hello");

    }

};
```

Modern Syntax

```javascript
const user = {

    greet() {

        console.log("Hello");

    }

};
```

The shorthand is cleaner and recommended for modern JavaScript.

---

# Methods and the `this` Keyword

Inside a method, `this` refers to the object that called the method.

Example

```javascript
const employee = {

    name: "Rahul",

    work() {

        console.log(this.name);

    }

};

employee.work();
```

Output

```
Rahul
```

Without `this`, the method would not know which object's data to access.

---

# Built-in Methods

JavaScript provides many built-in methods.

String Methods

```javascript
"JavaScript".toUpperCase();
```

Output

```
JAVASCRIPT
```

---

Array Methods

```javascript
const numbers = [1, 2, 3];

numbers.push(4);
```

---

Math Methods

```javascript
Math.max(10, 50, 20);
```

Output

```
50
```

---

Date Methods

```javascript
const today = new Date();

today.getFullYear();
```

These are examples of methods provided by JavaScript itself.

---

# Real-World Use Cases

Methods are used everywhere.

Examples include:

- User authentication.
- Shopping cart operations.
- Banking systems.
- Games.
- REST APIs.
- React components.
- DOM manipulation.
- Database models.
- Utility libraries.

Example

```javascript
shoppingCart.addItem(product);

shoppingCart.removeItem(product);
```

---

# Advantages

Methods provide several benefits.

- Organize related functionality.
- Improve readability.
- Support encapsulation.
- Enable object-oriented programming.
- Promote reusable code.
- Work naturally with `this`.

---

# Limitations

Methods also have some drawbacks.

- Can lose `this` when passed as callbacks.
- Too many methods inside objects increase memory usage.
- Shared methods are better stored on prototypes or classes.

---

# Common Mistakes

## Forgetting Parentheses

❌ Incorrect

```javascript
person.greet;
```

---

✅ Correct

```javascript
person.greet();
```

---

## Using Arrow Functions as Methods

❌ Incorrect

```javascript
const person = {

    name: "Sachin",

    greet: () => {

        console.log(this.name);

    }

};
```

Arrow functions do not have their own `this`.

---

✅ Correct

```javascript
const person = {

    name: "Sachin",

    greet() {

        console.log(this.name);

    }

};
```

---

## Duplicating Methods

Creating the same method for every object wastes memory.

Instead, use:

- Classes
- Constructor prototypes
- Shared utility functions

---

# Best Practices

- Use method shorthand.
- Use meaningful method names.
- Keep methods focused on one task.
- Use `this` when accessing object properties.
- Avoid large methods.
- Share common methods through prototypes or classes.

---

# Summary

In this lesson, you learned:

- What methods are.
- Difference between methods and functions.
- Method shorthand syntax.
- Using `this` inside methods.
- Built-in methods.
- Advantages and limitations.
- Common mistakes.
- Best practices.

Methods are one of the most important building blocks of object-oriented JavaScript.

---

# Interview Questions

1. What is a method?
2. What is the difference between a method and a function?
3. What does `this` refer to inside a method?
4. What is method shorthand?
5. Why shouldn't arrow functions usually be used as methods?
6. Name some built-in JavaScript methods.
7. Why are methods important in object-oriented programming?

---

# Practice Exercise

1. Create a `Student` object with two methods.
2. Build a `Calculator` object with four arithmetic methods.
3. Create a `BankAccount` object with `deposit()` and `withdraw()` methods.
4. Convert a traditional method into shorthand syntax.
5. Create a `Car` object that uses `this` to display its brand.

---

# Key Takeaway

> **A method is a function that belongs to an object. Methods define an object's behavior, often use the `this` keyword to access object properties, and are fundamental to writing clean, organized, and object-oriented JavaScript code.**

---

# Next Lesson

<h2>
➡️ <a href="../0030_getters_and_setters/getters_and_setters.md" style="color:#1E90FF; text-decoration:none;">
<strong>Getters and Setters</strong>
</a>
</h2>