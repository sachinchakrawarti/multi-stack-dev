# Constructor Functions

## Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What are Constructor Functions?](#what-are-constructor-functions)
- [Why Do We Need Constructor Functions?](#why-do-we-need-constructor-functions)
- [How Constructor Functions Work](#how-constructor-functions-work)
- [Syntax](#syntax)
- [The `new` Keyword](#the-new-keyword)
- [Constructor vs Regular Function](#constructor-vs-regular-function)
- [Examples](#examples)
- [Prototype and Constructor Functions](#prototype-and-constructor-functions)
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

- Understand Constructor Functions.
- Learn how the `new` keyword works.
- Create multiple objects using Constructor Functions.
- Understand the relationship between Constructor Functions and prototypes.
- Compare Constructor Functions with classes.

---

# Introduction

Imagine a car factory.

Instead of building every car manually, the factory uses a blueprint.

Every time a customer places an order, the factory uses the same blueprint to create a new car.

Constructor Functions work exactly like that.

A Constructor Function acts as a **blueprint** for creating multiple similar objects.

Before JavaScript introduced **Classes (ES6)**, Constructor Functions were the primary way to create objects in an object-oriented style.

Even today, understanding them is important because JavaScript classes are built on top of prototypes and Constructor Functions.

---

# What are Constructor Functions?

A **Constructor Function** is a regular function used to create and initialize objects.

It is called using the `new` keyword.

By convention, constructor function names start with a capital letter.

Example

```javascript
function Student(name, age) {

    this.name = name;
    this.age = age;

}

const student1 = new Student("Sachin", 22);

console.log(student1);
```

Output

```javascript
Student {
    name: "Sachin",
    age: 22
}
```

---

# Why Do We Need Constructor Functions?

Without Constructor Functions, we would have to create every object manually.

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

This approach becomes repetitive.

Constructor Functions let us create objects efficiently.

Benefits include:

- Code reuse.
- Easier object creation.
- Cleaner object-oriented code.
- Reduced duplication.

---

# How Constructor Functions Work

Execution Flow

```text
Call Constructor
        │
        ▼
Use new Keyword
        │
        ▼
Create Empty Object
        │
        ▼
this Points to New Object
        │
        ▼
Properties Assigned
        │
        ▼
Object Returned
```

---

# Syntax

```javascript
function Person(name, age) {

    this.name = name;
    this.age = age;

}

const person = new Person("John", 30);
```

Notice the use of:

- Capitalized function name.
- `this`
- `new`

---

# The `new` Keyword

When JavaScript sees the `new` keyword, it automatically performs four steps:

1. Creates a new empty object.
2. Sets `this` to that new object.
3. Links the object to the constructor's prototype.
4. Returns the newly created object.

Example

```javascript
function Car(model) {

    this.model = model;

}

const car = new Car("Tesla");

console.log(car.model);
```

Output

```
Tesla
```

---

# Constructor vs Regular Function

| Constructor Function | Regular Function |
|----------------------|------------------|
| Called with `new` | Called normally |
| Creates objects | Performs tasks |
| Uses `this` for properties | May or may not use `this` |
| Usually starts with a capital letter | Usually camelCase |
| Returns a new object automatically | Returns explicitly using `return` |

---

# Examples

## Example 1 — Student Object

```javascript
function Student(name, course) {

    this.name = name;
    this.course = course;

}

const student = new Student("Sachin", "JavaScript");

console.log(student);
```

---

## Example 2 — Employee

```javascript
function Employee(name, salary) {

    this.name = name;
    this.salary = salary;

}

const emp = new Employee("Aman", 50000);

console.log(emp.salary);
```

Output

```
50000
```

---

## Example 3 — Adding Methods

```javascript
function Person(name) {

    this.name = name;

    this.greet = function () {

        console.log(`Hello ${this.name}`);

    };

}

const user = new Person("Rahul");

user.greet();
```

Output

```
Hello Rahul
```

---

## Example 4 — Multiple Objects

```javascript
function Laptop(brand) {

    this.brand = brand;

}

const laptop1 = new Laptop("Dell");
const laptop2 = new Laptop("HP");
const laptop3 = new Laptop("Lenovo");

console.log(laptop1.brand);
console.log(laptop2.brand);
console.log(laptop3.brand);
```

---

# Prototype and Constructor Functions

Instead of creating methods inside every object, JavaScript allows methods to be shared using the prototype.

Example

```javascript
function Student(name) {

    this.name = name;

}

Student.prototype.study = function () {

    console.log(`${this.name} is studying`);

};

const student = new Student("Sachin");

student.study();
```

Output

```
Sachin is studying
```

Using prototypes saves memory because the method is shared among all objects.

---

# Real-World Use Cases

Constructor Functions are used for creating:

- Users.
- Products.
- Vehicles.
- Employees.
- Bank Accounts.
- Orders.
- Books.
- Games.
- API models.

Example

```javascript
function BankAccount(name, balance) {

    this.name = name;
    this.balance = balance;

}
```

---

# Advantages

Constructor Functions provide several benefits.

- Reusable object blueprints.
- Less repetitive code.
- Easy object creation.
- Supports object-oriented programming.
- Works with prototypes.
- Foundation of JavaScript classes.

---

# Limitations

Constructor Functions also have some drawbacks.

- Older syntax compared to classes.
- Forgetting `new` causes problems.
- Methods inside constructors waste memory.
- Classes provide cleaner syntax.

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

Without `new`, `this` does not refer to a newly created object.

---

✅ Correct

```javascript
const user = new User("John");
```

---

## Defining Methods Inside Every Object

❌

```javascript
function Student(name) {

    this.name = name;

    this.study = function () {

        console.log("Study");

    };

}
```

Each object gets its own copy of `study()`.

---

✅ Better

```javascript
Student.prototype.study = function () {

    console.log("Study");

};
```

---

## Not Following Naming Conventions

Constructor names should begin with a capital letter.

```javascript
function Person() { }
```

Not

```javascript
function person() { }
```

---

# Best Practices

- Always use `new`.
- Start constructor names with a capital letter.
- Store shared methods on the prototype.
- Keep constructors focused on initialization.
- Prefer ES6 Classes for modern applications, but understand Constructor Functions.
- Avoid large constructors with too many responsibilities.

---

# Summary

In this lesson, you learned:

- What Constructor Functions are.
- How the `new` keyword works.
- Creating multiple objects.
- Sharing methods using prototypes.
- Advantages and limitations.
- Best practices.

Constructor Functions are one of JavaScript's core object-oriented features and provide the foundation for ES6 Classes.

---

# Interview Questions

1. What is a Constructor Function?
2. Why do constructor names usually start with a capital letter?
3. What happens when the `new` keyword is used?
4. What happens if `new` is omitted?
5. Why should methods be added to the prototype instead of inside the constructor?
6. What is the relationship between Constructor Functions and Classes?
7. What is `this` inside a Constructor Function?

---

# Practice Exercise

1. Create a `Book` constructor.
2. Create a `Car` constructor with three properties.
3. Create five objects using the same constructor.
4. Add a shared method using `prototype`.
5. Compare Constructor Functions with ES6 Classes.

---

# Key Takeaway

> **Constructor Functions are reusable blueprints for creating objects in JavaScript. When used with the `new` keyword, they automatically create and initialize new objects, making object creation efficient, reusable, and foundational to JavaScript's object-oriented programming model.**

---

# Next Lesson

<h2>
➡️ <a href="../0028_factory_functions/factory_functions.md" style="color:#1E90FF; text-decoration:none;">
<strong>Factory Functions</strong>
</a>
</h2>