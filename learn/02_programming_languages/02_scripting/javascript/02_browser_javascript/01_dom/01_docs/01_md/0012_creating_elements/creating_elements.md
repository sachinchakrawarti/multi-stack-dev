# Creating Elements

## Table of Contents

- Learning Objectives
- Introduction
- Why Create Elements Dynamically?
- The DOM Creation Process
- `document.createElement()`
- Setting Content
- Setting Attributes
- Setting Styles
- Adding CSS Classes
- Appending Elements
- Inserting Elements at Different Positions
- Creating Nested Elements
- Creating Lists Dynamically
- Creating Tables Dynamically
- Creating Cards Dynamically
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

- Create new HTML elements using JavaScript.
- Add text, attributes, styles, and classes to new elements.
- Insert elements into the DOM.
- Build dynamic lists, tables, and cards.
- Follow best practices for efficient DOM manipulation.

---

# Introduction

Modern websites rarely display completely static content.

Examples include:

- New chat messages
- Shopping cart items
- Product cards
- Notifications
- Comments
- Search results
- Dashboard widgets

Instead of manually writing HTML for every new item, JavaScript creates these elements **dynamically**.

The primary method used is:

```javascript
document.createElement()
```

---

# Why Create Elements Dynamically?

Imagine an online shopping website.

A customer clicks:

```text
Add Product
```

JavaScript creates a new product card instantly without reloading the page.

Similarly,

- Social media apps create new posts.
- Messaging apps create new messages.
- Task managers create new tasks.
- E-commerce websites create new product cards.

---

# The DOM Creation Process

Creating a new element usually involves these steps:

```text
Create Element

↓

Add Text or HTML

↓

Set Attributes

↓

Add Classes

↓

Apply Styles (Optional)

↓

Append to DOM

↓

Visible on Webpage
```

---

# `document.createElement()`

This method creates a new HTML element.

Syntax

```javascript
const element =
document.createElement(tagName);
```

Example

```javascript
const heading =
document.createElement("h1");
```

At this point, the element exists only in memory and is **not visible** because it has not been added to the DOM.

---

# Setting Content

Use `textContent` to add text.

```javascript
const heading =
document.createElement("h1");

heading.textContent =
"Learning JavaScript";
```

Result

```html
<h1>Learning JavaScript</h1>
```

You can also use `innerHTML` when trusted HTML markup is required.

```javascript
heading.innerHTML =
"<strong>Learning JavaScript</strong>";
```

---

# Setting Attributes

Use `setAttribute()` to add attributes.

```javascript
const image =
document.createElement("img");

image.setAttribute(
"src",
"logo.png"
);

image.setAttribute(
"alt",
"Company Logo"
);
```

You can also set properties directly.

```javascript
image.src = "logo.png";

image.alt = "Company Logo";
```

---

# Setting Styles

Apply inline styles using the `style` property.

```javascript
const box =
document.createElement("div");

box.style.width = "200px";

box.style.height = "100px";

box.style.backgroundColor = "lightblue";
```

---

# Adding CSS Classes

Instead of inline styles, add reusable CSS classes.

CSS

```css
.card{

    padding:20px;

    border-radius:10px;

    background:#f4f4f4;

}
```

JavaScript

```javascript
const card =
document.createElement("div");

card.classList.add("card");
```

---

# Appending Elements

After creating an element, add it to the webpage using `appendChild()` or `append()`.

HTML

```html
<body>

</body>
```

JavaScript

```javascript
const heading =
document.createElement("h1");

heading.textContent =
"Welcome";

document.body.appendChild(
heading
);
```

Result

```html
<body>

<h1>Welcome</h1>

</body>
```

---

Using `append()`.

```javascript
document.body.append(
heading
);
```

Unlike `appendChild()`, `append()` can add both text and multiple nodes.

---

# Inserting Elements at Different Positions

### Insert at the Beginning

```javascript
container.prepend(
heading
);
```

---

### Insert at the End

```javascript
container.append(
heading
);
```

---

### Insert Before an Existing Element

```javascript
container.insertBefore(
newElement,
oldElement
);
```

---

### Insert Using `insertAdjacentHTML()`

```javascript
container.insertAdjacentHTML(

"beforeend",

"<p>Hello</p>"

);
```

Positions available:

- `"beforebegin"`
- `"afterbegin"`
- `"beforeend"`
- `"afterend"`

---

# Creating Nested Elements

Example

```javascript
const card =
document.createElement("div");

const title =
document.createElement("h2");

const paragraph =
document.createElement("p");

title.textContent =
"Laptop";

paragraph.textContent =
"Price: ₹50,000";

card.append(
title,
paragraph
);

document.body.append(card);
```

Result

```html
<div>

<h2>Laptop</h2>

<p>Price: ₹50,000</p>

</div>
```

---

# Creating Lists Dynamically

