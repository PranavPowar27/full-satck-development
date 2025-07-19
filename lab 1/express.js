const express = require("express");

const app = express();


app.listen(3000, ()=>{
    console.log ("lisenting on port 3000");
})

app.get("/:messsage", (req, res)=>{
    const message = req.params.messsage;

    res.send(`name is $(message)`); 

})