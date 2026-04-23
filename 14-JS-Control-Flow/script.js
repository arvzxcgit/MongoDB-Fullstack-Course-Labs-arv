// Statements 
console.log("--- Conditionals Output ---");
let score = 85;

if (score >= 90) {
    console.log("Grade: A - Excellent!");
} else if (score >= 80) {
    console.log("Grade: B - Good job!"); // What comes out based on value (85)
} else {
    console.log("Grade: C - Keep practicing!");
}

// Implement Loops
console.log("\n--- Loops Output (Counting 1 to 5) ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}

// Implement Functions
console.log("\n--- Functions Output ---");

// Function that performs a reusable operation
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Calling the function
let total = calculateTotal(250, 3);
console.log("Total Price: " + total);

// Another reusable function
const greetUser = (name) => {
    return `Hello, ${name}! Welcome to Lab 14.`;
};

console.log(greetUser("Arvin"));