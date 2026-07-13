# CSS Syntax

> **CSS syntax** is the set of rules used to write CSS code. Every CSS rule consists of a **selector**, one or more **properties**, and their corresponding **values**. Understanding CSS syntax is the foundation for styling web pages effectively.

---

# Table of Contents

1. Introduction
2. Basic CSS Syntax
3. Components of a CSS Rule
4. Selectors
5. Properties
6. Values
7. Multiple Declarations
8. CSS Comments
9. Whitespace and Formatting
10. Common Syntax Errors
11. Best Practices
12. Summary
13. Interview Questions

---

# Introduction

CSS (Cascading Style Sheets) tells the browser **how HTML elements should look**.

A CSS file is made up of one or more **rules**.

Each rule tells the browser:

- Which element to select.
- Which property to change.
- What value to apply.

---

# Basic CSS Syntax

```css
selector {
    property: value;
}
```

Example:

```css
h1 {
    color: blue;
}
```

In this example:

- `h1` → Selector
- `color` → Property
- `blue` → Value

---

# Anatomy of a CSS Rule

```
        Selector
           │
           ▼

h1 {
    color: blue;
}
    │        │
    ▼        ▼
 Property   Value
```

Every CSS rule has two main parts:

1. Selector
2. Declaration Block

---

# Declaration Block

A declaration block is enclosed within curly braces `{}`.

Example:

```css
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}
```

The declaration block contains one or more **declarations**.

---

# Declaration

A declaration consists of:

```
Property : Value ;
```

Example:

```css
color: red;
```

- `color` → Property
- `red` → Value
- `:` → Separates property and value
- `;` → Ends the declaration

---

# Multiple Declarations

You can apply multiple styles to the same selector.

```css
p {
    color: gray;
    font-size: 18px;
    line-height: 1.6;
}
```

The browser applies every declaration inside the block.

---

# CSS Selectors

Selectors determine **which HTML elements** should receive the styles.

Example:

```css
h1 {
    color: blue;
}
```

The selector is:

```
h1
```

It targets every `<h1>` element.

Other examples:

```css
p
```

```css
button
```

```css
div
```

---

# CSS Properties

Properties define **what aspect of the element** should change.

Examples:

```css
color
```

```css
background
```

```css
font-size
```

```css
margin
```

```css
padding
```

Example:

```css
h1 {
    color: blue;
}
```

Property:

```
color
```

---

# CSS Values

Values specify **how the property should be applied**.

Example:

```css
color: blue;
```

Value:

```
blue
```

Another example:

```css
font-size: 24px;
```

Value:

```
24px
```

---

# Complete Example

HTML

```html
<h1>Welcome</h1>

<p>Learning CSS Syntax</p>
```

CSS

```css
h1 {
    color: blue;
    font-size: 36px;
}

p {
    color: gray;
    font-size: 18px;
}
```

Output:

- Blue heading
- Gray paragraph
- Different font sizes

---

# CSS Comments

Comments help explain code.

Single-line comment:

```css
/* This styles the heading */

h1 {
    color: blue;
}
```

Multi-line comment:

```css
/*
Primary Button Styles
Used across the website
*/

.btn {
    background: blue;
}
```

Comments are ignored by the browser.

---

# Whitespace and Formatting

Good formatting makes CSS easier to read.

Recommended:

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial;
}
```

Avoid:

```css
body{margin:0;padding:0;font-family:Arial;}
```

Although both work, the first version is much easier to maintain.

---

# Indentation

Use consistent indentation.

Good:

```css
.card {
    padding: 20px;
    border-radius: 10px;
}
```

Bad:

```css
.card{
padding:20px;
border-radius:10px;
}
```

---

# Curly Braces

Every declaration block starts with `{` and ends with `}`.

Correct:

```css
h1 {
    color: blue;
}
```

Incorrect:

```css
h1
    color: blue;
```

---

# Semicolons

Each declaration should end with a semicolon.

Correct:

```css
color: blue;
font-size: 30px;
```

Incorrect:

```css
color: blue
font-size: 30px
```

Although the last semicolon is optional in some cases, always include it for consistency.

---

# Common Syntax Errors

## Missing Colon

Incorrect:

```css
color blue;
```

Correct:

```css
color: blue;
```

---

## Missing Semicolon

Incorrect:

```css
color: blue
font-size: 20px;
```

Correct:

```css
color: blue;
font-size: 20px;
```

---

## Missing Curly Braces

Incorrect:

```css
h1
color: red;
```

Correct:

```css
h1 {
    color: red;
}
```

---

## Misspelled Property

Incorrect:

```css
colr: blue;
```

Correct:

```css
color: blue;
```

---

# Real-World Example

Imagine styling a login button.

```css
.btn-login {
    background: #0066cc;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
}
```

Each property changes a specific part of the button's appearance.

---

# Best Practices

- Write one declaration per line.
- Use consistent indentation.
- Always end declarations with a semicolon.
- Use meaningful class names.
- Group related properties together.
- Comment complex sections.
- Keep CSS readable.
- Avoid unnecessary duplication.

---

# Summary

CSS syntax consists of selectors, declaration blocks, properties, and values. The browser reads each rule, matches it with HTML elements, and applies the specified styles. Writing clean, well-formatted CSS improves readability, maintainability, and collaboration.

Mastering CSS syntax is the first step toward learning selectors, layouts, animations, responsive design, and advanced CSS concepts.

---

# Interview Questions

## 1. What is the basic syntax of CSS?

**Answer:**

```css
selector {
    property: value;
}
```

---

## 2. What is a selector?

**Answer:**
A selector identifies the HTML element(s) that a CSS rule should style.

---

## 3. What is a declaration?

**Answer:**
A declaration is a property-value pair inside a declaration block.

Example:

```css
color: blue;
```

---

## 4. What is the purpose of curly braces in CSS?

**Answer:**
Curly braces `{}` contain the declaration block for a selector.

---

## 5. Why are semicolons used in CSS?

**Answer:**
Semicolons separate declarations and indicate the end of each property-value pair.

---

## 6. Are CSS comments displayed in the browser?

**Answer:**
No. CSS comments are ignored by the browser and are only meant for developers.

---

# Key Takeaways

- Every CSS rule consists of a selector and a declaration block.
- A declaration is made up of a property and a value.
- Curly braces `{}` enclose declarations.
- Colons `:` separate properties from values.
- Semicolons `;` end declarations.
- Proper formatting and indentation improve readability and maintainability.
- Understanding CSS syntax is essential before learning selectors, layouts, and advanced CSS features.