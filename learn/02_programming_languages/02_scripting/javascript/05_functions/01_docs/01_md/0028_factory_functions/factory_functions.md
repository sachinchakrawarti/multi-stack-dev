# Factory Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Factory Functions?](#what-are-factory-functions)
- [Why Do We Need Factory Functions?](#why-do-we-need-factory-functions)
- [How Factory Functions Work](#how-factory-functions-work)
- [Syntax](#syntax)
- [Factory Functions vs Constructor Functions](#factory-functions-vs-constructor-functions)
- [Examples](#examples)
- [Using Closures with Factory Functions](#using-closures-with-factory-functions)
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

- Understand Factory Functions.
- Create objects without using the `new` keyword.
- Compare Factory Functions with Constructor Functions.
- Use Closures inside Factory Functions.
- Build reusable and maintainable object-creation logic.

---

# Introduction

Imagine walking into a bakery.

Instead of making a cake yourself, you simply place an order, and the bakery prepares a fresh cake for you.

A **Factory Function** works in the same way.

Instead of manually creating objects every time, you call a function, and it **returns a new object**.

Unlike Constructor Functions, Factory Functions **do not require the `new` keyword**.

They are simple, flexible, and commonly used in modern JavaScript applications.

---

# What are Factory Functions?

A **Factory Function** is a regular function that creates and returns an object.

Unlike Constructor Functions, Factory Functions:

- Do not use `new`.
- Do not use `this`.
- Return objects explicitly.

Example

```javascript
function createStudent(name, age) {

    return {

        name,

        age

    };

}

const student = createStudent("Sachin", 22);

console.log(student);
```

Output

```javascript
{
    name: "Sachin",
    age: 22
}
```

---

# Why Do We Need Factory Functions?

Without Factory Functions, we often repeat object creation.

Example

```javascript
const student1 = {

    name: "Sachin",

    age: 22

};

const student2 = {

    name: "Rahul",

    age: 21

};
```

Instead, we can reuse one Factory Function.

Benefits include:

- Simpler syntax.
- No need for `new`.
- Less chance of mistakes.
- Easy customization.
- Supports encapsulation through Closures.

---

# How Factory Functions Work

```text
Call Factory Function
         │
         ▼
Receive Input Values
         │
         ▼
Create Object
         │
         ▼
Return Object
         │
         ▼
Use the New Object
```

---

# Syntax

```javascript
function createObject(value) {

    return {

        property: value

    };

}

const obj = createObject("Hello");
```

---

# Factory Functions vs Constructor Functions

| Factory Function | Constructor Function |
|------------------|----------------------|
| Uses normal function | Uses constructor function |
| Does not require `new` | Requires `new` |
| Returns object explicitly | Returns object automatically |
| Does not use `this` | Uses `this` |
| Easier for beginners | More traditional OOP style |

---

# Examples

## Example 1 — Student Factory

```javascript
function createStudent(name, course) {

    return {

        name,

        course

    };

}

const student = createStudent("Sachin", "JavaScript");

console.log(student);
```

---

## Example 2 — Car Factory

```javascript
function createCar(brand, model) {

    return {

        brand,

        model

    };

}

const car = createCar("Tesla", "Model 3");

console.log(car);
```

---

## Example 3 — Product Factory

```javascript
function createProduct(name, price) {

    return {

        name,

        price,

        display() {

            console.log(`${this.name} - ₹${this.price}`);

        }

    };

}

const laptop = createProduct("Laptop", 65000);

laptop.display();
```

Output

```
Laptop - ₹65000
```

---

## Example 4 — Multiple Objects

```javascript
function createBook(title, author) {

    return {

        title,

        author

    };

}

const book1 = createBook("JavaScript", "John");

const book2 = createBook("Python", "David");

console.log(book1);

console.log(book2);
```

---

# Using Closures with Factory Functions

Factory Functions work beautifully with Closures.

Example

```javascript
function createCounter() {

    let count = 0;

    return {

        increment() {

            count++;

        },

        getCount() {

            return count;

        }

    };

}

const counter = createCounter();

counter.increment();

counter.increment();

console.log(counter.getCount());
```

Output

```
2
```

Here, `count` is private and cannot be accessed directly.

This is a common JavaScript design pattern.

---

# Real-World Use Cases

Factory Functions are used for creating:

- User objects.
- Shopping cart items.
- Products.
- Bank accounts.
- API response objects.
- Configuration objects.
- Game characters.
- UI components.
- State management.

Example

```javascript
const admin = createUser("Admin", "Administrator");
```

---

# Advantages

Factory Functions provide several benefits.

- No need for `new`.
- Easy to understand.
- Cleaner syntax.
- Supports Closures.
- Better encapsulation.
- Less error-prone.
- Flexible object creation.

---

# Limitations

Factory Functions also have some drawbacks.

- Methods are recreated for every object unless shared separately.
- May consume more memory than prototype-based approaches.
- Large Factory Functions can become difficult to maintain.

---

# Common Mistakes

## Forgetting to Return an Object

❌ Incorrect

```javascript
function createUser(name) {

    const user = {

        name

    };

}
```

---

✅ Correct

```javascript
function createUser(name) {

    return {

        name

    };

}
```

---

## Creating Duplicate Methods

❌

```javascript
function createUser(name) {

    return {

        name,

        greet() {

            console.log("Hello");

        }

    };

}
```

Every object gets its own copy of `greet()`.

For many objects, consider sharing methods separately.

---

## Confusing Factory Functions with Constructors

Factory Functions:

- Do **not** use `new`.
- Do **not** use `this`.
- Return objects explicitly.

---

# Best Practices

- Use descriptive function names beginning with `create`.
- Return only necessary properties.
- Use object shorthand when possible.
- Use Closures for private data.
- Keep Factory Functions focused on one responsibility.
- Share methods when creating many objects.

---

# Summary

In this lesson, you learned:

- What Factory Functions are.
- How they differ from Constructor Functions.
- Creating reusable objects.
- Using Closures for encapsulation.
- Advantages and limitations.
- Best practices.

Factory Functions are a popular modern JavaScript pattern because they are simple, readable, and work naturally with Closures.

---

# Interview Questions

1. What is a Factory Function?
2. How is a Factory Function different from a Constructor Function?
3. Why don't Factory Functions require `new`?
4. Why are Factory Functions often combined with Closures?
5. What are the advantages of Factory Functions?
6. When should Factory Functions be preferred over Constructor Functions?
7. Can Factory Functions contain methods?

---

# Practice Exercise

1. Create a `createCar()` Factory Function.
2. Create a `createBook()` Factory Function.
3. Build a private counter using a Factory Function and Closure.
4. Compare a Constructor Function with a Factory Function.
5. Create a reusable Product Factory that returns multiple product objects.

---

# Key Takeaway

> **Factory Functions are regular functions that create and return objects without using the `new` keyword. They provide a clean, flexible, and beginner-friendly approach to object creation, and when combined with Closures, they enable powerful patterns like data encapsulation and private state.**

---

# Next Lesson

<h2>
➡️ <a href="../0029_methods/methods.md" style="color:#1E90FF; text-decoration:none;">
<strong>Methods</strong>
</a>
</h2>