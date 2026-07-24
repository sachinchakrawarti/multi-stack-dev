# ⚛️ What is React?

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">React.js</h1>

<p align="center">
A JavaScript Library for Building Modern User Interfaces
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [What is React?](#what-is-react)
- [Why React Was Created](#why-react-was-created)
- [History of React](#history-of-react)
- [Why Developers Love React](#why-developers-love-react)
- [Features of React](#features-of-react)
- [Advantages of React](#advantages-of-react)
- [Disadvantages of React](#disadvantages-of-react)
- [React vs Vanilla JavaScript](#react-vs-vanilla-javascript)
- [React Ecosystem](#react-ecosystem)
- [Real-World Applications](#real-world-applications)
- [Simple React Example](#simple-react-example)
- [When Should You Use React?](#when-should-you-use-react)
- [Best Practices](#best-practices)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand what React is.
- Know why React was created.
- Learn the core features of React.
- Understand React's component-based architecture.
- Explain the Virtual DOM.
- Identify real-world use cases of React.
- Build your first React component.

---

# Introduction

React is one of the world's most popular JavaScript libraries for building user interfaces.

It helps developers build fast, interactive, and reusable user interfaces using components instead of writing repetitive HTML and JavaScript.

React is maintained by **Meta (Facebook)** and is used by millions of developers worldwide.

---

# What is React?

React is an **open-source JavaScript library** used for building **user interfaces (UI)**.

It focuses on creating reusable UI components that automatically update whenever application data changes.

Unlike traditional JavaScript applications that manipulate the DOM directly, React updates only the necessary parts of the page using the **Virtual DOM**.

---

# Why React Was Created

Before React, developers manually updated the DOM.

As applications became larger:

- Code became difficult to maintain.
- UI updates became slower.
- Repeated DOM manipulation increased complexity.
- Performance decreased.

Facebook created React to solve these problems by introducing reusable components and efficient rendering.

---

# History of React

| Year | Event |
|------|-------|
| 2011 | Developed internally at Facebook |
| 2013 | Open-sourced to the public |
| 2015 | React Native released |
| 2017 | Fiber Architecture introduced |
| 2019 | Hooks released |
| 2022 | React 18 introduced Concurrent Features |

---

# Why Developers Love React

Developers prefer React because it offers:

- Reusable components
- Fast rendering
- Virtual DOM
- Declarative programming
- Large community
- Huge ecosystem
- Excellent developer tools
- Easy integration with other libraries

---

# Features of React

## Component-Based Architecture

Applications are divided into reusable components.

```text
App
│
├── Navbar
├── Sidebar
├── ProductCard
├── Footer
```

---

## Virtual DOM

React creates a lightweight copy of the DOM.

Instead of updating the entire webpage, React updates only the changed elements.

---

## JSX

JSX lets developers write HTML inside JavaScript.

```jsx
function App() {

    return <h1>Hello React</h1>;

}
```

---

## Declarative Programming

Developers describe **what** the UI should look like.

React handles **how** to update the page.

---

## One-Way Data Flow

Data flows from parent components to child components, making applications predictable and easier to debug.

---

# Advantages of React

- Fast rendering
- Virtual DOM
- Reusable components
- Easy maintenance
- Huge ecosystem
- Large community
- SEO support with Next.js
- Cross-platform development using React Native

---

# Disadvantages of React

- JSX has a learning curve.
- React only handles the UI.
- Additional libraries are needed for routing and state management.
- Frequent updates in the ecosystem.

---

# React vs Vanilla JavaScript

| Feature | Vanilla JavaScript | React |
|----------|-------------------|--------|
| UI Components | ❌ | ✅ |
| Virtual DOM | ❌ | ✅ |
| Code Reusability | Low | High |
| Large Applications | Difficult | Easy |
| Performance | Good | Excellent |

---

# React Ecosystem

Popular tools used with React:

- Vite
- Next.js
- React Router
- Redux
- Context API
- React Query
- Axios
- Tailwind CSS
- Material UI
- React Native

---

# Real-World Applications

React powers many well-known applications, including:

- Facebook
- Instagram
- WhatsApp Web
- Netflix
- Airbnb
- Discord
- Shopify
- Atlassian products

---

# Simple React Example

```jsx
function App() {

    return (

        <div>

            <h1>Hello React</h1>

            <p>Welcome to React.js</p>

        </div>

    );

}

export default App;
```

---

# When Should You Use React?

React is ideal for:

- Dashboards
- Admin Panels
- E-commerce Websites
- Social Media Platforms
- Chat Applications
- Portfolio Websites
- Enterprise Applications
- Single Page Applications (SPA)

---

# Best Practices

- Use reusable components.
- Prefer functional components.
- Keep components small.
- Organize folders properly.
- Avoid unnecessary re-renders.
- Use Hooks correctly.
- Follow consistent naming conventions.

---

# Summary

- React is an open-source JavaScript library.
- It is used to build user interfaces.
- React uses reusable components.
- It improves performance using the Virtual DOM.
- JSX simplifies UI development.
- React is maintained by Meta.

---

# Interview Questions

1. What is React?
2. Why was React created?
3. What is the Virtual DOM?
4. What is JSX?
5. What are React components?
6. What is declarative programming?
7. What is one-way data flow?
8. What are React Hooks?
9. Is React a library or a framework?
10. Which company maintains React?

---

# Practice Exercise

1. Install Node.js.
2. Create a React project using Vite.
3. Run the development server.
4. Create a `Header` component.
5. Create a `Footer` component.
6. Render both components inside `App`.
7. Display a welcome message.

---

# Key Takeaway

> React is a fast, component-based JavaScript library for building modern user interfaces. Its Virtual DOM, reusable components, and declarative programming model make it one of the most popular frontend technologies in the world.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ None | [🏠 React Introduction](../../README.md) | [➡️ History of React](../0002_history_of_react/history_of_react.md) |

<br>

<h2 align="center">

<a href="../0002_history_of_react/history_of_react.md" style="text-decoration:none;color:#61DAFB;">

➡️ <strong>Continue to: History of React</strong>

</a>

</h2>