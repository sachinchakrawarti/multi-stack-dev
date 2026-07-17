# Array Data Type in JavaScript

## Introduction

An **Array** is a **non-primitive (reference)** data type in JavaScript that is used to store **multiple values** in a single variable.

Instead of creating separate variables for related data, you can store them together in an array. Arrays are one of the most commonly used data structures in JavaScript and are essential for working with lists of data.

Examples of data stored in arrays include:

- Student names
- Product lists
- Prices
- Colors
- Numbers
- Objects

---

# What Is an Array?

An **Array** is an ordered collection of values.

Each value inside an array is called an **element**.

Every element has an **index**, and indexing starts from **0**.

Example:

```javascript
const colors = ["Red", "Green", "Blue"];
```

Here:

| Index | Value |
|-------|-------|
| 0 | Red |
| 1 | Green |
| 2 | Blue |

---

# Characteristics of Arrays

- Non-primitive (reference) data type.
- Stores multiple values.
- Elements are ordered.
- Indexing starts from `0`.
- Can store different data types.
- Arrays are mutable.

---

# Creating Arrays

## Using Array Literal

The most common way to create an array.

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

---

## Using the Array Constructor

```javascript
const numbers = new Array(10, 20, 30);

console.log(numbers);
```

Output

```text
[10, 20, 30]
```

---

# Accessing Array Elements

Use the index number.

```javascript
const colors = ["Red", "Green", "Blue"];

console.log(colors[0]);
console.log(colors[2]);
```

Output

```text
Red
Blue
```

---

# Updating Array Elements

```javascript
const colors = ["Red", "Green", "Blue"];

colors[1] = "Yellow";

console.log(colors);
```

Output

```text
["Red", "Yellow", "Blue"]
```

---

# Array Length

The `length` property returns the number of elements.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

Output

```text
4
```

---

# Arrays Can Store Different Data Types

```javascript
const values = [
    "JavaScript",
    100,
    true,
    null,
    undefined,
    {
        name: "Sachin"
    },
    [1, 2, 3]
];

console.log(values);
```

---

# Common Array Methods

## push()

Adds one or more elements to the end of an array.

```javascript
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Orange"]
```

---

## pop()

Removes the last element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.pop();

console.log(fruits);
```

Output

```text
["Apple", "Banana"]
```

---

## unshift()

Adds one or more elements to the beginning.

```javascript
const colors = ["Green", "Blue"];

colors.unshift("Red");

console.log(colors);
```

Output

```text
["Red", "Green", "Blue"]
```

---

## shift()

Removes the first element.

```javascript
const colors = ["Red", "Green", "Blue"];

colors.shift();

console.log(colors);
```

Output

```text
["Green", "Blue"]
```

---

## indexOf()

Returns the index of an element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));
```

Output

```text
1
```

---

## includes()

Checks whether an element exists.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.includes("Apple"));
```

Output

```text
true
```

---

## slice()

Returns a portion of an array without modifying the original array.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers.slice(1, 3));
```

Output

```text
[20, 30]
```

---

## splice()

Adds, removes, or replaces elements.

```javascript
const numbers = [10, 20, 30];

numbers.splice(1, 1);

console.log(numbers);
```

Output

```text
[10, 30]
```

---

## join()

Converts an array into a string.

```javascript
const colors = ["Red", "Green", "Blue"];

console.log(colors.join(", "));
```

Output

```text
Red, Green, Blue
```

---

# Looping Through Arrays

## for Loop

```javascript
const colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

Output

```text
Red
Green
Blue
```

---

## for...of Loop

```javascript
const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
    console.log(color);
}
```

Output

```text
Red
Green
Blue
```

---

## forEach()

```javascript
const colors = ["Red", "Green", "Blue"];

colors.forEach(function(color) {
    console.log(color);
});
```

Output

```text
Red
Green
Blue
```

---

# Multidimensional Arrays

Arrays can contain other arrays.

```javascript
const matrix = [
    [1, 2],
    [3, 4]
];

console.log(matrix[1][0]);
```

Output

```text
3
```

---

# Checking if a Value Is an Array

Use `Array.isArray()`.

```javascript
const numbers = [1, 2, 3];

console.log(Array.isArray(numbers));
```

Output

```text
true
```

---

# Array References

Arrays are stored by reference.

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output

```text
[1, 2, 3, 4]
```

Both variables refer to the same array.

---

# Real-World Example

```javascript
const shoppingCart = [
    "Laptop",
    "Mouse",
    "Keyboard"
];

shoppingCart.push("Monitor");

console.log(shoppingCart);
```

Output

```text
["Laptop", "Mouse", "Keyboard", "Monitor"]
```

---

# Best Practices

- Use `const` for arrays unless reassignment is needed.
- Use meaningful variable names.
- Use array methods instead of manual manipulation.
- Use `Array.isArray()` to check for arrays.
- Avoid unnecessary nested arrays.

---

# Common Mistakes

## Accessing an Invalid Index

```javascript
const colors = ["Red", "Green"];

console.log(colors[5]);
```

Output

```text
undefined
```

---

## Using `typeof`

```javascript
const numbers = [1, 2, 3];

console.log(typeof numbers);
```

Output

```text
object
```

Use:

```javascript
console.log(Array.isArray(numbers));
```

Output

```text
true
```

---

## Comparing Arrays

```javascript
const a = [1, 2];
const b = [1, 2];

console.log(a === b);
```

Output

```text
false
```

Arrays are compared by reference, not by their contents.

---

# Interview Questions

1. What is an array in JavaScript?
2. Is an array a primitive or non-primitive data type?
3. How do you create an array?
4. What does the `length` property return?
5. What is the difference between `slice()` and `splice()`?
6. What is the difference between `push()` and `unshift()`?
7. How do you check whether a value is an array?
8. Why does `typeof []` return `"object"`?
9. Why are arrays called reference types?
10. How do you loop through an array?

---

# Summary

- Arrays store multiple values in a single variable.
- Arrays are non-primitive (reference) data types.
- Indexing starts from `0`.
- Arrays are mutable.
- JavaScript provides many built-in methods for working with arrays.
- Arrays are one of the most widely used data structures in JavaScript.

---

# Key Points

- Array is a reference data type.
- Elements are accessed using indexes.
- Arrays are mutable.
- `Array.isArray()` checks whether a value is an array.
- `typeof []` returns `"object"`.
- Arrays are stored and compared by reference.

---

# Next Topic

**0013_functions_as_objects**