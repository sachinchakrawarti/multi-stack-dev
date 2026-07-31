# Linking CSS and JavaScript in HTML

## Overview

HTML provides the structure of a webpage, but by itself it cannot create visually appealing layouts or interactive user experiences. To build modern websites, HTML is combined with:

* **CSS (Cascading Style Sheets)** for styling and layout.
* **JavaScript (JS)** for interactivity and dynamic behavior.

CSS is typically linked using the `<link>` element, while JavaScript is added using the `<script>` element.

Understanding how to correctly include CSS and JavaScript files is a fundamental skill for every web developer.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Link external CSS files.
* Add internal CSS.
* Link external JavaScript files.
* Add internal JavaScript.
* Understand `defer` and `async`.
* Choose appropriate script placement.
* Work with relative and absolute file paths.
* Follow modern best practices.

---

# HTML, CSS, and JavaScript Relationship

Modern webpages are built using three core technologies.

```text id="k1v9n3"
               Website
                  │
     ┌────────────┼────────────┐
     │            │            │
     ▼            ▼            ▼
   HTML          CSS     JavaScript
 Structure      Style    Behavior
```

Each technology has a specific responsibility:

| Technology | Purpose                 |
| ---------- | ----------------------- |
| HTML       | Structure and content   |
| CSS        | Styling and layout      |
| JavaScript | Logic and interactivity |

---

# Linking External CSS

External stylesheets are linked using the `<link>` element inside the `<head>` section.

### Syntax

```html id="t6q4p8"
<link rel="stylesheet" href="css/style.css">
```

### Example

```html id="h2x9r5"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CSS Example</title>

    <link
        rel="stylesheet"
        href="css/style.css">
</head>

<body>

<h1>Hello HTML</h1>

</body>

</html>
```

---

# Understanding `<link>` Attributes

| Attribute | Purpose                                               |
| --------- | ----------------------------------------------------- |
| `rel`     | Relationship between the document and the linked file |
| `href`    | Location (URL or path) of the stylesheet              |

Example:

```html id="y4m8c2"
<link
    rel="stylesheet"
    href="styles/main.css">
```

---

# Internal CSS

Small amounts of CSS can be written directly inside the HTML document using the `<style>` element.

```html id="f7p3d6"
<head>

<style>

body {
    background-color: #f5f5f5;
}

h1 {
    color: blue;
}

</style>

</head>
```

Internal CSS is useful for learning, prototypes, or very small projects.

---

# Inline CSS

Styles can also be applied directly to individual elements using the `style` attribute.

```html id="a8r5v1"
<h1 style="color: blue;">
    Hello HTML
</h1>
```

Inline styles should be avoided for large projects because they reduce maintainability.

---

# CSS Priority

When multiple styles affect the same element, the simplified precedence is:

```text id="u5t7m9"
Inline CSS
      │
      ▼
Internal CSS
      │
      ▼
External CSS
```

> **Note:** The complete CSS cascade also considers selector specificity, source order, `!important`, inheritance, and origin (user agent, user, author). Those topics are covered in the CSS module.

---

# Linking External JavaScript

External JavaScript files are linked using the `<script>` element.

### Syntax

```html id="p9w6h4"
<script src="js/script.js"></script>
```

### Example

```html id="c3n8k7"
<body>

<h1>Hello</h1>

<script src="js/script.js"></script>

</body>
```

---

# Internal JavaScript

Small scripts can be written directly inside the HTML document.

```html id="l4x2f9"
<script>

console.log("Hello HTML");

</script>
```

---

# Script Placement

There are two common locations for the `<script>` element.

### End of `<body>`

```html id="v2k7r5"
<body>

<h1>Hello</h1>

<script src="js/script.js"></script>

</body>
```

Advantages:

* HTML loads first.
* Faster perceived rendering.
* Traditional approach.

---

### Inside `<head>` with `defer`

```html id="m7q1c8"
<head>

<script
    src="js/script.js"
    defer></script>

</head>
```

Advantages:

* HTML parsing continues without blocking.
* Script executes after the HTML document has been fully parsed.
* Recommended for most external scripts.

---

# `defer` Attribute

The `defer` attribute tells the browser to download the script while parsing HTML but wait to execute it until the document has been fully parsed.

```html id="e5v9n2"
<script
    src="js/script.js"
    defer></script>
```

Characteristics:

* Does not block HTML parsing.
* Preserves script execution order.
* Runs after the DOM is built.
* Ideal for most application scripts.

---

# `async` Attribute

The `async` attribute downloads the script in parallel and executes it as soon as it is available.

```html id="j8t4p6"
<script
    src="analytics.js"
    async></script>
```

Characteristics:

* Downloads in parallel.
* May interrupt HTML parsing to execute.
* Execution order is not guaranteed.
* Best for independent scripts such as analytics or advertisements.

---

# `defer` vs `async`

