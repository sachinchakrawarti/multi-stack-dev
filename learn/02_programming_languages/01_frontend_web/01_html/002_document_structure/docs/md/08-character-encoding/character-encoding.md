# Character Encoding (`<meta charset="UTF-8">`)

## Overview

Character encoding is a fundamental concept in web development. It defines how text, numbers, symbols, punctuation marks, and special characters are stored, transmitted, and displayed by computers.

In HTML, character encoding is specified using the `<meta charset>` element inside the `<head>` section. Modern web pages should use **UTF-8**, the universal character encoding that supports nearly every written language and symbol.

Without the correct character encoding, browsers may display unreadable or corrupted text, often referred to as **mojibake**.

---

# Learning Objectives

After completing this chapter, you will be able to:

* Understand what character encoding is.
* Explain why UTF-8 is the recommended encoding.
* Use the `<meta charset="UTF-8">` element correctly.
* Recognize problems caused by incorrect encoding.
* Follow best practices for multilingual websites.

---

# What Is Character Encoding?

Computers store all information as **binary data (0s and 1s)**. Character encoding defines how these binary values are mapped to human-readable characters.

For example:

| Binary     | Character |
| ---------- | --------- |
| `01000001` | A         |
| `01000010` | B         |
| `00110001` | 1         |
| `00100001` | !         |

Without an agreed encoding standard, the same binary value could represent different characters on different systems.

---

# What Is UTF-8?

**UTF-8 (Unicode Transformation Format – 8-bit)** is the most widely used character encoding on the web.

It is based on the **Unicode Standard**, which assigns a unique code point to characters from almost every writing system.

UTF-8 supports:

* English
* Hindi
* Bengali
* Tamil
* Telugu
* Arabic
* Chinese
* Japanese
* Korean
* Russian
* Greek
* Hebrew
* Emojis
* Mathematical symbols
* Currency symbols
* Thousands of other characters

---

# Why Use UTF-8?

UTF-8 is recommended because it:

* Supports nearly all languages.
* Is backward compatible with ASCII.
* Is efficient for English text.
* Is the default encoding for HTML5.
* Prevents character corruption.
* Enables internationalization (i18n).

---

# Declaring Character Encoding in HTML

Specify the character encoding in the `<head>` section using:

```html id="0yzs2d"
<meta charset="UTF-8">
```

This tells the browser to interpret the document using UTF-8.

---

# Where Should It Be Placed?

The `<meta charset="UTF-8">` element should appear as early as possible inside the `<head>` element.

Correct:

```html id="jlwmvg"
<head>
    <meta charset="UTF-8">
    <title>Character Encoding</title>
</head>
```

Placing it early helps the browser correctly decode the document from the beginning.

---

# Example HTML Document

```html id="jlwmvh"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>UTF-8 Example</title>
</head>
<body>

<h1>Hello</h1>

<p>English</p>
<p>नमस्ते</p>
<p>こんにちは</p>
<p>مرحبًا</p>
<p>你好</p>
<p>👋 🌍 😊</p>

</body>
</html>
```

All of the above text displays correctly when UTF-8 is used and the file is saved in UTF-8 encoding.

---

# Unicode Code Points

Every Unicode character has a unique code point.

| Character | Unicode |
| --------- | ------- |
| A         | U+0041  |
| ₹         | U+20B9  |
| €         | U+20AC  |
| ♥         | U+2665  |
| 😀        | U+1F600 |
| あ         | U+3042  |
| 中         | U+4E2D  |

UTF-8 encodes these code points into bytes that browsers can interpret.

---

# UTF-8 and ASCII

ASCII is an older encoding that supports only 128 characters.

| Feature            | ASCII   | UTF-8     |
| ------------------ | ------- | --------- |
| English letters    | ✔       | ✔         |
| Numbers            | ✔       | ✔         |
| Symbols            | Limited | Extensive |
| Multiple languages | ✘       | ✔         |
| Emojis             | ✘       | ✔         |
| HTML5 default      | ✘       | ✔         |

UTF-8 includes all ASCII characters, making it backward compatible.

---

# What Happens Without UTF-8?

If the browser uses the wrong encoding, characters may appear incorrectly.

Example:

Correct:

```text id="l3s4an"
नमस्ते
```

Incorrect:

```text id="4tz8kr"
à¤¨à¤®à¤¸à¥à¤¤à¥‡
```

This garbled text is known as **mojibake**, caused by decoding text with the wrong character encoding.

---

# Browser Processing Flow

```text id="ebm29s"
Browser
   │
   ▼
Reads HTML
   │
   ▼
Finds <meta charset="UTF-8">
   │
   ▼
Decodes Characters
   │
   ▼
Builds DOM
   │
   ▼
Displays Correct Text
```

---

# Character Encoding and File Encoding

Specifying UTF-8 in HTML is not enough. The HTML file itself must also be saved using UTF-8.

Recommended editor settings:

* Visual Studio Code → UTF-8
* Notepad++ → UTF-8
* Sublime Text → UTF-8
* IntelliJ IDEA → UTF-8

If the file is saved in a different encoding, the browser may still display incorrect characters.

---

# UTF-8 in Visual Studio Code

To verify the file encoding:

1. Open the HTML file.
2. Look at the status bar (bottom-right).
3. Ensure it displays **UTF-8**.
4. If necessary, choose **Save with Encoding → UTF-8**.

---

# Common Mistakes

## Omitting the Charset Declaration

Incorrect:

```html id="6crqni"
<head>
    <title>Example</title>
</head>
```

Recommended:

```html id="9wvtim"
<head>
    <meta charset="UTF-8">
    <title>Example</title>
</head>
```

---

## Using Different File Encoding

If the file is saved in an encoding other than UTF-8, multilingual text may display incorrectly even if the HTML contains the correct meta tag.

---

## Placing Charset Too Late

Avoid placing `<meta charset>` after other metadata or scripts. Place it near the top of the `<head>` section.

---

# Best Practices

* Always use UTF-8 for new HTML documents.
* Place `<meta charset="UTF-8">` near the beginning of the `<head>`.
* Save source files using UTF-8 encoding.
* Test pages containing multilingual content.
* Use Unicode characters directly when appropriate.

---

# Interview Questions

### What is character encoding?

Character encoding is the system that maps binary data to human-readable characters.

---

### Why is UTF-8 recommended?

Because it supports nearly every language, is backward compatible with ASCII, and is the default encoding for HTML5.

---

### Where should `<meta charset="UTF-8">` be placed?

Inside the `<head>` element, as early as possible.

---

### What happens if the wrong encoding is used?

Text may appear as unreadable or corrupted characters (mojibake).

---

### Is UTF-8 mandatory in HTML5?

While HTML5 allows browsers to determine encoding by other means, using `<meta charset="UTF-8">` is the recommended and widely adopted practice.

---

# Key Takeaways

* Character encoding determines how text is represented and displayed.
* UTF-8 is the standard encoding for modern HTML documents.
* Use `<meta charset="UTF-8">` inside the `<head>` element.
* Save HTML files using UTF-8 encoding.
* UTF-8 supports international languages, symbols, and emojis.
* Proper encoding prevents text corruption and improves global compatibility.

---

# Summary

Character encoding is essential for displaying text correctly across browsers and devices. UTF-8 has become the universal standard because it supports virtually every writing system while remaining compatible with older ASCII text. By declaring `<meta charset="UTF-8">` and saving your files in UTF-8 format, you ensure that your webpages display consistently for users around the world.

In the next chapter, you'll learn about the **`lang` attribute**, which specifies the primary language of an HTML document and plays an important role in accessibility, search engine optimization, and browser translation.
