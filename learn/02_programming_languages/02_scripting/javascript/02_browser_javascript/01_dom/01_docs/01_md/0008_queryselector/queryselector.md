# querySelector()

## Table of Contents

- Learning Objectives
- Introduction
- Why Use querySelector()?
- Syntax
- Parameters
- Return Value
- How querySelector() Works
- CSS Selectors Supported
- Basic Examples
- Selecting Nested Elements
- Using Attribute Selectors
- Pseudo-Class Selectors
- Real-World Examples
- querySelector() vs Other DOM Methods
- Common Mistakes
- Best Practices
- Performance
- Browser Compatibility
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand how `querySelector()` works.
- Select elements using CSS selectors.
- Access nested HTML elements.
- Use attribute and pseudo-class selectors.
- Know when to use `querySelector()` instead of other DOM methods.

---

# Introduction

As web pages become more complex, selecting elements by only **ID**, **class**, or **tag name** is often not enough.

Modern JavaScript provides a much more powerful method:

```javascript
document.querySelector()
```

Unlike older DOM methods, `querySelector()` accepts **any valid CSS selector**, making it one of the most flexible and widely used DOM APIs.

---

# Why Use querySelector()?

Suppose you have the following HTML.

```html
<div class="card">

    <h2>JavaScript</h2>

    <button class="buy">Buy Now</button>

</div>
```

Instead of using different methods for IDs, classes, and tags, one method can select them all.

```javascript
document.querySelector(".buy");
```

---

# Syntax

```javascript
document.querySelector(cssSelector);
```

---

# Parameters

| Parameter | Description |
|-----------|-------------|
| `cssSelector` | Any valid CSS selector. |

Example

```javascript
document.querySelector(".card");
```

---

# Return Value

Returns:

- The **first matching element**.
- `null` if no matching element exists.

Example

```javascript
const heading = document.querySelector("h1");

console.log(heading);
```

Output

```text
<h1>Hello</h1>
```

---

# How querySelector() Works

Consider the following HTML.

```html
<h1>HTML</h1>

<h1>CSS</h1>

<h1>JavaScript</h1>
```

JavaScript

```javascript
const heading = document.querySelector("h1");
```

Output

```text
First h1 element only
```

It always returns the **first** matching element.

---

# CSS Selectors Supported

## ID Selector

```javascript
document.querySelector("#title");
```

HTML

```html
<h1 id="title">Hello</h1>
```

---

## Class Selector

```javascript
document.querySelector(".card");
```

HTML

```html
<div class="card"></div>
```

---

## Tag Selector

```javascript
document.querySelector("button");
```

---

## Universal Selector

```javascript
document.querySelector("*");
```

Returns the first element in the document.

---

# Basic Examples

## Select a Paragraph

```javascript
const paragraph =
document.querySelector("p");
```

---

## Select a Button

```javascript
const button =
document.querySelector("button");
```

---

## Select an Image

```javascript
const image =
document.querySelector("img");
```

---

## Select a Navigation Bar

```javascript
const nav =
document.querySelector("nav");
```

---

# Selecting Nested Elements

HTML

```html
<div class="container">

    <p>Hello</p>

</div>
```

JavaScript

```javascript
const paragraph =
document.querySelector(".container p");
```

This selects the `<p>` inside `.container`.

---

Another example.

```html
<nav>

    <ul>

        <li>

            <a href="#">Home</a>

        </li>

    </ul>

</nav>
```

JavaScript

```javascript
const link =
document.querySelector("nav ul li a");
```

---

# Using Attribute Selectors

HTML

```html
<input type="email">

<input type="password">
```

JavaScript

```javascript
const email =
document.querySelector("[type='email']");
```

---

Select a button with a specific type.

```javascript
document.querySelector("button[type='submit']");
```

---

# Pseudo-Class Selectors

Select the first list item.

```javascript
document.querySelector("li:first-child");
```

---

Select the last paragraph.

```javascript
document.querySelector("p:last-child");
```

---

Select the checked checkbox.

```javascript
document.querySelector(":checked");
```

---

Select the focused input.

```javascript
document.querySelector(":focus");
```

---

# Real-World Examples

## Change Heading Text

