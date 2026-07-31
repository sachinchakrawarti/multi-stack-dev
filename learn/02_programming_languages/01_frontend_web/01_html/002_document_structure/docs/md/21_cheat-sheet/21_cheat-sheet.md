# HTML Document Structure Cheat Sheet

## Overview

This cheat sheet provides a quick reference for the **HTML Document Structure** module. It summarizes the essential syntax, elements, metadata, best practices, validation tips, and common patterns you'll use when creating HTML documents.

Use this document as a revision guide, interview reference, or daily development companion.

---

# Standard HTML5 Template

```html id="x8m3q7"
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>Page Title</title>

    <meta
        name="description"
        content="Page description">

    <link
        rel="icon"
        href="favicon.ico">

    <link
        rel="stylesheet"
        href="css/style.css">

    <script
        src="js/script.js"
        defer></script>

</head>

<body>

    <!-- Visible content goes here -->

</body>

</html>
```

---

# HTML Document Anatomy

```text id="m5k2v8"
<!DOCTYPE html>
        │
        ▼
     <html>
      │
 ┌────┴────┐
 ▼         ▼
<head>   <body>
```

---

# Core Elements

| Element           | Purpose                      |
| ----------------- | ---------------------------- |
| `<!DOCTYPE html>` | Enables HTML5 standards mode |
| `<html>`          | Root element                 |
| `<head>`          | Metadata and resources       |
| `<body>`          | Visible webpage content      |
| `<meta>`          | Metadata                     |
| `<title>`         | Browser tab title            |
| `<link>`          | External resources           |
| `<script>`        | JavaScript                   |
| `<!-- -->`        | HTML comment                 |

---

# Essential Meta Tags

## Character Encoding

```html id="a2p7m4"
<meta charset="UTF-8">
```

---

## Responsive Viewport

```html id="w9x5k1"
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
```

---

## Description

```html id="n4r8v6"
<meta
    name="description"
    content="Page description">
```

---

## Language

```html id="j6m1q9"
<html lang="en">
```

---

# Linking CSS

```html id="k7v2p5"
<link
    rel="stylesheet"
    href="css/style.css">
```

---

# Linking JavaScript

```html id="d3x9m8"
<script
    src="js/script.js"
    defer></script>
```

### `defer` vs `async`

| Feature                                  | `defer` | `async` |
| ---------------------------------------- | ------- | ------- |
| Preserves execution order                | ✅       | ❌       |
| Executes after HTML parsing              | ✅       | ❌       |
| Best for application scripts             | ✅       | ❌       |
| Best for independent third-party scripts | ❌       | ✅       |

---

# Favicon

```html id="u8k4n2"
<link
    rel="icon"
    href="favicon.ico">
```

---

# HTML Comments

```html id="r1m6x5"
<!-- This is a comment -->
```

Comments are ignored by the browser but remain visible in the page source.

---

# HTML Document Hierarchy

```text id="t9q3p7"
HTML Document
│
├── <!DOCTYPE html>
│
└── <html>
     │
     ├── <head>
     │    ├── Meta
     │    ├── Title
     │    ├── Link
     │    ├── Style
     │    └── Script
     │
     └── <body>
          ├── Header
          ├── Navigation
          ├── Main
          ├── Section
          ├── Article
          ├── Aside
          └── Footer
```

---

# Semantic Layout

```html id="p5n8v3"
<body>

<header></header>

<nav></nav>

<main>

<section>

<article></article>

</section>

<aside></aside>

</main>

<footer></footer>

</body>
```

---

# HTML Validation Checklist

Before publishing:

* ✅ HTML5 doctype declared
* ✅ `lang` attribute added
* ✅ UTF-8 encoding specified
* ✅ Viewport meta tag included
* ✅ Page title written
* ✅ Meta description added (when appropriate)
* ✅ CSS linked correctly
* ✅ JavaScript linked correctly
* ✅ IDs are unique
* ✅ Images include `alt` text where needed
* ✅ HTML validates successfully

---

# Accessibility Checklist

* ✅ Use semantic HTML.
* ✅ Set the `lang` attribute.
* ✅ Add `alt` text to meaningful images.
* ✅ Follow a logical heading hierarchy.
* ✅ Label form controls.
* ✅ Ensure keyboard accessibility.
* ✅ Use descriptive link text.

---

# SEO Checklist

* ✅ Unique page title
* ✅ Meta description
* ✅ Semantic HTML
* ✅ Proper heading structure
* ✅ Image `alt` text
* ✅ Clean URLs
* ✅ Valid HTML

---

# Common File Structure

