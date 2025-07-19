const fs = require("fs");

fs.writeFileSync("data.txt", "Hello, World!");
// Example of error handling in Node.js

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return; // Exit the function if there's an error
    }
    console.log(data);
});



try {
    JSON.parse("{in");
} catch (error) {
    console.log(error);
    // Handle the error appropriately
    
}