```javascript
document.querySelector("h1").textContent =
"Welcome";
```

---

## Change Button Color

```javascript
document.querySelector(".btn")
.style.backgroundColor = "green";
```

---

## Hide an Image

```javascript
document.querySelector("img")
.style.display = "none";
```

---

## Read Form Input

```javascript
const username =
document.querySelector("#username").value;

console.log(username);
```

---

## Change Navigation Link

```javascript
document.querySelector("nav a")
.textContent = "Dashboard";
```

---

# querySelector() vs Other DOM Methods

| Method | Returns | CSS Selectors | Multiple Elements |
|---------|----------|---------------|-------------------|
| `getElementById()` | One Element | ❌ | ❌ |
| `getElementsByClassName()` | HTMLCollection | ❌ | ✅ |
| `getElementsByTagName()` | HTMLCollection | ❌ | ✅ |
| `querySelector()` | First Match | ✅ | ❌ |
| `querySelectorAll()` | NodeList | ✅ | ✅ |

---

# Common Mistakes

## ❌ Forgetting CSS Symbols

Incorrect

```javascript
document.querySelector("title");
```

when selecting an ID.

Correct

```javascript
document.querySelector("#title");
```

---

Incorrect

```javascript
document.querySelector("card");
```

when selecting a class.

Correct

```javascript
document.querySelector(".card");
```

---

## ❌ Expecting Multiple Elements

```javascript
document.querySelector("p");
```

Returns only the **first paragraph**.

---

## ✅ Correct

Use

```javascript
document.querySelectorAll("p");
```

---

## ❌ Ignoring null

```javascript
document.querySelector("#abc")
.textContent = "Hello";
```

If no matching element exists:

```text
TypeError
```

---

## ✅ Better

```javascript
const element =
document.querySelector("#abc");

if(element){

    element.textContent = "Hello";

}
```

---

# Best Practices

- Prefer `querySelector()` for selecting a single element.
- Use meaningful CSS selectors.
- Keep selectors short and readable.
- Cache frequently used elements.
- Check for `null` before manipulating an element.
- Use `querySelectorAll()` when multiple elements are needed.

---

# Performance

`querySelector()` is highly optimized in modern browsers.

Although `getElementById()` is slightly faster for ID lookups, the flexibility of CSS selectors makes `querySelector()` the preferred choice in most modern applications.

---

# Browser Compatibility

Supported in:

- Chrome
- Firefox
- Edge
- Safari
- Opera

Widely supported across all modern browsers.

---

# Summary

- `querySelector()` selects the **first element** matching a CSS selector.
- It supports IDs, classes, tags, attributes, pseudo-classes, and nested selectors.
- It returns a single element or `null`.
- It is one of the most commonly used DOM methods in modern JavaScript.

---

# Interview Questions

1. What is `querySelector()`?
2. What does `querySelector()` return?
3. What happens if no matching element exists?
4. Does `querySelector()` return multiple elements?
5. What types of selectors does it support?
6. What is the difference between `querySelector()` and `getElementById()`?
7. How do you select an element by class using `querySelector()`?
8. How do you select an element by ID?
9. Why is `querySelector()` popular in modern JavaScript?
10. When should you use `querySelectorAll()` instead?

---

# Practice Exercise

Create a webpage containing:

- One heading
- Three paragraphs
- Two buttons
- One image
- One navigation bar
- One form with two input fields

Use `querySelector()` to:

1. Change the heading text.
2. Change the color of the first paragraph.
3. Hide the image.
4. Read the username input.
5. Change the text of the first navigation link.
6. Change the background color of the first button.
7. Select an element using an attribute selector.
8. Select a nested element inside a container.

---

# Key Takeaway

> **`querySelector()`** is one of the most powerful and flexible DOM selection methods. It returns the **first element** that matches a valid CSS selector, allowing developers to select elements using IDs, classes, tags, attributes, nested selectors, and pseudo-classes with a single, consistent API.

---

# Next Lesson

<h2>

➡️ <a href="../0009_queryselectorall/queryselectorall.md" style="color:#1E90FF;text-decoration:none;">

<strong>querySelectorAll()</strong>

</a>

</h2>