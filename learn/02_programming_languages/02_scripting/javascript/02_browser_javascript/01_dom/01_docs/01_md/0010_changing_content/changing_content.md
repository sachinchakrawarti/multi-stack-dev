# Changing Content

## Table of Contents

- Learning Objectives
- Introduction
- Why Change Content?
- Ways to Change Content
- `textContent`
- `innerText`
- `innerHTML`
- Differences Between `textContent`, `innerText`, and `innerHTML`
- Reading Content
- Writing Content
- Creating Dynamic Content
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

- Understand different ways to change webpage content.
- Use `textContent`, `innerText`, and `innerHTML`.
- Know the differences between these properties.
- Dynamically update webpage content using JavaScript.
- Follow best practices for safely updating the DOM.

---

# Introduction

One of the biggest advantages of JavaScript is that it can **change webpage content without reloading the page**.

Examples include:

- Updating a shopping cart.
- Displaying user information.
- Showing live scores.
- Displaying validation messages.
- Updating stock prices.
- Showing notifications.

All of these are achieved by modifying the **DOM**.

---

# Why Change Content?

Modern websites are interactive.

Imagine an e-commerce website.

Initially:

```text
Cart (0)
```

After clicking **Add to Cart**:

```text
Cart (1)
```

The HTML file never changes.

JavaScript updates the **DOM**, and the user immediately sees the new content.

---

# Ways to Change Content

JavaScript mainly provides three properties:

| Property | Supports HTML Tags | Includes Hidden Text | Common Use |
|----------|--------------------|----------------------|------------|
| `textContent` | ❌ No | ✅ Yes | Plain text |
| `innerText` | ❌ No | ❌ No | Visible text |
| `innerHTML` | ✅ Yes | ❌ No | HTML content |

---

# `textContent`

`textContent` reads or writes **plain text**.

It ignores HTML tags.

## Reading Text

HTML

```html
<h1 id="title">JavaScript</h1>
```

JavaScript

```javascript
const title =
document.getElementById("title");

console.log(title.textContent);
```

Output

```text
JavaScript
```

---

## Changing Text

```javascript
title.textContent = "Learning DOM";
```

Result

```text
Learning DOM
```

---

## HTML is Treated as Text

```javascript
title.textContent =
"<b>Hello</b>";
```

Output

```text
<b>Hello</b>
```

The tags are displayed literally.

---

# `innerText`

`innerText` returns only **visible text**.

HTML

```html
<p id="demo">

Hello

<span style="display:none">

Hidden

</span>

World

</p>
```

JavaScript

```javascript
const paragraph =
document.getElementById("demo");

console.log(paragraph.innerText);
```

Output

```text
Hello World
```

The hidden text is ignored.

---

Changing visible text.

```javascript
paragraph.innerText =
"Welcome User";
```

---

# `innerHTML`

`innerHTML` reads or writes **HTML markup**.

HTML

```html
<div id="box"></div>
```

JavaScript

```javascript
document.getElementById("box").innerHTML =

"<h2>Hello</h2>";
```

Output

```html
<h2>Hello</h2>
```

The browser renders the HTML.

---

Another example.

```javascript
document.getElementById("box").innerHTML =

`
<ul>

<li>HTML</li>

<li>CSS</li>

<li>JavaScript</li>

</ul>

`;
```

---

# Differences Between `textContent`, `innerText`, and `innerHTML`

| Feature | `textContent` | `innerText` | `innerHTML` |
|----------|---------------|-------------|-------------|
| Reads text | ✅ | ✅ | ✅ |
| Writes text | ✅ | ✅ | ✅ |
| Supports HTML | ❌ | ❌ | ✅ |
| Includes hidden text | ✅ | ❌ | ❌ |
| Faster | ✅ | ❌ | ❌ |
| Executes HTML | ❌ | ❌ | ✅ |

---

# Reading Content

HTML

```html
<h2 id="course">

JavaScript Course

</h2>
```

JavaScript

```javascript
const course =
document.getElementById("course");

console.log(course.textContent);
```

Output

```text
JavaScript Course
```

---

# Writing Content

```javascript
course.textContent =
"Advanced JavaScript";
```

---

Using HTML.

```javascript
course.innerHTML =
"<strong>Advanced JavaScript</strong>";
```

