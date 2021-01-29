/**
 * TypeScript Core Types
 *
 * - number (1, 2.4, -6) - both integers and floats
 * - string ('hi', "hi", `hi`) - text values
 * - boolean (true, false) - no truthy or falsy values
 */

function add(n1: number, n2: number) {
    return n1 + n2;
}

const num1 = 3;
const num2 = 5.2;
const res = add(num1, num2);

console.log(res);
