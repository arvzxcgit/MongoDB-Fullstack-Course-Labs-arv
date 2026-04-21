
let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango");      // adds to end
fruits.pop();              // removes from end
fruits.unshift("Grapes");  // adds to start
fruits.shift();            // removes from start

console.log("Final Array:", fruits);
console.log("Array Length:", fruits.length);


let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    course: "Web Dev"
};


student.age = 21;              
student["course"] = "MERN Stack"; 

console.log("Student Object:", student);


let products = [
    { name: "Laptop", price: 50000, stock: 10 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1500, stock: 5 }
];


products.forEach(item => {
    console.log("Product:", item.name);
});


let availableItems = products.filter(item => item.stock > 0);
console.log("Available:", availableItems);


let prices = products.map(item => item.price);
console.log("Price List:", prices);


console.log("Data processing complete.");