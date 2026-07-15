# 0002_variable_declaration

## JavaScript Variable Declaration Tutorial

This tutorial covers variable declaration in JavaScript using `var`, `let`, and `const`.

### Topics Covered
- `var` - Function-scoped variable declaration
- `let` - Block-scoped variable declaration
- `const` - Block-scoped constant declaration
- Variable hoisting
- Temporal Dead Zone (TDZ)
- Best practices

### Project Structure

0002_variable_declaration/
├── 01_browser/ # Browser-based demonstration
│ ├── index.html # HTML page
│ ├── style.css # CSS styling
│ ├── script.js # JavaScript code
│ └── README.md # Browser demo documentation
├── 02_javascript/ # Node.js/JavaScript examples
│ ├── script.js # Pure JavaScript examples
│ └── README.md # JavaScript documentation
└── 03_notebook/ # Interactive notebook
├── 0002_variable_declaration.nnb
└── README.md # Notebook documentation



### How to Use
1. **Browser Demo**: Open `01_browser/index.html` in your browser
2. **JavaScript Examples**: Run `node 02_javascript/script.js`
3. **Notebook**: Use the JNB notebook system to interactively learn

### Key Concepts

#### var
- Function-scoped
- Can be re-declared
- Hoisted to the top
- Attaches to global object (in browsers)

#### let
- Block-scoped
- Cannot be re-declared in same scope
- Hoisted but not initialized (TDZ)
- Does NOT attach to global object

#### const
- Block-scoped
- Cannot be re-declared
- Must be initialized at declaration
- Value cannot be reassigned (for primitives)

### Resources
- [MDN JavaScript Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
- [JavaScript.info Variables](https://javascript.info/variables)

