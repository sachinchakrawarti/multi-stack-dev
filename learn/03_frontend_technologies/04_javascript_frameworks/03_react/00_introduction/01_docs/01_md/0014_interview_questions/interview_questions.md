# 💼 React Interview Questions

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">React Introduction – Interview Questions & Answers</h1>

<p align="center">
Master the Most Frequently Asked React Interview Questions from Beginner to Advanced Level
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Beginner-Level Questions](#beginner-level-questions)
- [Intermediate-Level Questions](#intermediate-level-questions)
- [Advanced-Level Questions](#advanced-level-questions)
- [Scenario-Based Questions](#scenario-based-questions)
- [Rapid Fire Questions](#rapid-fire-questions)
- [Mini Quiz](#mini-quiz)
- [Summary](#summary)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Answer common React interview questions.
- Explain React concepts confidently.
- Understand practical interview scenarios.
- Prepare for frontend developer interviews.
- Revise React Introduction topics effectively.

---

# Introduction

React interviews often focus on understanding **core concepts** rather than memorizing syntax.

Interviewers want to know whether you understand:

- React fundamentals
- Component-based architecture
- JSX
- Virtual DOM
- State and Props
- React philosophy
- Best practices
- Real-world usage

This lesson collects the most commonly asked questions related to the **React Introduction** module.

---

# Beginner-Level Questions

## 1. What is React?

**Answer:**

React is an open-source JavaScript library developed by Meta for building fast, interactive, and reusable user interfaces using a component-based architecture.

---

## 2. Is React a Framework?

**Answer:**

No.

React is a **JavaScript library** focused only on building the UI layer.

Additional libraries such as React Router or Redux are used to build complete applications.

---

## 3. Who Developed React?

**Answer:**

React was created by **Jordan Walke**, a software engineer at Meta (formerly Facebook), and was open-sourced in 2013.

---

## 4. What are Components?

**Answer:**

Components are reusable building blocks that represent parts of a user interface.

Example:

```text
App

├── Navbar

├── Sidebar

├── ProductCard

└── Footer
```

---

## 5. What is JSX?

**Answer:**

JSX (JavaScript XML) is a syntax extension that allows developers to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

---

## 6. Why is React Popular?

**Answer:**

Because React provides:

- Reusable components
- Virtual DOM
- Excellent performance
- Large ecosystem
- Strong community support
- Cross-platform development with React Native

---

## 7. What is the Virtual DOM?

**Answer:**

The Virtual DOM is a lightweight JavaScript representation of the Real DOM.

React compares old and new Virtual DOM trees and updates only the changed elements in the browser.

---

## 8. What is Declarative Programming?

**Answer:**

Declarative programming means describing **what** the UI should look like rather than manually describing **how** to update it.

---

## 9. What is One-Way Data Flow?

**Answer:**

Data flows from **parent components** to **child components** through Props.

This makes applications predictable and easier to debug.

---

## 10. What are Props?

**Answer:**

Props are read-only inputs passed from a parent component to a child component.

---

# Intermediate-Level Questions

## 11. What is State?

**Answer:**

State stores data that changes during the lifetime of a component.

When state changes, React automatically re-renders the component.

---

## 12. What is Reconciliation?

**Answer:**

Reconciliation is React's process of comparing the old Virtual DOM with the new Virtual DOM to determine the minimum number of updates required in the Real DOM.

---

## 13. What are Hooks?

**Answer:**

Hooks are special React functions that allow functional components to use state, lifecycle features, and other React capabilities.

Examples:

- `useState()`
- `useEffect()`
- `useContext()`
- `useMemo()`
- `useRef()`

---

## 14. Why are Functional Components Preferred?

**Answer:**

Functional components are simpler, easier to read, support Hooks, and are the recommended approach in modern React.

---

## 15. Why Should Components Be Small?

**Answer:**

Small components:

- Are reusable.
- Are easier to test.
- Are easier to maintain.
- Have a single responsibility.

---

## 16. Why Should State Not Be Mutated Directly?

**Answer:**

React detects changes through state updates.

Mutating state directly can prevent React from re-rendering correctly and may introduce bugs.

---

## 17. Why Should Unique Keys Be Used in Lists?

**Answer:**

Keys help React identify which items have changed, been added, or removed, making updates more efficient.

---

## 18. What is React Philosophy?

**Answer:**

React encourages:

- Thinking in components
- Declarative programming
- One-way data flow
- Reusable code
- State-driven UI
- Composition over inheritance

---

# Advanced-Level Questions

## 19. What is Fiber Architecture?

**Answer:**

Fiber is React's rendering engine introduced in React 16. It enables more efficient rendering, interruption of rendering work, and concurrent features.

---

## 20. What is Concurrent Rendering?

**Answer:**

Concurrent Rendering, introduced in React 18, allows React to prepare multiple versions of the UI and prioritize urgent updates for a smoother user experience.

---

## 21. Why Does React Use the Virtual DOM?

**Answer:**

To minimize direct DOM manipulation, reduce expensive browser operations, and improve rendering performance.

---

## 22. What Makes React Fast?

**Answer:**

React's performance comes from:

- Virtual DOM
- Reconciliation
- Efficient diffing
- Automatic batching
- Component reuse
- Optimized rendering

---

## 23. Explain "UI = f(State)"

**Answer:**

The user interface is a function of the application's current state. Whenever state changes, React automatically updates the UI to match the new state.

---

# Scenario-Based Questions

## Scenario 1

**Question:**

A list re-renders incorrectly after deleting an item.

**Answer:**

Check whether unique keys are being used. Avoid using array indexes as keys.

---

## Scenario 2

**Question:**

A component does not update after changing an object.

**Answer:**

State may have been mutated directly. Always create a new object or array when updating state.

---

## Scenario 3

**Question:**

An application becomes slow while rendering a large list.

**Answer:**

Possible improvements:

- Memoization (`React.memo`, `useMemo`)
- Virtualization
- Pagination
- Lazy loading

---

## Scenario 4

**Question:**

A component contains more than 1000 lines of code.

**Answer:**

Split it into smaller reusable components with clear responsibilities.

---

# Rapid Fire Questions

| Question | Answer |
|----------|--------|
| React is a? | JavaScript Library |
| Created By? | Meta (Facebook) |
| First Released? | 2013 |
| JSX Stands For? | JavaScript XML |
| State Stores? | Dynamic Data |
| Props Are? | Read-only Inputs |
| Rendering Engine? | Fiber |
| Mobile Version? | React Native |
| Latest Major Version? | React 19 |
| UI = ? | Function of State |

---

# Mini Quiz

### 1. React mainly focuses on:

- A. Database
- B. UI Development ✅
- C. Backend APIs
- D. Networking

---

### 2. JSX is:

- A. CSS
- B. HTML
- C. JavaScript Syntax Extension ✅
- D. JSON

---

### 3. Which feature improves rendering performance?

- A. Props
- B. Virtual DOM ✅
- C. CSS
- D. HTML

---

### 4. Data flows from:

- A. Child → Parent
- B. Parent → Child ✅
- C. Database → CSS
- D. Browser → React

---

### 5. Which Hook manages local state?

- A. `useEffect`
- B. `useState` ✅
- C. `useMemo`
- D. `useRef`

---

# Summary

This lesson covered:

- React fundamentals
- JSX
- Components
- Virtual DOM
- State
- Props
- Hooks
- Reconciliation
- React philosophy
- Common interview scenarios

These questions form the foundation of most React technical interviews.

---

# Key Takeaway

> React interviews test your understanding of concepts more than memorization. A solid grasp of components, JSX, state, props, the Virtual DOM, Hooks, and React philosophy will help you answer confidently in both technical interviews and real-world development.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ [Common Mistakes](../0013_common_mistakes/common_mistakes.md) | [🏠 React Introduction](../../README.md) | ➡️ **Next Module: React Environment Setup** |

<br>

<h2 align="center">

🎉 <strong>Congratulations!</strong>

You have successfully completed the **React Introduction** module.

<br><br>

➡️ Continue to the next module:

**React Environment Setup**

</h2>