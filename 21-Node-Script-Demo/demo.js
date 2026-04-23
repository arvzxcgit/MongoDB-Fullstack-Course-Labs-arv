const fs = require('fs');

const content = "Hello! This file was created using Node.js. High five for backend engineering!";

// Writing the file to the current directory
fs.writeFile('message.txt', content, (err) => {
    // Basic error handling to check if something went wrong
    if (err) {
        console.error("Failed to create the file:", err);
        return;
    }
    
    console.log("Success! message.txt has been created in your folder.");
});


if (fs.existsSync('message.txt')) {
    console.log("Note: The file already exists and will be overwritten.");
}