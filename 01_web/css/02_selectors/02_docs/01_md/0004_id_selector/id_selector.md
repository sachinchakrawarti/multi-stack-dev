# ID Selector in CSS

> The **ID Selector** is used to select **one unique HTML element** based on its `id` attribute. Since an `id` should be unique within an HTML document, an ID selector is intended to style a single specific element.

---

# Table of Contents

1. Introduction
2. What is an ID Selector?
3. Why Use an ID Selector?
4. Syntax
5. How It Works
6. Examples
7. ID vs Class
8. Advantages
9. Disadvantages
10. Best Practices
11. Common Mistakes
12. Interview Questions
13. Summary

---

# Introduction

Every HTML element can have an **id** attribute.

An **id** acts as a unique identifier for an element on a webpage.

Unlike class selectors, an ID selector should only match **one element** in the entire HTML document.

---

# What is an ID Selector?

An **ID Selector** selects an HTML element using its **id** attribute.

In CSS, an ID selector always begins with the **hash (`#`)** symbol.

Example

HTML

```html
<h1 id="main-title">
    Welcome to CSS
</h1>
```

CSS

```css
#main-title{
    color: royalblue;
}
```

---

# Why Use an ID Selector?

ID selectors are useful when:

- Styling a unique element
- Creating page anchors
- Targeting elements with JavaScript
- Building navigation menus
- Styling a single header or footer

---

# Syntax

HTML

```html
<tag id="unique-id">
```

CSS

```css
#unique-id{
    property: value;
}
```

Example

HTML

```html
<p id="intro">
    CSS makes websites beautiful.
</p>
```

CSS

```css
#intro{
    font-size:20px;
}
```

---

# How ID Selectors Work

```text
HTML Element
      │
      ▼
Read id Attribute
      │
      ▼
Find Matching CSS ID
      │
      ▼
Apply Styles
```

Only the element with that ID receives the styles.

---

# Basic Example

HTML

```html
<button id="login-btn">
    Login
</button>
```

CSS

```css
#login-btn{
    background: royalblue;
    color:white;
    padding:12px 20px;
}
```

Output

The **Login** button is styled.

---

# Another Example

HTML

```html
<header id="header">
    My Website
</header>
```

CSS

```css
#header{
    background:black;
    color:white;
    padding:20px;
}
```

---

# ID vs Class

| Feature | ID | Class |
|---------|----|-------|
| Symbol | `#` | `.` |
| Reusable | ❌ No | ✅ Yes |
| Unique | ✅ Yes | ❌ No |
| Multiple Elements | ❌ No | ✅ Yes |
| Specificity | High | Medium |

---

# ID Specificity

ID selectors have **higher specificity** than:

- Element Selectors
- Class Selectors

Example

```css
h1{
    color:black;
}

.title{
    color:green;
}

#title{
    color:red;
}
```

HTML

```html
<h1 id="title" class="title">
    CSS
</h1>
```

Output

The text becomes **red** because the ID selector has higher priority.

---

# Advantages

- Targets a single element
- High specificity
- Useful with JavaScript
- Great for page navigation
- Easy to identify important elements

---

# Disadvantages

- Not reusable
- Difficult to override
- Can increase CSS specificity issues
- Not recommended for reusable components

---

# Best Practices

✔ Use IDs only for unique elements.

Examples

```css
#header

#footer

#logo

#main-content

#sidebar
```

Prefer **classes** for reusable UI components.

---

# Common Mistakes

## Using the Same ID Multiple Times

❌ Incorrect

```html
<p id="text">One</p>

<p id="text">Two</p>
```

Every ID should be unique.

---

## Using IDs for Every Element

❌

```html
<div id="box1">

<div id="box2">

<div id="box3">
```

Better

```html
<div class="box">

<div class="box">

<div class="box">
```

---

## Forgetting the Hash Symbol

❌

```css
header{
}
```

when you intended to target an ID.

✅

```css
#header{
}
```

---

# Real-World Example

HTML

```html
<header id="site-header">

    <h1>BookQubit</h1>

</header>
```

CSS

```css
#site-header{
    background:#222;
    color:white;
    padding:25px;
}
```

---

# Interview Questions

## 1. What is an ID Selector?

An ID Selector selects an HTML element using its **id** attribute.

---

## 2. Which symbol represents an ID Selector?

The **hash (`#`)** symbol.

Example

```css
#header{
}
```

---

## 3. Can multiple elements have the same ID?

No.

Each ID must be unique within the HTML document.

---

## 4. Which has higher specificity?

- Element Selector
- Class Selector
- ID Selector

**Answer:** ID Selector.

---

## 5. When should you use an ID?

Use an ID when styling or identifying **one unique element**.

---

## 6. Which is better for reusable styles?

**Class Selector**

because it can be reused across multiple elements.

---

# Summary

In this chapter, you learned:

- What an ID Selector is
- ID Selector syntax
- How ID selectors work
- ID vs Class
- CSS specificity
- Advantages
- Disadvantages
- Best practices
- Common mistakes
- Interview questions

ID selectors are best suited for unique elements such as headers, footers, navigation sections, or elements accessed by JavaScript. For reusable styling, class selectors remain the preferred choice.

---

# Next Topic

➡ **Universal Selector (`*`)**

You will learn:

- What is the Universal Selector?
- Syntax
- Use Cases
- Advantages
- Best Practices
- Interview Questions
- Real-World Examples