---

# Creating Dynamic Content

Suppose user data comes from an API.

```javascript
const username = "Sachin";

document.getElementById("user")

.textContent =

`Welcome ${username}`;
```

Output

```text
Welcome Sachin
```

---

Creating a dynamic list.

```javascript
const skills = [

"HTML",

"CSS",

"JavaScript"

];

document.getElementById("skills")

.innerHTML =

`
<ul>

${skills.map(skill =>

`<li>${skill}</li>`).join("")}

</ul>

`;
```

---

# Real-World Examples

## Shopping Cart

```javascript
document.getElementById("cart")

.textContent = "Cart (5)";
```

---

## Login Greeting

```javascript
document.getElementById("welcome")

.innerText = "Welcome Back!";
```

---

## Notification

```javascript
document.getElementById("notification")

.innerHTML =

"<strong>Success!</strong>";
```

---

## Scoreboard

```javascript
document.getElementById("score")

.textContent = "120";
```

---

## Clock

```javascript
document.getElementById("time")

.textContent =

new Date().toLocaleTimeString();
```

---

# Common Mistakes

## ❌ Using `innerHTML` for Plain Text

Incorrect

```javascript
title.innerHTML = "Hello";
```

---

## ✅ Better

```javascript
title.textContent = "Hello";
```

---

## ❌ Ignoring Security Risks

```javascript
element.innerHTML =

userInput;
```

This can introduce **Cross-Site Scripting (XSS)** vulnerabilities if `userInput` contains malicious HTML or JavaScript.

---

## ✅ Better

```javascript
element.textContent =

userInput;
```

---

## ❌ Expecting Hidden Text with `innerText`

```javascript
console.log(element.innerText);
```

Hidden text is ignored.

---

## ✅ Correct

```javascript
console.log(element.textContent);
```

---

# Best Practices

- Use `textContent` for plain text.
- Use `innerHTML` only when inserting trusted HTML.
- Avoid inserting untrusted user input with `innerHTML`.
- Prefer `textContent` for better performance.
- Update only the necessary DOM elements.

---

# Performance Considerations

| Property | Performance |
|----------|-------------|
| `textContent` | ⭐⭐⭐ Fastest |
| `innerText` | ⭐⭐ Medium |
| `innerHTML` | ⭐ Slowest |

Why?

- `textContent` simply updates text.
- `innerText` calculates visible text and respects CSS.
- `innerHTML` parses HTML and rebuilds DOM elements.

---

# Browser Compatibility

All three properties are supported by:

- Chrome
- Firefox
- Safari
- Edge
- Opera

They are available in all modern browsers.

---

# Summary

- JavaScript changes webpage content by updating the DOM.
- `textContent` is best for plain text.
- `innerText` works with visible text only.
- `innerHTML` inserts HTML markup.
- Choosing the correct property improves security, performance, and readability.

---

# Interview Questions

1. What is `textContent`?
2. What is `innerText`?
3. What is `innerHTML`?
4. What is the difference between `textContent` and `innerText`?
5. Why is `textContent` faster than `innerHTML`?
6. What security issue can occur with `innerHTML`?
7. Which property should be used for user input?
8. Which property supports HTML tags?
9. What happens if you assign HTML to `textContent`?
10. When should you use `innerHTML`?

---

# Practice Exercise

Create a webpage containing:

- A heading
- A paragraph
- A button
- A shopping cart counter
- A notification area
- A user profile section

Use JavaScript to:

1. Change the heading using `textContent`.
2. Update the paragraph using `innerText`.
3. Insert a formatted message using `innerHTML`.
4. Display the current time every second.
5. Create a dynamic unordered list from an array.
6. Update the shopping cart count when a button is clicked.
7. Safely display user input using `textContent`.

---

# Key Takeaway

> **Changing content is one of the most common DOM operations in JavaScript.** Use **`textContent`** for plain text, **`innerText`** for visible text, and **`innerHTML`** only when inserting trusted HTML. Choosing the appropriate property improves performance, security, and maintainability.

---

# Next Lesson

<h2>

➡️ <a href="../0011_changing_styles/changing_styles.md" style="color:#1E90FF;text-decoration:none;">

<strong>Changing Styles</strong>

</a>

</h2>