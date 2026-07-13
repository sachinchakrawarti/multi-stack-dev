---
marp: true
---

# 001-overview / 01-what-is-javascript.md

<!-- 
  This single Markdown file combines the content of two conceptual files.
  All content is presented at the top, with the complete CSS style block
  placed at the bottom, exactly as requested.
-->

## What is JavaScript?

**JavaScript** is a high-level, dynamic, interpreted programming language that conforms to the ECMAScript specification. Alongside HTML and CSS, it is one of the three core technologies of the World Wide Web.

Originally designed for client-side scripting, JavaScript now runs on both the client and server (via Node.js, Deno, Bun, etc.), making it a universal language for modern application development.

> “JavaScript is the only language that runs natively in the browser, making it the de facto language for interactive web experiences.”  
> — MDN Web Docs

### Key characteristics

- **Multi‑paradigm:** supports object‑oriented, functional, and imperative styles.
- **Prototype‑based inheritance:** objects can inherit directly from other objects.
- **Dynamic typing:** variables can hold values of any type without prior declaration.
- **First‑class functions:** functions are treated as values and can be passed around.

---

## Why JavaScript matters today

JavaScript has evolved from a simple “glue language” into a robust ecosystem that powers everything from interactive dashboards to real‑time applications, mobile apps (React Native, Ionic), and even machine learning (TensorFlow.js).

### Evolution & standardization

- **ES6 (2015):** introduced classes, modules, arrow functions, template literals, and `let`/`const`.
- **Annual releases:** ECMAScript now ships yearly with new features (optional chaining, nullish coalescing, top‑level await, etc.).
- **TypeScript:** a typed superset that compiles to plain JavaScript, widely adopted in large codebases.

```javascript
// A simple JavaScript example
function greet(name) {
  return `Hello, ${name}! 👋`;
}

console.log(greet("developer"));
// → "Hello, developer! 👋"


