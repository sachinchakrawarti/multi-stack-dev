# ⚛️ React vs Vanilla JavaScript

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">React vs Vanilla JavaScript</h1>

<p align="center">
Understanding the Differences Between React and Plain JavaScript
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is Vanilla JavaScript?](#what-is-vanilla-javascript)
- [What is React?](#what-is-react)
- [Key Differences](#key-differences)
- [Feature Comparison](#feature-comparison)
- [Performance Comparison](#performance-comparison)
- [Code Comparison](#code-comparison)
- [Real-World Example](#real-world-example)
- [When to Use Vanilla JavaScript](#when-to-use-vanilla-javascript)
- [When to Use React](#when-to-use-react)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand the difference between React and Vanilla JavaScript.
- Compare their features and performance.
- Identify the strengths and weaknesses of each.
- Decide when to use React or Vanilla JavaScript.
- Answer interview questions on this topic.

---

# Introduction

Every modern web application uses JavaScript.

Developers have two common approaches:

1. Build applications using **Vanilla JavaScript**.
2. Build applications using **React**.

Both are capable of creating interactive websites, but they differ in how they manage the user interface, organize code, and scale applications.

---

# What is Vanilla JavaScript?

**Vanilla JavaScript** refers to plain JavaScript without any frameworks or libraries.

It uses standard browser APIs to manipulate the Document Object Model (DOM).

Example:

```javascript
const heading = document.getElementById("title");

heading.textContent = "Hello World";
```

Vanilla JavaScript is lightweight and ideal for small projects.

---

# What is React?

React is an open-source JavaScript library for building user interfaces.

Instead of directly manipulating the DOM, React updates the UI using a Virtual DOM and reusable components.

Example:

```jsx
function App() {

    return <h1>Hello World</h1>;

}

export default App;
```

---

# Key Differences

| Feature | Vanilla JavaScript | React |
|----------|--------------------|--------|
| Type | Programming Language | JavaScript Library |
| UI Updates | Manual | Automatic |
| DOM | Real DOM | Virtual DOM |
| Components | ❌ | ✅ |
| JSX | ❌ | ✅ |
| State Management | Manual | Built-in (Hooks) |
| Code Reusability | Limited | High |
| Large Projects | Difficult | Easy |
| Learning Curve | Easier | Moderate |

---

# Feature Comparison

## Code Organization

### Vanilla JavaScript

Most code is written in separate HTML, CSS, and JavaScript files.

As projects grow, files become larger and harder to maintain.

---

### React

Applications are divided into reusable components.

Example:

```text
App

├── Navbar

├── Sidebar

├── ProductCard

├── Footer
```

This makes the project easier to understand and maintain.

---

## DOM Manipulation

### Vanilla JavaScript

Developers manually update the DOM.

```javascript
document.getElementById("count").textContent = 10;
```

---

### React

React automatically updates the UI whenever the application state changes.

```jsx
const [count, setCount] = useState(10);
```

---

## Reusability

### Vanilla JavaScript

Repeated HTML and JavaScript code is common.

---

### React

Reusable components eliminate duplication.

```jsx
<ProductCard />

<ProductCard />

<ProductCard />
```

---

## State Management

### Vanilla JavaScript

Developers manually update variables and the DOM.

---

### React

React provides Hooks such as:

- useState()
- useEffect()
- useContext()
- useReducer()

These simplify state management.

---

# Performance Comparison

## Vanilla JavaScript

Advantages:

- Small bundle size.
- No framework overhead.
- Fast for simple pages.

Disadvantages:

- Manual DOM updates.
- Difficult to optimize large applications.

---

## React

Advantages:

- Virtual DOM.
- Efficient rendering.
- Optimized UI updates.
- Better performance in complex applications.

Disadvantages:

- Additional library size.
- Build tools required.

---

# Code Comparison

## Vanilla JavaScript Counter

```html
<button id="btn">Increment</button>

<p id="count">0</p>
```

```javascript
let count = 0;

const button = document.getElementById("btn");

const output = document.getElementById("count");

button.addEventListener("click", () => {

    count++;

    output.textContent = count;

});
```

---

## React Counter

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (

        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <p>{count}</p>
        </>

    );

}

export default Counter;
```

---

# Real-World Example

## Vanilla JavaScript

Imagine building an e-commerce website.

Developers manually update:

- Cart count
- Total price
- Product quantity
- Wishlist

Each update requires DOM manipulation.

---

## React

The UI automatically updates whenever application state changes.

Changing one value updates every dependent component.

---

# When to Use Vanilla JavaScript

Choose Vanilla JavaScript for:

- Small websites
- Landing pages
- Static websites
- Learning JavaScript fundamentals
- Simple interactive pages

---

# When to Use React

Choose React for:

- Single Page Applications (SPA)
- Dashboards
- E-commerce websites
- Social media platforms
- Admin panels
- Enterprise applications
- Real-time applications

---

# Advantages and Disadvantages

## Vanilla JavaScript

### Advantages

- No dependencies.
- Lightweight.
- Easy to deploy.
- Fast for small projects.

### Disadvantages

- Manual DOM manipulation.
- Less reusable code.
- Difficult to maintain large projects.

---

## React

### Advantages

- Reusable components.
- Virtual DOM.
- Better scalability.
- Large ecosystem.
- Excellent developer experience.

### Disadvantages

- Learning curve.
- Requires build tools.
- Additional libraries needed for routing and state management.

---

# Summary

- Vanilla JavaScript is ideal for small applications.
- React is designed for modern, large-scale user interfaces.
- React simplifies UI development with reusable components.
- The Virtual DOM improves rendering performance.
- Choosing between them depends on the project's size and complexity.

---

# Interview Questions

1. What is Vanilla JavaScript?
2. What is React?
3. What is the Virtual DOM?
4. Why is React faster for large applications?
5. What are reusable components?
6. What are React Hooks?
7. When should you choose Vanilla JavaScript?
8. When is React a better choice?
9. Can React replace JavaScript?
10. Is React a framework or a library?

---

# Practice Exercise

1. Build a counter using Vanilla JavaScript.
2. Build the same counter using React.
3. Compare the code size.
4. Create a reusable Product Card component in React.
5. Explain the advantages of reusable components.
6. List five situations where React is preferable.

---

# Key Takeaway

> Vanilla JavaScript is an excellent choice for learning programming fundamentals and building simple websites. React builds on JavaScript by introducing reusable components, a Virtual DOM, and efficient state management, making it a better choice for complex, interactive, and scalable web applications.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ [Why React?](../0003_why_react/why_react.md) | [🏠 React Introduction](../../README.md) | [➡️ Features of React](../0005_features_of_react/features_of_react.md) |

<br>

<h2 align="center">

<a href="../0005_features_of_react/features_of_react.md" style="text-decoration:none;color:#61DAFB;">

➡️ <strong>Continue to: Features of React</strong>

</a>

</h2>