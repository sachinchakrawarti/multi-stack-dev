# Changing Styles

## Table of Contents

- Learning Objectives
- Introduction
- Why Change Styles?
- Ways to Change Styles
- Using the `style` Property
- Changing Individual CSS Properties
- Reading CSS Properties
- Working with CSS Classes
- `className`
- `classList`
- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `classList.contains()`
- Inline Styles vs CSS Classes
- Real-World Examples
- Common Mistakes
- Best Practices
- Performance Considerations
- Browser Compatibility
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Change CSS styles using JavaScript.
- Use the `style` property.
- Add, remove, and toggle CSS classes.
- Understand the difference between inline styles and CSS classes.
- Follow best practices for styling webpages dynamically.

---

# Introduction

Modern websites constantly change their appearance.

Examples include:

- Dark mode
- Form validation colors
- Highlighting menu items
- Showing or hiding elements
- Animations
- Responsive navigation menus

JavaScript makes these changes by modifying the **DOM** and its associated CSS styles.

---

# Why Change Styles?

Imagine a login form.

Initially:

```text
Username
Password
```

If the password is incorrect:

- Border becomes red.
- Error message appears.
- Input shakes.

These visual updates are created by changing CSS styles with JavaScript.

---

# Ways to Change Styles

JavaScript provides several ways to modify styles.

| Method | Best Used For |
|---------|---------------|
| `element.style` | Changing one or two styles directly |
| `className` | Replacing all classes |
| `classList` | Adding or removing individual classes |

---

# Using the `style` Property

The `style` property changes an element's **inline CSS**.

HTML

```html
<h1 id="title">JavaScript</h1>
```

JavaScript

```javascript
const title =
document.getElementById("title");

title.style.color = "blue";
```

Result

```text
Blue heading
```

---

# Changing Individual CSS Properties

## Text Color

```javascript
title.style.color = "red";
```

---

## Background Color

```javascript
title.style.backgroundColor = "yellow";
```

---

## Font Size

```javascript
title.style.fontSize = "40px";
```

---

## Width

```javascript
box.style.width = "300px";
```

---

## Height

```javascript
box.style.height = "200px";
```

---

## Border

```javascript
box.style.border =
"2px solid black";
```

---

## Border Radius

```javascript
box.style.borderRadius =
"10px";
```

---

## Padding

```javascript
box.style.padding =
"20px";
```

---

## Margin

```javascript
box.style.margin =
"10px";
```

---

## Display

```javascript
box.style.display = "none";
```

Show again:

```javascript
box.style.display = "block";
```

---

# Reading CSS Properties

JavaScript can also read inline style values.

```javascript
console.log(title.style.color);
```

If the color was set using CSS (not inline), use:

```javascript
const styles =
getComputedStyle(title);

console.log(styles.color);
```

---

# Working with CSS Classes

Changing classes is usually better than changing many inline styles.

CSS

```css
.highlight{

    background: yellow;

    color: red;

}
```

HTML

```html
<p id="message">

Hello

</p>
```

JavaScript

```javascript
document
.getElementById("message")
.classList.add("highlight");
```

---

# `className`

Replace all existing classes.

```javascript
element.className =
"active";
```

Example

```javascript
button.className =
"btn-primary";
```

⚠️ This removes any existing classes.

---

# `classList`

`classList` provides methods to work with classes safely.

---

## `classList.add()`

Adds a class.

```javascript
element.classList.add(
"active");
```

Multiple classes.

```javascript
element.classList.add(
"btn",
"primary");
```

---

## `classList.remove()`

Removes a class.

```javascript
element.classList.remove(
"active");
```

---

## `classList.toggle()`

Adds the class if it doesn't exist.

Removes it if it already exists.

```javascript
button.classList.toggle(
"dark");
```

Perfect for:

- Dark mode
- Dropdown menus
- Sidebars
- Accordions

---

## `classList.contains()`

Checks whether a class exists.

```javascript
if(button.classList.contains("active")){

    console.log("Active");

}
```

Returns:

```text
true
```

or

```text
false
```

---

# Inline Styles vs CSS Classes

