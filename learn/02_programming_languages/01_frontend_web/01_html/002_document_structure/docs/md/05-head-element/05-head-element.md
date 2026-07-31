# The `<head>` Element

## Overview

The `<head>` element contains **metadata** (information about the HTML document) that is **not directly displayed** on the web page. It provides important information to web browsers, search engines, social media platforms, and other web services.

The `<head>` section is one of the two direct children of the `<html>` element, the other being `<body>`. Although users typically do not see the contents of `<head>`, it plays a crucial role in webpage functionality, performance, accessibility, search engine optimization (SEO), and resource loading.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand the purpose of the `<head>` element.
* Differentiate between metadata and visible content.
* Identify common elements inside `<head>`.
* Organize document metadata correctly.
* Follow HTML5 best practices for the `<head>` section.

---

# What Is the `<head>` Element?

The `<head>` element is a container for metadata and document-level information.

It typically includes:

* Character encoding
* Page title
* Viewport settings
* CSS files
* JavaScript files
* Icons (Favicons)
* Search engine metadata
* Social media metadata
* Base URL information

The contents of `<head>` help browsers understand **how** to process the page rather than **what** to display.

---

# Basic Syntax

```html
<head>

</head>
```

It is placed immediately inside the `<html>` element and before the `<body>` element.

---

# Basic Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>My Website</title>
</head>

<body>

    <h1>Hello World</h1>

</body>

</html>
```

Only the `<h1>` element is displayed in the browser. The metadata inside `<head>` remains hidden from the user.

---

# Position in an HTML Document

```text
<!DOCTYPE html>
        │
        ▼
<html>
        │
        ├── <head>
        │
        └── <body>
```

The `<head>` element must appear before the `<body>` element.

---

# Purpose of the `<head>` Element

The `<head>` element provides information that helps browsers and external services process the webpage correctly.

Its responsibilities include:

* Defining document metadata
* Loading external resources
* Setting browser behavior
* Improving SEO
* Improving accessibility
* Supporting responsive design
* Defining page identity

---

# Common Elements Inside `<head>`

The following elements are commonly placed inside the `<head>` section.

| Element      | Purpose                                   |
| ------------ | ----------------------------------------- |
| `<title>`    | Browser tab title                         |
| `<meta>`     | Metadata                                  |
| `<link>`     | External resources (CSS, icons)           |
| `<style>`    | Internal CSS                              |
| `<script>`   | JavaScript                                |
| `<base>`     | Base URL for relative links               |
| `<noscript>` | Content shown when JavaScript is disabled |

---

# Typical HTML5 Head Section

```html
<head>

<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>My Website</title>

<link rel="icon" href="favicon.ico">

<link rel="stylesheet" href="style.css">

<script src="script.js" defer></script>

</head>
```

---

# Understanding the Main Elements

## `<title>`

Defines the page title displayed in:

* Browser tabs
* Bookmarks
* Search engine results
* Browser history

Example:

```html
<title>Learning HTML</title>
```

---

## `<meta>`

Provides metadata.

Examples include:

```html
<meta charset="UTF-8">
```

```html
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

```html
<meta name="description"
      content="Learn HTML from beginner to advanced.">
```

---

## `<link>`

Connects external resources.

Example:

```html
<link rel="stylesheet" href="style.css">
```

Another example:

```html
<link rel="icon" href="favicon.ico">
```

---

## `<style>`

Contains internal CSS.

Example:

```html
<style>

body{
    background:white;
}

</style>
```

---

## `<script>`

Loads or contains JavaScript.

Example:

```html
<script src="script.js" defer></script>
```

---

## `<base>`

Specifies the base URL for all relative links.

Example:

```html
<base href="https://example.com/">
```

---

# DOM Representation

```text
Document
│
└── html
      │
      ├── head
      │     ├── meta
      │     ├── title
      │     ├── link
      │     └── script
      │
      └── body
```

---

# Browser Processing

When a browser parses the `<head>` section, it typically:

1. Reads the character encoding.
2. Sets the page title.
3. Loads CSS files.
4. Downloads JavaScript files.
5. Loads the favicon.
6. Processes metadata.
7. Continues parsing the `<body>`.

---

# What Should NOT Go Inside `<head>`?

Visible content should not be placed inside the `<head>` element.

Incorrect:

```html
<head>

<h1>Hello World</h1>

</head>
```

Incorrect:

```html
<head>

<p>This is a paragraph.</p>

</head>
```

Correct:

```html
<body>

<h1>Hello World</h1>

</body>
```

---

# Common Mistakes

## Missing `<title>`

Incorrect:

```html
<head>

<meta charset="UTF-8">

</head>
```

Always include a meaningful `<title>`.

---

## Multiple `<head>` Elements

Incorrect:

```html
<head></head>

<head></head>
```

An HTML document must contain only one `<head>` element.

---

## Placing CSS in `<body>`

Avoid placing `<style>` blocks inside the `<body>` unless there is a specific reason.

---

## Placing Metadata in `<body>`

Metadata belongs in the `<head>` section.

---

# Best Practices

* Include exactly one `<head>` element.
* Always specify the document character encoding.
* Add a descriptive `<title>`.
* Include the viewport meta tag for responsive design.
* Load external CSS using `<link>`.
* Use the `defer` attribute for external JavaScript when appropriate.
* Keep metadata organized and minimal.
* Avoid placing visible content inside `<head>`.

---

# Frequently Used Head Elements

| Element                     | Required    | Typical Use        |
| --------------------------- | ----------- | ------------------ |
| `<title>`                   | Yes         | Page title         |
| `<meta charset>`            | Yes         | Character encoding |
| `<meta viewport>`           | Recommended | Responsive design  |
| `<link rel="stylesheet">`   | Optional    | External CSS       |
| `<script>`                  | Optional    | JavaScript         |
| `<link rel="icon">`         | Optional    | Favicon            |
| `<meta name="description">` | Recommended | SEO description    |

---

# Interview Questions

### What is the purpose of the `<head>` element?

It stores metadata and document-level information that browsers and search engines use to process the webpage.

---

### Is the content inside `<head>` displayed on the webpage?

No. The contents of `<head>` are generally not displayed as part of the webpage's visible content.

---

### Which elements are commonly placed inside `<head>`?

Common elements include `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`, `<base>`, and `<noscript>`.

---

### Can a webpage have multiple `<head>` elements?

No. A valid HTML document contains only one `<head>` element.

---

### Why is the viewport meta tag important?

It helps webpages display and scale correctly on different devices, especially smartphones and tablets.

---

# Key Takeaways

* `<head>` stores metadata, not visible page content.
* It is one of the two direct children of `<html>`.
* It contains elements such as `<title>`, `<meta>`, `<link>`, and `<script>`.
* Browsers process the `<head>` before rendering the page.
* A well-structured `<head>` improves accessibility, SEO, responsiveness, and overall webpage performance.

---

# Summary

The `<head>` element is the control center of an HTML document. While its contents are not directly visible to users, they provide essential information that influences how browsers render pages, how search engines index them, and how external resources are loaded. A properly organized `<head>` section is a fundamental part of every professional HTML document. In the next chapter, you'll explore the `<body>` element, which contains the visible content users interact with on a webpage.
