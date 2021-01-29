/**
 * INTRO DEMO
 */

console.log('Insert two numbers to see in console the result!');

// Refs
const btn = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

/**
 * Add two numbers value
 * @param {number} num1 First number of the operation
 * @param {number} num2 Second number of the operation
 */
function sum(num1: number, num2: number) {
    return num1 + num2;
}

/**
 * Calculation event
 */
btn.addEventListener('click', () => {
    console.log('The result of the sum is:');
    console.log(sum(+input1.value, +input2.value));
});
