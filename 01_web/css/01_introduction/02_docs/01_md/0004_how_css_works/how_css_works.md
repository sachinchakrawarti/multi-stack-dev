# How CSS Works

> **CSS (Cascading Style Sheets)** works by selecting HTML elements and applying style rules to them. When a web browser loads a webpage, it combines the HTML (structure) with the CSS (presentation) to render the final visual layout.

---

# Table of Contents

1. Introduction
2. The Rendering Process
3. How HTML and CSS Work Together
4. CSS Syntax
5. CSS Rule Matching
6. The Cascade
7. Inheritance
8. Specificity
9. Browser Rendering Pipeline
10. Example
11. Best Practices
12. Summary
13. Interview Questions

---

# Introduction

A webpage is built using three core technologies:

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Presentation (Styling) |
| JavaScript | Behavior (Interactivity) |

Think of it like building a house:

- **HTML** → Walls, doors, and windows
- **CSS** → Paint, furniture, decorations
- **JavaScript** → Lights, automatic doors, security system

---

# How a Browser Loads a Webpage

When you open a webpage, the browser follows these steps:

```
User Requests Website
          │
          ▼
Download HTML
          │
          ▼
Read HTML Structure
          │
          ▼
Find CSS Files
          │
          ▼
Download CSS
          │
          ▼
Match CSS Rules
          │
          ▼
Combine HTML + CSS
          │
          ▼
Render Styled Webpage
```

---

# Step 1: Read the HTML

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>

<body>

<h1>Welcome</h1>

<p>This is CSS.</p>

</body>
</html>
```

The browser first understands the structure of the webpage.

---

# Step 2: Load the CSS

Example:

```html
<link rel="stylesheet" href="style.css">
```

The browser downloads the stylesheet.

Example:

```css
h1{
    color:blue;
}

p{
    color:gray;
}
```

---

# Step 3: Match Selectors

The browser checks each HTML element.

```
HTML Element
      │
      ▼
Find Matching CSS Selector
      │
      ▼
Apply Styles
```

Example:

```css
h1{
    color:blue;
}
```

This rule applies to every `<h1>` element.

---

# Step 4: Render the Page

The browser combines:

```
HTML
+
CSS
=
Styled Webpage
```

Users now see the finished webpage.

---

# CSS Syntax

Every CSS rule has three parts.

```css
selector {
    property: value;
}
```

Example:

```css
h1{
    color:red;
    font-size:40px;
}
```

Components:

| Part | Description |
|------|-------------|
| Selector | Selects HTML elements |
| Property | What to change |
| Value | New appearance |

---

# Example

HTML

```html
<h1>Hello</h1>

<p>Learning CSS</p>
```

CSS

```css
h1{
    color:blue;
}

p{
    color:green;
}
```

Browser Output

```
Hello          ← Blue

Learning CSS   ← Green
```

---

# How CSS Selectors Work

Example:

```css
h1{
    color:red;
}

.title{
    color:blue;
}

#main{
    color:green;
}
```

HTML

```html
<h1>Hello</h1>

<h1 class="title">
CSS
</h1>

<h1 id="main">
World
</h1>
```

The browser matches selectors in this order:

```
HTML Element
      │
      ▼
Selector Match
      │
      ▼
Apply Style
```

---

# The Cascade

The word **"Cascading"** means that multiple CSS rules may apply to the same element.

The browser decides which rule wins.

Example:

```css
p{
    color:red;
}

p{
    color:blue;
}
```

Result:

```
Blue
```

Because the last rule overrides the previous one.

---

# Inheritance

Some CSS properties are inherited from parent elements.

Example:

```html
<body>

<div>

<p>Hello</p>

</div>

</body>
```

CSS

```css
body{
    color:blue;
}
```

Result:

```
Hello
```

The paragraph inherits the text color from the `<body>` element.

Common inherited properties:

- color
- font-family
- font-size
- line-height

---

# Specificity

When multiple selectors target the same element, the browser calculates **specificity**.

Priority (lowest to highest):

```
Element Selector

↓

Class Selector

↓

ID Selector

↓

Inline Style

↓

!important
```

Example:

```css
h1{
    color:red;
}

.title{
    color:blue;
}

#heading{
    color:green;
}
```

HTML

```html
<h1 id="heading" class="title">
Hello
</h1>
```

Output:

```
Green
```

The ID selector has higher specificity than the class and element selectors.

---

# Browser Rendering Pipeline

Modern browsers follow this process:

```
HTML
 │
 ▼
DOM Tree
 │
 ▼
CSS
 │
 ▼
CSSOM Tree
 │
 ▼
Render Tree
 │
 ▼
Layout
 │
 ▼
Paint
 │
 ▼
Display
```

### DOM (Document Object Model)

Represents the HTML structure.

### CSSOM (CSS Object Model)

Represents all CSS rules.

### Render Tree

Combines the DOM and CSSOM to determine what should be displayed.

### Layout

Calculates the size and position of each element.

### Paint

Draws text, backgrounds, borders, and images.

### Display

The final webpage is shown on the screen.

---

# Real-World Example

Imagine an online store.

HTML defines:

- Logo
- Product image
- Price
- Buy button

CSS styles:

- Colors
- Fonts
- Card layout
- Hover effects
- Responsive grid

Without CSS, the page is functional but plain.

With CSS, it becomes visually appealing and easy to use.

---

# Best Practices

- Use external stylesheets.
- Keep CSS organized.
- Write reusable classes.
- Avoid unnecessary inline styles.
- Use meaningful class names.
- Minimize duplicate rules.
- Keep selectors simple.
- Follow consistent formatting.

---

# Summary

CSS works by applying style rules to HTML elements. The browser downloads the HTML and CSS files, matches CSS selectors to HTML elements, resolves conflicts using the cascade and specificity, combines the DOM and CSSOM into a render tree, calculates layout, paints the page, and finally displays the styled webpage. Understanding this process helps developers write more efficient, maintainable, and predictable CSS.

---

# Interview Questions

## 1. How does CSS work?

**Answer:** CSS selects HTML elements and applies style rules. The browser combines HTML and CSS to render the final webpage.

---

## 2. What is the rendering process?

**Answer:** The browser parses HTML into the DOM, parses CSS into the CSSOM, creates a render tree, performs layout, paints the elements, and displays the page.

---

## 3. What is the CSSOM?

**Answer:** The CSS Object Model (CSSOM) is the browser's internal representation of all CSS rules.

---

## 4. What is the cascade in CSS?

**Answer:** The cascade is the mechanism the browser uses to determine which CSS rule should be applied when multiple rules target the same element.

---

## 5. What is specificity?

**Answer:** Specificity is the priority system used by browsers to decide which CSS selector takes precedence when multiple selectors apply to the same element.

---

## 6. What properties are commonly inherited?

**Answer:** Properties such as `color`, `font-family`, `font-size`, and `line-height` are commonly inherited from parent elements.

---

# Key Takeaways

- CSS styles HTML elements using selectors.
- Browsers combine HTML and CSS to render webpages.
- The cascade resolves conflicts between CSS rules.
- Specificity determines which selector has higher priority.
- The browser uses the DOM, CSSOM, Render Tree, Layout, and Paint processes to display a webpage.
- Understanding how CSS works helps you write cleaner, faster, and more maintainable stylesheets.