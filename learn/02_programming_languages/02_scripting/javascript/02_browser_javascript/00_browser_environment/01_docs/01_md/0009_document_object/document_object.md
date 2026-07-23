# Document Object

## Table of Contents

- Learning Objectives
- Introduction
- Why Do We Need the Document Object?
- What is the Document Object?
- Browser Object Hierarchy
- Features of the Document Object
- DOM (Document Object Model)
- Accessing HTML Elements
- Modifying HTML Content
- Modifying CSS Styles
- Creating Elements
- Removing Elements
- Working with Attributes
- Event Handling
- Traversing the DOM
- Common Document Methods
- Real-World Examples
- Advantages
- Limitations
- Common Mistakes
- Best Practices
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand the Document Object.
- Explain the relationship between `window` and `document`.
- Access HTML elements using JavaScript.
- Modify webpage content dynamically.
- Create, remove, and update DOM elements.
- Handle user interactions using events.

---

# Introduction

When a browser loads an HTML page, it converts the HTML into a tree-like structure called the **Document Object Model (DOM)**.

The JavaScript **Document Object** provides access to this DOM, allowing developers to:

- Read webpage content.
- Modify HTML elements.
- Change CSS styles.
- Create new elements.
- Remove existing elements.
- Respond to user actions.

Without the Document Object, JavaScript could not manipulate web pages dynamically.

---

# Why Do We Need the Document Object?

The Document Object enables JavaScript to interact with the webpage.

It allows developers to:

- Display dynamic content.
- Build interactive user interfaces.
- Validate forms.
- Create animations.
- Update webpages without reloading.

---

# What is the Document Object?

The **Document Object** represents the currently loaded HTML document.

It is a property of the global `window` object.

```javascript
window.document
```

is the same as:

```javascript
document
```

The browser automatically creates the Document Object whenever an HTML page is loaded.

---

# Browser Object Hierarchy

```text
Window
│
├── Document
│
├── History
│
├── Location
│
├── Navigator
│
├── Screen
│
└── Other Browser APIs
```

The Document Object is responsible for managing the webpage's content.

---

# Features of the Document Object

- Represents the HTML document.
- Provides access to all HTML elements.
- Allows modification of content.
- Allows creation and deletion of elements.
- Supports event handling.
- Enables DOM traversal.
- Provides many useful methods and properties.

---

# DOM (Document Object Model)

The DOM represents HTML as a tree of objects.

Example HTML:

```html
<!DOCTYPE html>

<html>

<head>

<title>Example</title>

</head>

<body>

<h1>Hello</h1>

<p>Welcome</p>

</body>

</html>
```

DOM Tree:

```text
Document
│
└── html
    │
    ├── head
    │   └── title
    │
    └── body
        ├── h1
        └── p
```

Each HTML element becomes a JavaScript object.

---

# Accessing HTML Elements

## By ID

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

---

## By Class Name

```javascript
const items = document.getElementsByClassName("card");
```

---

## By Tag Name

```javascript
const paragraphs = document.getElementsByTagName("p");
```

---

## Using querySelector()

```javascript
const button = document.querySelector(".btn");
```

Returns the first matching element.

---

## Using querySelectorAll()

```javascript
const buttons = document.querySelectorAll(".btn");
```

Returns all matching elements.

---

# Modifying HTML Content

## innerHTML

```javascript
document.getElementById("title").innerHTML = "JavaScript";
```

---

## textContent

```javascript
document.getElementById("title").textContent = "Learning DOM";
```

`textContent` treats the value as plain text.

---

# Modifying CSS Styles

```javascript
const heading = document.getElementById("title");

heading.style.color = "blue";

heading.style.fontSize = "40px";
```

---

# Creating Elements

Create a new paragraph.

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "New Paragraph";
```

Add it to the page.

```javascript
document.body.appendChild(paragraph);
```

---

# Removing Elements

```javascript
const element = document.getElementById("title");

element.remove();
```

---

# Working with Attributes

Get an attribute.

```javascript
const image = document.getElementById("logo");

console.log(image.getAttribute("src"));
```

Set an attribute.

```javascript
image.setAttribute("alt", "Company Logo");
```

Remove an attribute.

```javascript
image.removeAttribute("alt");
```

---

# Event Handling

Example:

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", () => {

    alert("Button Clicked");

});
```

