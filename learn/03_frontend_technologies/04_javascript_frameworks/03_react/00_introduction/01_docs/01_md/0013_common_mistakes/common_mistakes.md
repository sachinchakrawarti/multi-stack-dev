# ❌ Common React Mistakes

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">Common React Mistakes</h1>

<p align="center">
Learn the Most Common Mistakes Beginners and Intermediate Developers Make in React
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Avoid Common Mistakes?](#why-avoid-common-mistakes)
- [Mistake 1: Mutating State Directly](#mistake-1-mutating-state-directly)
- [Mistake 2: Using Array Index as Key](#mistake-2-using-array-index-as-key)
- [Mistake 3: Forgetting the Key Prop](#mistake-3-forgetting-the-key-prop)
- [Mistake 4: Modifying Props](#mistake-4-modifying-props)
- [Mistake 5: Calling Hooks Incorrectly](#mistake-5-calling-hooks-incorrectly)
- [Mistake 6: Writing Large Components](#mistake-6-writing-large-components)
- [Mistake 7: Overusing State](#mistake-7-overusing-state)
- [Mistake 8: Forgetting Dependency Arrays](#mistake-8-forgetting-dependency-arrays)
- [Mistake 9: Performing Heavy Work During Rendering](#mistake-9-performing-heavy-work-during-rendering)
- [Mistake 10: Ignoring Error Handling](#mistake-10-ignoring-error-handling)
- [Mistake 11: Poor Folder Structure](#mistake-11-poor-folder-structure)
- [Mistake 12: Hardcoding Values](#mistake-12-hardcoding-values)
- [Mistake 13: Not Cleaning Up Side Effects](#mistake-13-not-cleaning-up-side-effects)
- [Mistake 14: Ignoring Accessibility](#mistake-14-ignoring-accessibility)
- [Real-World Example](#real-world-example)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Recognize common React mistakes.
- Learn how to avoid performance issues.
- Write cleaner and more maintainable React code.
- Understand best practices through real examples.
- Improve debugging skills.

---

# Introduction

Everyone makes mistakes while learning React.

The good news is that most mistakes follow predictable patterns.

By understanding these common issues, you can write cleaner, faster, and more reliable React applications.

---

# Why Avoid Common Mistakes?

Avoiding mistakes helps you:

- Improve application performance.
- Reduce bugs.
- Write maintainable code.
- Improve teamwork.
- Follow React best practices.
- Build scalable applications.

---

# Mistake 1: Mutating State Directly

❌ Wrong

```javascript
user.name = "Rahul";
```

✅ Correct

```javascript
setUser({
    ...user,
    name: "Rahul"
});
```

React expects state updates to be immutable.

---

# Mistake 2: Using Array Index as Key

❌ Wrong

```jsx
users.map((user, index) =>

    <User key={index} />

)
```

✅ Better

```jsx
users.map(user =>

    <User
        key={user.id}
        user={user}
    />

)
```

Stable keys help React efficiently update lists.

---

# Mistake 3: Forgetting the Key Prop

Every element created inside a loop should have a unique `key`.

Without keys, React cannot efficiently identify changed items.

---

# Mistake 4: Modifying Props

Props are **read-only**.

❌ Wrong

```javascript
props.name = "John";
```

✅ Correct

Pass new values from the parent component instead.

---

# Mistake 5: Calling Hooks Incorrectly

❌ Wrong

```javascript
if (loggedIn) {

    useState();

}
```

✅ Correct

```javascript
const [user, setUser] = useState(null);
```

Hooks must always be called at the top level of a component.

---

# Mistake 6: Writing Large Components

Avoid components that contain hundreds of lines of code.

Instead:

```text
Dashboard

├── Sidebar

├── Header

├── Chart

├── Statistics

└── Footer
```

Small components are easier to maintain.

---

# Mistake 7: Overusing State

Not every variable needs to be stored in state.

❌ Unnecessary

```javascript
const [fullName, setFullName] = useState(
    firstName + lastName
);
```

✅ Better

```javascript
const fullName = firstName + lastName;
```

Use state only for data that changes over time and affects rendering.

---

# Mistake 8: Forgetting Dependency Arrays

Example:

```javascript
useEffect(() => {

    fetchUsers();

}, []);
```

Always understand why the dependency array is empty or contains specific values.

Missing or incorrect dependencies can cause unexpected behavior.

---

# Mistake 9: Performing Heavy Work During Rendering

❌ Avoid expensive calculations directly inside JSX.

```jsx
<h1>{veryLargeCalculation()}</h1>
```

Use:

- `useMemo()`
- Helper functions
- Cached values

when appropriate.

---

# Mistake 10: Ignoring Error Handling

Always prepare for API failures.

Example:

```jsx
if (error) {

    return <p>Failed to load data.</p>;

}
```

Provide meaningful feedback instead of letting the application fail silently.

---

# Mistake 11: Poor Folder Structure

Avoid:

```text
src/

100 files
```

Prefer:

```text
src/

components/

pages/

hooks/

services/

utils/

assets/
```

A clear structure improves maintainability.

---

# Mistake 12: Hardcoding Values

❌ Wrong

```jsx
<h1>Welcome Rahul</h1>
```

✅ Better

```jsx
<h1>Welcome {username}</h1>
```

Dynamic values make components reusable.

---

# Mistake 13: Not Cleaning Up Side Effects

When using `useEffect()`, clean up subscriptions, intervals, or event listeners.

Example:

```javascript
useEffect(() => {

    const timer = setInterval(() => {

        console.log("Running");

    }, 1000);

    return () => clearInterval(timer);

}, []);
```

Cleanup prevents memory leaks.

---

# Mistake 14: Ignoring Accessibility

Use semantic HTML whenever possible.

Good examples:

- `<button>`
- `<label>`
- `<nav>`
- `<header>`
- `<main>`

Also:

- Add `alt` text to images.
- Use keyboard-accessible controls.
- Associate labels with form inputs.

Accessibility benefits all users.

---

# Real-World Example

Poor application structure:

```text
Dashboard.jsx

1200+ Lines
```

Better structure:

```text
Dashboard
│
├── Header
├── Sidebar
├── Statistics
├── Chart
├── Orders
└── Footer
```

Each component has a clear responsibility.

---

# Summary

- Never mutate state directly.
- Use stable keys for lists.
- Keep components small.
- Follow the Rules of Hooks.
- Avoid unnecessary state.
- Clean up side effects.
- Organize your project logically.
- Write accessible and maintainable code.

---

# Interview Questions

1. What are common mistakes in React?
2. Why should state not be mutated directly?
3. Why shouldn't array indexes be used as keys?
4. What are the Rules of Hooks?
5. Why should components be small?
6. Why are dependency arrays important?
7. What is cleanup in `useEffect()`?
8. Why is accessibility important?
9. How should a React project be organized?
10. How do you avoid unnecessary re-renders?

---

# Practice Exercise

1. Find five mistakes in an existing React project.
2. Replace array index keys with unique IDs.
3. Refactor a large component into smaller ones.
4. Add cleanup logic to a `useEffect()` hook.
5. Improve accessibility in a sample form.
6. Organize a project's folder structure using React best practices.

---

# Key Takeaway

> Most React bugs come from a small set of common mistakes, such as mutating state, misusing Hooks, poor component design, and ignoring accessibility or cleanup. By following React best practices and writing clean, modular code, you can build applications that are easier to maintain, debug, and scale.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ [Best Practices](../0012_best_practices/best_practices.md) | [🏠 React Introduction](../../README.md) | [➡️ React Interview Questions](../0014_interview_questions/interview_questions.md) |

<br>

<h2 align="center">

<a href="../0014_interview_questions/interview_questions.md" style="text-decoration:none;color:#61DAFB;">

➡️ <strong>Continue to: React Interview Questions</strong>

</a>

</h2>