# getElementsByClassName()

## Table of Contents

- Learning Objectives
- Introduction
- Why Use getElementsByClassName()?
- Syntax
- Parameters
- Return Value
- How getElementsByClassName() Works
- Basic Example
- Accessing Individual Elements
- Looping Through Elements
- Modifying Multiple Elements
- HTMLCollection Explained
- Live Collection
- Real-World Use Cases
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

- Understand how `getElementsByClassName()` works.
- Select multiple HTML elements using a class name.
- Access elements from an HTMLCollection.
- Loop through multiple elements.
- Understand the concept of a Live HTMLCollection.

---

# Introduction

Many webpages contain multiple elements that share the same style or behavior.

For example:

- Product cards
- Navigation links
- Buttons
- Images
- Menu items

Instead of giving every element a unique ID, developers assign the same **class** to similar elements.

JavaScript can select all these elements using:

```javascript
document.getElementsByClassName()
```

---

# Why Use getElementsByClassName()?

Suppose an online shopping website has 20 product cards.

```html
<div class="product"></div>

<div class="product"></div>

<div class="product"></div>
```

Instead of selecting each card individually, JavaScript can retrieve all of them at once.

---

# Syntax

```javascript
document.getElementsByClassName(className);
```

---

# Parameters

| Parameter | Description |
|-----------|-------------|
| `className` | The class name of the elements to find. |

Example:

```javascript
document.getElementsByClassName("card");
```

---

# Return Value

Returns an **HTMLCollection**.

```text
HTMLCollection(3)
```

If no matching elements exist:

```text
HTMLCollection []
```

Unlike `getElementById()`, this method never returns `null`.

---

# How getElementsByClassName() Works

HTML

```html
<p class="note">HTML</p>

<p class="note">CSS</p>

<p class="note">JavaScript</p>
```

JavaScript

```javascript
const notes =
document.getElementsByClassName("note");
```

The browser returns an HTMLCollection containing all three paragraphs.

---

# Basic Example

HTML

```html
<p class="fruit">Apple</p>

<p class="fruit">Banana</p>

<p class="fruit">Mango</p>
```

JavaScript

```javascript
const fruits =
document.getElementsByClassName("fruit");

console.log(fruits);
```

Output

```text
HTMLCollection(3)
```

---

# Accessing Individual Elements

HTMLCollection uses indexes starting from **0**.

```javascript
const fruits =
document.getElementsByClassName("fruit");

console.log(fruits[0]);
```

Output

```text
Apple
```

Access the second element:

```javascript
console.log(fruits[1]);
```

---

# Looping Through Elements

Use a `for` loop.

```javascript
const fruits =
document.getElementsByClassName("fruit");

for(let i = 0; i < fruits.length; i++){

    console.log(fruits[i].textContent);

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

Change the text color of all paragraphs.

```javascript
const fruits =
document.getElementsByClassName("fruit");

for(let i = 0; i < fruits.length; i++){

    fruits[i].style.color = "green";

}
```

---

Change the font size.

```javascript
for(let i = 0; i < fruits.length; i++){

    fruits[i].style.fontSize = "24px";

}
```

---

# HTMLCollection Explained

An **HTMLCollection** is a collection of HTML elements.

Example

```javascript
const items =
document.getElementsByClassName("item");
```

Output

```text
HTMLCollection(5)
```

Characteristics:

- Ordered collection
- Index-based
- Not a true JavaScript array
- Automatically updates when the DOM changes

---

# Live Collection

`getElementsByClassName()` returns a **Live HTMLCollection**.

Example

HTML

```html
<div class="box">One</div>

<div class="box">Two</div>
```

JavaScript

```javascript
const boxes =
document.getElementsByClassName("box");

console.log(boxes.length);
```

Output

```text
2
```

Now add another element.

```javascript
const newBox =
document.createElement("div");

newBox.className = "box";

document.body.appendChild(newBox);
```

Output

```text
3
```

The HTMLCollection updates automatically.

---

# Real-World Use Cases

## Highlight Menu Items

```javascript
const menuItems =
document.getElementsByClassName("menu");

for(let i = 0; i < menuItems.length; i++){

    menuItems[i].style.color = "blue";

}
```

---

## Hide Advertisements

```javascript
const ads =
document.getElementsByClassName("ad");

for(let i = 0; i < ads.length; i++){

    ads[i].style.display = "none";

}
```

---

## Product Cards

```javascript
const products =
document.getElementsByClassName("product");

console.log(products.length);
```

---

## Disable Buttons

```javascript
const buttons =
document.getElementsByClassName("btn");

for(let i = 0; i < buttons.length; i++){

    buttons[i].disabled = true;

}
```

---

# Common Mistakes

## ❌ Forgetting Index

Incorrect

```javascript
const cards =
document.getElementsByClassName("card");

cards.style.color = "red";
```

`cards` is a collection, not a single element.

---

## ✅ Correct

```javascript
cards[0].style.color = "red";
```

---

## ❌ Using forEach()

Incorrect

```javascript
cards.forEach(card => {

});
```

`HTMLCollection` does **not** support `forEach()`.

---

## ✅ Correct

```javascript
for(let i = 0; i < cards.length; i++){

    console.log(cards[i]);

}
```

---

Or convert it into an array.

```javascript
Array.from(cards).forEach(card => {

    console.log(card);

});
```

---

## ❌ Expecting Only One Element

`getElementsByClassName()` always returns a collection, even if only one element matches.

---

# Best Practices

- Use meaningful class names.
- Use loops to process collections.
- Convert HTMLCollection to an array if array methods are needed.
- Prefer `querySelectorAll()` if you need CSS selector flexibility and `forEach()` support.
- Avoid unnecessary repeated DOM queries.

---

# Performance

`getElementsByClassName()` is fast because browsers optimize class lookups.

However, because it returns a **Live HTMLCollection**, repeatedly changing the DOM while iterating may affect performance in large applications.

---

# Browser Compatibility

Supported in:

- Chrome
- Firefox
- Safari
- Edge
- Opera

Widely supported in all modern browsers.

---

# Summary

- `getElementsByClassName()` selects all elements with a specific class.
- It returns an **HTMLCollection**.
- HTMLCollections are **live**, meaning they automatically reflect DOM changes.
- Access elements using indexes.
- Loop through the collection to modify multiple elements.

---

# Interview Questions

1. What is `getElementsByClassName()`?
2. What does it return?
3. What is an HTMLCollection?
4. Is HTMLCollection an array?
5. What is a Live HTMLCollection?
6. Can you use `forEach()` directly on an HTMLCollection?
7. How do you access the second element?
8. What happens if no element matches the class?
9. When should you use `getElementsByClassName()`?
10. What is the difference between `getElementsByClassName()` and `querySelectorAll()`?

---

# Practice Exercise

Create a webpage containing:

- Five product cards
- Three buttons
- Four paragraphs

Use `getElementsByClassName()` to:

1. Change the background color of all product cards.
2. Increase the font size of every paragraph.
3. Disable all buttons.
4. Display the total number of product cards.
5. Add a new product card dynamically and observe how the HTMLCollection updates automatically.

---

# Key Takeaway

> **`getElementsByClassName()`** retrieves all elements that share the same class name and returns a **Live HTMLCollection**. It is ideal when you need to work with multiple similar elements, such as cards, buttons, menu items, or list elements.

---

# Next Lesson

<h2>
➡️ <a href="../0007_getelementsbytagname/getelementsbytagname.md" style="color:#1E90FF;text-decoration:none;">
<strong>getElementsByTagName()</strong>
</a>
</h2>