# Object Data Type in JavaScript

## Introduction

An **Object** is a **non-primitive (reference)** data type in JavaScript that stores collections of related data as **key-value pairs**.

Objects are one of the most important features of JavaScript. Almost everything in JavaScript, except primitive values, is an object or behaves like one.

Objects are used to represent real-world entities such as users, products, books, cars, employees, and many other complex data structures.

---

# What Is an Object?

An object is a collection of properties.

Each property consists of:

- A **key** (also called a property name)
- A **value**

Syntax:

```javascript
const objectName = {
    key1: value1,
    key2: value2,
    key3: value3
};
```

Example:

```javascript
const student = {
    name: "Sachin",
    age: 22,
    isStudent: true
};
```

---

# Characteristics of Objects

- Non-primitive (reference) data type.
- Stores multiple related values.
- Uses key-value pairs.
- Can contain any data type.
- Can contain methods (functions).
- Objects are mutable.

---

# Creating Objects

## Using Object Literal

The most common way to create an object.

```javascript
const person = {
    name: "Sachin",
    age: 22
};

console.log(person);
```

Output

```text
{ name: "Sachin", age: 22 }
```

---

## Using the Object Constructor

```javascript
const person = new Object();

person.name = "Sachin";
person.age = 22;

console.log(person);
```

Output

```text
{ name: "Sachin", age: 22 }
```

---

# Object Properties

Objects store information using properties.

```javascript
const employee = {
    id: 101,
    name: "Rahul",
    department: "IT"
};
```

Property names are:

- `id`
- `name`
- `department`

---

# Accessing Object Properties

There are two ways to access properties.

## Dot Notation

```javascript
const student = {
    name: "Sachin",
    age: 22
};

console.log(student.name);
```

Output

```text
Sachin
```

---

## Bracket Notation

```javascript
console.log(student["age"]);
```

Output

```text
22
```

Bracket notation is useful when the property name is stored in a variable.

```javascript
const key = "name";

console.log(student[key]);
```

Output

```text
Sachin
```

---

# Adding New Properties

Properties can be added after object creation.

```javascript
const student = {
    name: "Sachin"
};

student.age = 22;

console.log(student);
```

Output

```text
{ name: "Sachin", age: 22 }
```

---

# Updating Properties

Existing properties can be modified.

```javascript
const student = {
    age: 22
};

student.age = 23;

console.log(student.age);
```

Output

```text
23
```

---

# Deleting Properties

Use the `delete` operator.

```javascript
const student = {
    name: "Sachin",
    age: 22
};

delete student.age;

console.log(student);
```

Output

```text
{ name: "Sachin" }
```

---

# Objects Can Store Different Data Types

```javascript
const user = {
    name: "Sachin",
    age: 22,
    isStudent: true,
    hobbies: ["Reading", "Coding"],
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh"
    }
};

console.log(user);
```

---

# Methods in Objects

Objects can contain functions called **methods**.

```javascript
const person = {
    name: "Sachin",

    greet: function () {
        console.log("Hello!");
    }
};

person.greet();
```

Output

```text
Hello!
```

---

# The `this` Keyword

Inside an object method, `this` refers to the current object.

```javascript
const person = {
    name: "Sachin",

    greet() {
        console.log("Hello " + this.name);
    }
};

person.greet();
```

Output

```text
Hello Sachin
```

---

# Nested Objects

Objects can contain other objects.

```javascript
const student = {
    name: "Sachin",

    address: {
        city: "Bhopal",
        country: "India"
    }
};

console.log(student.address.city);
```

Output

```text
Bhopal
```

---

# Object References

Objects are stored by reference.

```javascript
const person1 = {
    name: "Sachin"
};

const person2 = person1;

person2.name = "Rahul";

console.log(person1.name);
```

Output

```text
Rahul
```

Both variables reference the same object.

---

# Comparing Objects

Two objects are equal only if they reference the same object.

```javascript
const obj1 = {
    name: "Sachin"
};

const obj2 = {
    name: "Sachin"
};

console.log(obj1 === obj2);
```

Output

```text
false
```

Example:

```javascript
const obj3 = obj1;

console.log(obj1 === obj3);
```

Output

```text
true
```

---

# Useful Object Methods

## Object.keys()

Returns all property names.

```javascript
const person = {
    name: "Sachin",
    age: 22
};

console.log(Object.keys(person));
```

Output

```text
["name", "age"]
```

---

## Object.values()

Returns all property values.

```javascript
console.log(Object.values(person));
```

Output

```text
["Sachin", 22]
```

---

## Object.entries()

Returns key-value pairs.

```javascript
console.log(Object.entries(person));
```

Output

```text
[
  ["name", "Sachin"],
  ["age", 22]
]
```

---

## Object.assign()

Copies properties into another object.

```javascript
const person = {
    name: "Sachin"
};

const copy = Object.assign({}, person);

console.log(copy);
```

Output

```text
{ name: "Sachin" }
```

---

# Real-World Example

```javascript
const product = {
    id: 101,
    name: "Laptop",
    price: 65000,
    inStock: true,

    display() {
        console.log(this.name + " - ₹" + this.price);
    }
};

product.display();
```

Output

```text
Laptop - ₹65000
```

---

# Best Practices

- Use object literals whenever possible.
- Keep related data together in one object.
- Use meaningful property names.
- Use `const` for objects unless reassignment is needed.
- Prefer dot notation when property names are known.

---

# Common Mistakes

## Confusing Objects with Arrays

Incorrect:

```javascript
const user = [
    name: "Sachin"
];
```

Correct:

```javascript
const user = {
    name: "Sachin"
};
```

---

## Comparing Different Objects

```javascript
const a = {};
const b = {};

console.log(a === b);
```

Output

```text
false
```

---

## Forgetting Bracket Notation

```javascript
const key = "name";

console.log(person.key);
```

Output

```text
undefined
```

Correct:

```javascript
console.log(person[key]);
```

---

# Interview Questions

1. What is an object in JavaScript?
2. Is an object a primitive or non-primitive data type?
3. How do you create an object?
4. What is the difference between dot notation and bracket notation?
5. What is a method?
6. What does the `this` keyword refer to?
7. Why are objects called reference types?
8. What is the difference between `Object.keys()` and `Object.values()`?
9. How do you clone an object?
10. Why does `{ } === { }` return `false`?

---

# Summary

- Objects are non-primitive data types.
- They store data as key-value pairs.
- Objects can contain properties and methods.
- Objects are mutable and stored by reference.
- JavaScript provides built-in methods for working with objects.
- Objects are widely used to model real-world entities.

---

# Key Points

- Object is a reference data type.
- Stores data as key-value pairs.
- Properties are accessed using dot or bracket notation.
- Objects are mutable.
- Objects are compared by reference, not by value.
- Methods are functions stored inside objects.

---

# Next Topic

# `Arrays`