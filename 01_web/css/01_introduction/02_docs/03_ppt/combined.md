---
marp: true
theme: custom
paginate: true
size: 16:9
headingDivider: 1
footer: "CSS Complete Course | © Sachin Chakrawarti"
style: |
  section{
      font-size:30px;
  }
---

<!-- _class: lead -->

# CSS Complete Course

## Chapter 1 : Introduction to CSS

**Author:** Sachin Chakrawarti

---

::include(slides/01_title.md)

::include(slides/02_agenda.md)

::include(slides/03_what_is_css.md)

::include(slides/04_history_of_css.md)

::include(slides/05_why_use_css.md)

::include(slides/06_how_css_works.md)

::include(slides/07_types_of_css.md)

::include(slides/08_css_syntax.md)

::include(slides/09_css_comments.md)

::include(slides/10_best_practices.md)

::include(slides/11_common_mistakes.md)

::include(slides/12_interview_questions.md)

::include(slides/13_summary.md)

::include(slides/14_faq.md)

::include(slides/15_thank_you.md)

---
marp: true
theme: custom
paginate: true
footer: "CSS Complete Course | © Sachin Chakrawarti"
---

<style>
/* slides/01_title.css - Blue Theme */
.title-slide {
    background: linear-gradient(135deg, #0a1628 0%, #1a365d 30%, #2b6cb0 70%, #3182ce 100%);
    color: white;
    text-align: center;
    padding: 60px 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    overflow: hidden;
}

/* Animated background particles */
.title-slide::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(66, 153, 225, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(49, 130, 206, 0.1) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.1) rotate(5deg); }
}

.title-slide * {
    position: relative;
    z-index: 1;
}

.title-slide h1 {
    font-size: 4.5em;
    margin-bottom: 20px;
    background: linear-gradient(to right, #63b3ed, #bee3f8, #63b3ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    font-weight: 800;
    letter-spacing: 3px;
}

.title-slide .subtitle {
    font-size: 2em;
    color: #90cdf4;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
}

.title-slide .chapter-number {
    font-size: 1.2em;
    color: #63b3ed;
    background: rgba(49, 130, 206, 0.3);
    padding: 8px 25px;
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 20px;
    border: 2px solid rgba(99, 179, 237, 0.3);
}

.title-slide .author {
    font-size: 1.5em;
    color: #bee3f8;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 2px solid rgba(99, 179, 237, 0.3);
    display: inline-block;
}

.title-slide .role {
    font-size: 1em;
    color: #90cdf4;
    margin-top: 5px;
    font-weight: 300;
}

.title-slide .year {
    font-size: 0.9em;
    color: #63b3ed;
    margin-top: 15px;
    opacity: 0.7;
}

/* Decorative elements */
.title-slide .deco-line {
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #63b3ed, #bee3f8);
    margin: 20px auto;
    border-radius: 2px;
}

.title-slide .deco-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
}

.title-slide .deco-dots span {
    width: 8px;
    height: 8px;
    background: #63b3ed;
    border-radius: 50%;
    opacity: 0.5;
}

.title-slide .deco-dots span:nth-child(2) {
    opacity: 0.8;
    transform: scale(1.3);
}
</style>



<!-- _class: title-slide -->
<!-- _style: slides/01_title.css -->

<div class="chapter-number">Chapter 01</div>

# CSS Complete Course

<div class="deco-line"></div>
<div class="deco-dots">
    <span></span>
    <span></span>
    <span></span>
</div>

<div class="subtitle">Introduction to CSS</div>

<div class="author">Sachin Chakrawarti</div>
<div class="role">Full Stack Developer</div>
<div class="year">2026</div>

---

# Agenda

1. What is CSS?
2. History of CSS
3. Why Use CSS?
4. How CSS Works
5. Types of CSS
6. CSS Syntax
7. CSS Comments
8. Best Practices
9. Common Mistakes
10. Interview Questions
11. Summary
12. FAQ

---

# What is CSS?

CSS stands for

> **Cascading Style Sheets**

---

## Definition

CSS is a stylesheet language used to describe the presentation of HTML documents.

It controls

- Colors
- Fonts
- Layout
- Margin
- Padding
- Borders
- Animations
- Responsive Design

---

## HTML vs CSS

| HTML | CSS |
|------|------|
| Structure | Presentation |
| Content | Design |
| Skeleton | Skin |

---

## Example

HTML

```html
<h1>Hello World</h1>
```

CSS

```css
h1{
    color:blue;
    font-size:40px;
}
```

Result

# Hello World

(Blue and larger text)

---

## Why Learn CSS?

- Build beautiful websites
- Responsive layouts
- Better UI
- Better UX
- Required for Frontend Development

---

# History of CSS

---

## Timeline

| Year | Event |
|------|-------|
|1994|CSS proposed|
|1996|CSS1|
|1998|CSS2|
|2011+|CSS3 Modules|

---

## Inventor

**Håkon Wium Lie**

