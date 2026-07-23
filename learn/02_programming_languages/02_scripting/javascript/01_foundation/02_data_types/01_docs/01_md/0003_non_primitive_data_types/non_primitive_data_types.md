# Non-Primitive (Reference) Data Types in JavaScript

## Introduction

Non-Primitive Data Types, also known as **Reference Data Types**, are used to store collections of data and more complex entities. Unlike primitive data types, which store a single value, non-primitive data types can contain multiple values, properties, and methods.

Most real-world JavaScript applications rely heavily on non-primitive data types to represent users, products, orders, lists, configurations, and much more.

---

# What Are Non-Primitive Data Types?

A **Non-Primitive Data Type** is a data type that stores a **reference (memory address)** to an object instead of storing the actual value directly.

Unlike primitive values, reference values can:

- Store multiple values.
- Store properties.
- Store methods.
- Be modified after creation.
- Be shared between variables.

Example:

```javascript
const student = {
    name: "Sachin",
    age: 22
};
```

Here, `student` refers to an object stored in memory.

---

# Characteristics of Non-Primitive Data Types

Reference data types have the following characteristics:

- Store multiple values.
- Stored by reference.
- Mutable (can be changed).
- Can contain properties and methods.
- Compared by reference.
- Usually consume more memory than primitive values.

Example:

```javascript
const person = {
    name: "Rahul"
};

person.name = "Amit";

console.log(person.name);
```

Output

```text
Amit
```

The object is modified without creating a new object.

---

# Types of Non-Primitive Data Types

JavaScript provides several built-in reference types.

| Data Type | Description |
|-----------|-------------|
| Object | Stores key-value pairs |
| Array | Stores ordered collections |
| Function | Represents reusable code |
| Date | Represents dates and times |
| Map | Stores key-value pairs with any data type as keys |
| Set | Stores unique values |
| RegExp | Represents regular expressions |

---

# 1. Object

An **Object** stores related data using **key-value pairs**.

Example:

```javascript
const student = {
    name: "Sachin",
    age: 22,
    course: "JavaScript"
};

console.log(student);
```

Output

```text
{
  name: "Sachin",
  age: 22,
  course: "JavaScript"
}
```

Accessing properties:

```javascript
console.log(student.name);
console.log(student.age);
```

Output

```text
Sachin
22
```

---

# 2. Array

An **Array** stores multiple values in a single variable.

Example:

```javascript
const colors = [
    "Red",
    "Green",
    "Blue"
];

console.log(colors);
```

Output

```text
["Red", "Green", "Blue"]
```

Accessing elements:

```javascript
console.log(colors[0]);
console.log(colors[2]);
```

Output

```text
Red
Blue
```

Arrays are actually special types of objects.

```javascript
console.log(typeof []);
```

Output

```text
object
```

To check if a value is an array:

```javascript
console.log(Array.isArray(colors));
```

Output

```text
true
```

---

# 3. Function

Functions are reusable blocks of code.

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output

```text
Hello
```

Functions are objects in JavaScript.

```javascript
console.log(typeof greet);
```

Output

```text
function
```

---

# 4. Date

The **Date** object represents dates and times.

Example:

```javascript
const today = new Date();

console.log(today);
```

Example Output

```text
2026-07-17T12:30:45.000Z
```

---

# 5. Map

A **Map** stores key-value pairs.

Unlike objects, keys can be of any data type.

Example:

```javascript
const user = new Map();

user.set("name", "Sachin");
user.set("age", 22);

console.log(user.get("name"));
```

Output

```text
Sachin
```

---

# 6. Set

A **Set** stores only unique values.

Example:

```javascript
const numbers = new Set([
    10,
    20,
    20,
    30
]);

console.log(numbers);
```

Output

```text
Set(3) {10, 20, 30}
```

Duplicate values are automatically removed.

---

# Memory Representation

Primitive values store the actual value.

```text
age
 │
 ▼
25
```

Reference values store a memory reference.

```text
student
    │
    ▼
+----------------+
| name : Sachin  |
| age  : 22      |
+----------------+
```

The variable points to the object stored elsewhere in memory.

---

# Reference Assignment

Objects are assigned by reference.

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

Both variables refer to the same object.

---

# Comparing Objects

Primitive values compare their contents.

```javascript
console.log(10 === 10);
```

Output

```text
true
```

Objects compare references.

```javascript
const a = {
    value: 10
};

const b = {
    value: 10
};

console.log(a === b);
```

Output

```text
false
```

Although both objects contain the same data, they occupy different memory locations.

---

# Mutable Nature

Objects can be modified after creation.

```javascript
const car = {
    brand: "Toyota"
};

car.brand = "Honda";

console.log(car.brand);
```

Output

```text
Honda
```

---

# typeof with Reference Types

```javascript
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof new Date());
console.log(typeof new Map());
console.log(typeof new Set());
```

Output

```text
object
object
function
object
object
object
```

Notice that only functions return `"function"`.

---

# Real-World Example

```javascript
const product = {
    id: 101,
    name: "Laptop",
    price: 65000,
    inStock: true,
    colors: [
        "Silver",
        "Black"
    ]
};

console.log(product);
```

This object contains different data types to represent a real product.

---

# Best Practices

- Use `const` for objects and arrays whenever possible.
- Use meaningful property names.
- Prefer objects for structured data.
- Use arrays for ordered collections.
- Use `Map` when keys are dynamic.
- Use `Set` to store unique values.

---

# Common Mistakes

## Comparing Objects

```javascript
const a = {
    x: 1
};

const b = {
    x: 1
};

console.log(a === b);
```

Output

```text
false
```

Objects are compared by reference, not by their contents.

---

## Using `typeof` for Arrays

```javascript
typeof [];
```

Output

```text
object
```

Correct way:

```javascript
Array.isArray([]);
```

Output

```text
true
```

---

## Assuming Objects Are Copied

```javascript
const obj1 = {
    name: "Sachin"
};

const obj2 = obj1;
```

Both variables point to the same object.

---

# Interview Questions

1. What are non-primitive data types?
2. Why are they called reference types?
3. What is the difference between primitive and reference types?
4. Why does `typeof []` return `"object"`?
5. How are objects stored in memory?
6. What is the difference between `Map` and `Object`?
7. What is a `Set`?
8. Why are functions considered objects?
9. Why does comparing two objects with identical data return `false`?
10. How do you check whether a value is an array?

---

# Summary

- Non-Primitive Data Types are also called Reference Data Types.
- They store references to objects in memory.
- Objects are mutable and can be modified after creation.
- Arrays are special types of objects.
- Functions are also objects.
- Objects are copied and compared by reference.
- JavaScript provides several built-in reference types such as Object, Array, Function, Date, Map, and Set.

---

# Key Points

- Store multiple values.
- Stored by reference.
- Mutable.
- Can contain properties and methods.
- Compared by reference.
- Essential for building real-world applications.

---

# Next Topic

# `Number`