// Step 2: Variables
var globalVar = "Initial Value";
let userAge = 20;
const birthYear = 2006;

console.log("Global:", globalVar);
console.log("Age:", userAge);
console.log("Birth Year:", birthYear);

// Step 3: Data Types
let score = 100;
let userName = "Skill Wallet User";
let isEnrolled = true;
let hobbies = ["coding", "reading", "gaming"];
let userProfile = {
    id: 1,
    status: "Active"
};

console.log("Score Type:", typeof score);
console.log("Name Type:", typeof userName);
console.log("Enrollment Status Type:", typeof isEnrolled);
console.log("Hobbies Type:", typeof hobbies);
console.log("Profile Type:", typeof userProfile);

// Step 4: Operators
// Arithmetic
let sum = 10 + 5;
let diff = 20 - 8;
let product = 4 * 3;
let quotient = 100 / 5;

console.log("Arithmetic Results:", { sum, diff, product, quotient });

// Comparison & Logical
let isAdult = userAge >= 18;
let hasAccess = isAdult && isEnrolled;

console.log("Is adult?", isAdult);
console.log("Has access?", hasAccess);

// Condition Test
if (score === 100) {
    console.log("Perfect score attained.");
} else {
    console.log("Keep practicing.");
}