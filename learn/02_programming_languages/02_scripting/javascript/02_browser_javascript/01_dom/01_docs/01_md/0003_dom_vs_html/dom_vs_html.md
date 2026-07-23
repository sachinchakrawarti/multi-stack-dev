# DOM vs HTML

## Table of Contents

- Learning Objectives
- Introduction
- Why Compare DOM and HTML?
- What is HTML?
- What is the DOM?
- HTML vs DOM
- How HTML Becomes the DOM
- Visual Comparison
- Key Differences
- Code Example
- Real-World Example
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

- Understand what HTML is.
- Understand what the DOM is.
- Explain the difference between HTML and the DOM.
- Understand how browsers convert HTML into the DOM.
- Know why JavaScript interacts with the DOM instead of the HTML source.

---

# Introduction

Many beginners think **HTML** and the **DOM (Document Object Model)** are the same thing.

They are closely related, but they are **not the same**.

- **HTML** is the source code that describes the structure of a webpage.
- **DOM** is the browser's object representation of that HTML.

Understanding this difference is essential because JavaScript does **not** manipulate the HTML file directly—it works with the DOM.

---

# Why Compare DOM and HTML?

Imagine writing a book.

- The **HTML file** is like the printed manuscript.
- The **DOM** is like the editable version loaded into a word processor.

JavaScript edits the loaded version (DOM), not the original manuscript (HTML file).

---

# What is HTML?

**HTML (HyperText Markup Language)** is the standard markup language used to create webpages.

It defines:

- Headings
- Paragraphs
- Images
- Links
- Tables
- Forms
- Lists
- Buttons

Example:

```html
<!DOCTYPE html>

<html>

<head>

<title>My Website</title>

</head>

<body>

<h1>Hello World</h1>

<p>Learning JavaScript</p>

</body>

</html>
```

This is a plain text file stored on disk or served by a web server.

---

# What is the DOM?

The **Document Object Model (DOM)** is a tree-like structure automatically created by the browser after parsing the HTML.

Every HTML element becomes a JavaScript object called a **node**.

JavaScript can access and modify these nodes.

---

# HTML vs DOM

| HTML | DOM |
|------|------|
| Markup language | Programming interface |
| Source code | Object representation |
| Stored in `.html` files | Exists in browser memory |
| Static by itself | Dynamic and editable |
| Cannot respond to events | Supports JavaScript interaction |
| Read by the browser | Manipulated by JavaScript |

---

# How HTML Becomes the DOM

The browser performs several steps before displaying a webpage.

```text
HTML File

↓

Browser Downloads HTML

↓

HTML Parser

↓

Creates DOM Tree

↓

JavaScript Accesses DOM

↓

Interactive Webpage
```

The HTML file remains unchanged.

The browser creates a separate DOM in memory.

---

# Visual Comparison

### HTML Source

```html
<body>

<h1>Hello</h1>

<p>Welcome</p>

</body>
```

---

### DOM Tree

```text
Document
│
└── html
    │
    └── body
        │
        ├── h1
        │   └── "Hello"
        │
        └── p
            └── "Welcome"
```

Notice how HTML tags become JavaScript objects (nodes).

---

# Key Differences

| Feature | HTML | DOM |
|---------|------|------|
| Full Form | HyperText Markup Language | Document Object Model |
| Type | Markup Language | Object Model |
| Purpose | Defines webpage structure | Represents webpage as objects |
| Created By | Developer | Browser |
| Editable | Source file | Yes, using JavaScript |
| Lives In | File System / Server | Browser Memory |
| Supports Events | No | Yes |
| Dynamic | No | Yes |

---

# Code Example

### HTML

```html
<h1 id="title">Hello</h1>
```

---

### JavaScript

```javascript
const heading = document.getElementById("title");

heading.textContent = "Welcome";
```

---

### Before JavaScript

```text
Hello
```

---

### After JavaScript

```text
Welcome
```

Only the DOM changes.

The original HTML file is not modified.

---

# Real-World Example

Suppose you open an online shopping website.

Initially, the cart shows:

```text
Cart (0)
```

After clicking **Add to Cart**, JavaScript updates the DOM.

Now it displays:

```text
Cart (1)
```

The browser changed the DOM instantly.

The original HTML file on the server remains exactly the same.

---

# Advantages

## HTML

- Simple and easy to learn.
- Defines webpage structure.
- Supported by all browsers.
- Human-readable.

### DOM

- Enables dynamic webpages.
- Supports JavaScript interaction.
- Allows runtime updates.
- Supports animations and events.
- Makes Single Page Applications (SPA) possible.

---

# Limitations

## HTML

- Static by itself.
- Cannot respond to user actions.
- Cannot update content automatically.

### DOM

- Large DOM trees consume memory.
- Frequent DOM updates can reduce performance.
- Complex DOM structures can be harder to manage.

---

# Common Mistakes

### ❌ Incorrect

Thinking HTML and the DOM are identical.

They are different.

---

### ❌ Incorrect

Believing JavaScript edits the HTML file.

JavaScript edits the DOM, not the original file.

---

### ❌ Incorrect

Assuming changes made in DevTools permanently modify the HTML file.

Changes in DevTools affect only the current DOM.

Reloading the page restores the original HTML unless JavaScript modifies it again.

---

# Best Practices

- Understand that HTML creates the initial structure.
- Use JavaScript to modify the DOM instead of rewriting HTML files.
- Keep HTML semantic and well-organized.
- Minimize unnecessary DOM updates for better performance.
- Prefer `textContent` over `innerHTML` when inserting plain text.

---

# Summary

- HTML defines the webpage structure.
- The browser parses HTML and creates the DOM.
- The DOM is a tree of JavaScript objects.
- JavaScript interacts with the DOM, not the HTML source file.
- The DOM allows webpages to become interactive and dynamic.

---

# Interview Questions

1. What is the difference between HTML and the DOM?
2. Who creates the DOM?
3. Does JavaScript modify the HTML file directly?
4. Why is the DOM necessary?
5. What happens after the browser downloads an HTML file?
6. Why is the DOM called an object model?
7. Where does the DOM exist?
8. Can the DOM change while the HTML file remains the same?
9. What is the relationship between HTML and the DOM?
10. Why is understanding the DOM important for JavaScript developers?

---

# Practice Exercise

1. Create a simple HTML page with a heading and a paragraph.
2. Open the page in a browser.
3. Open Developer Tools (`F12`) and inspect the **Elements** panel.
4. Change the heading text using JavaScript.
5. Observe that the webpage updates immediately.
6. Refresh the page and notice that the original HTML is restored.
7. Draw the DOM Tree for your HTML page.

---

# Key Takeaway

> **HTML** defines the initial structure of a webpage, while the **DOM** is the browser's live, object-based representation of that structure. JavaScript interacts with the DOM—not the original HTML file—allowing webpages to become dynamic and interactive.

---

# Next Lesson

<h2>
➡️ <a href="../0004_accessing_dom_elements/accessing_dom_elements.md" style="color:#1E90FF;text-decoration:none;">
<strong>Accessing DOM Elements</strong>
</a>
</h2>