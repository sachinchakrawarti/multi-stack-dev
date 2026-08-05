# HTML Evolution

## 1. Introduction

HTML has undergone remarkable evolution since its inception in the early 1990s. This evolution reflects changes in technology, user expectations, and the growing complexity of web applications. Understanding this evolution helps developers appreciate modern HTML and its capabilities.

---

## 2. The Early Years (1989-1995)

### 1989: The Concept

- **Tim Berners-Lee** proposed a hypertext system at CERN.
- Goal: Share research documents across different computer systems.
- The proposal included concepts of hyperlinks, URLs, and web browsers.

### 1991: First HTML

- Only 18 HTML tags were available.
- Tags included:
  - Headings (`<h1>` to `<h6>`)
  - Paragraphs (`<p>`)
  - Links (`<a>`)
  - Lists (`<ul>`, `<ol>`, `<li>`)

### 1993: HTML 1.0

- First formal draft.
- Still very basic.
- No support for:
  - Images
  - Tables
  - Forms
  - Style

### 1994: Growth and Adoption

- Web browsers became more popular.
- Mosaic browser introduced images.
- HTML started to include images (`<img>` tag).

### 1995: HTML 2.0

- Published as RFC 1866.
- Standardized existing features.
- Added:
  - Forms (`<form>`, `<input>`)
  - Tables (`<table>`, `<tr>`, `<td>`)
  - Image alignment

---

## 3. The Browser Wars Era (1995-1999)

### Competition

- **Netscape Navigator** and **Internet Explorer** competed aggressively.
- Each browser introduced proprietary features.
- Web development became difficult due to incompatibilities.

### Key Developments

| Year | Event | Impact |
|------|-------|--------|
| 1995 | JavaScript introduced by Netscape | Added interactivity to web pages |
| 1996 | CSS1 proposed | Separation of content and presentation |
| 1997 | HTML 3.2 released | Tables, applets, background colors |
| 1997 | HTML 4.0 released | CSS support, frames, scripting |
| 1999 | HTML 4.01 released | Bug fixes, accessibility improvements |

### Proprietary Features

- **Netscape:** `<blink>`, `<marquee>`, JavaScript
- **Internet Explorer:** ActiveX, VBScript, `<marquee>`

These features often worked on only one browser, frustrating developers.

---

## 4. The Standardization Era (2000-2007)

### XHTML 1.0 (2000)

- Reformulated HTML as XML.
- Stricter syntax:
  - All tags must close.
  - All tags must be lowercase.
  - Attributes must have quotes.
- Pros: Cleaner code, better compatibility.
- Cons: Too strict for many developers.

### XHTML 2.0 (2002-2007)

- A complete redesign.
- Removed backward compatibility.
- Features:
  - No more `<img>` tag.
  - Forms separated from markup.
  - Better accessibility.
- **Result:** XHTML 2.0 was eventually abandoned.

### CSS Matures

- CSS2 (1998): Positioning, media types.
- CSS3 (2005+): Modular approach, new features.

### Web 2.0

- Dynamic content.
- User-generated content.
- Rich internet applications.
- Technologies: AJAX, RSS, blogs.

---

## 5. The HTML5 Revolution (2008-2014)

### WHATWG Formation (2004)

- Apple, Mozilla, Opera formed WHATWG.
- Focused on practical standards.
- Goals:
  - Improve HTML for web applications.
  - Maintain backward compatibility.

### HTML5 First Draft (2008)

- W3C published the first draft.
- Major features:
  - Semantic elements
  - Native multimedia
  - Canvas
  - Offline storage
  - Web workers
  - Web sockets

### HTML5 Key Features

```html
<!-- Semantic Elements -->
<header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
</header>

<!-- Multimedia -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>

<video controls>
    <source src="video.mp4" type="video/mp4">
</video>

<!-- Canvas -->
<canvas id="myCanvas" width="200" height="100">
    Your browser does not support canvas.
</canvas>

<!-- New Input Types -->
<input type="email">
<input type="date">
<input type="color">