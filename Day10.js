//Allow One Function Call

// const once = (fn) => {
//     let called = false;
//     return (...args) => called ? undefined : (called = true, fn(...args));
// };
/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
    let called = false;
    
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}

// Test case 1
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined

// Test case 2 - with different function
const greet = (name) => `Hello ${name}!`;
const onceGreet = once(greet);

console.log(onceGreet("Alice")); // "Hello Alice!"
console.log(onceGreet("Bob"));   // undefined
console.log(onceGreet("Charlie")); // undefined

// Test case 3 - with no arguments
const getRandom = () => Math.random();
const onceRandom = once(getRandom);

const first = onceRandom();
const second = onceRandom();
console.log(first); // Some random number
console.log(second); // undefined
console.log(first === second); // false (first returns value, second undefined)