JavaScript listens for user actions such as:

- Click
- Double Click
- Mouse Move
- Key Press
- Input
- Submit
- Scroll

---

# Traversing the DOM

Parent element

```javascript
element.parentElement;
```

Children

```javascript
element.children;
```

First child

```javascript
element.firstElementChild;
```

Last child

```javascript
element.lastElementChild;
```

Next sibling

```javascript
element.nextElementSibling;
```

Previous sibling

```javascript
element.previousElementSibling;
```

---

# Common Document Methods

| Method | Description |
|---------|-------------|
| `getElementById()` | Select by ID |
| `getElementsByClassName()` | Select by class |
| `getElementsByTagName()` | Select by tag |
| `querySelector()` | First matching element |
| `querySelectorAll()` | All matching elements |
| `createElement()` | Create element |
| `createTextNode()` | Create text node |
| `appendChild()` | Add child |
| `remove()` | Remove element |
| `replaceChild()` | Replace child |

---

# Real-World Examples

## Change Heading

```javascript
document.getElementById("title").textContent = "Welcome";
```

---

## Change Background Color

```javascript
document.body.style.backgroundColor = "#f5f5f5";
```

---

## Add a New List Item

```javascript
const li = document.createElement("li");

li.textContent = "JavaScript";

document.querySelector("ul").appendChild(li);
```

---

## Remove a Paragraph

```javascript
document.querySelector("p").remove();
```

---

## Change an Image

```javascript
document.getElementById("logo").src = "logo.png";
```

---

# Advantages

- Dynamic webpage updates.
- Interactive user interfaces.
- Easy DOM manipulation.
- Supports events.
- Enables single-page applications.
- Works with all modern browsers.

---

# Limitations

- Only available in browsers.
- Large DOM trees can reduce performance.
- Excessive DOM manipulation can slow webpages.
- Direct DOM updates may trigger reflow and repaint.

---

# Common Mistakes

### ❌ Incorrect

Trying to access an element before it exists.

```javascript
const heading = document.getElementById("title");
```

If the script runs before the HTML loads, `heading` will be `null`.

---

### ✅ Better

Place the script at the end of the `<body>` or wait for the page to load.

```javascript
window.addEventListener("DOMContentLoaded", () => {

    const heading = document.getElementById("title");

});
```

---

### ❌ Incorrect

Using `innerHTML` with untrusted user input.

This can introduce security vulnerabilities such as Cross-Site Scripting (XSS).

---

### ✅ Better

Use `textContent` when inserting plain text.

---

# Best Practices

- Prefer `querySelector()` and `querySelectorAll()` for flexible selection.
- Cache frequently used DOM elements.
- Minimize unnecessary DOM updates.
- Use `textContent` instead of `innerHTML` when HTML parsing is unnecessary.
- Remove unused event listeners.
- Keep the DOM structure simple.

---

# Summary

- The Document Object represents the loaded HTML document.
- It is accessed through `window.document` or simply `document`.
- It provides methods for selecting, creating, updating, and deleting elements.
- It supports event handling and DOM traversal.
- Efficient DOM manipulation is important for performance and security.

---

# Interview Questions

1. What is the Document Object?
2. What is the DOM?
3. What is the difference between `window` and `document`?
4. What is the difference between `innerHTML` and `textContent`?
5. What is `querySelector()`?
6. How do you create a new HTML element?
7. What is DOM traversal?
8. Why should you avoid excessive DOM manipulation?
9. What are event listeners?
10. Why is using `innerHTML` with user input dangerous?

---

# Practice Exercise

1. Create an HTML page with a heading and a button.
2. Change the heading text using JavaScript.
3. Change the background color when the button is clicked.
4. Add a new paragraph dynamically.
5. Remove an existing paragraph.
6. Create a list and append new items.
7. Display the current page title using `document.title`.
8. Add a click event to change the text of a paragraph.

---

# Key Takeaway

> The Document Object is the gateway to the HTML page. It allows JavaScript to access, create, modify, and remove elements, making webpages interactive and dynamic. Mastering the Document Object and the DOM is one of the most important skills in modern web development.

---

# Next Lesson

<h2>
➡️ <a href="../0010_dom_intro/dom_intro.md" style="color:#1E90FF;text-decoration:none;">
<strong>Introduction to the DOM</strong>
</a>
</h2>