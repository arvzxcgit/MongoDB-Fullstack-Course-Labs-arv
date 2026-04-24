/**
 * DEBUGGING LAB: FIXED CODE
 * Author: Arvin
 */

// --- 1. Syntax Error Fix ---
// Original faulty code: function greet(name) { console.log("Hello " + name }
// Fix: Added missing closing parenthesis.
function greet(name) {
    console.log("Greeting Task: Hello " + name);
}
greet("Developer");


// --- 2. Runtime Error Fix ---
// Original faulty code: let x = y + 10; (y is not defined)
// Fix: Properly declared the variable 'y' before use.
let y = 5; 
let x = y + 10;
console.log("Calculation Task: The value of x is " + x);


// --- 3. Logical Error Fix ---
// Task: Calculate the average of two numbers.
// Original faulty code: let avg = 10 + 20 / 2; (Result would be 20 because of PEMDAS)
// Fix: Added parentheses to ensure addition happens before division.
let num1 = 10;
let num2 = 20;
let average = (num1 + num2) / 2; 
console.log("Logic Task: The average is " + average);


// --- 4. Testing & Verification ---
// Displaying result to the web page to verify functional testing.
const outputDiv = document.getElementById("output");
if (outputDiv) {
    outputDiv.innerHTML = `
        <p style="color: green;">✔ All bugs fixed successfully.</p>
        <ul>
            <li>Syntax Fixed: Proper function closing.</li>
            <li>Runtime Fixed: Variable 'y' is now defined.</li>
            <li>Logical Fixed: Average calculation is now correct (${average}).</li>
        </ul>
    `;
}