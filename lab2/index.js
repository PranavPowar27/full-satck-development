const fs = require("fs"); // fs: file system
const math = require("./math.js");
const _=require("lodash");
const port = 3000;

const express = require("express");
const app = express();
app.use(express.static("static"));
app.listen(3000, ()=>{
    console.log ("lisenting on port 3000");
})

app.get("/", (req, res)=>{
    const {name} = req.query;

    console.log(name);

});
app.get("/userdetaill",(req,res)=>{
    res.json({
        "name": "Pranav",
        "role": "Student"
    })
})
app.listen(port,()=>{
    console.log(`server is running on :${port}`);
});
//creates files
fs.writeFileSync("data.txt","Hello world");


fs.appendFileSync("data.txt","Hello world");
//reads the file
const data = fs.readFileSync("data.txt","utf-8");



console.log(data);
console.log(math.add(12,36));

console.log(math.sub(12,36));

console.log(math.multplication(12,36));

console.log(math.divide(12,36));


console.log(math.modul(12,36));

console.log(_.add(21,52));

const array = [1,5,9,4,8,3];

console.log(_.sortBy(array));