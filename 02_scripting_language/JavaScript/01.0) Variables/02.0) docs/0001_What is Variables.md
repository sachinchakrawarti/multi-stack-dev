# What is a Variable?

A **variable** is a named container used to store data values in computer memory. Instead of referencing raw memory addresses (like `0x7FFF5FBFFD8`), we use descriptive identifiers (like `age` or `userName`) to store, retrieve, and manipulate data throughout our program.

Think of a variable as a labeled storage box: the label is the variable's **name**, and the contents inside are its **value**.

---

## 1. How Variables Work in Memory

In JavaScript, when you declare a variable, the JavaScript Engine (e.g., V8 in Chrome/Node.js) sets aside a small space in memory to hold that data.



JavaScript manages memory in two primary areas:
1. **The Stack:** Used for fast, structured execution. Primitive values (Numbers, Strings, Booleans, etc.) and variable identifiers themselves are stored here.
2. **The Heap:** A large, unstructured memory region used for complex data structures like Objects, Arrays, and Functions.

---

## 2. Declaration vs. Initialization

Working with a variable involves two main phases:

1. **Declaration:** Registering a variable name in its corresponding scope so the system knows it exists.
2. **Initialization:** Assigning an initial value to that declared variable.

```javascript
let age;          // Declaration (automatically initialized to 'undefined')
age = 25;         // Initialization / Assignment

let score = 100;  // Declaration and Initialization happening at the same time