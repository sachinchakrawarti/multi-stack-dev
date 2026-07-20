# Playwright Features

---

# Learning Objectives

After completing this chapter, you will be able to:

- Understand the major features of Playwright.
- Learn why Playwright is popular for modern web automation.
- Identify features that improve speed, reliability, and developer productivity.
- Know which Playwright features are built-in and require little configuration.

---

# Introduction

Playwright is one of the most feature-rich browser automation frameworks available today.

Unlike older automation tools that require multiple third-party libraries, Playwright includes many advanced capabilities out of the box.

These built-in features make automation faster, more reliable, and easier to maintain.

---

# Major Features of Playwright

Playwright provides the following core features:

- Cross-browser automation
- Cross-platform support
- Multiple programming languages
- Automatic waiting
- Auto-retry assertions
- Powerful locators
- Headless and headed execution
- Browser contexts
- Multiple tabs and windows
- Frames and iframes support
- File upload and download
- Screenshots
- Video recording
- PDF generation
- Network interception
- API testing
- Mobile device emulation
- Parallel execution
- Built-in test runner
- Trace Viewer
- Code Generator

---

# 1. Cross-Browser Support

One Playwright script can run on multiple browsers.

Supported browsers include:

- Chromium
- Google Chrome
- Microsoft Edge
- Firefox
- WebKit (Safari Engine)

This helps ensure that web applications work consistently across different browsers.

---

# 2. Cross-Platform Support

Playwright works on multiple operating systems.

- Windows
- Linux
- macOS

The same automation script can typically run without modification across these platforms.

---

# 3. Multiple Programming Languages

Playwright officially supports:

- JavaScript
- TypeScript
- Python
- Java
- C# (.NET)

Development teams can choose the language that best fits their project.

---

# 4. Automatic Waiting

One of Playwright's most important features is **automatic waiting**.

Instead of failing immediately when an element is not ready, Playwright waits until it becomes available.

Examples:

- Wait for buttons
- Wait for text boxes
- Wait for navigation
- Wait for page loading
- Wait for network requests

This greatly reduces flaky tests.

---

# 5. Auto-Retry Assertions

Assertions automatically retry until the expected condition is met or the timeout expires.

Examples:

- Element is visible
- Element contains text
- URL has changed
- Checkbox is checked

This improves test reliability.

---

# 6. Powerful Locators

Playwright provides several ways to locate elements.

Examples:

- Text
- Role
- Label
- Placeholder
- CSS Selector
- XPath
- Test ID

These locator strategies make tests easier to read and maintain.

---

# 7. Headless and Headed Mode

Playwright supports two execution modes.

## Headless Mode

The browser runs in the background without displaying a window.

Advantages:

- Faster execution
- Suitable for CI/CD pipelines
- Lower resource usage

---

## Headed Mode

The browser window is visible during execution.

Advantages:

- Easier debugging
- Observe automation step by step
- Helpful while learning

---

# 8. Browser Contexts

Browser Contexts provide isolated browser sessions.

Each context has its own:

- Cookies
- Local Storage
- Session Storage
- Cache

This enables multiple independent users to be simulated in the same browser process.

---

# 9. Multiple Tabs and Windows

Playwright can automate:

- New tabs
- Pop-up windows
- Multiple browser windows

This is useful for testing login flows, payment gateways, and external redirects.

---

# 10. Frames and iFrames

Many websites use frames or iframes.

Playwright allows interaction with elements inside them without complicated setup.

Examples:

- Payment gateways
- Embedded videos
- Online editors

---

# 11. File Upload and Download

Playwright can automate:

- Uploading documents
- Downloading reports
- Saving downloaded files
- Verifying downloaded content

---

# 12. Screenshots

Screenshots can be captured during automation.

Supported types include:

- Full-page screenshot
- Element screenshot
- Viewport screenshot

Screenshots help with debugging and reporting.

---

# 13. Video Recording

Playwright can record browser sessions automatically.

Benefits include:

- Debugging failed tests
- Sharing execution with team members
- Reviewing automation runs

---

# 14. PDF Generation

Playwright can generate PDF documents from web pages.

Common uses include:

- Invoice generation
- Reports
- Receipts
- Certificates

---

# 15. Network Interception

Playwright can monitor and modify network traffic.

Examples:

- Block requests
- Modify responses
- Mock APIs
- Simulate failures

This is useful for testing applications under different network conditions.

---

# 16. API Testing

Playwright includes built-in support for API testing.

Capabilities include:

- GET requests
- POST requests
- PUT requests
- DELETE requests
- Response validation
- Authentication

This removes the need for separate libraries for many API testing tasks.

---

# 17. Mobile Device Emulation

Playwright can emulate various mobile devices.

Examples:

- iPhone
- Pixel
- Samsung Galaxy
- iPad

It can simulate:

- Screen size
- Touch events
- Device scale factor
- User agent

---

# 18. Parallel Execution

Playwright can execute multiple tests simultaneously.

Benefits:

- Faster execution
- Better hardware utilization
- Reduced testing time

---

# 19. Built-in Test Runner

Playwright includes its own testing framework.

Features include:

- Test discovery
- Assertions
- Fixtures
- Parallel execution
- HTML reports
- Retries
- Hooks

---

# 20. Trace Viewer

Trace Viewer records every step of test execution.

It includes:

- Screenshots
- DOM snapshots
- Network activity
- Console logs
- Action timeline

This makes debugging much easier.

---

# 21. Code Generator

Playwright can automatically generate automation scripts by recording user actions.

Benefits:

- Faster learning
- Quick prototyping
- Reduced manual coding

Recorded scripts can later be refined and maintained.

---

# Feature Summary

| Feature | Available |
|----------|-----------|
| Cross-Browser Testing | ✅ |
| Cross-Platform Support | ✅ |
| Auto Waiting | ✅ |
| Auto Retry | ✅ |
| Powerful Locators | ✅ |
| Browser Contexts | ✅ |
| Screenshots | ✅ |
| Video Recording | ✅ |
| PDF Generation | ✅ |
| API Testing | ✅ |
| Mobile Emulation | ✅ |
| Network Interception | ✅ |
| Parallel Execution | ✅ |
| Trace Viewer | ✅ |
| Code Generator | ✅ |

---

# Advantages of Playwright Features

- Faster automation
- Reliable execution
- Less flaky tests
- Cleaner code
- Easy debugging
- Excellent developer experience
- Modern browser support
- Comprehensive built-in tooling

---

# Summary

Playwright combines browser automation, API testing, reporting, debugging, and modern testing capabilities into a single framework.

Its extensive built-in features reduce the need for third-party libraries and make it one of the most complete browser automation solutions available today.

---

# Key Takeaways

- Playwright includes many features out of the box.
- Automatic waiting improves test stability.
- It supports all major browser engines.
- It offers powerful debugging tools.
- API testing and browser automation are available in one framework.
- Parallel execution helps reduce test execution time.
- Trace Viewer and Code Generator simplify development and troubleshooting.

---

# Next Chapter

**0004_architecture**


