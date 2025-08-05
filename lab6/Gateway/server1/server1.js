const express = require('express');

const app = express();


const port = 4001;


app.get('/getstudent', (req, res) => {
    res.json({student : [{name: 'Pranav', age: 20}, {name: 'amaan', age: 18}], from: 'server1'});
});

app.listen(port, () => {    
    console.log(`Server 1 listening at http://localhost:${port}`);
});