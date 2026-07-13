# CSS Introduction - Frequently Asked Questions (FAQ)

> This FAQ answers the most common beginner questions about **CSS (Cascading Style Sheets)**. It serves as a quick reference for students, self-learners, and interview preparation.

---

# Table of Contents

1. General Questions
2. CSS Basics
3. CSS Syntax
4. CSS Types
5. CSS Files
6. Best Practices
7. Troubleshooting
8. Interview FAQs

---

# General Questions

## 1. What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML documents.

---

## 2. What does CSS stand for?

**CSS** stands for **Cascading Style Sheets**.

---

## 3. Why do we need CSS?

CSS is used to:

- Style web pages
- Improve user experience
- Separate content from design
- Build responsive layouts
- Reuse styles across multiple pages

---

## 4. Can HTML work without CSS?

Yes.

The webpage will still work, but it will use the browser's default styling and appear plain.

---

## 5. Can CSS work without HTML?

No.

CSS needs HTML (or another markup language like SVG/XML in certain contexts) to style elements.

---

# CSS Basics

## 6. Who invented CSS?

**Håkon Wium Lie** proposed CSS in 1994.

---

## 7. Which organization maintains CSS?

The **World Wide Web Consortium (W3C)** develops and standardizes CSS specifications.

---

## 8. Is CSS a programming language?

No.

CSS is a **stylesheet language**, not a programming language.

---

## 9. Is CSS case-sensitive?

Generally, CSS property names and most keywords are **case-insensitive**.

Example:

```css
color: red;
COLOR: RED;
```

Both work.

However, **class names, ID names, and file names may be case-sensitive depending on the operating system and environment**.

---

## 10. What is a stylesheet?

A stylesheet is a file that contains CSS rules.

Example:

```text
style.css
```

---

# CSS Syntax

## 11. What is the basic syntax of CSS?

```css
selector {
    property: value;
}
```

---

## 12. What is a selector?

A selector chooses which HTML element(s) should receive the style.

Example:

```css
h1{
    color:blue;
}
```

---

## 13. What is a property?

A property defines what should change.

Examples:

- color
- margin
- padding
- background
- font-size

---

## 14. What is a value?

A value specifies how the property should be applied.

Example:

```css
color: blue;
```

---

## 15. Are semicolons required?

Each declaration should end with a semicolon.

Example:

```css
color:red;
font-size:20px;
```

Although the last semicolon may be optional in some cases, always include it for consistency.

---

# CSS Types

## 16. What are the three types of CSS?

1. Inline CSS
2. Internal CSS
3. External CSS

---

## 17. Which type of CSS is best?

**External CSS** is recommended because it is reusable, maintainable, and supports browser caching.

---

## 18. Which type of CSS has the highest priority?

Priority (highest to lowest):

1. Inline CSS
2. Internal CSS
3. External CSS

> Note: The `!important` rule can override the normal priority and should be used sparingly.

---

## 19. When should Inline CSS be used?

Only for:

- Quick testing
- Temporary styling
- Situations where external styles are not practical (such as some HTML email templates)

---

# CSS Files

## 20. What is the extension of a CSS file?

```text
.css
```

Example:

```text
style.css
```

---

## 21. How do you connect CSS to HTML?

Using the `<link>` element.

```html
<link rel="stylesheet" href="style.css">
```

---

## 22. Where should the `<link>` tag be placed?

Inside the `<head>` section of the HTML document.

---

## 23. Can one HTML page use multiple CSS files?

Yes.

Example:

```html
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="responsive.css">
```

---

# Best Practices

## 24. Why should I avoid Inline CSS?

Because it:

- Mixes HTML and CSS
- Is difficult to maintain
- Cannot be reused easily

---

## 25. Why should I use meaningful class names?

Meaningful names improve readability and make code easier to maintain.

Example:

Good:

```css
.primary-button
```

Bad:

```css
.red
```

---

## 26. Should I use IDs or classes for styling?

Use **classes** for most styling because they are reusable.

Use **IDs** when an element is unique and requires unique identification.

---

## 27. Should I use `!important`?

Only when absolutely necessary.

Excessive use of `!important` makes CSS harder to maintain.

---

## 28. Why should CSS be organized?

Organized CSS is:

- Easier to read
- Easier to debug
- Easier to maintain
- Better for teamwork

---

# Troubleshooting

## 29. My CSS is not working. What should I check?

Check the following:

- Is the CSS file linked correctly?
- Is the file path correct?
- Is the selector correct?
- Are the class or ID names spelled correctly?
- Are there syntax errors?
- Is another rule overriding your styles?
- Has the browser cached an older version of the stylesheet?

---

## 30. Why is my color not changing?

Possible reasons:

- Wrong selector
- Higher specificity elsewhere
- Typographical errors
- Browser cache
- Invalid property value

---

## 31. Why is my CSS file not loading?

Possible reasons:

- Incorrect file path
- Incorrect filename
- Missing `<link>` element
- File not saved
- Server configuration issues

---

## 32. How can I debug CSS?

Use your browser's Developer Tools to:

- Inspect elements
- View applied styles
- Check computed values
- Identify overridden rules
- Test changes in real time

---

# Interview FAQs

## 33. Is CSS easy to learn?

Yes.

CSS has a relatively simple syntax, making it beginner-friendly. However, mastering advanced topics such as layouts, specificity, and responsive design takes practice.

---

## 34. What should I learn after CSS Introduction?

Recommended order:

1. Selectors
2. Colors
3. Units
4. Typography
5. Box Model
6. Display
7. Positioning
8. Flexbox
9. Grid
10. Responsive Design
11. Transitions
12. Animations

---

## 35. Is CSS still relevant?

Absolutely.

Every modern website uses CSS for styling. It remains a core technology of web development.

---

## 36. Can CSS create animations?

Yes.

CSS supports animations using features such as:

- Transitions
- `@keyframes`
- Transformations

---

## 37. Is CSS enough to build a website?

CSS alone cannot build a complete website.

A typical web application uses:

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Presentation |
| JavaScript | Interactivity |

---

## 38. What are the most important CSS topics to master?

- Selectors
- Specificity
- Box Model
- Flexbox
- CSS Grid
- Positioning
- Responsive Design
- CSS Variables
- Transitions
- Animations

---

# Quick Revision

| Question | Answer |
|----------|--------|
| CSS stands for | Cascading Style Sheets |
| Inventor | Håkon Wium Lie |
| Maintained by | W3C |
| File extension | `.css` |
| Best CSS type | External CSS |
| Syntax | `selector { property: value; }` |
| Recommended styling method | Classes with External CSS |
| Main purpose | Style HTML documents |

---

# Final Note

The CSS Introduction chapter provides the foundation for learning modern web design. Once you understand the basics—what CSS is, how it works, its syntax, and best practices—you'll be ready to explore advanced topics like selectors, the box model, Flexbox, Grid, responsive design, and animations with confidence.