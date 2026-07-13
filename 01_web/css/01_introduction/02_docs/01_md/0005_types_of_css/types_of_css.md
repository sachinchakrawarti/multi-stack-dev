# Types of CSS

> **CSS can be applied to HTML in three different ways:** **Inline CSS**, **Internal CSS**, and **External CSS**. Each method has its own use cases, advantages, and disadvantages.

---

# Table of Contents

1. Introduction
2. Overview of CSS Types
3. Inline CSS
4. Internal CSS
5. External CSS
6. Comparison Table
7. Which Type Should You Use?
8. Best Practices
9. Summary
10. Interview Questions

---

# Introduction

CSS is used to style HTML documents. Depending on the size and requirements of a project, CSS can be added to HTML in different ways.

The three types of CSS are:

1. Inline CSS
2. Internal CSS
3. External CSS

Each type affects how styles are written, managed, and reused.

---

# Overview of CSS Types

| Type | Location | Best For |
|------|----------|----------|
| Inline CSS | Inside an HTML element | Small changes or testing |
| Internal CSS | Inside the `<style>` tag | Single-page websites |
| External CSS | Separate `.css` file | Professional and large websites |

---

# 1. Inline CSS

Inline CSS is written directly inside an HTML element using the **style** attribute.

## Syntax

```html
<tag style="property: value;">
    Content
</tag>
```

## Example

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color: blue;">Welcome</h1>

<p style="font-size:18px;">
    Learning CSS
</p>

</body>
</html>
```

## Output

- The heading appears in **blue**.
- The paragraph has a font size of **18px**.

## Advantages

- Easy to write.
- Useful for quick testing.
- Styles only one element.

## Disadvantages

- Difficult to maintain.
- Cannot reuse styles.
- Mixes content and presentation.
- Makes HTML cluttered.

## When to Use

- Quick testing.
- Temporary styling.
- Email templates (where supported).

---

# 2. Internal CSS

Internal CSS is written inside the `<style>` tag, which is placed within the `<head>` section of an HTML document.

## Syntax

```html
<head>
    <style>
        selector {
            property: value;
        }
    </style>
</head>
```

## Example

```html
<!DOCTYPE html>
<html>

<head>

<style>

body{
    background:#f5f5f5;
}

h1{
    color:green;
}

p{
    font-size:18px;
}

</style>

</head>

<body>

<h1>Welcome</h1>

<p>Learning CSS</p>

</body>

</html>
```

## Advantages

- Easier to maintain than Inline CSS.
- One stylesheet for a single page.
- Cleaner HTML.

## Disadvantages

- Cannot be reused across multiple pages.
- Increases the size of the HTML file.

## When to Use

- Small websites.
- Single-page applications.
- Practice projects.

---

# 3. External CSS

External CSS stores styles in a separate `.css` file.

This is the most commonly used and recommended method.

---

## Step 1: Create a CSS File

**style.css**

```css
body{
    background:#f5f5f5;
}

h1{
    color:blue;
}

p{
    font-size:18px;
}
```

---

## Step 2: Link the CSS File

```html
<!DOCTYPE html>
<html>

<head>

<link rel="stylesheet" href="style.css">

</head>

<body>

<h1>Welcome</h1>

<p>Learning CSS</p>

</body>

</html>
```

---

## How It Works

```
index.html
      │
      ▼
<link rel="stylesheet">

      │
      ▼

style.css
      │
      ▼

Browser applies styles
```

---

## Advantages

- Reusable across multiple pages.
- Easy to maintain.
- Cleaner HTML.
- Faster loading through browser caching.
- Best for large projects.

## Disadvantages

- Requires an additional file.
- If the CSS file is missing, the page appears unstyled.

## When to Use

- Business websites.
- E-commerce websites.
- Blogs.
- Portfolios.
- Enterprise applications.
- Production projects.

---

# Comparison Table

| Feature | Inline | Internal | External |
|---------|--------|----------|----------|
| Separate File | ❌ | ❌ | ✅ |
| Reusable | ❌ | ❌ | ✅ |
| Easy to Maintain | ❌ | ⚠️ | ✅ |
| Recommended for Large Projects | ❌ | ❌ | ✅ |
| Browser Caching | ❌ | ❌ | ✅ |
| HTML Remains Clean | ❌ | ⚠️ | ✅ |

---

# CSS Priority (Cascade)

If multiple CSS types apply to the same element, the browser follows this priority:

```
Inline CSS
      ↑

Internal CSS
      ↑

External CSS
```

Example:

### External CSS

```css
h1{
    color:blue;
}
```

### Internal CSS

```css
h1{
    color:green;
}
```

### Inline CSS

```html
<h1 style="color:red;">
    Hello
</h1>
```

### Output

```
Red
```

Inline CSS has the highest priority among these three types.

> **Note:** The `!important` rule can override normal priority and should be used sparingly.

---

# Real-World Example

Imagine an online shopping website.

## Inline CSS

```html
<button style="background:red;">
Buy
</button>
```

Good for testing only.

---

## Internal CSS

```css
button{
    background:red;
}
```

Suitable if the website has only one page.

---

## External CSS

```css
.btn-buy{
    background:red;
}
```

Every "Buy" button across the website uses the same reusable style.

---

# Which Type Should You Use?

| Project Size | Recommended CSS Type |
|--------------|----------------------|
| Quick Testing | Inline CSS |
| Small Project | Internal CSS |
| Professional Website | External CSS |

For almost all real-world projects, **External CSS** is the preferred choice.

---

# Best Practices

- Use **External CSS** for production websites.
- Avoid excessive Inline CSS.
- Keep HTML and CSS separate.
- Organize styles into multiple CSS files for large projects.
- Use meaningful class names.
- Follow consistent formatting and naming conventions.
- Comment complex sections of your stylesheet.
- Remove unused CSS.

---

# Summary

CSS can be applied using Inline, Internal, or External methods. Inline CSS is useful for quick styling but is difficult to maintain. Internal CSS is suitable for small, single-page websites. External CSS is the industry-standard approach because it promotes code reuse, cleaner HTML, easier maintenance, and better performance through browser caching.

---

# Interview Questions

## 1. How many types of CSS are there?

**Answer:** Three.

- Inline CSS
- Internal CSS
- External CSS

---

## 2. Which type of CSS is recommended for professional websites?

**Answer:** External CSS.

---

## 3. Which type of CSS has the highest priority?

**Answer:** Inline CSS (excluding `!important`).

---

## 4. Why is External CSS preferred?

**Answer:** It separates styling from HTML, allows code reuse, simplifies maintenance, and enables browser caching.

---

## 5. Where is Internal CSS written?

**Answer:** Inside the `<style>` tag within the `<head>` section of an HTML document.

---

## 6. Where is Inline CSS written?

**Answer:** Inside the `style` attribute of an HTML element.

---

# Key Takeaways

- CSS can be applied in three ways: Inline, Internal, and External.
- Inline CSS is useful for quick, element-specific styling.
- Internal CSS is suitable for small, single-page websites.
- External CSS is the recommended approach for professional web development.
- External stylesheets improve maintainability, scalability, and performance.
- Understanding the differences helps you choose the right approach for different projects.