# getElementsByTagName()

## Table of Contents

- Learning Objectives
- Introduction
- Why Use getElementsByTagName()?
- Syntax
- Parameters
- Return Value
- How getElementsByTagName() Works
- Basic Example
- Selecting Different HTML Tags
- Selecting All Elements Using `*`
- HTMLCollection Explained
- Live HTMLCollection
- Looping Through Elements
- Modifying Multiple Elements
- Comparing getElementsByTagName() with Other Methods
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

- Understand how `getElementsByTagName()` works.
- Select HTML elements by their tag name.
- Access and manipulate multiple elements.
- Understand Live HTMLCollections.
- Know when to use this method instead of other DOM selection methods.

---

# Introduction

Every HTML page is made up of **HTML tags** such as:

- `<h1>`
- `<p>`
- `<div>`
- `<button>`
- `<img>`
- `<table>`

Sometimes you want to select **all elements of the same type**.

For example:

- All paragraphs
- All buttons
- All images
- All links

JavaScript provides the following method for this purpose:

```javascript
document.getElementsByTagName()
```

---

# Why Use getElementsByTagName()?

Imagine a blog page containing 50 paragraphs.

Instead of selecting each paragraph individually, JavaScript can retrieve every `<p>` element at once.

Example:

```html
<p>HTML</p>

<p>CSS</p>

<p>JavaScript</p>

<p>React</p>
```

One line of JavaScript can access all of them.

---

# Syntax

```javascript
document.getElementsByTagName(tagName);
```

---

# Parameters

| Parameter | Description |
|-----------|-------------|
| `tagName` | The HTML tag name to search for. |

Example

```javascript
document.getElementsByTagName("p");
```

---

# Return Value

Returns an **HTMLCollection**.

Example

```text
HTMLCollection(4)
```

If no elements are found:

```text
HTMLCollection []
```

This method never returns `null`.

---

# How getElementsByTagName() Works

HTML

```html
<h1>JavaScript</h1>

<p>HTML</p>

<p>CSS</p>
```

JavaScript

```javascript
const paragraphs =
document.getElementsByTagName("p");

console.log(paragraphs);
```

Output

```text
HTMLCollection(2)
```

---

# Basic Example

HTML

```html
<p>Apple</p>

<p>Banana</p>

<p>Mango</p>
```

JavaScript

```javascript
const fruits =
document.getElementsByTagName("p");

console.log(fruits.length);
```

Output

```text
3
```

---

# Selecting Different HTML Tags

Select all headings.

```javascript
const headings =
document.getElementsByTagName("h1");
```

---

Select all buttons.

```javascript
const buttons =
document.getElementsByTagName("button");
```

---

Select all images.

```javascript
const images =
document.getElementsByTagName("img");
```

---

Select all tables.

```javascript
const tables =
document.getElementsByTagName("table");
```

---

# Selecting All Elements Using `*`

The wildcard (`*`) selects **every element** in the document.

```javascript
const elements =
document.getElementsByTagName("*");

console.log(elements.length);
```

Example output

```text
150
```

This returns every HTML element on the page.

---

# HTMLCollection Explained

`getElementsByTagName()` returns an **HTMLCollection**.

Characteristics:

- Ordered collection
- Uses indexes
- Not an Array
- Automatically updates when the DOM changes

Example

```javascript
const paragraphs =
document.getElementsByTagName("p");

console.log(paragraphs[0]);
```

---

# Live HTMLCollection

The collection updates automatically whenever the DOM changes.

Example

HTML

```html
<p>One</p>

<p>Two</p>
```

JavaScript

```javascript
const paragraphs =
document.getElementsByTagName("p");

console.log(paragraphs.length);
```

Output

```text
2
```

Now add another paragraph.

```javascript
const newParagraph =
document.createElement("p");

newParagraph.textContent = "Three";

document.body.appendChild(newParagraph);
```

Output

```text
3
```

The HTMLCollection updates automatically.

---

# Looping Through Elements

Use a `for` loop.

```javascript
const paragraphs =
document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++){

    console.log(paragraphs[i].textContent);

}
```

Output

```text
Apple

Banana

Mango
```

---

# Modifying Multiple Elements

Change the text color.

```javascript
const paragraphs =
document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++){

    paragraphs[i].style.color = "blue";

}
```

---

Increase font size.

```javascript
for(let i = 0; i < paragraphs.length; i++){

    paragraphs[i].style.fontSize = "20px";

}
```

