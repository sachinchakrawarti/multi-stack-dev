// ============================================
// VARIABLE DECLARATION - Node.js Examples
// ============================================

console.log('╔═══════════════════════════════════════════════════╗');
console.log('║  JAVASCRIPT VARIABLE DECLARATION (Node.js)      ║');
console.log('╚═══════════════════════════════════════════════════╝');

// ============================================
// 1. VAR - Function-Scoped
// ============================================
console.log('\n📌 VAR DEMONSTRATION');
console.log('─'.repeat(50));

// Example 1: Function scope
function varScope() {
    if (true) {
        var x = 10;
    }
    console.log('  var inside function:', x); // 10 (accessible)
}
varScope();
// console.log(x); // ReferenceError (not accessible outside function)

// Example 2: Hoisting
console.log('  var hoisted:', y); // undefined (not error)
var y = 20;
console.log('  var after declaration:', y);

// Example 3: Re-declaration
var z = 30;
console.log('  var first:', z);
var z = 40;
console.log('  var second:', z); // 40 (allowed)

// ============================================
// 2. LET - Block-Scoped
// ============================================
console.log('\n📌 LET DEMONSTRATION');
console.log('─'.repeat(50));

// Example 1: Block scope
function letScope() {
    if (true) {
        let a = 10;
        console.log('  let inside block:', a);
    }
    // console.log(a); // ReferenceError
}
letScope();

// Example 2: Temporal Dead Zone (TDZ)
// console.log(b); // ReferenceError (TDZ)
let b = 30;
console.log('  let after declaration:', b);

// Example 3: No re-declaration
let c = 40;
console.log('  let first:', c);
// let c = 50; // SyntaxError
console.log('  let re-declaration not allowed ✅');

// Example 4: Loop with let (creates new binding)
console.log('  let in loop:');
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log('    i =', i), 100);
}

// ============================================
// 3. CONST - Constant
// ============================================
console.log('\n📌 CONST DEMONSTRATION');
console.log('─'.repeat(50));

// Example 1: Must initialize
// const d; // SyntaxError
const d = 50;
console.log('  const initialized:', d);

// Example 2: Cannot reassign
// d = 60; // TypeError
console.log('  const cannot reassign ✅');

// Example 3: Objects with const
const person = { name: 'John', age: 30 };
console.log('  const object before:', person);
person.age = 31;
person.city = 'London';
console.log('  const object after:', person);
// person = {}; // TypeError

// Example 4: Arrays with const
const numbers = [1, 2, 3];
console.log('  const array before:', numbers);
numbers.push(4);
numbers[0] = 10;
console.log('  const array after:', numbers);
// numbers = [5, 6, 7]; // TypeError

// ============================================
// 4. COMPARISON TABLE
// ============================================
console.log('\n📊 COMPARISON SUMMARY');
console.log('─'.repeat(50));

const comparisons = [
    { feature: 'Scope', var: 'Function', let: 'Block', const: 'Block' },
    { feature: 'Hoisting', var: 'Yes (undefined)', let: 'Yes (TDZ)', const: 'Yes (TDZ)' },
    { feature: 'Re-declaration', var: 'Allowed', let: 'Not allowed', const: 'Not allowed' },
    { feature: 'Reassignment', var: 'Allowed', let: 'Allowed', const: 'Not allowed (primitive)' },
    { feature: 'Global Object', var: 'Attaches', let: 'Does not', const: 'Does not' },
    { feature: 'Must Initialize', var: 'No', let: 'No', const: 'Yes' }
];

console.table(comparisons);

// ============================================
// 5. BEST PRACTICES EXAMPLES
// ============================================
console.log('\n🏆 BEST PRACTICES EXAMPLES');
console.log('─'.repeat(50));

// Use const by default
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const config = { timeout: 5000 };

// Use let when reassignment needed
let counter = 0;
counter++;

// Avoid var
// var oldWay = 'not recommended'; // ❌

// Use const for functions
const calculateTotal = (price, tax) => price + (price * tax);
const total = calculateTotal(100, 0.1);
console.log('  Total with tax:', total);

// ============================================
// 6. ADVANCED EXAMPLES
// ============================================
console.log('\n🔧 ADVANCED EXAMPLES');
console.log('─'.repeat(50));

// Destructuring with const
const user = { username: 'johndoe', email: 'john@example.com' };
const { username, email } = user;
console.log('  Destructured:', username, email);

// const with arrow functions
const multiply = (a, b) => a * b;
console.log('  Arrow function:', multiply(5, 3));

// let in closures
const createCounter = () => {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
};

const counterObj = createCounter();
counterObj.increment();
counterObj.increment();
console.log('  Closure counter:', counterObj.getCount());

// ============================================
// 7. ERROR HANDLING EXAMPLES
// ============================================
console.log('\n⚠️  COMMON ERRORS');
console.log('─'.repeat(50));

try {
    // Uncomment to see errors:
    // const errorTest; // SyntaxError
    // let errorTest2 = 10;
    // let errorTest2 = 20; // SyntaxError
    // const obj = {};
    // obj = {}; // TypeError
    console.log('  No errors encountered ✅');
} catch (error) {
    console.error('  Error:', error.message);
}

// ============================================
// RUNNING THE SCRIPT
// ============================================
console.log('\n✅ All examples executed successfully!');
console.log('📖 Run: node 02_javascript/script.js');

// Export for module usage (optional)
module.exports = {
    demoVar: { x, y, z },
    demoLet: { b, c },
    demoConst: { d, person, numbers }
};