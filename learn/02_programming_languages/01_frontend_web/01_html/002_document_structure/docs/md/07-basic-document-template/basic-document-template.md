# Basic HTML Document Template (HTML5 Boilerplate)

## Overview

Every HTML webpage starts with a **basic document template**, also known as an **HTML5 boilerplate**. This template provides the minimum structure required for a valid HTML document and serves as the foundation for all web pages.

Rather than creating an HTML document from scratch each time, developers typically begin with a standard template and then add content, styles, and functionality.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand what an HTML boilerplate is.
* Create a valid HTML5 document from scratch.
* Explain the purpose of every line in the template.
* Identify mandatory and optional components.
* Follow modern HTML5 best practices.

---

# What Is an HTML Boilerplate?

An **HTML boilerplate** is a reusable starting template that contains the essential elements required for a valid HTML document.

It includes:

* Document type declaration
* Root element
* Head section
* Body section
* Common metadata

This template acts as the foundation for every webpage.

---

# Standard HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>My First Web Page</title>
</head>

<body>

    <h1>Hello, World!</h1>

</body>

</html>
```

---

# Line-by-Line Explanation

## Line 1

```html
<!DOCTYPE html>
```

Purpose:

* Declares HTML5.
* Enables Standards Mode.
* Prevents Quirks Mode.

---

## Line 2

```html
<html lang="en">
```

Purpose:

* Root element.
* Specifies English as the primary language.

---

## Lines 4–7

```html
<head>

</head>
```

Purpose:

Stores metadata.

Common items include:

* Character encoding
* Viewport settings
* Page title
* CSS files
* JavaScript files
* Favicons

---

## Character Encoding

```html
<meta charset="UTF-8">
```

Purpose:

* Supports Unicode.
* Displays international characters correctly.
* Recommended for every webpage.

---

## Viewport

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
```

Purpose:

* Makes webpages responsive.
* Ensures proper scaling on mobile devices.
* Recommended for modern websites.

---

## Page Title

```html
<title>My First Web Page</title>
```

Purpose:

Displayed in:

* Browser tabs
* Bookmarks
* Browser history
* Search engine results

---

## Body

```html
<body>

</body>
```

Purpose:

Contains all visible webpage content.

Examples:

* Text
* Images
* Buttons
* Forms
* Tables
* Videos
* Navigation
* Interactive elements

---

# Complete Document Hierarchy

```text
Document
│
├── <!DOCTYPE html>
│
└── html
      │
      ├── head
      │      ├── meta charset
      │      ├── viewport
      │      └── title
      │
      └── body
             └── page content
```

---

# Browser Processing

When a browser loads the document:

```text
Developer
      │
      ▼
Writes HTML
      │
      ▼
Browser Downloads File
      │
      ▼
Reads DOCTYPE
      │
      ▼
Creates DOM
      │
      ▼
Loads CSS
      │
      ▼
Executes JavaScript
      │
      ▼
Displays Webpage
```

---

# Minimal HTML Document

The smallest valid HTML5 document is:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page</title>
</head>
<body>

</body>
</html>
```

Although valid, it is recommended to include `meta charset` and `meta viewport`.

---

# Recommended HTML5 Boilerplate

For most projects, use the following template:

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Describe your webpage here.">

    <meta
        name="author"
        content="Your Name">

    <title>My Website</title>

    <link
        rel="icon"
        href="favicon.ico">

    <link
        rel="stylesheet"
        href="css/style.css">

</head>

<body>

    <header>

    </header>

    <main>

    </main>

    <footer>

    </footer>

    <script
        src="js/script.js"
        defer></script>

</body>

</html>
```

This template is suitable for most modern websites and web applications.

---

# HTML Boilerplate with Semantic Elements

```html
<body>

<header>

</header>

<nav>

</nav>

<main>

<section>

</section>

</main>

<footer>

</footer>

</body>
```

Using semantic elements improves readability, accessibility, and SEO.

---

# VS Code Shortcut

In Visual Studio Code:

1. Create a new `.html` file.
2. Type:

```text
!
```

or

```text
html:5
```

3. Press **Tab** or **Enter**.

VS Code automatically generates a complete HTML5 boilerplate using Emmet.

---

# Common Mistakes

## Missing DOCTYPE

Incorrect:

```html
<html>
```

Always begin with:

```html
<!DOCTYPE html>
```

---

## Missing Language Attribute

Incorrect:

```html
<html>
```

Correct:

```html
<html lang="en">
```

---

## Missing Character Encoding

Avoid omitting:

```html
<meta charset="UTF-8">
```

---

## Missing Viewport

Without the viewport meta tag, pages may not display correctly on mobile devices.

---

## Placing Content Inside `<head>`

Incorrect:

```html
<head>

<h1>Hello</h1>

</head>
```

Visible content belongs inside `<body>`.

---

# Best Practices

* Start every page with the HTML5 boilerplate.
* Use `<!DOCTYPE html>`.
* Always specify the `lang` attribute.
* Include UTF-8 character encoding.
* Include the viewport meta tag.
* Write a meaningful page title.
* Organize the page with semantic elements.
* Link external CSS and JavaScript files.
* Keep HTML clean and consistently indented.

---

# Interview Questions

### What is an HTML boilerplate?

A reusable template containing the basic structure required for a valid HTML document.

---

### Why is the viewport meta tag important?

It ensures webpages display and scale correctly on different screen sizes.

---

### Which part of the document contains visible content?

The `<body>` element.

---

### What is the minimum required structure of an HTML5 document?

A DOCTYPE declaration, an `<html>` element, a `<head>` section, and a `<body>` section.

---

### Why do developers use a boilerplate?

It saves time, promotes consistency, and ensures that every new page starts with a standards-compliant structure.

---

# Key Takeaways

* Every HTML page begins with a standard document template.
* The HTML5 boilerplate includes `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
* Include UTF-8 encoding and the viewport meta tag for modern webpages.
* Use semantic elements to organize content.
* A consistent boilerplate improves maintainability, accessibility, and SEO.

---

# Summary

The HTML5 boilerplate is the starting point for every webpage. It provides a standardized, standards-compliant structure that browsers can interpret reliably. By understanding the purpose of each line in the template, you can confidently create new HTML documents and establish a strong foundation for future topics such as metadata, semantic HTML, forms, multimedia, CSS, and JavaScript integration.

In the next chapter, you'll explore **character encoding (`<meta charset="UTF-8">`)** and learn how browsers correctly display text and symbols from languages around the world.
