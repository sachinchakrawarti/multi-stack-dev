# Element Selector in CSS

> The **Element Selector** (also called the **Type Selector**) selects **all HTML elements of a specific tag** and applies the same CSS styles to them.

---

# Table of Contents

1. Introduction
2. What is an Element Selector?
3. Syntax
4. How It Works
5. Examples
6. Advantages
7. Disadvantages
8. Best Practices
9. Common Mistakes
10. Interview Questions
11. Summary

---

# Introduction

CSS provides different types of selectors to target HTML elements.

The **Element Selector** is the simplest and most commonly used selector. It selects elements based on their **HTML tag name**.

For example, if you want to style every `<h1>` element on a page, you can use the `h1` element selector.

---

# What is an Element Selector?

An **Element Selector** selects **all HTML elements of a given type**.

It uses the HTML tag name as the selector.

### Syntax

```css
tagname {
    property: value;
}
```

Example

```css
h1 {
    color: blue;
}
```

Every `<h1>` element will become blue.

---

# How Element Selectors Work

The browser searches the HTML document for matching elements.

```text
CSS Rule
    │
    ▼
Element Selector
    │
    ▼
Find Matching HTML Tags
    │
    ▼
Apply CSS Styles
```

---

# Basic Example

HTML

```html
<h1>Welcome</h1>

<h1>Learn CSS</h1>

<h1>BookQubit</h1>
```

CSS

```css
h1 {
    color: blue;
}
```

Output

All three headings become **blue**.

---

# Styling Paragraphs

HTML

```html
<p>Paragraph One</p>

<p>Paragraph Two</p>
```

CSS

```css
p {
    color: green;
    font-size: 18px;
}
```

Both paragraphs receive the same styles.

---

# Styling Multiple Elements

```css
h1 {
    color: navy;
}

p {
    color: gray;
}

button {
    background: royalblue;
    color: white;
}
```

This styles three different HTML elements.

---

# Real-World Example

HTML

```html
<header>
    <h1>BookQubit</h1>
</header>

<main>
    <p>Learn CSS Easily</p>

    <button>Start Learning</button>
</main>
```

CSS

```css
header {
    background: black;
}

h1 {
    color: white;
}

p {
    font-size: 18px;
}

button {
    padding: 12px 24px;
}
```

---

# Common HTML Elements

| Element | Description |
|----------|-------------|
| `h1` | Heading |
| `h2` | Heading |
| `p` | Paragraph |
| `a` | Link |
| `button` | Button |
| `img` | Image |
| `div` | Division |
| `section` | Section |
| `header` | Header |
| `footer` | Footer |

---

# Advantages

- Very easy to understand.
- Requires less code.
- Perfect for applying global styles.
- Useful for beginners.
- Ideal for typography.

---

# Disadvantages

- Styles every matching element.
- Cannot target individual elements.
- Less reusable than class selectors.
- Can make customization difficult.

---

# Best Practices

✔ Use element selectors for global styles.

Example

```css
body {
    font-family: Arial, sans-serif;
}

h1 {
    margin-bottom: 20px;
}

p {
    line-height: 1.6;
}
```

✔ Use **class selectors** when styling specific components.

---

# Common Mistakes

## Styling Everything with Element Selectors

❌

```css
button {
    background: red;
}
```

If your website has many buttons, they all become red.

Better

```css
.primary-btn {
    background: red;
}
```

---

## Overusing Element Selectors

❌

```css
div {
    margin: 20px;
}
```

This affects every `<div>` element.

Instead

```css
.container {
    margin: 20px;
}
```

---

# Interview Questions

## 1. What is an Element Selector?

An Element Selector selects HTML elements using their tag name.

---

## 2. Give the syntax of an Element Selector.

```css
tagname {
    property: value;
}
```

---

## 3. What does the following CSS do?

```css
p {
    color: red;
}
```

It makes **all paragraph elements red**.

---

## 4. Can an Element Selector target only one element?

No.

It targets **every matching HTML element**.

---

## 5. Which is better for reusable components?

**Class Selector**

because it targets only the required elements.

---

# Summary

In this chapter, you learned:

- What an Element Selector is
- Element Selector syntax
- How it works
- Multiple examples
- Advantages
- Disadvantages
- Best practices
- Common mistakes
- Interview questions

The Element Selector is ideal for applying styles to all elements of the same type. For more specific styling, use **Class Selectors** or **ID Selectors**.

---

# Next Topic

➡ **Class Selector**

You will learn:

- What is a Class Selector?
- Syntax
- Multiple Classes
- Reusability
- Best Practices
- Real-World Examples
- Interview Questions