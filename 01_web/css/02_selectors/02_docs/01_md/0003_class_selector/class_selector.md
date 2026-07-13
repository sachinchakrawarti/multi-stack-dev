# Class Selector in CSS

> The **Class Selector** is one of the most commonly used CSS selectors. It selects **one or more HTML elements** that share the same `class` attribute, allowing styles to be reused throughout a website.

---

# Table of Contents

1. Introduction
2. What is a Class Selector?
3. Why Use Class Selectors?
4. Syntax
5. How It Works
6. Examples
7. Multiple Classes
8. Advantages
9. Best Practices
10. Common Mistakes
11. Interview Questions
12. Summary

---

# Introduction

In real-world web development, many HTML elements need the same styling.

For example:

- Multiple buttons
- Cards
- Navigation links
- Form inputs

Instead of writing the same CSS repeatedly, we use **Class Selectors**.

A single CSS class can style many HTML elements.

---

# What is a Class Selector?

A **Class Selector** selects HTML elements based on their `class` attribute.

In CSS, a class selector always starts with a **dot (`.`)**.

Example

HTML

```html
<button class="btn">Login</button>
```

CSS

```css
.btn{
    background: royalblue;
    color: white;
}
```

---

# Why Use Class Selectors?

Class selectors allow developers to:

- Reuse styles
- Write cleaner CSS
- Reduce duplicate code
- Improve maintainability
- Build reusable UI components

They are the preferred choice for styling components in modern web development.

---

# Syntax

HTML

```html
<tag class="class-name">
```

CSS

```css
.class-name{
    property: value;
}
```

Example

HTML

```html
<p class="highlight">
    Welcome to CSS
</p>
```

CSS

```css
.highlight{
    color: crimson;
}
```

---

# How Class Selectors Work

The browser follows these steps:

```text
HTML Element
      │
      ▼
Read class Attribute
      │
      ▼
Find Matching CSS Class
      │
      ▼
Apply Styles
```

---

# Basic Example

HTML

```html
<h1 class="title">
CSS Tutorial
</h1>
```

CSS

```css
.title{
    color: navy;
    text-align: center;
}
```

Output

The heading becomes navy blue and is centered.

---

# Reusing a Class

One class can style multiple elements.

HTML

```html
<button class="btn">Save</button>

<button class="btn">Delete</button>

<button class="btn">Update</button>
```

CSS

```css
.btn{
    background: green;
    color: white;
    padding: 12px 24px;
}
```

All buttons receive the same styling.

---

# Multiple Classes

An HTML element can have multiple classes.

HTML

```html
<button class="btn primary">
    Login
</button>
```

CSS

```css
.btn{
    padding:12px 20px;
}

.primary{
    background: royalblue;
    color:white;
}
```

The button receives styles from both classes.

---

# Real-World Example

HTML

```html
<div class="card">

    <h2 class="card-title">
        CSS Course
    </h2>

    <p class="card-text">
        Learn CSS from scratch.
    </p>

</div>
```

CSS

```css
.card{
    padding:20px;
    border:1px solid #ddd;
    border-radius:8px;
}

.card-title{
    color:navy;
}

.card-text{
    color:gray;
}
```

---

# Naming Conventions

Good class names describe the purpose of the element.

✅ Good

```css
.primary-button

.user-card

.navbar

.footer

.hero-title
```

❌ Bad

```css
.red

.box1

.test

.abc

.data
```

Choose meaningful names instead of appearance-based names.

---

# Advantages

- Reusable
- Easy to maintain
- Cleaner HTML
- Less duplicate CSS
- Works with multiple elements
- Preferred in professional projects

---

# Best Practices

✔ Use meaningful names.

✔ Follow a naming convention.

✔ Reuse existing classes.

✔ Keep class names lowercase.

✔ Use hyphens between words.

Example

```css
.product-card

.user-profile

.main-navigation

.login-button
```

---

# Common Mistakes

## Forgetting the Dot

❌

```css
button{
}
```

when you intended to style a class.

✅

```css
.button{
}
```

---

## Using Spaces

❌

```html
class="main button"
```

This creates **two separate classes**:

- `main`
- `button`

If you intended a single class, use:

```html
class="main-button"
```

---

## Poor Naming

❌

```css
.red-box
```

Better

```css
.error-message
```

The name should describe the purpose, not the appearance.

---

# Interview Questions

## 1. What is a Class Selector?

A Class Selector selects HTML elements using their `class` attribute.

---

## 2. Which symbol represents a Class Selector?

A **dot (`.`)**

Example

```css
.title{
}
```

---

## 3. Can multiple elements use the same class?

Yes.

That is one of the biggest advantages of class selectors.

---

## 4. Can one HTML element have multiple classes?

Yes.

Example

```html
<div class="card featured">
</div>
```

---

## 5. Which is better for reusable components?

**Class Selectors**

because they are reusable and maintainable.

---

# Summary

In this chapter, you learned:

- What a Class Selector is
- Class Selector syntax
- Why class selectors are important
- Reusing classes
- Multiple classes
- Naming conventions
- Best practices
- Common mistakes
- Interview questions

Class selectors are the foundation of modern CSS development. Frameworks such as Bootstrap, Tailwind CSS, and many component libraries rely heavily on classes to create reusable and maintainable user interfaces.

---

# Next Topic

➡ **ID Selector**

You will learn:

- What is an ID Selector?
- Syntax
- Rules for IDs
- ID vs Class
- Best Practices
- Real-World Examples
- Interview Questions