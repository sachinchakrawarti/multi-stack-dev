# Challenge 05: Build a Complete Mini Website

## Difficulty

🔴 Advanced

---

# Objective

In this challenge, you will combine everything you have learned in the **CSS Selectors** chapter to build a complete multi-section website.

This is a real-world project that demonstrates how different CSS selectors work together to create a professional webpage.

---

# Concepts Covered

- Universal Selector
- Element Selectors
- Class Selectors
- ID Selector
- Grouping Selector
- Descendant Selectors
- Multiple Classes
- Selector Specificity
- CSS Reset
- Hover Effects
- Flexbox
- Box Shadow
- Border Radius

---

# Problem Statement

Build the following website.

```text
-------------------------------------------------------------
 MultiStackDev

 Home   Courses   Projects   Blog   Contact        Login
-------------------------------------------------------------

              Learn Web Development
      HTML • CSS • JavaScript • React

         [ Start Learning ]

-------------------------------------------------------------

      HTML            CSS           JavaScript

-------------------------------------------------------------

                Featured Courses

+-------------+ +-------------+ +-------------+
|   Course    | |   Course    | |   Course    |
|    Card     | |    Card     | |    Card     |
+-------------+ +-------------+ +-------------+

-------------------------------------------------------------

                Student Reviews

+-----------------------+
| ⭐⭐⭐⭐⭐                |
| Amazing Course!       |
+-----------------------+

-------------------------------------------------------------

                Contact Us

Name
Email
Message

[ Send Message ]

-------------------------------------------------------------

© 2026 MultiStackDev
```

---

# Project Structure

Create the following files.

```text
mini-website/

├── index.html
└── style.css
```

---

# Website Sections

Your website must include the following sections.

## 1. Navigation Bar

Include:

- Website Logo
- Home
- Courses
- Projects
- Blog
- Contact
- Login Button

Requirements

- Horizontal layout
- Blue background
- White text
- Hover effects
- Flexbox

---

## 2. Hero Section

Include:

- Main Heading
- Subtitle
- Description
- Call-to-Action Button

Example

```text
Learn Web Development

Build modern websites with HTML, CSS, and JavaScript.

[ Start Learning ]
```

---

## 3. Technology Section

Display technologies using cards.

Example

```text
HTML

CSS

JavaScript

React
```

Each card should have:

- Icon or emoji
- Title
- Short description

---

## 4. Featured Courses

Create **three course cards**.

Each card should contain:

- Image
- Course Name
- Description
- Rating
- Price
- Enroll Button

Example

```text
HTML Masterclass

⭐⭐⭐⭐⭐

₹999

[ Enroll ]
```

---

## 5. Student Reviews

Create review cards.

Each review should contain:

- Student Name
- Rating
- Review Text

Example

```text
⭐⭐⭐⭐⭐

"The explanations are simple and easy to understand."
```

Display at least **three review cards**.

---

## 6. Contact Section

Create a contact form.

Include:

- Name
- Email
- Subject
- Message
- Submit Button

Use proper labels and placeholders.

---

## 7. Footer

Include:

- Copyright
- Social Links
- Email
- GitHub
- LinkedIn

Example

```text
© 2026 MultiStackDev

GitHub | LinkedIn | YouTube
```

---

# CSS Requirements

Apply the following.

## CSS Reset

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
```

---

## Use These Selectors

```css
*
body
header
footer
section
nav
main
h1
h2
p
button

.container

.logo

.hero

.hero h1

.hero p

.btn

.btn:hover

.course-card

.course-card img

.course-card h2

.course-card p

.review-card

.contact-form

.contact-form input

.contact-form textarea

.contact-form button

.nav-links a

.nav-links a:hover

.active

#contact
```

---

# Styling Requirements

Use:

- Flexbox
- Rounded corners
- Box Shadow
- Hover animations
- Smooth transitions
- Responsive spacing
- Modern typography

Color Theme

- Primary → `#1565c0`
- Secondary → `#0d47a1`
- Background → `#f5f7fa`
- White Cards
- Dark Text

---

# Responsive Requirement (Bonus)

For screens smaller than **768px**:

- Stack navigation vertically
- Display course cards in one column
- Display review cards in one column
- Resize headings
- Make buttons full width

---

# Bonus Challenges

## Bonus 1

Add a sticky navigation bar.

---

## Bonus 2

Add smooth scrolling.

Example

```css
html{
    scroll-behavior:smooth;
}
```

---

## Bonus 3

Highlight the active navigation link.

---

## Bonus 4

Add hover animation on course cards.

Example

```css
.course-card:hover{
    transform:translateY(-10px);
}
```

---

## Bonus 5

Create a dark mode version using CSS variables.

---

## Bonus 6

Add icons using **Font Awesome**.

---

## Bonus 7

Add a responsive hamburger menu using only HTML and CSS (optional).

---

# Learning Outcomes

After completing this challenge, you should be able to:

- Build a complete multi-section website
- Organize HTML semantically
- Apply CSS selectors correctly
- Use Flexbox layouts
- Create reusable components
- Style forms and cards
- Design responsive pages
- Write clean, maintainable CSS

---

# Challenge Checklist

- [ ] CSS Reset applied
- [ ] Navigation bar completed
- [ ] Hero section completed
- [ ] Technology cards created
- [ ] Three course cards created
- [ ] Student review cards created
- [ ] Contact form created
- [ ] Footer added
- [ ] Hover effects implemented
- [ ] Flexbox used
- [ ] Box shadows added
- [ ] Rounded corners added
- [ ] Responsive layout implemented
- [ ] Clean code structure maintained

---

# Estimated Time

**60–90 Minutes**

---

# Congratulations! 🎉

By completing this challenge, you have successfully practiced the core concepts of **CSS Selectors** through a real-world website project.

You are now ready to move on to the next chapter:

➡ **Chapter 03: CSS Colors**