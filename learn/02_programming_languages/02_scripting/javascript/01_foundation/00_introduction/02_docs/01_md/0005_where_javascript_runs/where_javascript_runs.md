# Where JavaScript Runs

## Introduction

JavaScript was originally created to run **inside web browsers** and make web pages interactive. Today, JavaScript has evolved into a versatile programming language that can run on **browsers, servers, mobile devices, desktop applications, cloud platforms, IoT devices, and even embedded systems**.

Because of this flexibility, JavaScript has become one of the most widely used programming languages in the world.

---

# JavaScript Runtime Environments

A **runtime environment** is software that provides everything JavaScript needs to execute.

Popular JavaScript runtime environments include:

- Web Browsers
- Node.js
- Deno
- Bun

Each runtime provides different features and APIs.

---

# 1. Web Browsers

The browser is the most common place where JavaScript runs.

Examples of browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

JavaScript in the browser can:

- Manipulate HTML
- Modify CSS
- Handle user events
- Validate forms
- Create animations
- Access browser APIs

Example:

```html
<button onclick="sayHello()">Click Me</button>

<script>
function sayHello() {
    alert("Hello from JavaScript!");
}
</script>
```

---

# Browser JavaScript Engine

Every browser contains a JavaScript engine.

| Browser | JavaScript Engine |
|----------|-------------------|
| Chrome | V8 |
| Edge | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Opera | V8 |

These engines execute JavaScript code efficiently.

---

# Browser APIs

Browsers provide many built-in APIs.

Examples include:

- DOM API
- Fetch API
- Geolocation API
- Local Storage
- Session Storage
- Canvas API
- Audio API
- WebSocket API

Example:

```javascript
document.body.style.backgroundColor = "lightblue";
```

---

# 2. Node.js

**Node.js** allows JavaScript to run **outside the browser**.

It uses Google's **V8 JavaScript Engine**.

Node.js is commonly used for:

- Web servers
- REST APIs
- Authentication
- File handling
- Database applications
- Command-line tools

Example:

```javascript
console.log("Hello from Node.js");
```

Run using:

```bash
node app.js
```

---

# Node.js APIs

Unlike browsers, Node.js provides server-side APIs.

Examples:

- File System (`fs`)
- HTTP
- Path
- OS
- Process
- Events
- Streams

Example:

```javascript
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello JavaScript");
```

---

# 3. Deno

**Deno** is a modern JavaScript and TypeScript runtime created by **Ryan Dahl**, the creator of Node.js.

Features:

- Built-in TypeScript support
- Secure by default
- Modern APIs
- No package manager required for basic usage

Example:

```javascript
console.log("Hello Deno");
```

Run using:

```bash
deno run app.js
```

---

# 4. Bun

**Bun** is a fast JavaScript runtime focused on performance.

Features:

- Fast startup
- Built-in package manager
- Bundler
- Test runner
- TypeScript support

Example:

```javascript
console.log("Hello Bun");
```

Run using:

```bash
bun app.js
```

---

# JavaScript on Servers

JavaScript powers many backend systems.

Examples:

- REST APIs
- Authentication
- Chat applications
- Payment systems
- E-commerce websites
- Microservices

Popular frameworks:

- Express.js
- NestJS
- Fastify
- Koa

---

# JavaScript on Mobile

JavaScript is widely used for mobile app development.

Popular frameworks:

- React Native
- Ionic
- NativeScript

Developers can create Android and iOS apps using JavaScript.

---

# JavaScript on Desktop

JavaScript is also used for desktop applications.

Popular frameworks:

- Electron
- Tauri

Applications built using JavaScript include:

- Visual Studio Code
- Discord
- Slack
- Figma

---

# JavaScript in Cloud Computing

JavaScript is widely used in cloud platforms.

Examples:

- AWS Lambda
- Azure Functions
- Google Cloud Functions

Developers can build serverless applications using JavaScript.

---

# JavaScript in IoT

JavaScript can control smart devices.

Examples:

- Raspberry Pi
- Arduino (with JavaScript frameworks)
- Smart Home Systems

Popular libraries:

- Johnny-Five
- Node-RED

---

# JavaScript in Artificial Intelligence

JavaScript supports AI and machine learning.

Popular libraries:

- TensorFlow.js
- Brain.js
- ml5.js

Applications include:

- Image recognition
- Face detection
- Speech recognition
- Machine learning in browsers

---

# JavaScript in Games

JavaScript is widely used for browser-based games.

Popular libraries:

- Phaser
- PixiJS
- Babylon.js
- Three.js

Examples:

- 2D games
- 3D games
- Educational games

---

# Comparison of JavaScript Runtimes

| Runtime | Browser | Server | APIs |
|----------|---------|---------|------|
| Browser | ✅ | ❌ | DOM, Fetch, Storage |
| Node.js | ❌ | ✅ | File System, HTTP |
| Deno | ❌ | ✅ | Modern APIs |
| Bun | ❌ | ✅ | High-performance APIs |

---

# Real-World Applications

JavaScript powers many modern applications.

Examples:

- Gmail
- Google Maps
- Netflix
- YouTube
- Facebook
- Amazon
- WhatsApp Web
- GitHub

---

# Advantages

- Runs on multiple platforms
- Cross-platform development
- Huge ecosystem
- Large community
- Full-stack development
- High performance with modern runtimes

---

# Key Points

- JavaScript originally ran only in browsers.
- Today it also runs on servers, desktops, mobile devices, and cloud platforms.
- Browsers provide DOM and Web APIs.
- Node.js provides server-side APIs.
- Deno and Bun are modern alternatives to Node.js.
- JavaScript can build websites, APIs, desktop apps, mobile apps, IoT systems, games, and AI applications.

---

# Summary

JavaScript is no longer limited to web browsers. With modern runtime environments such as **Node.js**, **Deno**, and **Bun**, developers can build full-stack applications that run on servers, desktops, mobile devices, cloud platforms, IoT hardware, and beyond. Its ability to work across multiple environments makes JavaScript one of the most flexible and powerful programming languages available today.