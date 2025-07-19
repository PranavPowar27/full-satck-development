console.log("Step 1");

setTimeout(() => {
    console.log("Step 2")
}, 5000);
setTimeout(()=>console.log("timeout 2"),4999);
console.log("Step 3");

const express = require(express);