# Universal Selector (`*`) in CSS

> The **Universal Selector (`*`)** selects **every HTML element** on a web page. It is commonly used to apply global styles, reset default browser styles, and create a consistent foundation for website design.

---

# Table of Contents

1. Introduction
2. What is the Universal Selector?
3. Why Use the Universal Selector?
4. Syntax
5. How It Works
6. Examples
7. Common Use Cases
8. Advantages
9. Disadvantages
10. Best Practices
11. Common Mistakes
12. Interview Questions
13. Summary

---

# Introduction

Every web browser applies its own default styles to HTML elements.

For example:

- Headings have margins.
- Paragraphs have spacing.
- Lists have padding.
- Buttons have default styles.

To remove or standardize these default styles, developers often use the **Universal Selector**.

---

# What is the Universal Selector?

The **Universal Selector** selects **every HTML element** in a document.

It is represented by the **asterisk (`*`)** symbol.

### Syntax

```css
* {
    property: value;
}
```

Example

```css
* {
    margin: 0;
}
```

This removes the default margin from every HTML element.

---

# Why Use the Universal Selector?

The Universal Selector helps developers:

- Reset browser default styles
- Apply common styles globally
- Improve consistency across browsers
- Save time by avoiding repetitive CSS
- Create a clean starting point for styling

---

# How the Universal Selector Works

The browser processes the selector as follows:

```text
HTML Document
       │
       ▼
Universal Selector (*)
       │
       ▼
Match Every HTML Element
       │
       ▼
Apply CSS Rules
```

Every HTML element receives the specified styles.

---

# Basic Example

HTML

```html
<h1>Welcome</h1>

<p>This is a paragraph.</p>

<button>Click Me</button>
```

CSS

```css
* {
    color: blue;
}
```

Output

- Heading → Blue
- Paragraph → Blue
- Button Text → Blue

---

# Resetting Default Margin and Padding

One of the most common uses of the Universal Selector is creating a CSS reset.

```css
* {
    margin: 0;
    padding: 0;
}
```

This removes default spacing from all HTML elements.

---

# Setting Box Sizing

Modern websites often use:

```css
* {
    box-sizing: border-box;
}
```

Benefits:

- Easier layout calculations
- Consistent element sizing
- Predictable widths and heights

---

# Combining Global Styles

Example

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
```

This creates a consistent starting point for the entire website.

---

# Real-World Example

HTML

```html
<header>
    <h1>BookQubit</h1>
</header>

<main>
    <p>Learn CSS Easily.</p>

    <button>Start Learning</button>
</main>
```

CSS

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    padding: 10px 20px;
}
```

All elements start with zero margin and padding, while the button receives its own custom spacing.

---

# Common Use Cases

The Universal Selector is commonly used for:

- CSS Reset
- Global Font Settings
- Global Box Sizing
- Removing Default Spacing
- Applying Base Styles

---

# Advantages

- Very simple to use
- Styles every element
- Ideal for CSS resets
- Reduces repetitive CSS
- Creates consistent layouts

---

# Disadvantages

- Affects every element
- Can override browser defaults unnecessarily
- May reduce performance on very large documents
- Not suitable for styling individual components

---

# Best Practices

✔ Use the Universal Selector only for global styles.

Example

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

✔ Keep the rules minimal.

Avoid placing large numbers of properties inside the Universal Selector.

---

# Common Mistakes

## Styling Everything

❌ Incorrect

```css
* {
    color: red;
    background: yellow;
}
```

This affects every element and can make the page difficult to manage.

---

## Adding Too Many Properties

❌

```css
* {
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: blue;
    border: 1px solid black;
}
```

Only include properties that should truly apply to every element.

---

## Replacing Component Styles

Avoid using the Universal Selector when a class selector is more appropriate.

❌

```css
* {
    background: blue;
}
```

Better

```css
.button {
    background: blue;
}
```

---

# Interview Questions

## 1. What is the Universal Selector?

The Universal Selector selects **every HTML element** in a document.

---

## 2. Which symbol represents the Universal Selector?

The **asterisk (`*`)**.

---

## 3. What is the most common use of the Universal Selector?

Creating a CSS reset.

Example

```css
* {
    margin: 0;
    padding: 0;
}
```

---

## 4. Why is `box-sizing: border-box;` commonly used with the Universal Selector?

It makes element sizing easier and more predictable.

---

## 5. Should the Universal Selector be used for component styling?

No.

Component styling should generally use **class selectors**.

---

# Summary

In this chapter, you learned:

- What the Universal Selector is
- Universal Selector syntax
- How it works
- CSS Reset
- Global styling
- Advantages
- Disadvantages
- Best practices
- Common mistakes
- Interview questions

The Universal Selector is an essential tool for establishing a consistent styling foundation. It is most effective for global resets and base styles, while more specific selectors should be used for individual components.

---

# Next Topic

➡ **Grouping Selector**

You will learn:

- What is a Grouping Selector?
- Syntax
- Combining Multiple Selectors
- Advantages
- Best Practices
- Real-World Examples
- Interview Questions
```