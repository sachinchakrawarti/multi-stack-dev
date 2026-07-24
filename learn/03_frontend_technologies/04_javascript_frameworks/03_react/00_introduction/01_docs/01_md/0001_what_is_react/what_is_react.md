# ⚛️ What is React?

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
         alt="React Logo"
         width="180">
</p>

<p align="center">

# React.js Documentation

### Learn React from Beginner to Advanced

</p>

---

## 📚 Navigation

| Previous | Home | Next |
|----------|------|------|
| ⬅️ None | [🏠 React Introduction](../../README.md) | [➡️ History of React](../0002_history_of_react/history_of_react.md) |

---

# Table of Contents

- Learning Objectives
- Introduction
- What is React?
- Why React Was Created
- History of React
- Why Developers Love React
- Features of React
- Advantages of React
- Disadvantages of React
- React vs Vanilla JavaScript
- React Ecosystem
- Real-World Applications
- Simple React Example
- When Should You Use React?
- Best Practices
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand what React is.
- Learn why React was created.
- Know the problems React solves.
- Understand React's core features.
- Identify where React is used.
- Write your first React component.
- Explain React in interviews.

---

# Introduction

React is one of the world's most popular JavaScript libraries for building modern user interfaces.

Instead of creating entire webpages from scratch every time something changes, React updates only the parts of the page that need to change.

This makes applications:

- Faster
- Easier to maintain
- More interactive
- More scalable

Today, React is used by thousands of companies worldwide.

---

# What is React?

**React** is an **open-source JavaScript library** used for building **user interfaces (UI)**, especially for **Single Page Applications (SPAs)**.

It allows developers to create reusable UI components that manage their own data and update efficiently whenever data changes.

React follows a **component-based architecture**, where a webpage is divided into small, reusable pieces.

---

# Official Definition

According to the React team:

> React is a JavaScript library for building user interfaces.

---

# Why React Was Created

Before React, developers often manipulated the DOM manually.

Example:

```javascript
document.getElementById("title").innerText = "Hello";
```

As applications became larger:

- Code became difficult to maintain.
- DOM manipulation became slow.
- Repeated code increased.
- UI updates became complex.

Facebook created React to solve these problems.

---

# History of React

| Year | Event |
|------|-------|
| 2011 | React developed internally at Facebook |
| 2013 | React released as open source |
| 2015 | React Native introduced |
| 2017 | Fiber Architecture released |
| 2019 | React Hooks became stable |
| 2022 | React 18 released with Concurrent Features |
| Present | One of the most popular frontend libraries |

---

# Why Developers Love React

React offers several advantages:

- Reusable components
- Fast rendering
- Virtual DOM
- Strong community support
- Easy integration
- Declarative programming
- Large ecosystem
- Excellent developer experience

---

# Features of React

## Component-Based Architecture

A webpage is divided into reusable components.

Example:

```text
App

├── Navbar

├── Sidebar

├── Product Card

├── Footer
```

---

## Virtual DOM

Instead of updating the real DOM every time, React updates a lightweight copy called the **Virtual DOM**.

Benefits:

- Faster rendering
- Better performance
- Efficient UI updates

---

## Declarative Programming

Instead of telling JavaScript **how** to update the page, developers describe **what** the UI should look like.

Example

```jsx
<h1>Hello React</h1>
```

React handles the DOM updates automatically.

---

## JSX

JSX allows developers to write HTML-like syntax inside JavaScript.

Example

```jsx
function App(){

    return(

        <h1>Hello React</h1>

    );

}
```

---

## One-Way Data Flow

Data flows from parent components to child components.

This makes applications easier to understand and debug.

---

# Advantages of React

- Fast rendering
- Reusable components
- Virtual DOM
- Strong ecosystem
- Easy testing
- Easy debugging
- SEO support (with frameworks like Next.js)
- Huge community
- Backed by Meta
- Cross-platform development using React Native

---

# Disadvantages of React

- Requires learning JSX
- Requires understanding component architecture
- Fast-changing ecosystem
- Needs additional libraries for routing and state management

---

# React vs Vanilla JavaScript

| Feature | Vanilla JavaScript | React |
|----------|-------------------|--------|
| DOM Updates | Manual | Automatic |
| Components | ❌ | ✅ |
| Virtual DOM | ❌ | ✅ |
| Reusability | Limited | Excellent |
| Large Applications | Difficult | Easy |
| Performance | Good | Excellent |

---

# React Ecosystem

React is often used with:

- React Router
- Redux
- Context API
- Vite
- Next.js
- React Native
- Material UI
- Tailwind CSS
- Axios
- React Query

---

# Real-World Applications

React powers many popular websites and applications.

Examples include:

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
function App(){

    return(

        <div>

            <h1>Hello React</h1>

            <p>Welcome to React.js</p>

        </div>

    );

}

export default App;
```

Output

```text
Hello React

Welcome to React.js
```

---

# When Should You Use React?

React is a great choice for:

- Dashboards
- E-commerce websites
- Social media apps
- Admin panels
- Chat applications
- Portfolio websites
- Learning projects
- Enterprise applications

---

# Best Practices

- Build reusable components.
- Keep components small.
- Use meaningful component names.
- Avoid direct DOM manipulation.
- Prefer functional components.
- Use Hooks for state management.
- Organize files logically.

---

# Summary

- React is an open-source JavaScript library.
- It is used for building user interfaces.
- React uses reusable components.
- It updates the UI efficiently using the Virtual DOM.
- JSX makes UI development simple.
- React is maintained by Meta.
- It powers thousands of production applications worldwide.

---

# Interview Questions

1. What is React?
2. Why was React created?
3. What is the Virtual DOM?
4. What are React components?
5. What is JSX?
6. What is declarative programming?
7. What is one-way data binding?
8. What are the advantages of React?
9. React is a library or a framework?
10. Which company maintains React?

---

# Practice Exercise

1. Install Node.js.
2. Install Vite.
3. Create your first React application.
4. Create a component named `Header`.
5. Display a heading using JSX.
6. Create a `Footer` component.
7. Render both components inside `App`.

---

# Key Takeaway

> **React is a powerful, component-based JavaScript library for building fast, scalable, and interactive user interfaces. Its Virtual DOM, reusable components, and declarative approach make it one of the most widely used frontend technologies in modern web development.**

---

# 📚 Navigation

| Previous | Home | Next |
|----------|------|------|
| ⬅️ None | [🏠 React Introduction](../../README.md) | [➡️ History of React](../0002_history_of_react/history_of_react.md) |

---

# Next Lesson

<h2>

➡️ <a href="../0002_history_of_react/history_of_react.md" style="color:#61DAFB;text-decoration:none;">

<strong>History of React</strong>

</a>

</h2>