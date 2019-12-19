'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str){
    let tmpStr = '';
    for(let i = 0; i < str.length; i++){
        if (i === 0) {
            tmpStr += str[i].toUpperCase();
        } else {
            if (str[i] !== ' ') {
                tmpStr += str[i];
            } else {
                tmpStr += str[i];
                i++;
                tmpStr += str[i].toUpperCase();
            }
        }
    }
    return tmpStr;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase.length, 1);
assert.strictEqual(jadenCase("Hello World"), "Hello World");
assert.strictEqual(jadenCase("How are you?"), "How Are You?");
assert.strictEqual(jadenCase("123 GGFF eedd CC bbAA"), "123 GGFF Eedd CC BbAA");
// End of tests */