```text id="v2m7k4"
project/
│
├── index.html
├── about.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
├── icons/
│   └── favicon.ico
│
└── assets/
```

---

# Common Mistakes

| Mistake             | Correct Practice                                   |
| ------------------- | -------------------------------------------------- |
| Missing doctype     | Use `<!DOCTYPE html>`                              |
| Missing `lang`      | Add `lang="en"` (or the appropriate language code) |
| Missing UTF-8       | Add `<meta charset="UTF-8">`                       |
| Missing viewport    | Add viewport meta tag                              |
| Duplicate IDs       | Ensure every `id` is unique                        |
| Incorrect nesting   | Follow HTML content models                         |
| Missing `alt`       | Add alternative text for meaningful images         |
| Broken file paths   | Verify resource locations                          |
| Generic titles      | Use descriptive titles                             |
| Ignoring validation | Validate before deployment                         |

---

# HTML Loading Process

```text id="g8r5m1"
Browser
      │
      ▼
Read HTML
      │
      ▼
Parse HTML
      │
      ▼
Build DOM
      │
      ▼
Load CSS
      │
      ▼
Execute JavaScript
      │
      ▼
Render Webpage
```

---

# Browser Developer Workflow

```text id="q4x9p6"
Write HTML
      │
      ▼
Save File
      │
      ▼
Open Browser
      │
      ▼
Inspect
      │
      ▼
Validate
      │
      ▼
Fix Errors
      │
      ▼
Repeat
```

---

# Quick Commands

## HTML Comment

```html id="c1v8n5"
<!-- Comment -->
```

---

## UTF-8

```html id="m9k2p4"
<meta charset="UTF-8">
```

---

## Viewport

```html id="y6r1t8"
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0">
```

---

## Stylesheet

```html id="h5q7m3"
<link
    rel="stylesheet"
    href="css/style.css">
```

---

## JavaScript

```html id="n3x6v9"
<script
    src="js/script.js"
    defer></script>
```

---

## Favicon

```html id="p8m4k2"
<link
    rel="icon"
    href="favicon.ico">
```

---

## Title

```html id="w2v9r5"
<title>Page Title</title>
```

---

# Best Practices

* Start every page with `<!DOCTYPE html>`.
* Always specify the document language.
* Use UTF-8 character encoding.
* Include the viewport meta tag.
* Write meaningful page titles.
* Use semantic HTML elements.
* Keep CSS and JavaScript in external files.
* Use `defer` for most external application scripts.
* Keep IDs unique.
* Write clean, consistent indentation.
* Validate HTML regularly.
* Test across browsers and devices.

---

# One-Minute Interview Revision

| Question             | Answer                                                                   |
| -------------------- | ------------------------------------------------------------------------ |
| HTML5 doctype?       | `<!DOCTYPE html>`                                                        |
| Root element?        | `<html>`                                                                 |
| Metadata location?   | `<head>`                                                                 |
| Visible content?     | `<body>`                                                                 |
| Character encoding?  | `<meta charset="UTF-8">`                                                 |
| Responsive meta tag? | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| External CSS?        | `<link rel="stylesheet">`                                                |
| External JavaScript? | `<script src="..." defer></script>`                                      |
| Browser icon?        | Favicon                                                                  |
| HTML comments?       | `<!-- Comment -->`                                                       |
| Document language?   | `lang` attribute                                                         |
| Validation purpose?  | Check HTML standards compliance                                          |

---

# Module Mind Map

```text id="s7p3m8"
HTML Document Structure
│
├── Doctype
├── HTML Element
├── Head
│    ├── Meta
│    ├── Title
│    ├── Favicon
│    ├── CSS
│    └── JavaScript
├── Body
├── Comments
├── Validation
├── Best Practices
├── Common Mistakes
└── Accessibility & SEO
```

---

# Final Takeaways

* Every HTML document begins with `<!DOCTYPE html>`.
* The `<html>`, `<head>`, and `<body>` elements form the core document structure.
* Metadata belongs inside `<head>`.
* Visible content belongs inside `<body>`.
* Use semantic HTML whenever possible.
* Keep HTML clean, valid, and well-organized.
* Validate frequently and test on multiple browsers.
* Accessibility, SEO, and maintainability begin with a well-structured HTML document.

---

# Quick Revision Formula

```text id="z5k1v7"
DOCTYPE
    ↓
HTML
    ↓
HEAD
    ↓
Meta + Title + CSS + JS
    ↓
BODY
    ↓
Semantic Content
    ↓
Validate
    ↓
Test
    ↓
Deploy
```

This simple workflow summarizes the essential steps for creating professional HTML documents.
