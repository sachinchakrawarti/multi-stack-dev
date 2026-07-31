# HTML Document Anatomy

## Overview

Every HTML webpage follows a well-defined structure known as the **HTML document anatomy**. This structure provides a standardized way to organize web content so that browsers, search engines, and assistive technologies can correctly interpret and display it.

Understanding the anatomy of an HTML document is one of the most important fundamentals of web development. Regardless of whether you're building a simple webpage, a blog, or a complex web application, every HTML document is built upon the same core structure.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand the anatomy of an HTML document.
* Identify the purpose of each major component.
* Explain the hierarchy of HTML elements.
* Understand parent-child relationships.
* Read and write a valid HTML5 document.
* Understand how browsers process HTML documents.

---

# Complete HTML5 Document

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HTML Anatomy</title>

    <link rel="stylesheet" href="style.css">

    <script src="script.js" defer></script>
</head>

<body>

    <header>
        <h1>Welcome</h1>
    </header>

    <main>
        <p>This is a simple HTML document.</p>
    </main>

    <footer>
        <p>Copyright © 2026</p>
    </footer>

</body>

</html>
```

---

# High-Level Anatomy

```
HTML Document
│
├── <!DOCTYPE html>
│
└── <html>
      │
      ├── <head>
      │      ├── meta
      │      ├── title
      │      ├── link
      │      └── script
      │
      └── <body>
             ├── header
             ├── main
             ├── section
             ├── article
             ├── aside
             └── footer
```

---

# Major Components

Every HTML document consists of four primary parts.

## 1. Document Type Declaration

```html
<!DOCTYPE html>
```

### Purpose

* Declares HTML5.
* Enables Standards Mode.
* Prevents Quirks Mode.
* Must be the first line of every HTML document.

---

## 2. Root Element

```html
<html lang="en">
```

### Purpose

* Root element of the document.
* Contains every HTML element.
* Specifies the document language.

Everything inside an HTML document exists within the `<html>` element.

---

## 3. Head Section

```html
<head>

</head>
```

The `<head>` contains information **about** the webpage rather than content shown on the page.

Common elements include:

* meta
* title
* link
* style
* script
* base

### Example

```html
<head>

<meta charset="UTF-8">

<title>My Website</title>

<link rel="stylesheet" href="style.css">

</head>
```

---

## 4. Body Section

```html
<body>

</body>
```

The `<body>` contains everything displayed inside the browser window.

Examples include:

* headings
* paragraphs
* images
* videos
* tables
* forms
* navigation
* buttons

Example:

```html
<body>

<h1>Hello World</h1>

<p>Welcome to HTML.</p>

</body>
```

---

# Document Hierarchy

HTML is hierarchical.

```
html
│
├── head
│     ├── meta
│     ├── title
│     └── link
│
└── body
      ├── header
      ├── main
      │     ├── section
      │     └── article
      └── footer
```

Each element may contain child elements.

---

# Parent and Child Relationships

Example

```html
<body>

<main>

<h1>Learning HTML</h1>

<p>Hello World</p>

</main>

</body>
```

Hierarchy

```
body
└── main
      ├── h1
      └── p
```

Here:

* body is the parent of main.
* main is the child of body.
* h1 and p are children of main.
* h1 and p are siblings.

---

# Nested Elements

HTML elements can be nested.

Example

```html
<section>

<article>

<h2>News</h2>

<p>Today's headline...</p>

</article>

</section>
```

Hierarchy

```
section
└── article
      ├── h2
      └── p
```

Proper nesting improves readability and accessibility.

---

# Browser Interpretation

When the browser receives an HTML document, it follows these steps:

1. Reads `<!DOCTYPE html>`.
2. Determines rendering mode.
3. Parses the HTML document.
4. Builds the DOM.
5. Downloads linked resources.
6. Applies CSS.
7. Executes JavaScript.
8. Paints the page.
9. Waits for user interaction.

---

# DOM Representation

The browser converts HTML into a Document Object Model (DOM).

Example HTML

```html
<body>

<h1>Hello</h1>

<p>Welcome</p>

</body>
```

DOM

```
Document
│
└── html
      │
      ├── head
      │
      └── body
            ├── h1
            └── p
```

JavaScript interacts with this DOM rather than directly with the source file.

---

# HTML Document Lifecycle

```
Developer
      │
      ▼
Writes HTML
      │
      ▼
Browser Downloads File
      │
      ▼
Parser
      │
      ▼
DOM Tree
      │
      ▼
CSS Applied
      │
      ▼
JavaScript Executed
      │
      ▼
Rendering
      │
      ▼
Visible Webpage
```

---

# Common Mistakes

Avoid these common errors:

* Missing `<!DOCTYPE html>`.
* Omitting the `<head>` element.
* Placing visible content inside `<head>`.
* Missing the `<title>` element.
* Incorrect nesting of elements.
* Forgetting closing tags where required.
* Multiple `<body>` elements.
* Multiple `<head>` elements.
* Multiple root `<html>` elements.

---

# Best Practices

* Always start with `<!DOCTYPE html>`.
* Use the `lang` attribute on the `<html>` element.
* Keep metadata inside `<head>`.
* Place visible content inside `<body>`.
* Maintain proper indentation.
* Use semantic elements such as `<header>`, `<main>`, and `<footer>`.
* Validate HTML regularly.
* Keep the document clean and organized.

---

# Key Takeaways

* Every webpage begins with the same HTML document structure.
* The document consists of `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
* HTML elements form a tree-like hierarchy.
* Browsers parse HTML into the DOM before rendering.
* Proper document structure improves compatibility, accessibility, maintainability, and SEO.

---

# Summary

The anatomy of an HTML document provides the foundation for every webpage. Understanding how the document is organized—and how browsers interpret that organization—makes it easier to build standards-compliant, accessible, and maintainable websites. The following chapters will examine each component of the document structure in detail, beginning with the `<!DOCTYPE html>` declaration.
