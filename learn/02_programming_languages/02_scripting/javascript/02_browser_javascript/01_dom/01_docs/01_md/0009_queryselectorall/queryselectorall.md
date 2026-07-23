# querySelectorAll()

## Table of Contents

- Learning Objectives
- Introduction
- Why Use querySelectorAll()?
- Syntax
- Parameters
- Return Value
- How querySelectorAll() Works
- CSS Selectors Supported
- Basic Examples
- Selecting Multiple Elements
- Looping Through NodeList
- Converting NodeList to an Array
- Static NodeList Explained
- querySelectorAll() vs Other DOM Methods
- Real-World Examples
- Common Mistakes
- Best Practices
- Performance
- Browser Compatibility
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand how `querySelectorAll()` works.
- Select multiple DOM elements using CSS selectors.
- Work with a `NodeList`.
- Iterate through selected elements.
- Understand the difference between a **Static NodeList** and a **Live HTMLCollection**.

---

# Introduction

Many webpages contain groups of similar elements.

Examples include:

- Navigation links
- Buttons
- Product cards
- Images
- List items
- Form inputs

To work with all matching elements at once, JavaScript provides:

```javascript
document.querySelectorAll()
```

Unlike `querySelector()`, which returns only the **first** matching element, `querySelectorAll()` returns **every matching element**.

---

# Why Use querySelectorAll()?

Suppose a webpage contains several buttons.

```html
<button class="btn">Save</button>

<button class="btn">Delete</button>

<button class="btn">Edit</button>
```

Using one JavaScript statement, you can access all of them.

```javascript
const buttons = document.querySelectorAll(".btn");
```

---

# Syntax

```javascript
document.querySelectorAll(cssSelector);
```

---

# Parameters

| Parameter | Description |
|-----------|-------------|
| `cssSelector` | Any valid CSS selector. |

Example

```javascript
document.querySelectorAll(".card");
```

---

# Return Value

Returns a **NodeList**.

Example

```text
NodeList(5)
```

If no elements match:

```text
NodeList []
```

Unlike `querySelector()`, it **never returns `null`**.

---

# How querySelectorAll() Works

HTML

```html
<p>HTML</p>

<p>CSS</p>

<p>JavaScript</p>
```

JavaScript

```javascript
const paragraphs =
document.querySelectorAll("p");
```

Output

```text
NodeList(3)
```

All three paragraphs are returned.

---

# CSS Selectors Supported

`querySelectorAll()` supports every valid CSS selector.

### ID Selector

```javascript
document.querySelectorAll("#title");
```

---

### Class Selector

```javascript
document.querySelectorAll(".card");
```

---

### Tag Selector

```javascript
document.querySelectorAll("button");
```

---

### Attribute Selector

```javascript
document.querySelectorAll("[type='text']");
```

---

### Descendant Selector

```javascript
document.querySelectorAll(".menu li");
```

---

### Child Selector

```javascript
document.querySelectorAll("ul > li");
```

---

### Multiple Selectors

```javascript
document.querySelectorAll("h1, h2, h3");
```

---

### Pseudo-Class Selector

```javascript
document.querySelectorAll("li:first-child");
```

---

# Basic Examples

## Select All Paragraphs

```javascript
const paragraphs =
document.querySelectorAll("p");
```

---

## Select All Buttons

```javascript
const buttons =
document.querySelectorAll("button");
```

---

## Select All Images

```javascript
const images =
document.querySelectorAll("img");
```

---

## Select All Links

```javascript
const links =
document.querySelectorAll("a");
```

---

# Selecting Multiple Elements

HTML

```html
<div class="card">One</div>

<div class="card">Two</div>

<div class="card">Three</div>
```

JavaScript

```javascript
const cards =
document.querySelectorAll(".card");

console.log(cards.length);
```

Output

```text
3
```

---

# Looping Through NodeList

One advantage of `NodeList` is that it supports `forEach()`.

```javascript
const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    console.log(card.textContent);

});
```

Output

```text
One

Two

Three
```

---

You can also use a `for...of` loop.

```javascript
for(const card of cards){

    console.log(card);

}
```

---

Or a traditional `for` loop.

```javascript
for(let i = 0; i < cards.length; i++){

    console.log(cards[i]);

}
```

---

# Converting NodeList to an Array

Sometimes you may want to use array methods such as `map()` or `filter()`.

```javascript
const cards =
document.querySelectorAll(".card");

const array =
Array.from(cards);
```

Now you can use array methods.

```javascript
const texts =
array.map(card => card.textContent);

console.log(texts);
```

---

# Static NodeList Explained

Unlike `getElementsByClassName()` and `getElementsByTagName()`, `querySelectorAll()` returns a **Static NodeList**.

