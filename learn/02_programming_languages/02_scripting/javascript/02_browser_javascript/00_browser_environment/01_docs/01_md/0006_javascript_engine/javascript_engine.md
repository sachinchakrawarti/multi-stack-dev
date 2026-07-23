# JavaScript Engine

## Table of Contents

- Learning Objectives
- Introduction
- Why Do We Need a JavaScript Engine?
- What Is a JavaScript Engine?
- Popular JavaScript Engines
- Responsibilities of a JavaScript Engine
- JavaScript Engine Architecture
- JavaScript Execution Process
- Parsing
- Abstract Syntax Tree (AST)
- Interpretation
- Just-In-Time (JIT) Compilation
- Execution
- Memory Management
- Garbage Collection
- Call Stack
- Event Loop Interaction
- V8 JavaScript Engine
- SpiderMonkey
- JavaScriptCore
- Chakra
- Real-World Example
- Advantages
- Limitations
- Common Mistakes
- Best Practices
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain what a JavaScript Engine is.
- Understand how JavaScript code is executed.
- Describe the stages of JavaScript execution.
- Understand JIT compilation.
- Learn how memory is managed.
- Explain the role of the Call Stack.

---

# Introduction

JavaScript is written in a human-readable format.

Example:

```javascript
let message = "Hello World";

console.log(message);
```

Computers cannot directly understand JavaScript code.

Instead, the browser uses a **JavaScript Engine** to read, understand, optimize, and execute JavaScript.

Without a JavaScript Engine, browsers could display HTML and CSS, but webpages would not be interactive.

---

# Why Do We Need a JavaScript Engine?

The JavaScript Engine is responsible for converting JavaScript source code into machine instructions that the CPU can execute.

It performs tasks such as:

- Parsing JavaScript
- Detecting syntax errors
- Optimizing code
- Executing instructions
- Managing memory
- Garbage collection

---

# What Is a JavaScript Engine?

A **JavaScript Engine** is a software component that reads JavaScript source code, converts it into executable instructions, and runs the program.

It exists in:

- Web Browsers
- Node.js
- Electron Applications
- Desktop Applications
- Mobile Applications

---

# Popular JavaScript Engines

| Browser / Platform | JavaScript Engine |
|--------------------|-------------------|
| Google Chrome | V8 |
| Microsoft Edge | V8 |
| Node.js | V8 |
| Mozilla Firefox | SpiderMonkey |
| Apple Safari | JavaScriptCore |
| Older Microsoft Edge | Chakra |

---

# Responsibilities of a JavaScript Engine

A JavaScript Engine is responsible for:

- Reading JavaScript
- Parsing source code
- Creating the AST
- Compiling code
- Executing instructions
- Managing memory
- Running Garbage Collection
- Handling the Call Stack
- Optimizing frequently used code

---

# JavaScript Engine Architecture

A simplified architecture looks like this:

```text
JavaScript Source Code
          │
          ▼
       Parser
          │
          ▼
 Abstract Syntax Tree (AST)
          │
          ▼
 Interpreter
          │
          ▼
 JIT Compiler
          │
          ▼
 Optimized Machine Code
          │
          ▼
        CPU
```

---

# JavaScript Execution Process

The JavaScript Engine executes code in several stages:

1. Read the source code.
2. Parse the code.
3. Build the AST.
4. Interpret the code.
5. Compile frequently used code.
6. Execute optimized machine code.
7. Manage memory.
8. Clean unused memory.

---

# Parsing

The Parser reads JavaScript code line by line.

Example:

```javascript
let age = 20;
```

If there is a syntax error:

```javascript
let age =
```

the parser reports an error before execution begins.

---

# Abstract Syntax Tree (AST)

After parsing, the engine creates an **Abstract Syntax Tree (AST)**.

Example:

```javascript
let total = 10 + 20;
```

Simplified AST:

```text
Assignment

├── Variable : total

└── Addition

    ├── 10

    └── 20
```

The AST represents the structure of the code.

---

# Interpretation

The Interpreter executes JavaScript immediately.

Advantages:

- Fast startup.
- Immediate execution.
- No waiting for full compilation.

---

# Just-In-Time (JIT) Compilation

Modern engines use **JIT Compilation**.

Frequently executed code is converted into optimized machine code.

Example:

```javascript
for(let i=0;i<1000000;i++){

    calculate();

}
```

The engine notices that `calculate()` runs many times and optimizes it.

Benefits:

- Faster execution.
- Better CPU utilization.
- Improved performance.

---

# Execution

The optimized code is finally executed by the CPU.

