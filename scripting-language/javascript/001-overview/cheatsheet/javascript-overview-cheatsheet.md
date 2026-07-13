# JavaScript Overview Cheat Sheet

> **Module:** 001 - JavaScript Overview  
> **Purpose:** Quick Revision | Interview Preparation | Placement Notes

---

# JavaScript at a Glance

| Property | Value |
|----------|-------|
| Language | JavaScript (JS) |
| Created By | Brendan Eich |
| Year Created | 1995 |
| First Browser | Netscape Navigator 2.0 |
| Original Names | Mocha → LiveScript → JavaScript |
| Standard | ECMAScript (ES) |
| Latest Style | Modern ECMAScript (ES6+) |
| Type | High-Level, Dynamic, Multi-Paradigm |
| Runs On | Browser, Node.js, Deno, Bun |

---

# Definition

**JavaScript** is a high-level, dynamically typed, interpreted (JIT-compiled) programming language used to build interactive web pages, backend services, mobile apps, desktop apps, and many other types of software.

---

# Three Core Web Technologies

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Styling |
| JavaScript | Behavior & Interactivity |

---

# JavaScript Characteristics

- High-Level
- Dynamic Typing
- Multi-Paradigm
- Object-Oriented
- Functional
- Event-Driven
- Prototype-Based
- Cross-Platform
- Interpreted with JIT Compilation
- Garbage Collected

---

# JavaScript Use Cases

- Frontend Development
- Backend Development
- Full Stack Development
- Mobile Applications
- Desktop Applications
- REST APIs
- Real-Time Applications
- Progressive Web Apps (PWAs)
- Automation & Scripting
- Cloud Functions
- AI & Machine Learning
- Internet of Things (IoT)
- Game Development
- Browser Extensions

---

# JavaScript Runtime

```text
JavaScript Code
        │
        ▼
+-------------------+
|   Call Stack      |
+-------------------+
        │
        ▼
+-------------------+
| Web APIs /        |
| Node APIs         |
+-------------------+
        │
        ▼
+-------------------+
| Callback Queue    |
+-------------------+
        │
        ▼
+-------------------+
|   Event Loop      |
+-------------------+
        │
        ▼
+-------------------+
|   Call Stack      |
+-------------------+
```

---

# JavaScript Engine

A JavaScript Engine reads, compiles, and executes JavaScript code.

## Popular Engines

| Browser | Engine |
|----------|--------|
| Chrome | V8 |
| Edge | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Node.js | V8 |

---

# Browser vs Node.js

| Browser | Node.js |
|----------|----------|
| Runs in Browser | Runs on Server |
| Access to DOM | No DOM |
| Uses Web APIs | Uses Node APIs |
| UI Development | Backend Development |

---

# ECMAScript Timeline

| Version | Year |
|----------|------|
| ES1 | 1997 |
| ES2 | 1998 |
| ES3 | 1999 |
| ES5 | 2009 |
| ES6 (ES2015) | 2015 |
| ES2016+ | Annual Releases |

---

# Variable Keywords

```javascript
var
let
const
```

---

# Print Output

```javascript
console.log("Hello JavaScript");
```

---

# Comments

## Single Line

```javascript
// This is a comment
```

## Multi-Line

```javascript
/*
Multi-line
Comment
*/
```

---

# First Program

```javascript
console.log("Hello, JavaScript!");
```

---

# Data Types (Overview)

## Primitive

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

## Non-Primitive

- Object
- Array
- Function

---

# Popular Frameworks & Libraries

## Frontend

- React
- Angular
- Vue.js
- Svelte

## Backend

- Express.js
- NestJS
- Fastify

## Mobile

- React Native
- Ionic
- NativeScript

## Desktop

- Electron
- Tauri

---

# Advantages

- Easy to Learn
- Cross-Platform
- Huge Community
- Massive Ecosystem
- Full Stack Development
- High Demand
- Fast Execution
- Open Source

---

# Limitations

- Dynamic Typing
- Browser Security Restrictions
- Rapidly Changing Ecosystem
- Requires Good Project Structure for Large Applications

---

# Frequently Asked Interview Questions

1. What is JavaScript?
2. Who created JavaScript?
3. What is ECMAScript?
4. What is Node.js?
5. What is a JavaScript Engine?
6. What is the Event Loop?
7. What is the Call Stack?
8. What is the Memory Heap?
9. What is the difference between JavaScript and Java?
10. Can JavaScript run outside the browser?

---

# Quick Facts

- Created in **1995**
- Created by **Brendan Eich**
- Built in **10 days**
- Originally called **Mocha**
- Standardized as **ECMAScript**
- Runs in **Browsers** and **Node.js**
- One of the **most popular programming languages** in the world

---

# Remember

- **HTML** → Structure
- **CSS** → Style
- **JavaScript** → Behavior

---

# Learning Roadmap

```text
001 - Overview
      ↓
002 - Variables
      ↓
003 - Data Types
      ↓
004 - Operators
      ↓
005 - Control Flow
      ↓
006 - Loops
      ↓
007 - Functions
      ↓
008 - Arrays
      ↓
009 - Objects
      ↓
010 - Strings
      ↓
011 - DOM
      ↓
012 - Events
      ↓
013 - ES6+
      ↓
014 - Asynchronous JavaScript
      ↓
015 - Fetch API
      ↓
016 - Modules
      ↓
017 - Error Handling
      ↓
018 - OOP
      ↓
019 - Node.js
      ↓
020 - Projects
      ↓
021 - Placement Preparation
```

---

# One-Minute Revision

- JavaScript was created by **Brendan Eich** in **1995**.
- It was originally named **Mocha**, then **LiveScript**, and finally **JavaScript**.
- The official standard is **ECMAScript (ES)**.
- JavaScript runs in **web browsers** and on **servers** using runtimes like **Node.js**.
- It powers **frontend**, **backend**, **mobile**, **desktop**, **cloud**, and **IoT** applications.
- Modern JavaScript uses `let` and `const` for variable declarations.
- The JavaScript runtime includes the **Call Stack**, **Memory Heap**, **Web/Node APIs**, **Callback Queue**, and **Event Loop**.

---

> **Tip:** Read this cheat sheet before interviews or placements to quickly refresh the core JavaScript concepts covered in Module **001 - Overview**.