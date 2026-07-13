# CSS Selector Priority (Specificity)

> **CSS Selector Priority**, also known as **CSS Specificity**, is the set of rules that determines **which CSS declaration is applied** when multiple selectors target the same HTML element.

---

# Table of Contents

1. Introduction
2. What is Selector Priority?
3. Why is Selector Priority Important?
4. How CSS Chooses Styles
5. Specificity Hierarchy
6. Specificity Calculation
7. Examples
8. `!important`
9. Best Practices
10. Common Mistakes
11. Interview Questions
12. Summary

---

# Introduction

When multiple CSS rules target the same HTML element, the browser must decide **which rule has the highest priority**.

Consider the following example:

```html
<h1 id="title" class="heading">
    Welcome
</h1>
```

```css
h1{
    color: blue;
}

.heading{
    color: green;
}

#title{
    color: red;
}
```

Which color will be displayed?

**Answer:** Red.

Why?

Because the **ID Selector** has a higher priority than the **Class Selector** and **Element Selector**.

---

# What is Selector Priority?

Selector Priority (Specificity) is the mechanism browsers use to determine **which CSS rule wins** when multiple rules apply to the same element.

The selector with the **highest specificity** is applied.

---

# Why is Selector Priority Important?

Understanding selector priority helps you:

- Write predictable CSS
- Avoid styling conflicts
- Reduce unnecessary overrides
- Create maintainable stylesheets
- Debug CSS more easily

---

# How CSS Chooses Styles

The browser follows these steps:

```text
Multiple CSS Rules
        │
        ▼
Calculate Specificity
        │
        ▼
Compare Priority
        │
        ▼
Apply the Winning Rule
```

---

# Specificity Hierarchy

The browser generally follows this priority (highest to lowest):

| Priority | Selector |
|----------|----------|
| 1 | `!important` |
| 2 | Inline Style |
| 3 | ID Selector (`#`) |
| 4 | Class, Attribute, Pseudo-class |
| 5 | Element, Pseudo-element |
| 6 | Universal Selector (`*`) |

---

# Specificity Values

A commonly used specificity model is:

| Selector | Value |
|----------|-------|
| Inline Style | 1000 |
| ID Selector | 100 |
| Class Selector | 10 |
| Attribute Selector | 10 |
| Pseudo-class | 10 |
| Element Selector | 1 |
| Pseudo-element | 1 |
| Universal Selector | 0 |

These values are conceptual and help explain how specificity is compared.

---

# Example 1

HTML

```html
<h1 id="title" class="heading">
    CSS
</h1>
```

CSS

```css
h1{
    color: blue;
}

.heading{
    color: green;
}

#title{
    color: red;
}
```

Output

The heading becomes **red** because the ID selector has the highest specificity.

---

# Example 2

HTML

```html
<p class="text">
    Hello CSS
</p>
```

CSS

```css
p{
    color: black;
}

.text{
    color: blue;
}
```

Output

The paragraph becomes **blue** because the class selector has higher priority than the element selector.

---

# Example 3

HTML

```html
<button class="btn primary">
    Login
</button>
```

CSS

```css
.btn{
    background: gray;
}

.primary{
    background: royalblue;
}
```

Both selectors have the same specificity.

The browser applies the **last declared rule**, so the background becomes **royal blue**.

---

# When Specificity is Equal

If two selectors have the same specificity, the browser applies the rule that appears **later** in the stylesheet.

Example

```css
.title{
    color: blue;
}

.title{
    color: red;
}
```

Output

The text becomes **red** because it is declared last.

---

# Inline Styles

Inline styles have very high priority.

HTML

```html
<h1 style="color: orange;">
    Welcome
</h1>
```

CSS

```css
h1{
    color: blue;
}
```

Output

The heading becomes **orange**.

---

# The `!important` Rule

The `!important` declaration overrides most other styles.

Example

```css
h1{
    color: blue !important;
}

#title{
    color: red;
}
```

Output

The heading becomes **blue**.

### Should You Use `!important`?

Only when absolutely necessary.

Overusing it makes CSS difficult to maintain.

---

# Real-World Example

HTML

```html
<button class="btn" id="login">
    Login
</button>
```

CSS

```css
button{
    background: gray;
}

.btn{
    background: green;
}

#login{
    background: royalblue;
}
```

Output

The button background becomes **royal blue** because the ID selector has the highest specificity.

---

# Best Practices

✔ Prefer **class selectors** for reusable components.

✔ Keep selector specificity as low as possible.

✔ Avoid deeply nested selectors.

✔ Use IDs only for unique elements.

✔ Avoid using `!important` unless there is no better solution.

---

# Common Mistakes

## Overusing IDs

❌

```css
#header{}
#footer{}
#menu{}
#content{}
```

Better

```css
.header{}
.footer{}
.menu{}
.content{}
```

---

## Using `!important` Everywhere

❌

```css
.button{
    color: white !important;
}
```

This makes future changes more difficult.

---

## Writing Deeply Nested Selectors

❌

```css
body div.container ul li a span{
    color:red;
}
```

Better

```css
.nav-link{
    color:red;
}
```

---

# Interview Questions

## 1. What is CSS Specificity?

CSS Specificity is the priority system used to determine which CSS rule is applied.

---

## 2. Which selector has higher priority?

- Element
- Class
- ID

**Answer:** ID Selector.

---

## 3. Which has the highest priority?

- Inline Style
- ID Selector
- Class Selector

**Answer:** Inline Style.

---

## 4. What does `!important` do?

It gives a CSS declaration higher priority than most other rules.

---

## 5. If two selectors have the same specificity, which one is applied?

The selector that appears **later** in the stylesheet.

---

## 6. Should `!important` be used frequently?

No.

It should be used only when necessary.

---

# Summary

In this chapter, you learned:

- What Selector Priority (Specificity) is
- Why specificity is important
- CSS specificity hierarchy
- How specificity is calculated
- How the browser resolves conflicts
- The role of `!important`
- Best practices
- Common mistakes
- Interview questions

Understanding specificity is essential for writing clean, predictable, and maintainable CSS. By keeping specificity low and using classes effectively, you can avoid many common styling conflicts.

---

# Next Topic

➡ **Best Practices for Using CSS Selectors**

You will learn:

- Writing clean selectors
- Performance tips
- Naming conventions
- Maintainable CSS
- Real-world recommendations
```