# Accessing DOM Elements

## Table of Contents

- Learning Objectives
- Introduction
- Why Access DOM Elements?
- What is DOM Element Selection?
- Common Ways to Access Elements
- Selecting by ID
- Selecting by Class Name
- Selecting by Tag Name
- Selecting by Name Attribute
- Using querySelector()
- Using querySelectorAll()
- HTMLCollection vs NodeList
- Which Method Should You Use?
- Real-World Examples
- Advantages
- Limitations
- Common Mistakes
- Best Practices
- Summary
- Interview Questions
- Practice Exercise
- Key Takeaway
- Next Lesson

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand DOM element selection.
- Select elements using different DOM methods.
- Know the difference between various selector methods.
- Choose the appropriate selection method for different situations.
- Understand HTMLCollection and NodeList.

---

# Introduction

JavaScript makes webpages interactive by changing HTML elements.

Before JavaScript can modify an element, it must first **find** that element in the DOM.

This process is called **DOM Element Selection** or **Accessing DOM Elements**.

The browser provides several methods to locate elements efficiently.

---

# Why Access DOM Elements?

JavaScript accesses DOM elements to:

- Change text
- Change styles
- Hide or show elements
- Handle user events
- Validate forms
- Update images
- Create animations
- Build interactive applications

Without selecting elements, JavaScript cannot interact with a webpage.

---

# What is DOM Element Selection?

DOM element selection is the process of locating HTML elements inside the DOM.

Example HTML:

```html
<h1 id="title">JavaScript</h1>
```

JavaScript:

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

Output:

```text
<h1 id="title">JavaScript</h1>
```

---

# Common Ways to Access Elements

JavaScript provides several methods.

| Method | Returns | Modern? |
|---------|----------|----------|
| getElementById() | Single Element | ✅ |
| getElementsByClassName() | HTMLCollection | ✅ |
| getElementsByTagName() | HTMLCollection | ✅ |
| getElementsByName() | NodeList | ✅ |
| querySelector() | First Matching Element | ⭐ Recommended |
| querySelectorAll() | NodeList | ⭐ Recommended |

---

# Selecting by ID

HTML

```html
<h1 id="title">JavaScript</h1>
```

JavaScript

```javascript
const heading = document.getElementById("title");

console.log(heading);
```

Returns:

```text
<h1 id="title">
```

Use this when the element has a unique `id`.

---

# Selecting by Class Name

HTML

```html
<p class="note">One</p>

<p class="note">Two</p>
```

JavaScript

```javascript
const notes = document.getElementsByClassName("note");

console.log(notes);
```

Returns an **HTMLCollection**.

Access an element:

```javascript
console.log(notes[0]);
```

---

# Selecting by Tag Name

HTML

```html
<p>HTML</p>

<p>CSS</p>

<p>JavaScript</p>
```

JavaScript

```javascript
const paragraphs = document.getElementsByTagName("p");
```

Returns:

```text
HTMLCollection(3)
```

---

# Selecting by Name Attribute

Mostly used with forms.

HTML

```html
<input name="username">
```

JavaScript

```javascript
const inputs = document.getElementsByName("username");
```

Returns a **NodeList**.

---

# Using querySelector()

Returns the **first matching element**.

HTML

```html
<p class="text">One</p>

<p class="text">Two</p>
```

JavaScript

```javascript
const paragraph = document.querySelector(".text");

console.log(paragraph);
```

Output:

```text
First paragraph only
```

It supports CSS selectors.

Examples:

```javascript
document.querySelector("#title");
```

```javascript
document.querySelector(".card");
```

```javascript
document.querySelector("button");
```

```javascript
document.querySelector("div p");
```

---

# Using querySelectorAll()

Returns **all matching elements**.

HTML

```html
<li>Apple</li>

<li>Banana</li>

<li>Mango</li>
```

JavaScript

```javascript
const items = document.querySelectorAll("li");
```

Returns:

```text
NodeList(3)
```

Loop through them:

```javascript
items.forEach(item => {

    console.log(item.textContent);

});
```

---

# HTMLCollection vs NodeList

| Feature | HTMLCollection | NodeList |
|----------|---------------|-----------|
| Array? | ❌ | ❌ |
| Index Access | ✅ | ✅ |
| forEach() | ❌ | ✅ |
| Live Collection | Usually Yes | Usually No |
| Returned By | getElementsBy... | querySelectorAll() |

