# The `<html>` Element (Root Element)

## Overview

The `<html>` element is the **root element** of every HTML document. It serves as the top-level container that encloses all other HTML elements (except the `<!DOCTYPE html>` declaration).

Every valid HTML document contains exactly one `<html>` element. Inside it are two primary child elements:

* `<head>` — Contains metadata and information about the document.
* `<body>` — Contains the content displayed in the browser.

The `<html>` element defines the beginning and end of the HTML document and establishes the root of the **Document Object Model (DOM)** tree.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand the purpose of the `<html>` element.
* Explain why it is called the root element.
* Use the `lang` attribute correctly.
* Understand the relationship between `<html>`, `<head>`, and `<body>`.
* Identify common mistakes involving the `<html>` element.
* Follow HTML5 best practices.

---

# Syntax

```html
<html lang="en">

</html>
```

The `<html>` element wraps the entire HTML document.

---

# Basic Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Example</title>
</head>

<body>

    <h1>Hello World</h1>

</body>

</html>
```

---

# Why Is It Called the Root Element?

Every HTML document has a hierarchical structure similar to a tree.

The `<html>` element is at the top of this tree, making it the **root**.

```text
Document
│
└── html
      │
      ├── head
      │
      └── body
```

All other HTML elements are descendants of the `<html>` element.

---

# Position in an HTML Document

The `<html>` element appears immediately after the DOCTYPE declaration.

```html
<!DOCTYPE html>
<html>

</html>
```

It must not appear before the DOCTYPE.

---

# Parent–Child Relationship

The `<html>` element is the parent of both the `<head>` and `<body>` elements.

```text
html
├── head
└── body
```

Example:

```html
<html>

<head>

</head>

<body>

</body>

</html>
```

---

# Required Child Elements

An HTML document should contain the following direct children of `<html>`:

| Element  | Purpose                           |
| -------- | --------------------------------- |
| `<head>` | Metadata and document information |
| `<body>` | Visible webpage content           |

---

# The `lang` Attribute

The most important attribute of the `<html>` element is `lang`.

Example:

```html
<html lang="en">
```

The `lang` attribute specifies the primary language of the document.

---

# Why Use the `lang` Attribute?

Using the correct language provides several benefits:

* Improves accessibility.
* Helps screen readers pronounce text correctly.
* Assists search engines in language detection.
* Supports browser translation features.
* Enhances SEO.

---

# Common Language Codes

| Language              | Code    |
| --------------------- | ------- |
| English               | `en`    |
| Hindi                 | `hi`    |
| French                | `fr`    |
| German                | `de`    |
| Spanish               | `es`    |
| Japanese              | `ja`    |
| Chinese (Simplified)  | `zh-CN` |
| Chinese (Traditional) | `zh-TW` |
| Arabic                | `ar`    |
| Russian               | `ru`    |
| Portuguese            | `pt`    |
| Bengali               | `bn`    |

---

# Examples

English page:

```html
<html lang="en">
```

Hindi page:

```html
<html lang="hi">
```

Japanese page:

```html
<html lang="ja">
```

---

# Global Attributes

The `<html>` element supports all global HTML attributes.

Some common ones include:

| Attribute | Purpose                |
| --------- | ---------------------- |
| `lang`    | Document language      |
| `dir`     | Text direction         |
| `class`   | CSS class              |
| `id`      | Unique identifier      |
| `style`   | Inline CSS             |
| `data-*`  | Custom data attributes |

---

# The `dir` Attribute

The `dir` attribute specifies the text direction.

Left-to-right:

```html
<html lang="en" dir="ltr">
```

Right-to-left:

```html
<html lang="ar" dir="rtl">
```

This is especially important for languages such as Arabic and Hebrew.

---

# DOM Representation

The browser converts the HTML document into a DOM tree.

```html
<html lang="en">

<head>
</head>

<body>

<h1>Hello</h1>

</body>

</html>
```

DOM:

```text
Document
│
└── html
      │
      ├── head
      │
      └── body
            │
            └── h1
```

---

# Browser Processing

When a browser encounters the `<html>` element, it:

1. Creates the root DOM node.
2. Reads the language information.
3. Parses the `<head>` section.
4. Parses the `<body>` section.
5. Builds the DOM tree.
6. Renders the webpage.

---

# Common Mistakes

## Missing `<html>` Element

Incorrect:

```html
<!DOCTYPE html>

<head>

</head>

<body>

</body>
```

Always include the `<html>` element.

---

## Multiple `<html>` Elements

Incorrect:

```html
<html>

</html>

<html>

</html>
```

An HTML document must contain only one `<html>` element.

---

## Missing `lang` Attribute

Not recommended:

```html
<html>
```

Recommended:

```html
<html lang="en">
```

---

## Incorrect Nesting

Incorrect:

```html
<body>

<html>

</html>

</body>
```

The `<html>` element must wrap both `<head>` and `<body>`.

---

# Best Practices

* Include exactly one `<html>` element.
* Place it immediately after the DOCTYPE declaration.
* Always specify the `lang` attribute.
* Use the appropriate `dir` attribute for right-to-left languages.
* Keep `<head>` and `<body>` as direct children of `<html>`.
* Validate your HTML regularly.

---

# Interview Questions

### What is the `<html>` element?

The `<html>` element is the root element that contains the entire HTML document.

---

### Why is the `<html>` element called the root element?

Because every other HTML element is a descendant of it in the document hierarchy.

---

### What is the purpose of the `lang` attribute?

It specifies the primary language of the document, improving accessibility, SEO, and browser translation.

---

### Can an HTML document have multiple `<html>` elements?

No. A valid HTML document must have only one `<html>` element.

---

### Which elements are direct children of `<html>`?

The `<head>` and `<body>` elements.

---

# Key Takeaways

* `<html>` is the root element of every HTML document.
* It contains the `<head>` and `<body>` sections.
* It should appear immediately after `<!DOCTYPE html>`.
* Always specify the `lang` attribute.
* Use the `dir` attribute when working with right-to-left languages.
* The browser creates the DOM tree starting from the `<html>` element.

---

# Summary

The `<html>` element forms the foundation of every HTML document. It establishes the root of the document tree, contains all metadata and visible content, and provides important information such as the document language and text direction. Correct use of the `<html>` element ensures standards compliance, accessibility, and better browser support. In the next chapter, you'll explore the `<head>` element, which stores metadata and resources required by the webpage.
