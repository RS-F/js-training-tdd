'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str){
    return str.substr(2);
};
function cutLast(str){
    return str.substr(0, str.length - 2);
};
function cutFirstLast(str){
    return str.substr(2, str.length - 2 - 2);
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst("Hello World"), "llo World");
assert.strictEqual(cutLast("123GGFFeeddCCbbAA"), "123GGFFeeddCCbb");
assert.strictEqual(cutFirstLast("123GGFFeeddCCbbAA"), "3GGFFeeddCCbb");
// End of tests */
