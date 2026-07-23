# Rendering Engine

## Table of Contents

- Learning Objectives
- Introduction
- Why Do We Need a Rendering Engine?
- What Is a Rendering Engine?
- Popular Rendering Engines
- Responsibilities of a Rendering Engine
- Rendering Pipeline
- Parsing HTML
- Building the DOM
- Parsing CSS
- Building the CSSOM
- Creating the Render Tree
- Layout (Reflow)
- Paint
- Compositing
- JavaScript and Rendering
- Rendering Engine Workflow
- Browser Rendering Engines
- Real-World Example
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

- Explain what a rendering engine is.
- Understand how browsers convert HTML into webpages.
- Describe each stage of the rendering pipeline.
- Understand how JavaScript affects rendering.
- Optimize webpages for better rendering performance.

---

# Introduction

When you open a webpage, the browser does not directly display the HTML file.

Instead, it reads the HTML, CSS, and JavaScript, processes them, calculates the layout, paints every pixel, and finally displays the webpage.

The browser component responsible for this entire process is called the **Rendering Engine**.

Without a rendering engine, browsers would only display raw HTML code instead of beautifully designed webpages.

---

# Why Do We Need a Rendering Engine?

A rendering engine is responsible for converting web resources into a visual webpage.

It performs tasks such as:

- Reading HTML
- Reading CSS
- Creating page structure
- Calculating element positions
- Drawing text and images
- Updating the screen when JavaScript changes the page

---

# What Is a Rendering Engine?

A **Rendering Engine** is a browser component that converts HTML, CSS, and related resources into the visual webpage that users see.

It understands:

- HTML
- CSS
- Images
- Fonts
- SVG
- Canvas
- Animations

The rendering engine works closely with the JavaScript engine to update the webpage dynamically.

---

# Popular Rendering Engines

| Browser | Rendering Engine |
|----------|------------------|
| Google Chrome | Blink |
| Microsoft Edge | Blink |
| Mozilla Firefox | Gecko |
| Apple Safari | WebKit |

---

# Responsibilities of a Rendering Engine

The rendering engine performs the following tasks:

- Parse HTML
- Build the DOM
- Parse CSS
- Build the CSSOM
- Create the Render Tree
- Calculate Layout
- Paint pixels
- Composite layers
- Update the screen

---

# Rendering Pipeline

The browser rendering pipeline looks like this:

```text
HTML
   │
   ▼
DOM
   │
   ▼
CSS
   │
   ▼
CSSOM
   │
   ▼
Render Tree
   │
   ▼
Layout (Reflow)
   │
   ▼
Paint
   │
   ▼
Compositing
   │
   ▼
Screen
```

---

# Parsing HTML

The rendering engine first downloads the HTML document.

Example:

```html
<h1>Hello World</h1>

<p>Welcome to JavaScript.</p>
```

The engine reads the HTML character by character.

---

# Building the DOM

After parsing HTML, the browser creates the **Document Object Model (DOM)**.

Example:

```html
<body>

<h1>Hello</h1>

<p>World</p>

</body>
```

DOM Tree

```text
Document

└── html

    └── body

        ├── h1

        └── p
```

The DOM represents every HTML element as an object.

---

# Parsing CSS

The browser downloads CSS files.

Example:

```css
h1{

color:blue;

}
```

The CSS parser reads every rule.

---

# Building the CSSOM

The CSS parser creates the **CSS Object Model (CSSOM)**.

The CSSOM stores:

- Colors
- Fonts
- Margins
- Padding
- Borders
- Display properties

---

# Creating the Render Tree

The browser combines:

- DOM
- CSSOM

to create the **Render Tree**.

Only visible elements appear in the Render Tree.

Example:

```html
<div style="display:none">

Hidden

</div>
```

The hidden element is part of the DOM but **not** part of the Render Tree.

---

# Layout (Reflow)

During the layout phase, the browser calculates:

- Width
- Height
- Position
- Margin
- Padding
- Border
- Available space

Every visible element receives its exact position.

---

# Paint

