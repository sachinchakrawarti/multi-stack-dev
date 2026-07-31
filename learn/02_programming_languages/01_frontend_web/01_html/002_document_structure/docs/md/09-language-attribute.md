# The `lang` Attribute

## Overview

The `lang` attribute specifies the **primary language** of an HTML document or a specific HTML element. It helps web browsers, search engines, screen readers, translation tools, and other software correctly interpret and process the content.

Although the `lang` attribute does not automatically translate a webpage, it provides important language information that improves accessibility, search engine optimization (SEO), text pronunciation, spell checking, and browser features.

In modern HTML5, every webpage should specify the `lang` attribute on the `<html>` element.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand the purpose of the `lang` attribute.
* Apply the `lang` attribute correctly.
* Use standard language codes.
* Improve accessibility and SEO.
* Handle multilingual content within a webpage.
* Follow HTML5 best practices.

---

# What Is the `lang` Attribute?

The `lang` attribute is a **global HTML attribute** that identifies the natural language of an HTML document or an individual element.

Basic example:

```html id="9f8q1e"
<html lang="en">
```

In this example, the browser understands that the primary language of the page is English.

---

# Why Is the `lang` Attribute Important?

Specifying the language benefits both users and software.

Advantages include:

* Better accessibility.
* Improved screen reader pronunciation.
* Enhanced SEO.
* Accurate browser translation.
* Better spell checking.
* Improved text-to-speech support.
* Easier language detection.

---

# Where Should the `lang` Attribute Be Used?

The recommended location is the opening `<html>` tag.

```html id="v7w2m4"
<!DOCTYPE html>
<html lang="en">
```

This indicates that the entire document is primarily written in English.

---

# Syntax

```html id="r5j8z2"
<tag lang="language-code">
```

The `language-code` should follow the **BCP 47 (Best Current Practice 47)** language tag format, which is widely used across the web.

---

# Common Language Codes

| Language              | Code    |
| --------------------- | ------- |
| English               | `en`    |
| Hindi                 | `hi`    |
| Bengali               | `bn`    |
| Gujarati              | `gu`    |
| Marathi               | `mr`    |
| Punjabi               | `pa`    |
| Tamil                 | `ta`    |
| Telugu                | `te`    |
| Kannada               | `kn`    |
| Malayalam             | `ml`    |
| Urdu                  | `ur`    |
| Arabic                | `ar`    |
| Chinese (Simplified)  | `zh-CN` |
| Chinese (Traditional) | `zh-TW` |
| Japanese              | `ja`    |
| Korean                | `ko`    |
| French                | `fr`    |
| German                | `de`    |
| Spanish               | `es`    |
| Portuguese            | `pt`    |
| Russian               | `ru`    |

---

# Country and Region Variants

The `lang` attribute can specify both language and regional variations.

Examples:

| Language                 | Code    |
| ------------------------ | ------- |
| English (United States)  | `en-US` |
| English (United Kingdom) | `en-GB` |
| English (India)          | `en-IN` |
| French (Canada)          | `fr-CA` |
| Portuguese (Brazil)      | `pt-BR` |
| Spanish (Mexico)         | `es-MX` |

Example:

```html id="u3h1n8"
<html lang="en-IN">
```

---

# Document Example

```html id="t4d6k9"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Language Example</title>
</head>

<body>

<h1>Welcome</h1>

<p>This page is written in English.</p>

</body>

</html>
```

---

# Using `lang` on Individual Elements

If only part of a page is written in another language, apply the `lang` attribute to that specific element.

Example:

```html id="m6g5q2"
<p>
    Welcome!
    <span lang="fr">Bonjour</span>
</p>
```

Another example:

```html id="p8s4e7"
<p>
    English sentence.

    <span lang="hi">
        नमस्ते
    </span>
</p>
```

Only the marked text is identified as another language.

---

# Nested Language Example

```html id="w9a7r1"
<html lang="en">

<body>

<p>
    Welcome!

    <span lang="es">
        Hola
    </span>

    <span lang="ja">
        こんにちは
    </span>

</p>

</body>

</html>
```

