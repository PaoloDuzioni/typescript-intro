/**
 * TypeScript Core Types
 *
 * - number (1, 2.4, -6) - both integers and floats
 * - string ('hi', "hi", `hi`) - text values
 * - boolean (true, false) - no truthy or falsy values
 */

function add(n1: number, n2: number, show: boolean, apendix: string) {
    const res = n1 + n2;
    if (show) {
        console.log(apendix + res);
    } else {
        return res;
    }
}

// Const cant be reassigned
const num1 = 3; // number
const num2 = 5.2; // number
const printRes = true; // boolean
const apendix = 'The result is: '; // string

// Let without initial value
let myVar: string;

add(num1, num2, printRes, apendix);
