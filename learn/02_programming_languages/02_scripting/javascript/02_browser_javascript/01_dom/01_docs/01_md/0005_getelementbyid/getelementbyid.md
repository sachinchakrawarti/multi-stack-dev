# getElementById()

## Table of Contents

- Learning Objectives
- Introduction
- Why Use getElementById()?
- Syntax
- Parameters
- Return Value
- How getElementById() Works
- Basic Example
- Multiple Examples
- Real-World Use Cases
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

- Understand the purpose of `getElementById()`.
- Select HTML elements using their ID.
- Modify HTML content, styles, and attributes.
- Handle common errors when using `getElementById()`.
- Apply `getElementById()` in real-world applications.

---

# Introduction

One of the first things JavaScript needs to do is **find an element** on a webpage.

The easiest and fastest way to locate a unique element is by using its **ID**.

JavaScript provides the **`getElementById()`** method for this purpose.

Since an **ID should be unique** within an HTML document, this method always returns **one element** (or `null` if no matching element exists).

---

# Why Use getElementById()?

Imagine a login page.

When the user clicks the **Login** button, JavaScript needs to access:

- Username field
- Password field
- Login button
- Error message

Each of these elements usually has a unique ID.

Example:

```html
<input id="username">

<input id="password">

<button id="loginBtn">Login</button>
```

JavaScript can quickly access each element.

---

# Syntax

```javascript
document.getElementById(id);
```

---

# Parameters

| Parameter | Description |
|-----------|-------------|
| `id` | The ID of the HTML element to search for. |

Example:

```javascript
document.getElementById("title");
```

---

# Return Value

Returns:

- The matching HTML element.
- `null` if the element does not exist.

Example:

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

Output:

```text
<h1 id="title">
```

If the ID doesn't exist:

```javascript
const heading = document.getElementById("unknown");

console.log(heading);
```

Output:

```text
null
```

---

# How getElementById() Works

Example HTML

```html
<h1 id="title">JavaScript</h1>
```

Browser creates the DOM:

```text
Document
│
└── h1
    id="title"
```

JavaScript searches for the node with:

```text
id = "title"
```

Then returns that DOM element.

---

# Basic Example

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

Output

```text
<h1 id="title">
```

---

# Changing Text

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
document.getElementById("title").textContent = "Welcome";
```

Result

```text
Welcome
```

---

# Changing HTML

```javascript
document.getElementById("title").innerHTML =
"<span>JavaScript</span>";
```

---

# Changing CSS

```javascript
const heading = document.getElementById("title");

heading.style.color = "blue";

heading.style.fontSize = "40px";
```

---

# Changing an Image

HTML

```html
<img
id="logo"
src="old.png">
```

JavaScript

```javascript
document.getElementById("logo").src =
"new.png";
```

---

# Reading Input Value

HTML

```html
<input
id="username"
value="Sachin">
```

JavaScript

```javascript
const username =
document.getElementById("username").value;

console.log(username);
```

Output

```text
Sachin
```

---

# Hiding an Element

```javascript
document.getElementById("title").style.display =
"none";
```

---

# Showing an Element

```javascript
document.getElementById("title").style.display =
"block";
```

---

# Real-World Use Cases

## Login Form

```javascript
const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;
```

---

## Form Validation

```javascript
const email =
document.getElementById("email");

if(email.value === ""){

    email.style.border = "2px solid red";

}
```

---

## Update Shopping Cart

```javascript
document.getElementById("cartCount")
.textContent = 5;
```

---

## Theme Switch

```javascript
document.getElementById("container")
.style.backgroundColor = "black";
```

---

## Display Error

```javascript
document.getElementById("error")
.textContent = "Invalid Password";
```

---

# Common Mistakes

## ❌ Forgetting the Quotes

Incorrect

```javascript
document.getElementById(title);
```

Correct

```javascript
document.getElementById("title");
```

---

## ❌ Duplicate IDs

Incorrect

```html
<div id="box"></div>

<div id="box"></div>
```

IDs should be unique.

---

## ❌ Accessing Before HTML Loads

Incorrect

```javascript
const heading =
document.getElementById("title");
```

If the script executes before the HTML is loaded, `heading` may be `null`.

---

## ✅ Better

```javascript
window.addEventListener(
"DOMContentLoaded",

() => {

const heading =
document.getElementById("title");

});
```

---

## ❌ Ignoring null

Incorrect

```javascript
document.getElementById("abc")
.textContent = "Hello";
```

If the element doesn't exist:

```text
TypeError
```

---

## ✅ Better

```javascript
const element =
document.getElementById("abc");

if(element){

    element.textContent = "Hello";

}
```

---

# Best Practices

- Give every ID a meaningful name.
- Keep IDs unique.
- Check if an element exists before using it.
- Cache frequently used elements.

Example

```javascript
const heading =
document.getElementById("title");

heading.style.color = "green";

heading.textContent = "Learning DOM";
```

---

# Performance

`getElementById()` is one of the fastest DOM selection methods because browsers optimize ID lookups internally.

Use it whenever you need to access a single, uniquely identified element.

---

# Browser Compatibility

`getElementById()` is supported in:

- Chrome
- Firefox
- Safari
- Edge
- Opera

It has been available since the earliest versions of JavaScript-enabled browsers.

---

# Summary

- `getElementById()` selects one HTML element using its ID.
- IDs must be unique within a webpage.
- Returns the matching element or `null`.
- Frequently used for forms, buttons, images, and dynamic content.
- It is one of the fastest DOM selection methods.

---

# Interview Questions

1. What is `getElementById()`?
2. Why should IDs be unique?
3. What does `getElementById()` return if the ID is not found?
4. Can `getElementById()` return multiple elements?
5. Why is `getElementById()` considered fast?
6. What is the difference between `getElementById()` and `querySelector()`?
7. Can you change CSS using `getElementById()`?
8. How do you safely access an element that may not exist?
9. What happens if there are duplicate IDs?
10. When should you use `getElementById()` instead of other DOM selection methods?

---

# Practice Exercise

1. Create a webpage containing:
   - A heading
   - An image
   - A button
   - A paragraph
   - A text input

2. Use `getElementById()` to:

   - Change the heading text.
   - Change the image source.
   - Change the paragraph color.
   - Read the value from the text input.
   - Hide and show the paragraph.
   - Change the button text.

3. Display the entered name inside the heading when the button is clicked.

---

# Key Takeaway

> **`getElementById()`** is one of the simplest, fastest, and most commonly used DOM methods. It retrieves a single element by its unique ID, making it ideal for interacting with forms, buttons, images, and other uniquely identified elements in a webpage.

---

# Next Lesson

<h2>
➡️ <a href="../0006_getelementsbyclassname/getelementsbyclassname.md" style="color:#1E90FF;text-decoration:none;">
<strong>getElementsByClassName()</strong>
</a>
</h2>