This approach is useful for multilingual documents.

---

# Accessibility Benefits

Screen readers use the `lang` attribute to determine pronunciation rules.

Without the correct language, assistive technologies may mispronounce words, especially when multiple languages appear on the same page.

Using `lang` improves the experience for users who rely on:

* Screen readers
* Text-to-speech software
* Voice assistants

---

# SEO Benefits

Search engines use the `lang` attribute as one signal to understand the language of a webpage.

Benefits include:

* Better indexing
* More relevant search results
* Improved international SEO
* Correct language detection

Although the `lang` attribute is important, search engines also consider the page content, URLs, and other metadata.

---

# Browser Translation

Modern browsers may offer automatic translation based on the document language.

Example flow:

```text id="x4n8t3"
Browser
     │
     ▼
Reads lang Attribute
     │
     ▼
Detects Document Language
     │
     ▼
Offers Translation (if needed)
```

---

# Spell Checking

Browsers use the `lang` attribute to apply the correct dictionary during spell checking.

Example:

```html id="c5l7m1"
<html lang="en">
```

English spelling suggestions are used.

```html id="k2f6r8"
<html lang="fr">
```

French spelling suggestions are used.

---

# Relationship with UTF-8

The `lang` attribute and UTF-8 serve different purposes.

| Feature                     | UTF-8 | `lang` |
| --------------------------- | ----- | ------ |
| Defines character encoding  | ✔     | ✘      |
| Specifies document language | ✘     | ✔      |
| Supports multilingual text  | ✔     | ✔      |
| Helps screen readers        | ✘     | ✔      |
| Helps browser translation   | ✘     | ✔      |

Both should be used together in modern HTML documents.

---

# Common Mistakes

## Omitting the `lang` Attribute

Not recommended:

```html id="d7n2b5"
<html>
```

Recommended:

```html id="q1m9s6"
<html lang="en">
```

---

## Using Invalid Language Codes

Incorrect:

```html id="g3t5v9"
<html lang="english">
```

Correct:

```html id="h8w4k2"
<html lang="en">
```

---

## Using the Wrong Language

Incorrect:

```html id="n6j3p1"
<html lang="fr">
```

If the page is primarily written in English, use:

```html id="y5c8r4"
<html lang="en">
```

---

## Forgetting Nested Languages

When quoting text in another language, specify the appropriate `lang` attribute on that element.

---

# Best Practices

* Always set the `lang` attribute on the `<html>` element.
* Use standard BCP 47 language tags.
* Specify regional variants only when necessary.
* Mark sections of content written in a different language.
* Combine `lang` with UTF-8 encoding.
* Validate HTML to ensure language tags are correct.

---

# Interview Questions

### What is the purpose of the `lang` attribute?

It identifies the natural language of a document or element, helping browsers, search engines, and assistive technologies process the content correctly.

---

### Where should the `lang` attribute be placed?

On the opening `<html>` tag for the document language, or on individual elements for content in a different language.

---

### Does the `lang` attribute translate a webpage?

No. It identifies the language but does not perform translation.

---

### Why is the `lang` attribute important for accessibility?

It allows screen readers and text-to-speech software to use the correct pronunciation rules.

---

### Can different elements have different `lang` values?

Yes. Individual elements can specify different languages when the content is multilingual.

---

# Key Takeaways

* The `lang` attribute identifies the language of a document or element.
* Place it on the `<html>` element in every HTML document.
* Use standard BCP 47 language codes such as `en`, `hi`, or `fr-CA`.
* The `lang` attribute improves accessibility, SEO, spell checking, and browser translation.
* It complements UTF-8 but serves a different purpose.

---

# Summary

The `lang` attribute is a simple yet powerful feature of HTML that enhances accessibility, usability, and search engine understanding. By correctly identifying the language of your content, you help browsers and assistive technologies provide a better experience for users around the world. Combined with UTF-8 character encoding, the `lang` attribute forms an essential part of every modern HTML document.

In the next chapter, you'll explore **HTML meta tags**, learning how they provide metadata for browsers, search engines, social media platforms, and responsive web design.
