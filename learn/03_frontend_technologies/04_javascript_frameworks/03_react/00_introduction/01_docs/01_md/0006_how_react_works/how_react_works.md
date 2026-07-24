# ⚙️ How React Works

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">How React Works Behind the Scenes</h1>

<p align="center">
Understanding Components, JSX, Virtual DOM, Reconciliation, and Rendering
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [High-Level Workflow](#high-level-workflow)
- [Step 1: Writing React Code](#step-1-writing-react-code)
- [Step 2: JSX Compilation](#step-2-jsx-compilation)
- [Step 3: React Elements](#step-3-react-elements)
- [Step 4: Virtual DOM](#step-4-virtual-dom)
- [Step 5: Reconciliation](#step-5-reconciliation)
- [Step 6: Updating the Real DOM](#step-6-updating-the-real-dom)
- [Rendering Lifecycle](#rendering-lifecycle)
- [Example Workflow](#example-workflow)
- [Why React is Fast](#why-react-is-fast)
- [Real-World Example](#real-world-example)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand how React renders user interfaces.
- Learn how JSX is transformed.
- Understand the Virtual DOM.
- Learn the Reconciliation process.
- Explain why React performs efficiently.
- Describe the React rendering workflow in interviews.

---

# Introduction

React makes building user interfaces easier by automatically updating the webpage whenever data changes.

Instead of directly modifying the browser's DOM, React follows a multi-step rendering process that minimizes unnecessary updates and improves performance.

---

# High-Level Workflow

```text
Developer writes JSX
        │
        ▼
JSX is compiled into JavaScript
        │
        ▼
React creates React Elements
        │
        ▼
Virtual DOM is created
        │
        ▼
Reconciliation compares changes
        │
        ▼
Only changed nodes are updated
        │
        ▼
Real DOM updates
        │
        ▼
Browser repaints UI
```

---

# Step 1: Writing React Code

Developers write React components using JSX.

Example:

```jsx
function App() {

    return <h1>Hello React</h1>;

}
```

This code looks like HTML, but it is actually JavaScript with JSX syntax.

---

# Step 2: JSX Compilation

Browsers cannot understand JSX directly.

A compiler such as **Babel** converts JSX into JavaScript.

JSX:

```jsx
<h1>Hello React</h1>
```

Compiled JavaScript:

```javascript
React.createElement(
    "h1",
    null,
    "Hello React"
);
```

React works with the compiled JavaScript rather than the original JSX.

---

# Step 3: React Elements

`React.createElement()` creates lightweight JavaScript objects called **React Elements**.

Example:

```javascript
{
    type: "h1",
    props: {
        children: "Hello React"
    }
}
```

These objects describe what should appear on the screen.

---

# Step 4: Virtual DOM

React builds a **Virtual DOM**, which is an in-memory representation of the real DOM.

Example:

```text
Virtual DOM

App
│
└── h1
     └── Hello React
```

The Virtual DOM is lightweight and faster to update than the browser's DOM.

---

# Step 5: Reconciliation

Whenever state or props change, React creates a new Virtual DOM.

React compares:

```text
Old Virtual DOM

↓

New Virtual DOM
```

This comparison process is called **Reconciliation**.

React identifies exactly which elements have changed.

---

# Step 6: Updating the Real DOM

After reconciliation, React updates only the affected DOM nodes.

Instead of rebuilding the entire webpage:

```text
❌ Entire Page
```

React updates:

```text
✅ Only Changed Elements
```

This selective update greatly improves performance.

---

# Rendering Lifecycle

```text
Component Created
        │
        ▼
JSX Rendered
        │
        ▼
React Elements Created
        │
        ▼
Virtual DOM Generated
        │
        ▼
Real DOM Updated
        │
        ▼
User Interaction
        │
        ▼
State Changes
        │
        ▼
Virtual DOM Recreated
        │
        ▼
Reconciliation
        │
        ▼
Changed Nodes Updated
```

---

# Example Workflow

Counter Component:

```jsx
function Counter() {

    const [count, setCount] = React.useState(0);

    return (

        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>

    );

}
```

When the button is clicked:

```text
Click

↓

State Changes

↓

Component Re-renders

↓

New Virtual DOM

↓

Compare with Old Virtual DOM

↓

Update Button Text

↓

Browser Repaints
```

Only the button text changes.

The rest of the page remains untouched.

---

# Why React is Fast

React performs well because it:

- Uses the Virtual DOM.
- Updates only changed elements.
- Uses efficient reconciliation algorithms.
- Encourages reusable components.
- Batches multiple updates together.
- Minimizes expensive browser operations.

---

# Real-World Example

Imagine an online shopping cart.

A user adds one product.

Without React:

- Update cart count.
- Update total price.
- Update checkout summary.
- Update product list manually.

With React:

```text
State Changes

↓

React Detects Changes

↓

Virtual DOM Updates

↓

Only Required Components Re-render
```

Developers focus on the application state instead of manually updating the UI.

---

# Summary

- React renders applications using components.
- JSX is compiled into JavaScript.
- React creates React Elements.
- React builds a Virtual DOM.
- Reconciliation compares Virtual DOM trees.
- Only changed DOM nodes are updated.
- This approach makes React efficient and scalable.

---

# Interview Questions

1. How does React work?
2. What is JSX?
3. Why is Babel required?
4. What are React Elements?
5. What is the Virtual DOM?
6. What is Reconciliation?
7. How does React update the Real DOM?
8. Why is React faster than direct DOM manipulation?
9. What happens when state changes?
10. What is the rendering lifecycle?

---

# Practice Exercise

1. Draw the complete React rendering workflow.
2. Explain how JSX becomes JavaScript.
3. Compare the Virtual DOM and Real DOM.
4. Build a counter component using `useState()`.
5. Observe component re-rendering using React Developer Tools.
6. Explain reconciliation in your own words.

---

# Key Takeaway

> React works by converting JSX into JavaScript, creating React Elements, building a Virtual DOM, comparing changes through Reconciliation, and updating only the necessary parts of the Real DOM. This efficient rendering process is one of the main reasons React is fast, scalable, and widely used for modern web applications.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ [React Ecosystem](../0005_react_ecosystem/react_ecosystem.md) | [🏠 React Introduction](../../README.md) | [➡️ Setting Up React Environment](../0007_setting_up_environment/setting_up_environment.md) |

<br>

<h2 align="center">

<a href="../0007_setting_up_environment/setting_up_environment.md" style="text-decoration:none;color:#61DAFB;">

➡️ <strong>Continue to: Setting Up React Environment</strong>

</a>

</h2>