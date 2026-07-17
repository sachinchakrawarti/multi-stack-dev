# What Are Data Types in JavaScript?

## Introduction

Every value in JavaScript has a **data type**. A data type defines the kind of value stored in a variable and determines the operations that can be performed on that value.

For example, JavaScript can store:

- Numbers
- Strings (Text)
- Boolean values (`true` or `false`)
- Objects
- Arrays
- Functions

Understanding data types is one of the most fundamental concepts in JavaScript because every program works with different kinds of data.

---

# What Is a Data Type?

A **data type** is a classification that tells JavaScript what type of value a variable contains.

For example:

```javascript
let age = 25;
```

Here:

- Variable → `age`
- Value → `25`
- Data Type → `Number`

Another example:

```javascript
let name = "Sachin";
```

Here:

- Variable → `name`
- Value → `"Sachin"`
- Data Type → `String`

---

# Why Do We Need Data Types?

Different kinds of data require different operations.

For example, numbers can be added mathematically.

```javascript
10 + 20;
```

Output

```text
30
```

Strings are combined (concatenated).

```javascript
"John" + " Doe";
```

Output

```text
John Doe
```

Because JavaScript knows the data type of each value, it performs the correct operation automatically.

Without data types, JavaScript would not know whether to perform addition, comparison, concatenation, or some other operation.

---

# JavaScript Is Dynamically Typed

JavaScript is a **dynamically typed language**.

This means you do **not** need to declare the data type of a variable. JavaScript automatically determines the type based on the assigned value.

Example:

```javascript
let value = 100;

console.log(typeof value);
```

Output

```text
number
```

The same variable can later store another data type.

```javascript
let value = 100;

value = "JavaScript";

value = true;

console.log(value);
```

Output

```text
true
```

Although JavaScript allows changing data types, it is considered good practice to avoid changing a variable's type unnecessarily because it reduces code readability.

---

# Example

```javascript
let age = 22;
let name = "Sachin";
let isStudent = true;

console.log(age);
console.log(name);
console.log(isStudent);
```

Output

```text
22
Sachin
true
```

---

# JavaScript Data Types

JavaScript data types are divided into **two main categories**.

```text
JavaScript Data Types
│
├── Primitive Data Types
│   ├── Number
│   ├── BigInt
│   ├── String
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   └── Symbol
│
└── Non-Primitive (Reference) Data Types
    ├── Object
    ├── Array
    ├── Function
    ├── Date
    ├── Map
    └── Set
```

---

# Primitive Data Types

Primitive data types store **a single, immutable value**.

Whenever a primitive value is assigned to another variable, its actual value is copied.

JavaScript has **7 primitive data types**.

| Data Type | Description | Example |
|-----------|-------------|---------|
| Number | Integer or decimal numbers | `100` |
| BigInt | Very large integers | `100n` |
| String | Text | `"JavaScript"` |
| Boolean | `true` or `false` | `true` |
| Undefined | Variable declared but not assigned | `undefined` |
| Null | Intentional empty value | `null` |
| Symbol | Unique identifier | `Symbol()` |

Example:

```javascript
let age = 25;
```

Here, `25` is a primitive value.

---

# Non-Primitive (Reference) Data Types

Reference data types store **references** to objects rather than the actual value itself.

They are used to represent more complex data structures.

Common reference types include:

- Object
- Array
- Function
- Date
- Map
- Set

Example

```javascript
const person = {
    name: "Sachin",
    age: 22
};
```

Unlike primitive values, objects are stored by reference.

---

# Primitive vs Reference Types

| Primitive | Reference |
|------------|-----------|
| Stores a single value | Stores collections or complex data |
| Copied by value | Copied by reference |
| Immutable | Mutable |
| Faster | Slightly slower |
| Stored directly | Stored as references |

Example

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output

```text
10
20
```

Example

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

# Memory Overview

Primitive values are copied.

```text
a → 10

b → 10
```

Reference values store a memory reference.

```text
person1 ─┐
          ├──► Object
person2 ─┘
```

Changing the object through one reference affects the other.

---

# Key Points

- Every value in JavaScript has a data type.
- JavaScript automatically determines a variable's data type.
- JavaScript is dynamically typed.
- Data types are divided into Primitive and Reference types.
- Primitive values store a single value.
- Reference types store objects and collections.

---

# Next Topic

# `Primitive Data Types`