# How JavaScript Works

## Introduction

JavaScript is a **high-level**, **interpreted**, and **single-threaded** programming language that allows developers to create interactive and dynamic web applications.

When a web page loads, the browser reads the HTML, applies CSS styles, and then executes JavaScript code to make the page interactive.

Understanding how JavaScript works helps you write faster, more efficient, and bug-free programs.

---

# The Three Core Technologies of the Web

A modern web page is built using three technologies.

| Technology | Purpose |
|------------|---------|
| HTML | Defines the structure |
| CSS | Adds styling and layout |
| JavaScript | Adds behavior and interactivity |

Example:

```html
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").onclick = function () {
    alert("Hello JavaScript!");
};
</script>
```

---

# JavaScript Execution Process

When you open a webpage, the browser performs several steps.

```text
HTML File
     │
     ▼
Browser Loads HTML
     │
     ▼
Browser Loads CSS
     │
     ▼
Browser Reads JavaScript
     │
     ▼
JavaScript Engine Executes Code
     │
     ▼
Web Page Becomes Interactive
```

---

# JavaScript Engine

JavaScript code is executed by a **JavaScript Engine**.

Different browsers have different engines.

| Browser | JavaScript Engine |
|----------|-------------------|
| Google Chrome | V8 |
| Microsoft Edge | V8 |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Opera | V8 |

The engine converts JavaScript code into machine instructions that the computer can execute.

---

# Inside the JavaScript Engine

The JavaScript engine performs several tasks.

```text
JavaScript Code
       │
       ▼
Lexer (Tokenizer)
       │
       ▼
Parser
       │
       ▼
Abstract Syntax Tree (AST)
       │
       ▼
Interpreter / Compiler
       │
       ▼
Machine Code
```

---

## 1. Lexer

The lexer reads the source code and converts it into **tokens**.

Example:

```javascript
let age = 25;
```

Tokens:

```text
let
age
=
25
;
```

---

## 2. Parser

The parser checks whether the code follows JavaScript syntax rules.

If the syntax is invalid, the parser throws an error.

Example:

```javascript
let = age;
```

Result:

```text
Syntax Error
```

---

## 3. Abstract Syntax Tree (AST)

After parsing, the code is converted into an **Abstract Syntax Tree**.

Example:

```javascript
let x = 10;
```

Simplified representation:

```text
VariableDeclaration
      │
      ├── Identifier (x)
      └── Literal (10)
```

---

## 4. Interpreter

The interpreter executes JavaScript line by line.

Example:

```javascript
console.log("Hello");
```

The interpreter immediately executes this statement.

---

## 5. Just-In-Time (JIT) Compiler

Modern engines such as **V8** use **Just-In-Time (JIT) Compilation**.

Frequently executed code is optimized into fast machine code.

This makes JavaScript much faster than traditional interpreted languages.

---

# Execution Context

Every JavaScript program runs inside an **Execution Context**.

There are two main types.

## Global Execution Context

Created when the program starts.

Example:

```javascript
let name = "Sachin";
```

This variable belongs to the global execution context.

---

## Function Execution Context

Created whenever a function is called.

Example:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

A new execution context is created while `greet()` runs.

---

# Call Stack

JavaScript uses a **Call Stack** to keep track of function execution.

Example:

```javascript
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

Call Stack:

```text
Start

↓

Global()

↓

one()

↓

two()

↓

console.log()

↓

Return

↓

End
```

The last function added to the stack is executed first (**LIFO – Last In, First Out**).

---

# Memory Heap

JavaScript stores objects and variables in memory called the **Heap**.

Example:

```javascript
let person = {
    name: "Sachin",
    age: 22
};
```

The object is stored in the heap, while the variable references it.

---

# Single-Threaded Nature

JavaScript is **single-threaded**.

This means it executes **one task at a time**.

Example:

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

The statements execute in order.

---

# Asynchronous JavaScript

JavaScript can perform background tasks using browser APIs.

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Done");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Done
```

Although JavaScript is single-threaded, asynchronous APIs allow it to handle timers, network requests, and events efficiently.

---

# Event Loop

The **Event Loop** coordinates asynchronous tasks.

```text
Call Stack
      │
      ▼
Web APIs
      │
      ▼
Callback Queue
      │
      ▼
Event Loop
      │
      ▼
Call Stack
```

When the call stack becomes empty, the event loop moves callbacks from the queue back to the stack.

---

# Browser APIs

The browser provides APIs that JavaScript can use.

Examples:

- DOM API
- Fetch API
- Geolocation API
- Web Storage API
- Canvas API
- Audio API
- Timers (`setTimeout`, `setInterval`)

---

# JavaScript Workflow

```text
Write JavaScript Code
          │
          ▼
Browser Loads File
          │
          ▼
JavaScript Engine Reads Code
          │
          ▼
Parse Code
          │
          ▼
Create AST
          │
          ▼
Execute Program
          │
          ▼
Update Web Page
```

---

# Real Example

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>

<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!");
});
</script>

</body>
</html>
```

Flow:

```text
HTML Loads

↓

Browser Creates DOM

↓

JavaScript Finds Button

↓

Event Listener Added

↓

User Clicks Button

↓

Function Executes

↓

Alert Appears
```

---

# Key Points

- JavaScript runs inside a JavaScript engine.
- Browsers use different JavaScript engines.
- The engine parses and executes JavaScript code.
- JavaScript uses execution contexts and a call stack.
- Objects are stored in the memory heap.
- JavaScript is single-threaded but supports asynchronous programming through browser APIs and the event loop.
- Modern engines optimize performance using Just-In-Time (JIT) compilation.

---

# Summary

JavaScript works by loading code into a JavaScript engine, where it is tokenized, parsed, and executed. The engine manages execution contexts, memory, and the call stack while coordinating asynchronous operations through the event loop. Understanding these concepts provides a strong foundation for writing efficient, reliable, and high-performance JavaScript applications.