Example:

```javascript
const items = document.querySelectorAll("li");

items.forEach(item => {

    console.log(item);

});
```

---

# Which Method Should You Use?

| Situation | Recommended Method |
|-----------|-------------------|
| Unique ID | `getElementById()` |
| First matching CSS selector | `querySelector()` |
| Multiple matching elements | `querySelectorAll()` |
| Legacy code | `getElementsByClassName()` |
| Forms using `name` | `getElementsByName()` |

For modern JavaScript, `querySelector()` and `querySelectorAll()` are commonly preferred because they support all CSS selectors.

---

# Real-World Examples

## Change Heading

HTML

```html
<h1 id="title">Hello</h1>
```

JavaScript

```javascript
document.getElementById("title").textContent = "Welcome";
```

---

## Change Button Color

HTML

```html
<button class="btn">Save</button>
```

JavaScript

```javascript
document.querySelector(".btn").style.backgroundColor = "green";
```

---

## Change All Paragraph Colors

```javascript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {

    paragraph.style.color = "blue";

});
```

---

## Hide an Image

```javascript
document.querySelector("img").style.display = "none";
```

---

# Advantages

- Makes webpages interactive.
- Easy access to HTML elements.
- Supports CSS selectors.
- Enables dynamic updates.
- Works across modern browsers.

---

# Limitations

- Selecting the wrong element may produce `null`.
- Repeated DOM queries can affect performance.
- Deeply nested selectors may be slower.
- Live collections can produce unexpected results if the DOM changes.

---

# Common Mistakes

### ❌ Incorrect

```javascript
document.getElementById("heading").textContent = "Hello";
```

If the element doesn't exist:

```text
Cannot read properties of null
```

---

### ✅ Better

```javascript
const heading = document.getElementById("heading");

if (heading) {

    heading.textContent = "Hello";

}
```

---

### ❌ Incorrect

Expecting `querySelector()` to return all matching elements.

```javascript
document.querySelector(".card");
```

Returns only the **first** match.

---

### ✅ Correct

Use:

```javascript
document.querySelectorAll(".card");
```

---

# Best Practices

- Prefer `querySelector()` and `querySelectorAll()` for modern code.
- Use meaningful IDs and class names.
- Cache frequently used DOM elements.
- Avoid repeatedly querying the DOM inside loops.
- Check whether an element exists before using it.

---

# Summary

- JavaScript must locate DOM elements before manipulating them.
- The browser provides several methods for element selection.
- `getElementById()` is ideal for unique IDs.
- `querySelector()` returns the first matching element.
- `querySelectorAll()` returns all matching elements.
- Understanding element selection is fundamental to DOM manipulation.

---

# Interview Questions

1. What is DOM element selection?
2. What is the difference between `getElementById()` and `querySelector()`?
3. What does `querySelectorAll()` return?
4. What is an `HTMLCollection`?
5. What is a `NodeList`?
6. Which method supports CSS selectors?
7. What happens if `getElementById()` cannot find an element?
8. Why is `querySelector()` commonly preferred in modern JavaScript?
9. What is the difference between `HTMLCollection` and `NodeList`?
10. How can you safely access a DOM element?

---

# Practice Exercise

1. Create an HTML page containing:
   - A heading
   - Three paragraphs
   - Two buttons
   - An image

2. Select elements using:
   - `getElementById()`
   - `getElementsByClassName()`
   - `getElementsByTagName()`
   - `querySelector()`
   - `querySelectorAll()`

3. Change:
   - Heading text
   - Paragraph color
   - Button background
   - Image width

4. Loop through all paragraphs and display their text in the console.

---

# Key Takeaway

> Accessing DOM elements is the first step in DOM manipulation. JavaScript provides multiple selection methods, with `querySelector()` and `querySelectorAll()` being the most flexible because they support CSS selectors. Choosing the right selection method makes your code cleaner, more readable, and easier to maintain.

---

# Next Lesson

<h2>
➡️ <a href="../0005_getelementbyid/getelementbyid.md" style="color:#1E90FF;text-decoration:none;">
<strong>getElementById()</strong>
</a>
</h2>