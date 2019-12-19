'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str){
    return str[0] + str[1];
};
function keepLast(str){
    return str.substr(str.length - 2);
};
function keepFirstLast(str){
    return str.substr(2, 2);
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst("Hello World"), "He");
assert.strictEqual(keepLast("123GGFFeeddCCbbAA"), "AA");
assert.strictEqual(keepFirstLast("123GGFFeeddCCbbAA"), "3G");
// End of tests */
