# Browser Support in Playwright

---

# Learning Objectives

After completing this chapter, you will be able to:

- Understand browser support in Playwright.
- Learn the difference between browser engines and browsers.
- Identify which browsers Playwright supports.
- Understand why cross-browser testing is important.
- Learn the advantages of testing on multiple browsers.

---

# Introduction

One of the biggest strengths of Playwright is its **cross-browser support**.

A single Playwright test can run on multiple browser engines without changing the test code.

This allows developers to verify that a web application behaves consistently across different browsers and operating systems.

---

# What is a Browser?

A browser is software that allows users to access websites on the Internet.

Popular browsers include:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera
- Brave

Users interact with websites through these browsers.

---

# What is a Browser Engine?

A browser engine is the core software responsible for rendering web pages.

It:

- Reads HTML
- Applies CSS
- Executes JavaScript
- Displays the final web page

Multiple browsers may use the same browser engine.

---

# Browser vs Browser Engine

| Browser | Browser Engine |
|----------|----------------|
| Google Chrome | Chromium |
| Microsoft Edge | Chromium |
| Brave | Chromium |
| Opera | Chromium |
| Mozilla Firefox | Gecko |
| Safari | WebKit |

> **Note:** Playwright supports the **Firefox browser engine**, even though the underlying engine is technically called **Gecko**. When using Playwright, you'll work with the `firefox` browser type.

---

# Browser Engines Supported by Playwright

Playwright officially supports three browser engines.

| Browser Engine | Supported |
|----------------|-----------|
| Chromium | ✅ |
| Firefox | ✅ |
| WebKit | ✅ |

These three engines cover almost every modern desktop browser.

---

# Chromium

Chromium is Google's open-source browser project.

Browsers based on Chromium include:

- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Vivaldi

Playwright launches Chromium directly for automation.

---

# Firefox

Playwright supports Mozilla Firefox.

Firefox is widely used for:

- Privacy-focused browsing
- Cross-browser testing
- Standards compliance

Testing in Firefox helps identify browser-specific issues.

---

# WebKit

WebKit is the browser engine used by Safari.

It is important because:

- Safari is widely used on macOS.
- Safari is the default browser on iPhone and iPad.

Playwright uses WebKit to simulate Safari behavior for testing.

---

# Why Cross-Browser Testing?

Different browsers may render or execute the same web page differently.

Examples include:

- CSS rendering differences
- JavaScript behavior
- Font rendering
- Animation timing
- Form validation
- Browser-specific APIs

Cross-browser testing helps detect these differences before users encounter them.

---

# Example

Suppose your website works correctly in Chrome but a button does not respond in Firefox.

Without cross-browser testing, Firefox users may experience a broken feature.

Running the same Playwright test in Chromium and Firefox helps detect such issues early.

---

# One Test, Multiple Browsers

A single Playwright test can be executed against multiple browser engines.

```text
Automation Script
        │
        ▼
   Playwright Test
        │
        ├─────────────► Chromium
        │
        ├─────────────► Firefox
        │
        └─────────────► WebKit
```

This reduces duplicated test code and improves maintainability.

---

# Browser Compatibility Testing

Cross-browser testing verifies that an application behaves consistently across supported browsers.

Common checks include:

- Layout
- Navigation
- Forms
- Images
- Videos
- Responsive design
- Buttons
- Links
- JavaScript functionality

---

# Mobile Browser Testing

Playwright also supports mobile device emulation.

Examples include:

- iPhone
- iPad
- Pixel
- Samsung Galaxy

It can simulate:

- Mobile viewport
- Touch input
- Device scale factor
- User agent

This allows testing of responsive web applications without physical devices.

---

# Headless and Headed Browsers

Playwright supports two execution modes.

## Headless Mode

The browser runs without a visible window.

Advantages:

- Faster execution
- Lower resource usage
- Ideal for CI/CD

---

## Headed Mode

The browser window is visible.

Advantages:

- Easier debugging
- Observe browser actions
- Useful during development

---

# Browser Versions

Playwright downloads browser binaries that are compatible with its own version.

Benefits include:

- Stable execution
- Consistent test results
- Reduced compatibility issues

This avoids problems caused by mismatched browser versions.

---

# Advantages of Playwright Browser Support

- One API for multiple browsers
- Consistent automation
- Cross-browser compatibility
- Reliable execution
- Automatic browser management
- Faster testing
- Easy configuration

---

# Browser Support Summary

| Feature | Chromium | Firefox | WebKit |
|---------|:---------:|:--------:|:-------:|
| Automation | ✅ | ✅ | ✅ |
| Screenshots | ✅ | ✅ | ✅ |
| PDF Generation* | ✅ | ❌ | ❌ |
| Video Recording | ✅ | ✅ | ✅ |
| Mobile Emulation | ✅ | ✅ | ✅ |
| Headless Mode | ✅ | ✅ | ✅ |
| Headed Mode | ✅ | ✅ | ✅ |

> **Note:** PDF generation using `page.pdf()` is currently supported only in Chromium.

---

# Real-World Applications

Cross-browser testing is commonly used for:

- Banking websites
- E-commerce platforms
- Government portals
- Healthcare applications
- Educational websites
- Enterprise software

These applications must provide a consistent experience for users regardless of browser choice.

---

# Summary

Playwright provides built-in support for Chromium, Firefox, and WebKit, enabling developers to run the same automation scripts across multiple browser engines.

This simplifies cross-browser testing, improves application quality, and helps identify browser-specific issues early in the development process.

---

# Key Takeaways

- Playwright supports Chromium, Firefox, and WebKit.
- One test can run on multiple browser engines.
- Cross-browser testing improves software quality.
- Mobile device emulation is built in.
- Headless and headed execution modes are supported.
- Playwright manages compatible browser binaries automatically.

---

# Next Chapter

**0006_installation**