---

Hide all images.

```javascript
const images =
document.getElementsByTagName("img");

for(let i = 0; i < images.length; i++){

    images[i].style.display = "none";

}
```

---

# Comparing getElementsByTagName() with Other Methods

| Method | Returns | Live Collection | Supports CSS Selectors |
|---------|----------|----------------|-------------------------|
| `getElementById()` | Single Element | No | No |
| `getElementsByClassName()` | HTMLCollection | Yes | No |
| `getElementsByTagName()` | HTMLCollection | Yes | No |
| `querySelector()` | First Element | No | Yes |
| `querySelectorAll()` | NodeList | No | Yes |

---

# Real-World Examples

## Highlight All Paragraphs

```javascript
const paragraphs =
document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++){

    paragraphs[i].style.backgroundColor = "yellow";

}
```

---

## Disable Every Button

```javascript
const buttons =
document.getElementsByTagName("button");

for(let i = 0; i < buttons.length; i++){

    buttons[i].disabled = true;

}
```

---

## Resize Every Image

```javascript
const images =
document.getElementsByTagName("img");

for(let i = 0; i < images.length; i++){

    images[i].width = 150;

}
```

---

## Count All Links

```javascript
const links =
document.getElementsByTagName("a");

console.log(links.length);
```

---

# Common Mistakes

## ❌ Expecting a Single Element

Incorrect

```javascript
const paragraph =
document.getElementsByTagName("p");

paragraph.style.color = "red";
```

This returns a collection, not one element.

---

## ✅ Correct

```javascript
paragraph[0].style.color = "red";
```

---

## ❌ Using forEach()

Incorrect

```javascript
paragraphs.forEach(item => {

});
```

`HTMLCollection` does not support `forEach()`.

---

## ✅ Correct

```javascript
for(let i = 0; i < paragraphs.length; i++){

    console.log(paragraphs[i]);

}
```

---

## ✅ Convert to Array

```javascript
Array.from(paragraphs).forEach(item => {

    console.log(item);

});
```

---

## ❌ Forgetting Tag Names are Strings

Incorrect

```javascript
document.getElementsByTagName(p);
```

Correct

```javascript
document.getElementsByTagName("p");
```

---

# Best Practices

- Use meaningful HTML tags.
- Use `querySelectorAll()` when CSS selectors are needed.
- Cache frequently used collections.
- Avoid unnecessary DOM lookups.
- Keep HTML structures simple.

---

# Performance

`getElementsByTagName()` is highly optimized by browsers.

However, because it returns a **Live HTMLCollection**, modifying the DOM repeatedly while iterating through the collection can affect performance on large webpages.

---

# Browser Compatibility

Supported by:

- Chrome
- Firefox
- Edge
- Safari
- Opera

It is available in all modern browsers.

---

# Summary

- `getElementsByTagName()` selects all elements with a specified HTML tag.
- It returns a **Live HTMLCollection**.
- HTMLCollections automatically reflect DOM changes.
- Elements are accessed using indexes.
- It is useful when working with multiple elements of the same type.

---

# Interview Questions

1. What does `getElementsByTagName()` return?
2. What is an HTMLCollection?
3. Is HTMLCollection a JavaScript array?
4. What is a Live HTMLCollection?
5. How do you access the third paragraph?
6. Can `getElementsByTagName()` return `null`?
7. How do you select every HTML element on a page?
8. What is the difference between `getElementsByTagName()` and `querySelectorAll()`?
9. Why doesn't HTMLCollection support `forEach()`?
10. When should you use `getElementsByTagName()`?

---

# Practice Exercise

Create a webpage containing:

- Five headings
- Five paragraphs
- Three buttons
- Four images
- Two tables

Use `getElementsByTagName()` to:

1. Count all paragraphs.
2. Change every heading color.
3. Hide all images.
4. Disable all buttons.
5. Increase the font size of all paragraphs.
6. Add a new paragraph dynamically and observe how the HTMLCollection updates automatically.

---

# Key Takeaway

> **`getElementsByTagName()`** selects all HTML elements with a specified tag name and returns a **Live HTMLCollection**. It is ideal when you want to work with every element of the same HTML type, such as all paragraphs, buttons, images, or tables on a webpage.

---

# Next Lesson

<h2>

➡️ <a href="../0008_queryselector/queryselector.md" style="color:#1E90FF;text-decoration:none;">

<strong>querySelector()</strong>

</a>

</h2>