
console.log("--- Step 1: Sync ---");
console.log("A");
console.log("B");
console.log("C");


console.log("\n--- Step 2, 3 & 4: Task Queues ---");
console.log("Start");

setTimeout(() => {
    console.log("Timeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise (Microtask)");
});

console.log("End");


console.log("\n--- Step 5: Async/Await ---");
async function testFlow() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

console.log("3");
testFlow();
console.log("4");


// Predict the Output: A -> D -> C -> B
console.log("\n--- Step 6: Final Challenge ---");
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");