| Inline Styles | CSS Classes |
|--------------|-------------|
| Good for quick changes | Good for reusable styling |
| Harder to maintain | Easier to maintain |
| More JavaScript code | Cleaner JavaScript |
| Overrides stylesheet rules | Uses existing CSS |
| Less scalable | More scalable |

For most real-world projects, **CSS classes** are preferred.

---

# Real-World Examples

## Dark Mode

CSS

```css
.dark{

    background:black;

    color:white;

}
```

JavaScript

```javascript
document.body.classList.toggle(
"dark");
```

---

## Form Validation

```javascript
input.classList.add(
"error");
```

---

## Highlight Selected Menu

```javascript
menu.classList.add(
"selected");
```

---

## Hide an Element

```javascript
element.style.display =
"none";
```

---

## Show an Element

```javascript
element.style.display =
"block";
```

---

## Change Button Color

```javascript
button.style.backgroundColor =
"green";
```

---

# Common Mistakes

## ❌ Using CSS Property Names Incorrectly

Incorrect

```javascript
title.style.background-color =
"red";
```

---

## ✅ Correct

```javascript
title.style.backgroundColor =
"red";
```

JavaScript uses **camelCase** instead of kebab-case.

---

## ❌ Replacing All Classes Accidentally

```javascript
element.className =
"active";
```

This removes all existing classes.

---

## ✅ Better

```javascript
element.classList.add(
"active");
```

---

## ❌ Adding Inline Styles Repeatedly

```javascript
element.style.color = "red";

element.style.background = "yellow";

element.style.fontSize = "30px";

element.style.padding = "20px";
```

---

## ✅ Better

Define a CSS class.

```css
.highlight{

    color:red;

    background:yellow;

    font-size:30px;

    padding:20px;

}
```

Then:

```javascript
element.classList.add(
"highlight");
```

---

# Best Practices

- Prefer CSS classes over inline styles.
- Use `classList` instead of `className`.
- Keep JavaScript responsible for behavior and CSS responsible for appearance.
- Minimize inline style changes.
- Use meaningful class names.

---

# Performance Considerations

Changing many inline styles one by one can trigger multiple browser repaints.

Using CSS classes is generally more efficient because the browser applies all style changes together.

For animations, prefer CSS transitions and animations instead of repeatedly modifying styles in JavaScript.

---

# Browser Compatibility

Supported in:

- Chrome
- Firefox
- Edge
- Safari
- Opera

`classList` is supported in all modern browsers.

---

# Summary

- JavaScript can dynamically change webpage styles.
- The `style` property changes inline CSS.
- `classList` provides a clean way to add, remove, toggle, and check CSS classes.
- CSS classes are preferred for reusable and maintainable styling.
- Using JavaScript with CSS enables interactive and responsive user interfaces.

---

# Interview Questions

1. How do you change the text color using JavaScript?
2. What is the `style` property?
3. Why does JavaScript use `backgroundColor` instead of `background-color`?
4. What is the difference between `className` and `classList`?
5. What does `classList.toggle()` do?
6. What does `classList.contains()` return?
7. Why are CSS classes preferred over inline styles?
8. How do you hide an element using JavaScript?
9. How do you read a computed CSS property?
10. Which approach is better for implementing dark mode?

---

# Practice Exercise

Create a webpage containing:

- A heading
- A paragraph
- Two buttons
- A login form
- A navigation menu
- A card component

Write JavaScript to:

1. Change the heading color.
2. Increase the paragraph font size.
3. Hide and show the card.
4. Add an `active` class to the navigation menu.
5. Toggle dark mode.
6. Add an `error` class to invalid form fields.
7. Check whether a button contains a specific class.
8. Read the computed background color of the page.

---

# Key Takeaway

> **Changing styles with JavaScript** allows webpages to respond dynamically to user actions. Use the **`style`** property for simple inline changes, but prefer **`classList`** and CSS classes for scalable, reusable, and maintainable styling in modern web applications.

---

# Next Lesson

<h2>

➡️ <a href="../0012_creating_elements/creating_elements.md" style="color:#1E90FF;text-decoration:none;">

<strong>Creating Elements</strong>

</a>

</h2>