Now the browser paints pixels.

It draws:

- Text
- Images
- Borders
- Background colors
- Shadows
- Gradients
- Icons

Nothing is interactive yet.

---

# Compositing

Modern browsers divide pages into layers.

The GPU combines these layers into the final image.

Benefits:

- Faster scrolling
- Better animations
- Hardware acceleration

---

# JavaScript and Rendering

JavaScript can change the webpage at any time.

Example:

```javascript
document.body.style.backgroundColor = "black";
```

The browser must:

1. Update the DOM.
2. Recalculate styles.
3. Update the Render Tree.
4. Perform Layout if necessary.
5. Paint again.

This process is called **re-rendering**.

---

# Rendering Engine Workflow

```text
Download HTML

↓

Parse HTML

↓

Create DOM

↓

Download CSS

↓

Parse CSS

↓

Create CSSOM

↓

Render Tree

↓

Layout

↓

Paint

↓

Composite Layers

↓

Display Webpage
```

---

# Browser Rendering Engines

### Blink

Used by:

- Chrome
- Edge
- Opera
- Brave

---

### Gecko

Used by:

- Firefox

---

### WebKit

Used by:

- Safari

---

# Real-World Example

Suppose you open:

```
https://github.com
```

The rendering engine:

1. Downloads HTML.
2. Builds the DOM.
3. Downloads CSS.
4. Builds the CSSOM.
5. Downloads images.
6. Executes JavaScript.
7. Creates the Render Tree.
8. Calculates Layout.
9. Paints the interface.
10. Displays GitHub.

---

# Advantages

- Fast webpage rendering.
- Efficient layout calculations.
- Supports animations.
- Supports responsive design.
- Uses GPU acceleration.
- Optimizes screen updates.

---

# Limitations

- Large DOM trees reduce performance.
- Complex CSS slows rendering.
- Heavy JavaScript can block rendering.
- Frequent layout recalculations reduce speed.

---

# Common Mistakes

### ❌ Incorrect

Changing the DOM repeatedly inside a loop.

```javascript
for(let i=0;i<1000;i++){

document.body.innerHTML += i;

}
```

This causes repeated rendering.

---

### ✅ Better

Build content first.

```javascript
let output="";

for(let i=0;i<1000;i++){

output+=i;

}

document.body.innerHTML=output;
```

The browser renders only once.

---

# Best Practices

- Keep the DOM small.
- Reduce unnecessary CSS.
- Batch DOM updates.
- Avoid forced synchronous layouts.
- Optimize images.
- Use CSS animations when possible.
- Minimize reflows and repaints.

---

# Summary

- The Rendering Engine converts HTML and CSS into a visible webpage.
- It creates the DOM and CSSOM.
- It combines them into the Render Tree.
- Layout calculates element positions.
- Paint draws pixels.
- Compositing combines layers using the GPU.
- JavaScript can trigger re-rendering.

---

# Interview Questions

1. What is a rendering engine?
2. Name popular rendering engines.
3. What is the DOM?
4. What is the CSSOM?
5. What is the Render Tree?
6. What is Layout (Reflow)?
7. What is Paint?
8. What is Compositing?
9. Why are hidden elements excluded from the Render Tree?
10. How does JavaScript affect rendering?

---

# Practice Exercise

1. Open Chrome Developer Tools.
2. Open the **Performance** tab.
3. Record page loading.
4. Observe:
   - DOM creation
   - Style calculation
   - Layout
   - Paint
   - Composite Layers
5. Modify a webpage using JavaScript and observe how the rendering process updates.

---

# Key Takeaway

> The rendering engine is responsible for transforming HTML, CSS, and other web resources into the interactive webpages users see. It builds the DOM and CSSOM, creates the Render Tree, calculates layout, paints pixels, and continuously updates the page whenever changes occur.

---

# Next Lesson

<h2>
➡️ <a href="../0006_javascript_engine/javascript_engine.md" style="color:#1E90FF;text-decoration:none;">
<strong>JavaScript Engine</strong>
</a>
</h2>