| Feature                                  | `defer` | `async`                            |
| ---------------------------------------- | ------- | ---------------------------------- |
| Downloads in parallel                    | ✔       | ✔                                  |
| Blocks HTML parsing                      | ✘       | May pause parsing during execution |
| Preserves execution order                | ✔       | ✘                                  |
| Executes after HTML parsing              | ✔       | ✘                                  |
| Best for application scripts             | ✔       | ✘                                  |
| Best for independent third-party scripts | ✘       | ✔                                  |

---

# Browser Loading Process

Without `defer`:

```text id="q7h5m3"
Read HTML
      │
      ▼
Encounter Script
      │
      ▼
Download Script
      │
      ▼
Execute Script
      │
      ▼
Continue Parsing HTML
```

With `defer`:

```text id="b1v6k9"
Read HTML
      │
      ├── Download Script
      │
      ▼
Continue Parsing HTML
      │
      ▼
Build DOM
      │
      ▼
Execute Deferred Script
```

---

# Relative File Paths

A relative path points to a file within the current project.

Project structure:

```text id="n3x8p4"
project/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

HTML:

```html id="g6m1t7"
<link
    rel="stylesheet"
    href="css/style.css">

<script
    src="js/script.js"
    defer></script>
```

---

# Absolute URLs

External resources use full URLs.

```html id="w4p9d2"
<link
    rel="stylesheet"
    href="https://example.com/styles.css">

<script
    src="https://example.com/script.js"
    defer></script>
```

Absolute URLs are commonly used for CDNs and third-party libraries.

---

# Using a CDN

A Content Delivery Network (CDN) hosts files on distributed servers.

Example:

```html id="s8k3v5"
<link
    rel="stylesheet"
    href="https://cdn.example.com/library.css">
```

Benefits:

* Fast delivery
* Reduced server load
* Global availability

Always use trusted CDNs and verify version numbers.

---

# Complete Example

```html id="r6n2h8"
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">

<title>HTML Example</title>

<link
    rel="stylesheet"
    href="css/style.css">

<script
    src="js/script.js"
    defer></script>

</head>

<body>

<header>
    <h1>Welcome</h1>
</header>

<main>
    <p>Learning HTML, CSS, and JavaScript.</p>
</main>

</body>

</html>
```

---

# Common Mistakes

## Incorrect File Path

```html id="k2m7p9"
<link
    rel="stylesheet"
    href="style.css">
```

Verify that the file path matches your project structure.

---

## Missing `rel="stylesheet"`

Incorrect:

```html id="h5t1x4"
<link href="style.css">
```

Correct:

```html id="z9q6n3"
<link
    rel="stylesheet"
    href="style.css">
```

---

## Forgetting to Close `<script>`

Incorrect:

```html id="p4c8m6"
<script src="script.js">
```

Correct:

```html id="d7w3k1"
<script src="script.js"></script>
```

---

## Blocking Page Rendering

Large JavaScript files without `defer` can delay page rendering.

Preferred:

```html id="u1v8r7"
<script
    src="app.js"
    defer></script>
```

---

## Mixing Content and Presentation

Avoid excessive inline CSS and JavaScript in production code. Separate structure (HTML), presentation (CSS), and behavior (JavaScript).

---

# Best Practices

* Use external CSS for maintainable styling.
* Use external JavaScript for reusable functionality.
* Place CSS links inside the `<head>`.
* Use `defer` for most external JavaScript files.
* Keep file names and folder structures organized.
* Prefer relative paths for project resources.
* Use trusted CDNs when referencing external libraries.
* Minimize inline CSS and JavaScript in production projects.
* Test that linked resources load correctly.

---

# Interview Questions

### Which HTML element links an external CSS file?

The `<link>` element.

Example:

```html id="x5m2r8"
<link
    rel="stylesheet"
    href="style.css">
```

---

### Which HTML element loads JavaScript?

The `<script>` element.

---

### What is the purpose of the `defer` attribute?

It downloads the script while the browser parses HTML and executes the script after the HTML document has been fully parsed.

---

### What is the difference between `defer` and `async`?

`defer` preserves execution order and waits until HTML parsing is complete, while `async` executes scripts as soon as they are downloaded and does not guarantee execution order.

---

### Where should CSS and JavaScript usually be linked?

CSS is typically linked inside the `<head>`, and JavaScript is commonly loaded with `defer` in the `<head>` or placed at the end of the `<body>`.

---

# Key Takeaways

* HTML defines structure, CSS defines presentation, and JavaScript defines behavior.
* External CSS is linked using the `<link>` element.
* External JavaScript is linked using the `<script>` element.
* Use `defer` for most application scripts.
* Keep CSS and JavaScript in separate files for better maintainability.
* Use correct file paths and organize project assets logically.

---

# Summary

Linking CSS and JavaScript is a fundamental part of modern web development. CSS transforms plain HTML into visually appealing interfaces, while JavaScript adds interactivity and dynamic behavior. By using external files, understanding relative and absolute paths, and applying modern loading techniques such as `defer`, developers can create websites that are organized, maintainable, and performant.

In the next chapter, you'll learn about **HTML comments**, including their syntax, practical uses, best practices, and how they help improve code readability and maintainability.
