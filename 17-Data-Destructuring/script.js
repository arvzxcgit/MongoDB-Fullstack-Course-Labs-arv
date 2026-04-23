// ARRAY DESTRUCTURING
// Extracting values and skipping some elements
const fruits = ['Apple', 'Banana', 'Cherry', 'Dragonfruit'];
const [first, , third] = fruits;

console.log("Array Destructuring:");
console.log(first); // Apple
console.log(third); // Cherry


// OBJECT DESTRUCTURING
// Basic property extraction
const user = {
    username: 'Arvin01',
    age: 20,
    city: 'Dagupan City'
};

const { username, city } = user;

console.log("\nObject Destructuring:");
console.log(username, city);


// Renaming, default values, and nested objects
const settings = {
    theme: 'dark',
    notifications: {
        email: true,
        sms: false
    }
};


const { theme: currentTheme, language = 'English' } = settings;

// Nested destructuring for email status
const { notifications: { email } } = settings;

console.log("\nAdvanced Destructuring:");
console.log(currentTheme); 
console.log(language);
console.log(email);



// Passing an object and destructuring it directly in the parameters
const product = {
    id: 101,
    title: 'Mechanical Keyboard',
    price: 1500
};

function displayProduct({ title, price }) {
    console.log(`\nFunction Destructuring:\nProduct: ${title} costs ${price} pesos.`);
}

displayProduct(product);