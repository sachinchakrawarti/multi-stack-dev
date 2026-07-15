// ============================================
// var DEMONSTRATION
// ============================================
function demoVar() {
    const output = document.getElementById('var-output');
    let results = [];
    
    // Example 1: var is function-scoped
    results.push('=== var: Function Scope ===');
    function testVarScope() {
        if (true) {
            var x = 10;
        }
        results.push('Inside function: x = ' + x); // Works! (var is not block-scoped)
    }
    testVarScope();
    
    // Example 2: var hoisting
    results.push('\n=== var: Hoisting ===');
    results.push('Before declaration: y = ' + y); // undefined (hoisted)
    var y = 20;
    results.push('After declaration: y = ' + y);
    
    // Example 3: var can be re-declared
    results.push('\n=== var: Re-declaration ===');
    var z = 30;
    results.push('First: z = ' + z);
    var z = 40;
    results.push('Second: z = ' + z);
    
    // Example 4: var attaches to window (in browsers)
    results.push('\n=== var: Global Attachment ===');
    var globalVar = 'I am global';
    results.push('window.globalVar = ' + window.globalVar);
    
    output.textContent = results.join('\n');
    output.className = 'output show success';
}

// ============================================
// let DEMONSTRATION
// ============================================
function demoLet() {
    const output = document.getElementById('let-output');
    let results = [];
    
    // Example 1: let is block-scoped
    results.push('=== let: Block Scope ===');
    if (true) {
        let x = 10;
        results.push('Inside block: x = ' + x);
    }
    // results.push('Outside block: x = ' + x); // Error! (ReferenceError)
    results.push('Outside block: x is not accessible ✅');
    
    // Example 2: let has TDZ (Temporal Dead Zone)
    results.push('\n=== let: Temporal Dead Zone ===');
    results.push('Before declaration: a is in TDZ');
    // results.push(a); // Error! Cannot access before initialization
    let a = 50;
    results.push('After declaration: a = ' + a);
    
    // Example 3: let cannot be re-declared in same scope
    results.push('\n=== let: No Re-declaration ===');
    let b = 60;
    results.push('First: b = ' + b);
    // let b = 70; // Error! Cannot re-declare block-scoped variable
    results.push('Re-declaration not allowed ✅');
    
    // Example 4: let does NOT attach to window
    results.push('\n=== let: No Global Attachment ===');
    let globalLet = 'I am not global';
    results.push('window.globalLet = ' + window.globalLet);
    results.push('(undefined - not attached to window)');
    
    output.textContent = results.join('\n');
    output.className = 'output show success';
}

// ============================================
// const DEMONSTRATION
// ============================================
function demoConst() {
    const output = document.getElementById('const-output');
    let results = [];
    
    // Example 1: const must be initialized
    results.push('=== const: Must Initialize ===');
    // const x; // Error! Missing initializer
    results.push('const must be initialized at declaration ✅');
    
    const PI = 3.14159;
    results.push('PI = ' + PI);
    
    // Example 2: const cannot be reassigned
    results.push('\n=== const: Cannot Reassign ===');
    // PI = 3.14; // Error! Assignment to constant variable
    results.push('PI cannot be reassigned ✅');
    
    // Example 3: const with objects (reference is constant)
    results.push('\n=== const: Objects ===');
    const person = { name: 'Alice', age: 25 };
    results.push('Before: ' + JSON.stringify(person));
    person.age = 26; // Allowed! (mutating object)
    person.city = 'New York'; // Allowed! (adding properties)
    results.push('After: ' + JSON.stringify(person));
    results.push('Object properties can be modified ✅');
    // person = {}; // Error! Cannot reassign object reference
    
    // Example 4: const with arrays
    results.push('\n=== const: Arrays ===');
    const numbers = [1, 2, 3];
    results.push('Before: [' + numbers + ']');
    numbers.push(4);
    results.push('After push: [' + numbers + ']');
    numbers[0] = 10;
    results.push('After modification: [' + numbers + ']');
    results.push('Array elements can be modified ✅');
    
    output.textContent = results.join('\n');
    output.className = 'output show success';
}

// ============================================
// COMPARISON
// ============================================
function runComparison() {
    const output = document.getElementById('comparison-output');
    let results = [];
    
    results.push('╔════════════════════════════════════════════════════════════╗');
    results.push('║                    VARIABLE DECLARATION COMPARISON         ║');
    results.push('╚════════════════════════════════════════════════════════════╝');
    results.push('');
    
    // Scope Comparison
    results.push('📌 SCOPE:');
    results.push('  var   → Function-scoped');
    results.push('  let   → Block-scoped');
    results.push('  const → Block-scoped');
    results.push('');
    
    // Hoisting Comparison
    results.push('📌 HOISTING:');
    results.push('  var   → Hoisted (initialized as undefined)');
    results.push('  let   → Hoisted but in TDZ');
    results.push('  const → Hoisted but in TDZ');
    results.push('');
    
    // Re-declaration Comparison
    results.push('📌 RE-DECLARATION:');
    results.push('  var   → Allowed');
    results.push('  let   → Not allowed');
    results.push('  const → Not allowed');
    results.push('');
    
    // Global Object Attachment
    results.push('📌 GLOBAL OBJECT (browser):');
    results.push('  var   → Attaches to window');
    results.push('  let   → Does NOT attach');
    results.push('  const → Does NOT attach');
    results.push('');
    
    // Mutability Comparison
    results.push('📌 MUTABILITY:');
    results.push('  var   → Reassignable');
    results.push('  let   → Reassignable');
    results.push('  const → Not reassignable (primitive)');
    results.push('         → Reassignable properties (objects/arrays)');
    results.push('');
    
    // Best Practices
    results.push('🏆 BEST PRACTICES:');
    results.push('  1. Use const by default');
    results.push('  2. Use let when reassignment is needed');
    results.push('  3. Avoid var in modern JavaScript');
    results.push('  4. Use meaningful variable names');
    results.push('  5. Declare variables at the top of scope');
    
    output.textContent = results.join('\n');
    output.className = 'output show success';
}

// ============================================
// Additional Console Examples (for demo)
// ============================================
console.log('========================================');
console.log('Variable Declaration Demo - Console Logs');
console.log('========================================');

// var examples
console.log('\n--- var examples ---');
var x = 5;
console.log('var x =', x);
var x = 10; // re-declaration allowed
console.log('var x (redeclared) =', x);

// let examples
console.log('\n--- let examples ---');
let y = 15;
console.log('let y =', y);
// let y = 20; // Error! Cannot redeclare

// const examples
console.log('\n--- const examples ---');
const z = 25;
console.log('const z =', z);
// z = 30; // Error! Cannot reassign

console.log('\n✅ All demos ready!');