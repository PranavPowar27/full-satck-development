const express = require('express');

const app = express();


const port = 4002;


app.get('/getteacher', (req, res) => {
    res.json({teacher : [{name: 'Mahadev', age: 28}, {name: 'Sonali', age: 26}], from: 'server2'});
});

app.listen(port, () => {    
    console.log(`Server 2 listening at http://localhost:${port}`);
});