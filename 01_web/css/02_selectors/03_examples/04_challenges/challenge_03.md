# Challenge 03: Build a Navigation Menu

## Difficulty

🟡 Intermediate

---

# Objective

In this challenge, you will build a professional navigation menu using CSS selectors.

This exercise will help you practice:

- Universal Selector
- Element Selectors
- Class Selectors
- Descendant Selectors
- Pseudo-class Selectors
- CSS Reset
- Flexbox

---

# Problem Statement

Create a navigation bar like the one below.

```
-------------------------------------------------------------
 MultiStackDev

 Home   Courses   Projects   Blog   Contact          Login
-------------------------------------------------------------
```

The navigation should be displayed horizontally and centered vertically.

---

# Requirements

## HTML

Create the following structure:

- Header
- Logo
- Navigation
- Unordered List
- Five Navigation Links
- Login Button

Example:

```html
<header class="navbar">

    <div class="logo">
        MultiStackDev
    </div>

    <nav>

        <ul class="nav-links">

            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>

        </ul>

    </nav>

    <button class="btn">
        Login
    </button>

</header>
```

---

# CSS Requirements

Apply the following styles:

## Universal Selector

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

---

## Navigation Bar

- Blue background
- White text
- Horizontal layout
- Space between logo, menu, and button
- Vertically centered

---

## Navigation Links

- Remove list bullets
- Remove underline
- White color
- Add spacing between links
- Smooth hover transition

---

## Hover Effect

When hovering over a link:

- Change text color
- Add underline or bottom border

---

## Login Button

- White background
- Blue text
- Rounded corners
- Cursor pointer
- Hover effect

---

# CSS Selectors to Use

Use all of the following:

```css
*
body
.navbar
.logo
.nav-links
.nav-links li
.nav-links a
.nav-links a:hover
.btn
.btn:hover
```

---

# Expected Output

```
----------------------------------------------------------
 MultiStackDev

 Home  Courses  Projects  Blog  Contact      [ Login ]
----------------------------------------------------------
```

---

# Bonus Challenge 1

Highlight the active menu item.

Example:

```css
.active{
    color:yellow;
}
```

---

# Bonus Challenge 2

Add a Hero section below the navigation.

Include:

- Heading
- Paragraph
- Get Started button

---

# Bonus Challenge 3

Make the navigation responsive.

For screens smaller than **768px**:

- Stack the navigation vertically, or
- Wrap menu items to the next line

---

# Learning Outcomes

After completing this challenge, you should be able to:

- Build a navigation bar from scratch
- Use Flexbox for horizontal layouts
- Apply CSS Reset
- Style links using descendant selectors
- Create hover effects
- Write clean, reusable CSS
- Build a responsive navigation menu

---

# Challenge Checklist

- [ ] CSS Reset applied
- [ ] Navigation bar created
- [ ] Logo added
- [ ] Menu items displayed horizontally
- [ ] Links styled correctly
- [ ] Hover effects added
- [ ] Login button styled
- [ ] Flexbox used
- [ ] Responsive layout implemented (Bonus)

---

# Estimated Time

**20–30 Minutes**

---

# Next Challenge

➡ **Challenge 04: Build a Product Card**