Example:

```javascript
console.log("JavaScript Running");
```

The engine executes the instruction and prints the output.

---

# Memory Management

JavaScript automatically allocates memory.

Example:

```javascript
let user = {

    name : "Sachin"

};
```

Memory is reserved automatically.

Developers usually do not allocate or free memory manually.

---

# Garbage Collection

When an object is no longer needed, the engine removes it automatically.

Example:

```javascript
let person = {

    name : "John"

};

person = null;
```

The previous object becomes unreachable and can be removed by the Garbage Collector.

This frees memory for future use.

---

# Call Stack

The Call Stack keeps track of function execution.

Example:

```javascript
function one(){

    two();

}

function two(){

    console.log("Hello");

}

one();
```

Call Stack:

```text
one()

↓

two()

↓

console.log()

↓

Return
```

Functions are added and removed from the stack as they execute.

---

# Event Loop Interaction

JavaScript is single-threaded.

Long-running tasks are handled using the Event Loop.

Example:

```javascript
setTimeout(() => {

    console.log("Done");

},1000);

console.log("Start");
```

Output:

```text
Start

Done
```

The Event Loop ensures asynchronous tasks execute when the Call Stack is empty.

---

# V8 JavaScript Engine

Developed by Google.

Used in:

- Chrome
- Edge
- Node.js

Features:

- JIT Compilation
- High performance
- Efficient Garbage Collection
- Optimized execution

---

# SpiderMonkey

Developed by Mozilla.

Used in:

- Firefox

Features:

- Fast execution
- Modern ECMAScript support
- Strong debugging tools

---

# JavaScriptCore

Developed by Apple.

Used in:

- Safari

Features:

- Optimized for Apple devices
- High performance
- Efficient memory management

---

# Chakra

Developed by Microsoft.

Previously used in:

- Legacy Microsoft Edge

Modern Edge now uses the V8 engine.

---

# Real-World Example

Suppose a webpage contains:

```javascript
let price = 500;

let tax = 50;

console.log(price + tax);
```

The JavaScript Engine:

1. Reads the code.
2. Parses it.
3. Creates the AST.
4. Compiles frequently executed parts.
5. Executes the code.
6. Prints:

```text
550
```

---

# Advantages

- Fast execution.
- Automatic memory management.
- JIT optimization.
- Cross-platform.
- Modern ECMAScript support.
- Efficient garbage collection.

---

# Limitations

- Single-threaded execution.
- Heavy computations can block the UI.
- Memory leaks are still possible.
- Performance depends on code quality.

---

# Common Mistakes

### ❌ Incorrect

Assuming JavaScript is compiled before execution like C++.

Modern JavaScript engines combine interpretation and Just-In-Time compilation.

---

### ❌ Incorrect

Thinking JavaScript manages memory manually.

Memory allocation and cleanup are automatic.

---

### ✅ Correct

Write efficient code so the engine can optimize execution.

---

# Best Practices

- Avoid unnecessary global variables.
- Reuse objects when appropriate.
- Remove unused event listeners.
- Write optimized loops.
- Avoid blocking the Call Stack.
- Use asynchronous programming for long-running tasks.

---

# Summary

- A JavaScript Engine executes JavaScript code.
- It parses source code into an AST.
- It interprets and JIT-compiles frequently executed code.
- It manages memory automatically.
- It performs garbage collection.
- It executes functions using the Call Stack.
- Modern browsers use highly optimized JavaScript engines.

---

# Interview Questions

1. What is a JavaScript Engine?
2. Name popular JavaScript Engines.
3. What is the V8 Engine?
4. What is an AST?
5. What is JIT Compilation?
6. What is the Call Stack?
7. What is Garbage Collection?
8. How does JavaScript manage memory?
9. Why is JavaScript called single-threaded?
10. How does the JavaScript Engine improve performance?

---

# Practice Exercise

1. Open Chrome Developer Tools.
2. Open the **Sources** tab.
3. Write a simple JavaScript program.
4. Set breakpoints.
5. Step through the execution.
6. Observe the Call Stack.
7. Explore the Memory tab to understand object allocation.

---

# Key Takeaway

> The JavaScript Engine is the heart of JavaScript execution. It transforms source code into executable instructions through parsing, AST creation, interpretation, JIT compilation, and optimization while automatically managing memory and executing code efficiently.

---

# Next Lesson

<h2>
➡️ <a href="../0007_browser_vs_nodejs/browser_vs_nodejs.md" style="color:#1E90FF;text-decoration:none;">
<strong>Browser vs Node.js</strong>
</a>
</h2>