Proposed CSS in **1994**

---

## Maintained By

**World Wide Web Consortium (W3C)**

Responsible for developing CSS standards.

---

## Why Was CSS Created?

Before CSS

- HTML contained styling
- Difficult maintenance
- Repeated code

CSS separated

- Structure
- Presentation

making websites cleaner and easier to maintain.

---

# Why Use CSS?

---

## Without CSS

- Plain webpages
- Default browser styles
- Poor user experience

---

## With CSS

- Attractive websites
- Responsive layouts
- Better typography
- Animations
- Professional UI

---

## Advantages

✔ Separation of Content & Design

✔ Reusable Styles

✔ Easy Maintenance

✔ Faster Development

✔ Responsive Websites

✔ Better Accessibility

---

## Real World

Every modern website uses CSS.

Examples

- Amazon
- YouTube
- Netflix
- Facebook
- GitHub

---

# Thank You

Next Topic

## How CSS Works

---

# How CSS Works

---

## Web Technologies

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Presentation |
| JavaScript | Behavior |

---

# Browser Rendering Process

```text
User Requests Website
        │
        ▼
Download HTML
        │
        ▼
Parse HTML
        │
        ▼
Download CSS
        │
        ▼
Parse CSS
        │
        ▼
Match Selectors
        │
        ▼
Apply Styles
        │
        ▼
Render Web Page
```

---

# Browser Workflow

```text
HTML
 │
 ▼
DOM Tree
 │
 ▼
CSS
 │
 ▼
CSSOM Tree
 │
 ▼
Render Tree
 │
 ▼
Layout
 │
 ▼
Paint
 │
 ▼
Screen
```

---

# Example

HTML

```html
<h1>Hello CSS</h1>
```

CSS

```css
h1{
    color:blue;
    font-size:40px;
}
```

Browser Output

- Blue heading
- 40px font size

---

# Key Points

✅ Browser downloads HTML

✅ Browser downloads CSS

✅ CSS matches HTML elements

✅ Styles are applied

✅ Final webpage is rendered

---

# Types of CSS

---

# Three Types

1. Inline CSS

2. Internal CSS

3. External CSS

---

# Inline CSS

```html
<h1 style="color:red;">
Hello
</h1>
```

### Advantages

- Quick testing

### Disadvantages

- Hard to maintain

---

# Internal CSS

```html
<head>

<style>

h1{
    color:blue;
}

</style>

</head>
```

Best for

- Small projects

---

# External CSS

style.css

```css
h1{
    color:green;
}
```

HTML

```html
<link rel="stylesheet" href="style.css">
```

---

# Comparison

| Feature | Inline | Internal | External |
|---------|--------|----------|----------|
|Reusable|❌|❌|✅|
|Maintainable|❌|⚠|✅|
|Recommended|❌|⚠|✅|

---

# CSS Priority

```text
Inline CSS
      ▲
Internal CSS
      ▲
External CSS
```

Highest Priority

**Inline CSS**

---

# Recommendation

Always use

## External CSS

for professional projects.

---

# CSS Syntax

---

# Basic Syntax

```css
selector{

    property:value;

}
```

---

# Example

```css
h1{

color:blue;

font-size:40px;

}
```

---

# Components

```
Selector

↓

Declaration Block

↓

Property

↓

Value
```

---

# Declaration

```css
color:red;
```

Property

```
color
```

Value

```
red
```

---

# Multiple Properties

```css
p{

color:gray;

font-size:18px;

line-height:1.5;

}
```

---

# Comments

```css
/* Heading Styles */

h1{

color:red;

}
```

---

# Best Syntax

```css
.card{

padding:20px;

background:white;

border-radius:10px;

}
```

Readable CSS is maintainable CSS.

---

# CSS Comments

---

# Syntax

```css
/* This is a comment */
```

---

# Why Comments?

- Explain code

- Organize sections

- Help teammates

- Improve readability

---

# Example

```css
/* Navigation */

.navbar{

background:#1565c0;

}
```

---

# Large Projects

```css
/*==================

Global Styles

===================*/

/*==================

Header

===================*/

/*==================

Footer

===================*/
```

---

# Bad Practice

CSS does NOT support

```css
// comment
```

Always use

```css
/* comment */
```

---

# Best Practices

✔ Explain WHY

✔ Organize Sections

✔ Remove Old Comments

✔ Keep Comments Short

---

# CSS Best Practices

---

# Write External CSS

✔ Reusable

✔ Clean HTML

✔ Easy Maintenance

---

# Use Meaningful Class Names

❌

```css
.red{}
.box1{}
```

✅

```css
.primary-button{}

.user-card{}
```

---

# Keep CSS DRY

Don't Repeat Yourself

❌

```css
.card1{

margin:20px;

}

.card2{

margin:20px;

}
```

✅

```css
.card{

margin:20px;

}
```

---

# Use CSS Variables

```css
:root{

--primary:#1565c0;

}

.button{

background:var(--primary);

}
```

