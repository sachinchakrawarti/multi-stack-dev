# Playwright Architecture

---

# Learning Objectives

After completing this chapter, you will be able to:

- Understand the architecture of Playwright.
- Learn how Playwright communicates with browsers.
- Understand Browser, Browser Context, and Page.
- Learn the Playwright execution workflow.
- Understand why Playwright is faster than traditional browser automation tools.

---

# Introduction

Every automation framework follows an internal architecture to communicate with web browsers.

Understanding Playwright's architecture helps you write better automation scripts, debug problems more easily, and understand how browser automation works behind the scenes.

---

# What is Architecture?

Architecture refers to the internal design and structure of a software system.

For Playwright, architecture explains:

- How your automation code is executed.
- How Playwright launches browsers.
- How browser actions are performed.
- How results are returned.

---

# High-Level Architecture

```text
               Automation Script
                       │
                       ▼
               Playwright Library
                       │
                       ▼
          Browser Communication Layer
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
    Chromium       Firefox        WebKit
        │              │              │
        ▼              ▼              ▼
     Web Pages      Web Pages      Web Pages
```

---

# Main Components

Playwright architecture consists of five major components.

1. Automation Script
2. Playwright Library
3. Browser Engine
4. Browser Context
5. Web Page

---

# 1. Automation Script

This is the code written by the developer.

Example:

```javascript
await page.goto("https://example.com");

await page.click("button");

await page.fill("#username", "John");
```

The automation script tells Playwright what actions to perform.

---

# 2. Playwright Library

The Playwright Library is responsible for:

- Launching browsers
- Sending commands
- Receiving responses
- Handling waits
- Finding elements
- Managing browser contexts

It acts as the bridge between your code and the browser.

---

# 3. Browser Engine

Playwright directly communicates with browser engines.

Supported engines are:

- Chromium
- Firefox
- WebKit

Unlike Selenium, Playwright does not depend on WebDriver for these browsers.

---

# Browser Engines

## Chromium

Used by:

- Google Chrome
- Microsoft Edge
- Brave
- Opera

---

## Firefox

Mozilla's browser engine.

Useful for cross-browser compatibility testing.

---

## WebKit

Used by Safari.

Important for testing Apple devices.

---

# 4. Browser

A Browser object represents the entire browser application.

Example:

```text
Google Chrome
```

One browser can contain many browser contexts.

---

# Browser Architecture

```text
Browser
   │
   ├── Context 1
   │      ├── Page 1
   │      └── Page 2
   │
   ├── Context 2
   │      ├── Page 1
   │      └── Page 2
   │
   └── Context 3
          └── Page 1
```

---

# 5. Browser Context

A Browser Context is an isolated browser session.

Each context has its own:

- Cookies
- Cache
- Local Storage
- Session Storage

Contexts do not share data.

Think of a Browser Context as an independent user.

---

# Real-World Example

Imagine Chrome has three users logged in simultaneously.

```text
Chrome

├── User A
├── User B
└── User C
```

Each user has:

- Different login
- Different cookies
- Different session

In Playwright, each user is a Browser Context.

---

# Why Browser Contexts?

Instead of opening multiple browser windows,

Playwright creates multiple isolated contexts.

Advantages:

- Faster
- Less memory
- Independent sessions
- Better testing

---

# Page Object

A Page represents one browser tab.

Example:

```text
Browser

└── Context

      ├── Amazon
      ├── Google
      └── YouTube
```

Each tab is represented by a Page object.

---

# Browser → Context → Page Relationship

```text
Browser

    │

    ▼

Browser Context

    │

    ▼

Page

    │

    ▼

Website
```

---

# Execution Flow

```text
Automation Script

        │

        ▼

Playwright

        │

        ▼

Launch Browser

        │

        ▼

Create Context

        │

        ▼

Create Page

        │

        ▼

Navigate Website

        │

        ▼

Find Element

        │

        ▼

Perform Action

        │

        ▼

Receive Result
```

---

# Communication Flow

```text
Developer

      │

      ▼

JavaScript Code

      │

      ▼

Playwright API

      │

      ▼

Browser Engine

      │

      ▼

Website
```

---

# Why Playwright is Faster

Playwright directly communicates with browser engines.

Advantages:

- Less overhead
- Faster execution
- Better synchronization
- Automatic waiting
- Stable automation

---

# Comparison with Selenium

```text
Selenium

Code
 │
 ▼
WebDriver
 │
 ▼
Browser Driver
 │
 ▼
Browser
```

Playwright

```text
Code
 │
 ▼
Playwright
 │
 ▼
Browser Engine
```

Playwright has fewer communication layers, which generally results in simpler communication and reduced overhead.

---

# Multiple Context Example

```text
Browser

├── Context A
│      ├── Gmail
│      └── YouTube
│
├── Context B
│      ├── Facebook
│      └── Instagram
│
└── Context C
       └── Amazon
```

Each context is completely isolated.

---

# Benefits of Playwright Architecture

- Fast execution
- Modern browser support
- Better reliability
- Less flaky tests
- Automatic waiting
- Multiple isolated users
- Efficient resource usage
- Easy debugging

---

# Summary

Playwright architecture consists of several layers working together:

```text
Automation Script
        │
        ▼
Playwright Library
        │
        ▼
Browser
        │
        ▼
Browser Context
        │
        ▼
Page
        │
        ▼
Website
```

Understanding this hierarchy is essential because almost every Playwright program follows this sequence:

- Launch Browser
- Create Browser Context
- Open Page
- Perform Actions
- Validate Results
- Close Resources

---

# Key Takeaways

- Playwright directly communicates with browser engines.
- A Browser represents the browser application.
- A Browser Context represents an isolated user session.
- A Page represents a browser tab.
- Multiple contexts can exist inside one browser.
- Multiple pages can exist inside one context.
- Browser contexts improve performance and isolation.
- Playwright's architecture is designed for speed, reliability, and scalability.

---

# Next Chapter

**0005_browser_support**