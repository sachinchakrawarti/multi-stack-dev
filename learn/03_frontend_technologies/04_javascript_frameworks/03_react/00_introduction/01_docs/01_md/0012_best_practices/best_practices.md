# ✅ React Best Practices

<p align="center">
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="180"
    >
</p>

<h1 align="center">React Best Practices</h1>

<p align="center">
Write Clean, Maintainable, Performant, and Scalable React Applications
</p>

---

# Table of Contents

- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
- [Why Best Practices Matter](#why-best-practices-matter)
- [Use Functional Components](#use-functional-components)
- [Keep Components Small](#keep-components-small)
- [Create Reusable Components](#create-reusable-components)
- [Use Meaningful File and Component Names](#use-meaningful-file-and-component-names)
- [Organize Your Project Structure](#organize-your-project-structure)
- [Use Props Correctly](#use-props-correctly)
- [Manage State Wisely](#manage-state-wisely)
- [Never Mutate State Directly](#never-mutate-state-directly)
- [Use Keys Correctly](#use-keys-correctly)
- [Avoid Unnecessary Re-renders](#avoid-unnecessary-re-renders)
- [Use React Hooks Properly](#use-react-hooks-properly)
- [Handle Errors Gracefully](#handle-errors-gracefully)
- [Write Clean JSX](#write-clean-jsx)
- [Follow Consistent Code Style](#follow-consistent-code-style)
- [Optimize Performance](#optimize-performance)
- [Testing Your Components](#testing-your-components)
- [Security Best Practices](#security-best-practices)
- [Real-World Example](#real-world-example)
- [Summary](#summary)
- [Interview Questions](#interview-questions)
- [Practice Exercise](#practice-exercise)
- [Key Takeaway](#key-takeaway)
- [Next Lesson](#next-lesson)

---

# Learning Objectives

After completing this lesson, you will be able to:

- Write clean React code.
- Build reusable and maintainable components.
- Improve application performance.
- Follow industry-standard React practices.
- Avoid common development mistakes.

---

# Introduction

Writing React code that **works** is only the first step.

Professional developers also write code that is:

- Readable
- Reusable
- Scalable
- Performant
- Easy to test
- Easy to maintain

React best practices help teams build applications that grow without becoming difficult to manage.

---

# Why Best Practices Matter

Benefits include:

- Better readability
- Easier debugging
- Faster development
- Improved teamwork
- Better performance
- Easier maintenance
- More reliable applications

---

# Use Functional Components

Modern React recommends **functional components** instead of class components.

✅ Good

```jsx
function Welcome() {
    return <h1>Welcome</h1>;
}
```

❌ Avoid using class components unless maintaining legacy projects.

---

# Keep Components Small

Each component should have a **single responsibility**.

Good:

```text
Navbar

LoginForm

Footer

ProductCard
```

Avoid:

```text
MegaComponent
```

Small components are easier to:

- Test
- Reuse
- Maintain

---

# Create Reusable Components

Instead of repeating code:

```jsx
<ProductCard />

<ProductCard />

<ProductCard />
```

Create one reusable component and pass different data using props.

---

# Use Meaningful File and Component Names

Good examples:

```text
UserProfile.jsx

ProductCard.jsx

ShoppingCart.jsx

OrderSummary.jsx
```

Avoid:

```text
abc.jsx

test.jsx

component.jsx
```

Clear names improve readability.

---

# Organize Your Project Structure

Example:

```text
src/
│
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── context/
├── assets/
├── utils/
└── App.jsx
```

A consistent structure makes navigation easier.

---

# Use Props Correctly

Pass only the data a component needs.

```jsx
<ProductCard
    title="Laptop"
    price={50000}
/>
```

Avoid passing unnecessary props.

---

# Manage State Wisely

Keep state as close as possible to where it is used.

Example:

```jsx
const [count, setCount] = useState(0);
```

Use:

- Local State
- Context API
- Redux Toolkit

only when appropriate.

---

# Never Mutate State Directly

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

Always create a new object or array when updating state.

---

# Use Keys Correctly

When rendering lists:

✅ Correct

```jsx
users.map(user =>

    <User
        key={user.id}
        user={user}
    />

)
```

Avoid using the array index as a key when items can change order.

---

# Avoid Unnecessary Re-renders

Use optimization tools only when needed.

Examples:

- `React.memo()`
- `useMemo()`
- `useCallback()`

These can improve performance in larger applications.

---

# Use React Hooks Properly

Follow the Rules of Hooks:

- Call Hooks only at the top level.
- Do not call Hooks inside loops.
- Do not call Hooks inside conditions.
- Use Hooks only inside React components or custom Hooks.

Example:

```jsx
const [count, setCount] = useState(0);
```

---

# Handle Errors Gracefully

Provide meaningful feedback to users.

Example:

```jsx
if (error) {

    return <p>Something went wrong.</p>;

}
```

For larger applications, consider using **Error Boundaries**.

---

# Write Clean JSX

Keep JSX readable.

Good:

```jsx
<Card>

    <Title />

    <Description />

</Card>
```

Avoid deeply nested JSX whenever possible.

---

# Follow Consistent Code Style

Use tools like:

- ESLint
- Prettier

Benefits:

- Consistent formatting
- Fewer errors
- Better collaboration

---

# Optimize Performance

Use React features wisely:

- Lazy Loading
- Code Splitting
- Memoization
- Virtual DOM
- Automatic Batching

Optimize only after identifying performance bottlenecks.

---

# Testing Your Components

Popular testing tools:

- React Testing Library
- Jest
- Vitest
- Playwright
- Cypress

Test:

- Rendering
- User interactions
- API calls
- Component behavior

---

# Security Best Practices

- Never trust user input.
- Validate data before processing.
- Avoid exposing secrets in frontend code.
- Store API keys securely on the server.
- Keep dependencies updated.
- Escape untrusted HTML.
- Use HTTPS in production.

---

# Real-World Example

A well-organized e-commerce application:

```text
App
│
├── Navbar
├── SearchBar
├── CategoryMenu
├── ProductList
│      ├── ProductCard
│      ├── ProductCard
│      └── ProductCard
├── ShoppingCart
├── Checkout
└── Footer
```

Each component has one responsibility and can be developed or tested independently.

---

# Summary

- Prefer functional components.
- Build small, reusable components.
- Keep state predictable.
- Never mutate state directly.
- Use Hooks correctly.
- Organize your project consistently.
- Optimize performance thoughtfully.
- Write readable and maintainable code.

---

# Interview Questions

1. What are React best practices?
2. Why are functional components preferred?
3. Why should components be small?
4. Why should state never be mutated directly?
5. Why are keys important in React?
6. What are the Rules of Hooks?
7. What tools help maintain code quality?
8. How do you optimize React applications?
9. Why is project structure important?
10. How do you improve React application security?

---

# Practice Exercise

1. Refactor a large component into smaller ones.
2. Create reusable UI components.
3. Replace duplicate JSX with reusable components.
4. Practice immutable state updates.
5. Organize a React project's folder structure.
6. Install and configure ESLint and Prettier.

---

# Key Takeaway

> Following React best practices leads to cleaner code, reusable components, predictable state management, better performance, and easier maintenance. These practices are essential for building professional, scalable, and production-ready React applications.

---

# Next Lesson

| Previous | Home | Next |
|----------|------|------|
| ⬅️ [React Philosophy](../0011_react_philosophy/react_philosophy.md) | [🏠 React Introduction](../../README.md) | [➡️ Common Mistakes](../0013_common_mistakes/common_mistakes.md) |

<br>

<h2 align="center">

<a href="../0013_common_mistakes/common_mistakes.md" style="text-decoration:none;color:#61DAFB;">

➡️ <strong>Continue to: Common Mistakes</strong>

</a>

</h2>