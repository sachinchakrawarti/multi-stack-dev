# ❓ React FAQ (Frequently Asked Questions)

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">React Introduction - Frequently Asked Questions (FAQ)</h1>

<p align="center">
Answers to the Most Common Questions About React for Beginners
</p>

---

# Table of Contents

- [Introduction](#introduction)
- [General Questions](#general-questions)
- [React Basics](#react-basics)
- [Components](#components)
- [JSX](#jsx)
- [Props and State](#props-and-state)
- [Hooks](#hooks)
- [Performance](#performance)
- [React Ecosystem](#react-ecosystem)
- [Career Questions](#career-questions)
- [Learning Roadmap](#learning-roadmap)
- [Summary](#summary)
- [Key Takeaway](#key-takeaway)
- [Course Navigation](#course-navigation)

---

# Introduction

This FAQ answers the most common questions beginners ask while learning React.

If you're preparing for interviews or revising the React Introduction module, this page serves as a quick reference.

---

# General Questions

## 1. What is React?

React is an open-source JavaScript library developed by **Meta (Facebook)** for building interactive and reusable user interfaces.

---

## 2. Is React a library or a framework?

React is a **JavaScript library**.

It focuses only on building user interfaces.

---

## 3. Who created React?

React was created by **Jordan Walke**, a software engineer at Facebook (now Meta).

---

## 4. When was React released?

React was publicly released in **2013**.

---

## 5. Why is React so popular?

Because it offers:

- Reusable components
- Virtual DOM
- High performance
- Huge ecosystem
- Excellent community support
- Easy learning curve

---

# React Basics

## 6. What problem does React solve?

React simplifies building complex, dynamic user interfaces by breaking them into reusable components and efficiently updating the DOM.

---

## 7. What is the Virtual DOM?

The Virtual DOM is an in-memory representation of the Real DOM. React compares changes in the Virtual DOM and updates only the necessary parts of the browser DOM.

---

## 8. What is JSX?

JSX (JavaScript XML) is a syntax extension that allows developers to write HTML-like markup inside JavaScript.

---

## 9. Can React work without JSX?

Yes.

JSX is optional because it is transformed into JavaScript function calls during compilation, but JSX makes React code much easier to read and write.

---

## 10. Is React only for web applications?

No.

React concepts are also used in:

- React Native (Mobile Apps)
- Electron (Desktop Apps)
- Progressive Web Apps (PWAs)

---

# Components

## 11. What is a component?

A component is a reusable piece of the user interface.

---

## 12. Why are components important?

Components help:

- Reduce duplicate code
- Improve maintainability
- Increase reusability
- Simplify testing

---

## 13. What is the difference between functional and class components?

Today, **functional components** are recommended because they support Hooks and have simpler syntax.

---

## 14. Can components be reused?

Yes.

Reusable components are one of React's biggest strengths.

---

# JSX

## 15. Why does React use JSX?

JSX makes UI code easier to read and allows JavaScript expressions to be embedded directly in the markup.

---

## 16. Is JSX HTML?

No.

JSX looks like HTML but is actually JavaScript syntax that gets compiled into JavaScript function calls.

---

## 17. Can JavaScript be written inside JSX?

Yes.

Use curly braces:

```jsx
<h1>{username}</h1>
```

---

# Props and State

## 18. What are Props?

Props are read-only values passed from a parent component to a child component.

---

## 19. What is State?

State is mutable data managed by a component.

When state changes, React re-renders the component.

---

## 20. What is the difference between Props and State?

| Props | State |
|--------|--------|
| Read-only | Mutable |
| Passed from parent | Managed by component |
| External data | Internal data |

---

## 21. Can Props be modified?

No.

Props are immutable from the child component's perspective.

---

## 22. When should I use State?

Use State when data:

- Changes over time
- Affects the UI
- Needs to trigger re-rendering

---

# Hooks

## 23. What are Hooks?

Hooks are special React functions that let functional components use state and other React features.

---

## 24. Which Hook is used most often?

`useState()`

---

## 25. What does useEffect() do?

It runs side effects such as:

- API calls
- Timers
- Event listeners
- Subscriptions

---

## 26. Can Hooks be used inside loops or conditions?

No.

Hooks must always be called at the top level of a React component or custom Hook.

---

# Performance

## 27. Why is React fast?

Because it uses:

- Virtual DOM
- Efficient diffing
- Reconciliation
- Automatic batching
- Optimized rendering

---

## 28. What is Reconciliation?

It is React's process of comparing the old and new Virtual DOM trees to determine the minimal updates needed in the Real DOM.

---

## 29. What are React Keys?

Keys uniquely identify list items so React can update them efficiently.

---

## 30. Why shouldn't array indexes be used as keys?

Indexes can cause incorrect UI updates when items are inserted, removed, or reordered.

Stable, unique IDs are preferred.

---

# React Ecosystem

## 31. What is React Router?

A library for client-side routing in React applications.

---

## 32. What is Redux Toolkit?

A popular library for managing complex application state.

---

## 33. What is Vite?

A fast development server and build tool commonly used with modern React projects.

---

## 34. What is React Native?

A framework for building native mobile applications using React.

---

## 35. Can React be used with TypeScript?

Yes.

React works very well with TypeScript and is widely used in professional applications.

---

# Career Questions

## 36. Is React worth learning?

Yes.

React is one of the most in-demand frontend technologies worldwide.

---

## 37. Do companies still use React?

Yes.

Companies of all sizes—from startups to large enterprises—use React.

---

## 38. What should I learn before React?

You should know:

- HTML
- CSS
- JavaScript (ES6+)

---

## 39. What should I learn after React?

Recommended order:

- JSX
- Components
- Props
- State
- Hooks
- Event Handling
- Forms
- Routing
- API Calls
- Context API
- Redux Toolkit
- Testing
- Next.js

---

## 40. How long does it take to learn React?

For someone with solid JavaScript knowledge:

- Basics: 2–4 weeks
- Intermediate: 2–3 months
- Advanced: 6+ months with projects

Learning speed depends on consistency and practice.

---

# Learning Roadmap

```text
HTML
   │
CSS
   │
JavaScript
   │
React Introduction ✅
   │
JSX
   │
Components
   │
Props
   │
State
   │
Hooks
   │
Forms
   │
Routing
   │
API Integration
   │
Context API
   │
Redux Toolkit
   │
Performance
   │
Testing
   │
Next.js
```

---

# Summary

In this FAQ, you reviewed:

- What React is
- Why React is popular
- Components
- JSX
- Props
- State
- Hooks
- Performance
- React ecosystem
- Career guidance
- Learning roadmap

This page serves as a quick revision guide for the entire React Introduction module.

---

# Key Takeaway

> React is a powerful and beginner-friendly JavaScript library for building modern user interfaces. Understanding its core concepts—such as components, JSX, Props, State, Hooks, and the Virtual DOM—provides a strong foundation for learning advanced React topics and building real-world applications.

---

# 🎉 Congratulations!

You have successfully completed the **React Introduction** module.

You are now ready to move on to the next chapter:

## 🚀 React JSX

---

# Course Navigation

| Previous | Home | Next Module |
|----------|------|-------------|
| ⬅️ [Summary](../0015_summary/summary.md) | 🏠 [React Introduction](../../README.md) | ➡️ **01_JSX Module** |

<br>

<h2 align="center">

🎉 <strong>Congratulations! You have completed the React Introduction module.</strong>

<br><br>

🚀 <strong>Next Journey: React JSX</strong>

</h2>