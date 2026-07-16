# Non-Primitive (Reference) Data Types in JavaScript

## Introduction

Non-Primitive Data Types, also known as **Reference Data Types**, are used to store **collections of values** or **more complex data**.

Unlike primitive data types, which store a single value, non-primitive data types can contain multiple values, properties, and methods.

Examples include:

- Objects
- Arrays
- Functions
- Dates
- Maps
- Sets
- WeakMaps
- WeakSets

These values are stored **by reference**, meaning variables store the memory address of the value rather than the value itself.

---

# What Are Non-Primitive Data Types?

A non-primitive data type is a data structure that can hold multiple related values and behaviors.

Example:

```javascript
const person = {
    name: "Sachin",
    age: 22
};
```

The variable `person` stores a reference to the object in memory.

---

# Characteristics of Non-Primitive Data Types

- Can store multiple values.
- Mutable (their contents can be changed).
- Stored in heap memory.
- Variables store references (memory addresses).
- Compared by reference, not by value.

---

# Types of Non-Primitive Data Types

JavaScript provides several built-in reference types.

- Object
- Array
- Function
- Date
- Map
- Set
- WeakMap
- WeakSet

---

# 1. Object

An object stores data as **key-value pairs**.

Example:

```javascript
const student = {
    name: "Sachin",
    age: 22,
    course: "M.Tech"
};

console.log(student);
```

Output

```text
{ name: 'Sachin', age: 22, course: 'M.Tech' }
```

---

## Accessing Object Properties

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

## Modifying Objects

```javascript
student.age = 23;

console.log(student.age);
```

Output

```text
23
```

Even though the object was declared using `const`, its properties can still be modified.

---

# 2. Array

An array stores multiple values in a single variable.

Example:

```javascript
const colors = ["Red", "Green", "Blue"];

console.log(colors);
```

Output

```text
["Red", "Green", "Blue"]
```

---

## Accessing Array Elements

```javascript
console.log(colors[0]);
console.log(colors[2]);
```

Output

```text
Red
Blue
```

---

## Modifying Arrays

```javascript
colors.push("Yellow");

console.log(colors);
```

Output

```text
["Red", "Green", "Blue", "Yellow"]
```

Arrays declared with `const` can still be modified.

---

# 3. Function

Functions are also objects in JavaScript.

Example:

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

Output

```text
Hello!
```

---

## Function Expression

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output

```text
30
```

---

# 4. Date

The `Date` object represents dates and times.

Example:

```javascript
const today = new Date();

console.log(today);
```

Example Output

```text
2026-07-16T10:30:45.123Z
```

---

# 5. Map

A `Map` stores key-value pairs where keys can be of any data type.

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

A `Set` stores unique values.

Example:

```javascript
const numbers = new Set([1, 2, 3, 3, 2]);

console.log(numbers);
```

Output

```text
Set(3) {1, 2, 3}
```

Duplicate values are automatically removed.

---

# 7. WeakMap

A `WeakMap` stores key-value pairs where keys must be objects.

Example:

```javascript
const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, "Hello");
```

WeakMaps allow objects to be garbage collected when no longer referenced.

---

# 8. WeakSet

A `WeakSet` stores unique objects.

Example:

```javascript
const weakSet = new WeakSet();

const person = {};

weakSet.add(person);
```

Like WeakMap, it supports garbage collection.

---

# Reference Behavior

Reference types are copied by reference.

Example:

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

Both variables point to the same object.

---

# Primitive vs Reference Copy

Primitive

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Output

```text
10
```

Reference

```javascript
const obj1 = {
    age: 22
};

const obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);
```

Output

```text
30
```

---

# Comparing Reference Types

Example

```javascript
const a = {};
const b = {};

console.log(a === b);
```

Output

```text
false
```

Even though both objects are empty, they occupy different memory locations.

---

# typeof Results

```javascript
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
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

---

# Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|------------|---------------|
| Stores one value | Stores multiple values |
| Immutable | Mutable |
| Stored by value | Stored by reference |
| Stack memory | Heap memory |
| Compared by value | Compared by reference |

---

# Real-World Example

```javascript
const employee = {
    id: 101,
    name: "Sachin",
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true
};

console.log(employee);
```

The object contains:

- Primitive values
- An array
- Multiple properties

---

# Best Practices

- Use objects for related data.
- Use arrays for ordered collections.
- Prefer `Map` when keys are dynamic.
- Use `Set` when values must be unique.
- Avoid unnecessary mutation.
- Use `const` for objects and arrays unless reassignment is needed.

---

# Common Mistakes

## Assuming Objects Are Copied by Value

Incorrect assumption:

```javascript
const a = {
    x: 1
};

const b = a;

b.x = 5;
```

`a.x` also becomes `5`.

---

## Comparing Objects Directly

```javascript
{} === {}
```

Output

```text
false
```

---

## Thinking Arrays Are a Separate Type

```javascript
typeof []
```

Output

```text
object
```

Use:

```javascript
Array.isArray([]);
```

Output

```text
true
```

---

## Forgetting Objects Are Mutable

```javascript
const car = {
    brand: "Toyota"
};

car.brand = "Honda";
```

This is valid because only the reference is constant.

---

# Interview Questions

1. What are non-primitive data types?
2. Why are they called reference data types?
3. What is the difference between primitive and non-primitive data types?
4. Why does modifying one object affect another reference?
5. Why does `typeof []` return `"object"`?
6. What is the difference between `Map` and `Object`?
7. What is the difference between `Set` and `Array`?
8. What are WeakMap and WeakSet?
9. How are objects stored in memory?
10. Why are functions considered objects in JavaScript?

---

# Summary

- Non-primitive data types store collections of data or complex structures.
- They are stored by reference in heap memory.
- Objects, Arrays, Functions, Dates, Maps, and Sets are common reference types.
- Objects and arrays are mutable.
- Variables referencing the same object share the same memory location.
- Objects are compared by reference, not by value.
- Understanding reference behavior is essential for writing reliable JavaScript applications.

---

# Next Topic

**0004_number**