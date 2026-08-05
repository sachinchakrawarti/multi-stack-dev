# HTML History

## 1. Introduction

HTML has evolved significantly since its creation in the early 1990s. Understanding the history of HTML helps developers appreciate the web's growth and the standards that make modern web development possible.

---

## 2. Timeline of HTML Versions

### 1989 - The Birth of the Web

- **Tim Berners-Lee**, a scientist at CERN (European Organization for Nuclear Research), proposed a system for sharing information using hypertext.
- He created the first web browser and web server.

### 1991 - First HTML Specification

- Tim Berners-Lee published the first HTML specification.
- This version was very simple, with only 18 HTML tags.
- The tags included headings, paragraphs, lists, and hyperlinks.

### 1993 - HTML 1.0 (First Draft)

- The first formal draft of HTML was published by Tim Berners-Lee.
- It included basic tags for structuring text.
- It lacked support for images and tables.

### 1995 - HTML 2.0

- Published as RFC 1866 by the IETF.
- Standardized many features already in use.
- Added support for forms, tables, and image alignment.
- Became the standard for web development.

### 1997 - HTML 3.2

- Published by the W3C (World Wide Web Consortium).
- Added support for:
  - Tables
  - Applets
  - Text wrapping around images
  - Background colors and images
- This version was widely adopted.

### 1997 - HTML 4.0

- Published by W3C.
- Introduced:
  - Stylesheets (CSS)
  - Scripting (JavaScript)
  - Frames
  - Internationalization (support for different languages)
  - Accessibility features

### 1999 - HTML 4.01

- A minor update to HTML 4.0.
- Fixed some bugs and improved accessibility.
- Introduced three document types:
  - Strict
  - Transitional
  - Frameset

### 2000 - XHTML 1.0

- Reformulated HTML as an XML application.
- Stricter syntax rules.
- Required lowercase tags and self-closing elements.
- More interoperable with other XML tools.

### 2002 - XHTML 2.0 (Draft)

- A major redesign.
- Removed backward compatibility.
- Proved unpopular with developers.

### 2004 - WHATWG Formation

- WHATWG (Web Hypertext Application Technology Working Group) was formed.
- Composed of developers from Apple, Mozilla, and Opera.
- Focused on developing practical web standards.

### 2008 - HTML5 First Public Draft

- Published by WHATWG and W3C.
- Introduced:
  - Semantic elements (`<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`)
  - Native multimedia support (`<audio>`, `<video>`)
  - Canvas and SVG
  - Offline storage (`localStorage`, `sessionStorage`)
  - Web workers
  - Web sockets
  - New form controls

### 2014 - HTML5 Recommendation

- HTML5 officially became a W3C Recommendation.
- Marked as the new standard for the web.

### 2016 - HTML 5.1

- Minor updates to HTML5.
- New features for developers.

### 2017 - HTML 5.2

- Additional improvements and updates.

### 2021 - HTML Living Standard

- WHATWG became the primary steward of HTML.
- Continuous evolution with no version numbers.
- Now referred to as the "HTML Living Standard."

---

## 3. Key Contributors

### Tim Berners-Lee

- Invented the World Wide Web.
- Created the first HTML specification.
- Founded the W3C.

### W3C (World Wide Web Consortium)

- Created in 1994.
- Maintained HTML standards from 1994 to 2019.
- Now focuses on CSS, WebRTC, and other web technologies.

### WHATWG (Web Hypertext Application Technology Working Group)

- Formed in 2004.
- Created HTML5.
- Now maintains the HTML Living Standard.

### Browser Vendors

- **Mozilla** (Firefox)
- **Google** (Chrome)
- **Apple** (Safari)
- **Microsoft** (Edge/Internet Explorer)

Their collaboration and competition have driven HTML innovation and standardization.

---

## 4. HTML vs XHTML

| Feature | HTML | XHTML |
|---------|------|-------|
| Language Type | SGML-based | XML-based |
| Case Sensitivity | Case-insensitive | Case-sensitive (lowercase) |
| Closing Tags | Optional for some elements | Required for all elements |
| Empty Elements | No closing needed | Must self-close `<br />` |
| Attribute Values | Quotes optional | Required |
| Strictness | Flexible | Very strict |

---

## 5. HTML5: A Game Changer

HTML5 brought significant improvements over previous versions.

### Key Features

- **Semantic Elements:** Improved structure and accessibility.
- **Multimedia:** Built-in audio and video support.
- **Canvas:** Dynamic graphics without plugins.
- **SVG:** Scalable vector graphics.
- **Offline Storage:** Web storage and IndexedDB.
- **Geolocation:** Location-based services.
- **Web Workers:** Multithreading in the browser.
- **WebSockets:** Real-time communication.
- **Form Enhancements:** New input types and validation.
- **Drag and Drop:** Native drag-and-drop support.

### HTML5 Structure

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>HTML5 Document</title>
</head>
<body>
    <header>
        <h1>Welcome</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Content goes here.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024</p>
    </footer>
</body>
</html>