---

# Responsive Design

```css
@media(max-width:768px){

.container{

width:95%;

}

}
```

---

# Organize Files

```text
css/

base/

layout/

components/

pages/

utilities/
```

---

# Professional Checklist

✅ External CSS

✅ Meaningful Classes

✅ Responsive Design

✅ Reusable Code

✅ Comments

✅ Remove Unused CSS

✅ Consistent Formatting

---

# Remember

> Clean CSS is easier to read,

> easier to maintain,

> and easier to scale.

---

# Common CSS Mistakes

---

## Missing Semicolon

❌ Incorrect

```css
h1{
    color: blue
    font-size: 32px;
}
```

✅ Correct

```css
h1{
    color: blue;
    font-size: 32px;
}
```

---

## Missing Units

❌

```css
width:200;
```

✅

```css
width:200px;
```

---

## Using Inline CSS Everywhere

❌

```html
<button style="background:red;">
Buy
</button>
```

✅

```html
<button class="btn">
Buy
</button>
```

```css
.btn{
    background:red;
}
```

---

## Overusing !important

❌

```css
color:red !important;
```

Instead

- Improve specificity
- Organize selectors

---

## Long Selectors

❌

```css
body div.container ul li a span{
}
```

✅

```css
.nav-link{
}
```

---

## Duplicate CSS

❌

```css
.card1{
    margin:20px;
}

.card2{
    margin:20px;
}
```

✅

```css
.card{
    margin:20px;
}
```

---

# Tips

✔ Use External CSS

✔ Follow DRY

✔ Write Meaningful Classes

✔ Test on Multiple Devices

---

# CSS Interview Questions

---

## Q1. What does CSS stand for?

**Answer**

Cascading Style Sheets

---

## Q2. Why is CSS used?

- Styling
- Layout
- Responsive Design
- Better UI

---

## Q3. Types of CSS?

- Inline
- Internal
- External

---

## Q4. Recommended CSS?

✅ External CSS

---

## Q5. CSS Syntax

```css
selector{

property:value;

}
```

---

## Q6. What is a Selector?

A selector chooses the HTML element(s) to style.

Example

```css
h1{
}
```

---

## Q7. What is a Property?

Example

```css
color
```

---

## Q8. What is a Value?

Example

```css
blue
```

---

## Quick Revision

| Question | Answer |
|-----------|--------|
| CSS | Cascading Style Sheets |
| Inventor | Håkon Wium Lie |
| Maintained By | W3C |
| File Extension | .css |
| Best CSS Type | External |

---

# Chapter Summary

---

## You Learned

✅ What is CSS

✅ History of CSS

✅ Why CSS

✅ How CSS Works

✅ Types of CSS

✅ CSS Syntax

✅ CSS Comments

✅ Best Practices

✅ Common Mistakes

---

## Workflow

```text
HTML
   │
   ▼
CSS
   │
   ▼
Browser
   │
   ▼
Styled Webpage
```

---

## Core Technologies

| Technology | Purpose |
|------------|---------|
| HTML | Structure |
| CSS | Presentation |
| JavaScript | Behavior |

---

## Professional Tips

- Use External CSS
- Keep HTML Clean
- Use Meaningful Class Names
- Organize CSS
- Write Responsive Code
- Avoid Duplicate Styles

---

# Next Chapter

## CSS Selectors

- Universal Selector
- Element Selector
- Class Selector
- ID Selector
- Attribute Selector
- Pseudo Classes
- Pseudo Elements

---

# Frequently Asked Questions

---

## Is CSS Easy?

Yes.

CSS has simple syntax but mastering layouts and responsive design takes practice.

---

## Can HTML Work Without CSS?

✅ Yes

But the webpage looks plain.

---

## Can CSS Work Without HTML?

❌ No

CSS styles HTML elements.

---

## Is CSS a Programming Language?

❌ No

It is a **Stylesheet Language**.

---

## Which CSS Type Should I Use?

Always use

✅ External CSS

---

## What Should I Learn Next?

- Selectors
- Colors
- Units
- Typography
- Box Model
- Display
- Position
- Flexbox
- Grid
- Responsive Design

---

## Can CSS Create Animations?

✅ Yes

Using

- Transition
- Transform
- Animation
- @keyframes

---

## Final Advice

Practice every concept by building projects.

Learning CSS comes through writing CSS.

---

<!-- _class: lead -->

# 🎉 Thank You!

## CSS Introduction Completed

---

# Congratulations!

You have completed

# Chapter 1

**Introduction to CSS**

---

## Next Chapter

# CSS Selectors

You'll Learn

- Universal Selector
- Element Selector
- Class Selector
- ID Selector
- Attribute Selector
- Pseudo Classes
- Pseudo Elements

---

# Keep Learning 🚀

> Practice every day.

> Build projects.

> Read documentation.

> Explore modern CSS.

---

# Questions?

📧 Sachin Chakrawarti

Happy Coding! 💙

---