Example

HTML

```html
<p>One</p>

<p>Two</p>
```

JavaScript

```javascript
const paragraphs =
document.querySelectorAll("p");

console.log(paragraphs.length);
```

Output

```text
2
```

Now create another paragraph.

```javascript
const p =
document.createElement("p");

p.textContent = "Three";

document.body.appendChild(p);
```

Output

```text
Still 2
```

The NodeList **does not update automatically**.

You must call `querySelectorAll()` again.

```javascript
const updated =
document.querySelectorAll("p");

console.log(updated.length);
```

Output

```text
3
```

---

# querySelectorAll() vs Other DOM Methods

| Method | Returns | Live | CSS Selectors |
|---------|----------|------|---------------|
| `getElementById()` | Element | No | ❌ |
| `getElementsByClassName()` | HTMLCollection | ✅ | ❌ |
| `getElementsByTagName()` | HTMLCollection | ✅ | ❌ |
| `querySelector()` | Element | No | ✅ |
| `querySelectorAll()` | NodeList | ❌ | ✅ |

---

# Real-World Examples

## Change All Button Colors

```javascript
const buttons =
document.querySelectorAll("button");

buttons.forEach(button => {

    button.style.backgroundColor = "green";

});
```

---

## Hide All Images

```javascript
document
.querySelectorAll("img")
.forEach(image => {

    image.style.display = "none";

});
```

---

## Change Every Paragraph

```javascript
document
.querySelectorAll("p")
.forEach(paragraph => {

    paragraph.style.color = "blue";

});
```

---

## Disable Every Input

```javascript
document
.querySelectorAll("input")
.forEach(input => {

    input.disabled = true;

});
```

---

# Common Mistakes

## ❌ Expecting Only One Element

```javascript
const button =
document.querySelectorAll(".btn");
```

Returns a NodeList, not a single button.

---

## ✅ Correct

```javascript
button[0];
```

---

## ❌ Expecting Automatic Updates

```javascript
const paragraphs =
document.querySelectorAll("p");
```

Adding new paragraphs does **not** update the NodeList.

---

## ✅ Correct

Call the method again.

```javascript
const updated =
document.querySelectorAll("p");
```

---

## ❌ Forgetting CSS Symbols

Incorrect

```javascript
document.querySelectorAll(card);
```

Correct

```javascript
document.querySelectorAll(".card");
```

---

# Best Practices

- Prefer `querySelectorAll()` for selecting multiple elements.
- Use `forEach()` for clean iteration.
- Use meaningful CSS selectors.
- Re-run `querySelectorAll()` if the DOM changes.
- Cache frequently used NodeLists.

---

# Performance

`querySelectorAll()` is highly optimized.

For most applications, its performance is excellent.

If you only need one element with a unique ID, `getElementById()` is slightly faster.

---

# Browser Compatibility

Supported by:

- Chrome
- Firefox
- Safari
- Edge
- Opera

Available in all modern browsers.

---

# Summary

- `querySelectorAll()` returns **all matching elements**.
- It accepts every valid CSS selector.
- It returns a **Static NodeList**.
- NodeLists support `forEach()`.
- It is one of the most commonly used methods in modern JavaScript.

---

# Interview Questions

1. What is `querySelectorAll()`?
2. What does `querySelectorAll()` return?
3. What is a `NodeList`?
4. Is a `NodeList` live or static?
5. Can `NodeList` use `forEach()`?
6. What is the difference between `querySelector()` and `querySelectorAll()`?
7. Why doesn't `querySelectorAll()` automatically update after DOM changes?
8. How do you convert a `NodeList` into an array?
9. What kinds of selectors does `querySelectorAll()` support?
10. When should you use `querySelectorAll()` instead of `getElementsByClassName()`?

---

# Practice Exercise

Create a webpage containing:

- Five paragraphs
- Four buttons
- Three images
- Two forms
- One navigation menu

Use `querySelectorAll()` to:

1. Change every paragraph color.
2. Disable every button.
3. Hide all images.
4. Count all navigation links.
5. Select all text input fields.
6. Add a new paragraph and observe that the original NodeList does not update.
7. Call `querySelectorAll()` again and verify the updated count.

---

# Key Takeaway

> **`querySelectorAll()`** is the modern JavaScript method for selecting **multiple DOM elements** using CSS selectors. It returns a **Static NodeList**, supports `forEach()`, and provides a clean, flexible, and powerful way to work with groups of elements in web applications.

---

# Next Lesson

<h2>

➡️ <a href="../0010_changing_content/changing_content.md" style="color:#1E90FF;text-decoration:none;">

<strong>Changing Content</strong>

</a>

</h2>