```javascript
const fruits = [

"Apple",

"Banana",

"Mango"

];

const ul =
document.createElement("ul");

fruits.forEach(fruit => {

    const li =
    document.createElement("li");

    li.textContent = fruit;

    ul.appendChild(li);

});

document.body.appendChild(ul);
```

---

# Creating Tables Dynamically

```javascript
const table =
document.createElement("table");

const row =
document.createElement("tr");

const cell =
document.createElement("td");

cell.textContent =
"JavaScript";

row.appendChild(cell);

table.appendChild(row);

document.body.appendChild(table);
```

---

# Creating Cards Dynamically

```javascript
const card =
document.createElement("div");

card.classList.add("card");

card.innerHTML =

`
<h2>Phone</h2>

<p>₹20,000</p>

<button>Buy</button>

`;

document.body.append(card);
```

---

# Real-World Examples

## Add a Notification

```javascript
const notification =
document.createElement("div");

notification.textContent =
"Order Placed Successfully";

document.body.append(notification);
```

---

## Add a Chat Message

```javascript
const message =
document.createElement("p");

message.textContent =
"Hello!";

chatBox.append(message);
```

---

## Add a New Product

```javascript
const product =
document.createElement("div");

product.classList.add("product");

products.append(product);
```

---

## Add a Todo Item

```javascript
const task =
document.createElement("li");

task.textContent =
"Learn DOM";

todoList.append(task);
```

---

# Common Mistakes

## ❌ Creating Without Appending

```javascript
const heading =
document.createElement("h1");

heading.textContent =
"Hello";
```

Nothing appears because the element is not added to the DOM.

---

## ✅ Correct

```javascript
document.body.appendChild(
heading
);
```

---

## ❌ Using `innerHTML` with User Input

```javascript
card.innerHTML =
userInput;
```

This can introduce **Cross-Site Scripting (XSS)** vulnerabilities.

---

## ✅ Better

```javascript
card.textContent =
userInput;
```

---

## ❌ Creating Too Many Elements Individually

Repeated DOM updates can slow down performance.

---

## ✅ Better

Use a `DocumentFragment` for bulk insertions.

```javascript
const fragment =
document.createDocumentFragment();

for(let i = 1; i <= 100; i++){

    const item =
    document.createElement("li");

    item.textContent =
    `Item ${i}`;

    fragment.appendChild(item);

}

document.body.appendChild(fragment);
```

---

# Best Practices

- Use `createElement()` instead of large `innerHTML` strings whenever practical.
- Prefer `textContent` for plain text.
- Add CSS classes instead of many inline styles.
- Use `DocumentFragment` when inserting many elements.
- Separate HTML structure, CSS styling, and JavaScript behavior.

---

# Performance Considerations

Creating many elements one by one causes repeated DOM updates.

Better approach:

- Create elements in memory.
- Append them once.
- Use `DocumentFragment` for large batches.

This minimizes browser reflow and repaint operations.

---

# Browser Compatibility

The following are supported by all modern browsers:

- `createElement()`
- `appendChild()`
- `append()`
- `prepend()`
- `classList`
- `insertBefore()`
- `insertAdjacentHTML()`

---

# Summary

- `document.createElement()` creates new HTML elements.
- New elements exist only in memory until added to the DOM.
- Use `textContent`, `setAttribute()`, `classList`, and `style` to configure elements.
- Insert elements using `appendChild()`, `append()`, or related methods.
- Efficient DOM creation is essential for modern interactive web applications.

---

# Interview Questions

1. What is `document.createElement()`?
2. Does `createElement()` immediately display the element?
3. What is the difference between `append()` and `appendChild()`?
4. Why should `textContent` be preferred over `innerHTML` for user input?
5. What is `DocumentFragment`?
6. Why is `DocumentFragment` useful?
7. How do you create a list dynamically?
8. How do you add CSS classes to a newly created element?
9. How do you insert an element before another element?
10. What is the difference between creating and appending an element?

---

# Practice Exercise

Create a webpage with:

- A button labeled **Add Product**
- An empty product container
- A todo list
- A notification area

Write JavaScript to:

1. Create a product card dynamically.
2. Add an image, title, price, and button to the card.
3. Append the card to the product container.
4. Add a new todo item each time a button is clicked.
5. Display a success notification.
6. Create 100 list items efficiently using `DocumentFragment`.
7. Apply CSS classes instead of inline styles.

---

# Key Takeaway

> **`document.createElement()`** is the foundation of dynamic web applications. It allows JavaScript to build and insert new HTML elements at runtime, enabling features like chat messages, product cards, notifications, and interactive dashboards without reloading the page.

---

# Next Lesson

<h2>

➡️ <a href="../0013_removing_elements/removing_elements.md" style="color:#1E90FF;text-decoration:none;">

<strong>Removing Elements</strong>

</a>

</h2>