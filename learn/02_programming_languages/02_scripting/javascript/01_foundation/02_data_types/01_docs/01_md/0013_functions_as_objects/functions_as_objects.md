# Functions as Objects in JavaScript

## Introduction

In JavaScript, **functions are first-class objects**. This means that functions are not only executable blocks of code but also objects that can be assigned to variables, passed as arguments, returned from other functions, and have their own properties and methods.

This is one of the most powerful features of JavaScript and enables concepts such as callbacks, higher-order functions, closures, and functional programming.

---

# What Does "Functions Are Objects" Mean?

A function in JavaScript is a special type of object.

Because functions are objects, they can:

- Be stored in variables.
- Be passed as arguments to other functions.
- Be returned from functions.
- Have their own properties.
- Have their own methods.

Example:

```javascript
function greet() {
    console.log("Hello, JavaScript!");
}

console.log(typeof greet);
```

Output

```text
function
```

Although `typeof` returns `"function"`, functions are objects internally.

---

# Creating a Function

```javascript
function greet() {
    console.log("Welcome!");
}

greet();
```

Output

```text
Welcome!
```

---

# Assigning a Function to a Variable

Functions can be stored in variables like any other value.

```javascript
const sayHello = function () {
    console.log("Hello!");
};

sayHello();
```

Output

```text
Hello!
```

---

# Passing Functions as Arguments

Functions can be passed to other functions.

```javascript
function greet(name) {
    console.log("Hello, " + name);
}

function processUser(callback) {
    callback("Sachin");
}

processUser(greet);
```

Output

```text
Hello, Sachin
```

This is called a **callback function**.

---

# Returning Functions from Functions

A function can return another function.

```javascript
function createGreeting() {
    return function () {
        console.log("Welcome!");
    };
}

const greet = createGreeting();

greet();
```

Output

```text
Welcome!
```

---

# Functions Can Have Properties

Since functions are objects, they can store properties.

```javascript
function greet() {
    console.log("Hello");
}

greet.language = "English";

console.log(greet.language);
```

Output

```text
English
```

---

# Functions Can Have Methods

Functions can also contain methods.

```javascript
function employee() {}

employee.showInfo = function () {
    console.log("Employee Function");
};

employee.showInfo();
```

Output

```text
Employee Function
```

---

# Built-in Function Properties

Functions automatically have several built-in properties.

## name

Returns the function name.

```javascript
function greet() {}

console.log(greet.name);
```

Output

```text
greet
```

---

## length

Returns the number of parameters.

```javascript
function add(a, b, c) {}

console.log(add.length);
```

Output

```text
3
```

---

# Functions Inside Objects

Functions stored inside objects are called **methods**.

```javascript
const person = {
    name: "Sachin",

    greet() {
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

# Constructor Functions

Functions can also create objects.

```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student("Sachin", 22);

console.log(student1);
```

Output

```text
Student { name: "Sachin", age: 22 }
```

---

# Functions Are Reference Types

Functions are stored by reference.

```javascript
function greet() {
    console.log("Hello");
}

const anotherFunction = greet;

anotherFunction();
```

Output

```text
Hello
```

Both variables reference the same function.

---

# Comparing Functions

Two function references are equal only if they reference the same function.

```javascript
function greet() {}

const a = greet;
const b = greet;

console.log(a === b);
```

Output

```text
true
```

Example:

```javascript
const x = function () {};
const y = function () {};

console.log(x === y);
```

Output

```text
false
```

---

# Real-World Example

A button click event uses a callback function.

```javascript
function showMessage() {
    console.log("Button Clicked");
}

setTimeout(showMessage, 1000);
```

Output (after 1 second)

```text
Button Clicked
```

---

# Why Functions Are First-Class Objects

Because functions are first-class objects, JavaScript supports:

- Callback functions
- Event handling
- Higher-order functions
- Functional programming
- Closures
- Promises
- Asynchronous programming

---

# Best Practices

- Use meaningful function names.
- Keep functions focused on a single task.
- Use arrow functions where appropriate.
- Pass functions instead of calling them when using callbacks.
- Avoid attaching unnecessary properties to functions.

---

# Common Mistakes

## Calling Instead of Passing a Function

Incorrect:

```javascript
setTimeout(showMessage(), 1000);
```

Correct:

```javascript
setTimeout(showMessage, 1000);
```

---

## Assuming Functions Are Primitive Values

Functions are objects and are compared by reference.

```javascript
const a = function () {};
const b = function () {};

console.log(a === b);
```

Output

```text
false
```

---

## Forgetting That Methods Are Functions

```javascript
const user = {
    greet() {
        console.log("Hello");
    }
};

user.greet();
```

Output

```text
Hello
```

`greet` is a function stored inside an object.

---

# Interview Questions

1. Why are functions called first-class objects in JavaScript?
2. Can functions be assigned to variables?
3. Can functions be passed as arguments?
4. What is a callback function?
5. Can functions return other functions?
6. Can functions have properties?
7. What does the `name` property return?
8. What does the `length` property return?
9. What is a constructor function?
10. Why are functions considered reference types?

---

# Summary

- Functions are special objects in JavaScript.
- They are first-class citizens.
- Functions can be assigned, passed, and returned.
- Functions can have properties and methods.
- Methods are simply functions stored inside objects.
- Functions are stored and compared by reference.

---

# Key Points

- Functions are non-primitive (reference) values.
- Functions are objects with executable behavior.
- They can have properties and methods.
- Functions support callbacks and higher-order programming.
- Constructor functions create objects.
- Functions are compared by reference.

---

# Next Topic

# `typeof Operator`