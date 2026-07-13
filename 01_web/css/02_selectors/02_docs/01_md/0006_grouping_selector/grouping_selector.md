# Grouping Selector in CSS

> The **Grouping Selector** allows you to apply the **same CSS styles to multiple HTML elements** by separating selectors with commas (``,`). It helps reduce duplicate code and makes CSS cleaner and easier to maintain.

---

# Table of Contents

1. Introduction
2. What is a Grouping Selector?
3. Why Use a Grouping Selector?
4. Syntax
5. How It Works
6. Examples
7. Advantages
8. Disadvantages
9. Best Practices
10. Common Mistakes
11. Interview Questions
12. Summary

---

# Introduction

Imagine you want the following elements to have the same text color:

- `<h1>`
- `<h2>`
- `<h3>`

Instead of writing three separate CSS rules, you can combine them into one using a **Grouping Selector**.

This makes your CSS shorter, cleaner, and easier to maintain.

---

# What is a Grouping Selector?

A **Grouping Selector** combines two or more selectors into a single CSS rule.

Selectors are separated using commas (``,`).

### Syntax

```css
selector1,
selector2,
selector3 {
    property: value;
}
```

Example

```css
h1,
h2,
h3 {
    color: navy;
}
```

All three heading elements will have navy-colored text.

---

# Why Use a Grouping Selector?

Grouping selectors help developers:

- Reduce duplicate CSS
- Improve readability
- Write cleaner code
- Simplify maintenance
- Apply common styles efficiently

---

# How Grouping Selectors Work

```text
Multiple Selectors
        │
        ▼
Browser Matches Each Selector
        │
        ▼
Apply the Same CSS Rules
        │
        ▼
Styled HTML Elements
```

Every selector in the group receives the same styles.

---

# Basic Example

HTML

```html
<h1>Main Heading</h1>

<h2>Sub Heading</h2>

<p>Paragraph</p>
```

CSS

```css
h1,
h2,
p {
    color: darkblue;
}
```

Output

- `<h1>` → Dark Blue
- `<h2>` → Dark Blue
- `<p>` → Dark Blue

---

# Grouping Class Selectors

HTML

```html
<button class="save">Save</button>

<button class="update">Update</button>

<button class="delete">Delete</button>
```

CSS

```css
.save,
.update,
.delete {
    color: white;
    padding: 12px 20px;
}
```

Each button receives the same styles.

---

# Grouping Different Selectors

A grouping selector can combine different types of selectors.

```css
h1,
.title,
#header {
    font-family: Arial, sans-serif;
}
```

This rule styles:

- All `<h1>` elements
- All elements with the class `title`
- The element with the ID `header`

---

# Real-World Example

HTML

```html
<header>
    <h1>BookQubit</h1>
</header>

<section>

    <h2>CSS Course</h2>

    <p>Learn CSS from beginner to advanced.</p>

</section>
```

CSS

```css
h1,
h2,
p {
    font-family: "Segoe UI", sans-serif;
    color: #333;
}
```

All selected elements use the same font and text color.

---

# Advantages

- Less CSS code
- Better readability
- Easier maintenance
- Reduces repetition
- Improves consistency

---

# Disadvantages

- Over-grouping can reduce flexibility.
- Different elements may later require different styles.
- Large grouped selectors can become difficult to read.

---

# Best Practices

✔ Group only selectors that share the same styles.

Example

```css
h1,
h2,
h3 {
    font-weight: bold;
}
```

✔ Keep grouped selectors organized.

Good

```css
header,
main,
footer {
    width: 100%;
}
```

---

# Common Mistakes

## Forgetting the Comma

❌ Incorrect

```css
h1
h2 {
    color: red;
}
```

Correct

```css
h1,
h2 {
    color: red;
}
```

---

## Grouping Unrelated Elements

❌

```css
button,
table,
img,
footer {
    color: blue;
}
```

Only group elements that genuinely need the same styles.

---

## Writing Duplicate Rules

❌

```css
h1 {
    color: blue;
}

h2 {
    color: blue;
}

h3 {
    color: blue;
}
```

Better

```css
h1,
h2,
h3 {
    color: blue;
}
```

---

# Interview Questions

## 1. What is a Grouping Selector?

A Grouping Selector combines multiple selectors into a single CSS rule.

---

## 2. Which symbol is used to separate selectors?

A **comma (``,`).**

---

## 3. What is the advantage of using Grouping Selectors?

They reduce duplicate CSS and improve code readability.

---

## 4. Can you group different selector types together?

Yes.

Example

```css
h1,
.title,
#header {
    color: blue;
}
```

---

## 5. Does grouping selectors affect CSS specificity?

No.

Each selector keeps its own specificity even when grouped together.

---

# Summary

In this chapter, you learned:

- What a Grouping Selector is
- Grouping Selector syntax
- How it works
- Combining multiple selectors
- Advantages
- Disadvantages
- Best practices
- Common mistakes
- Interview questions

Grouping Selectors are an excellent way to reduce repetitive CSS and keep styles organized. They make your stylesheet cleaner, easier to read, and simpler to maintain.

---

# Next Topic

➡ **Selector Specificity**

You will learn:

- What is CSS Specificity?
- Selector Priority
- How the Browser Chooses Styles
- Specificity Calculation
- Best Practices
- Common Mistakes
- Interview Questions