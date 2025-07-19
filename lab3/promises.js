const fs = require("fs").promises;

//fs.writeFileSync("data.txt", "Hello, World!");
// Example of error handling in Node.js

fs.readFile("file.txt", "utf8")
    .then(data=>{
        console.log(data);
    })
    
.catch ( err=> console.log(err));



try {
    JSON.parse("{in");
} catch (error) {
    console.log(error);
    // Handle the error appropriately
    
}