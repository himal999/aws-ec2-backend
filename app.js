const express = require('express');
const app  = express();

app.get('/',(req,res)=> {
    res.json({
        message:'From node server response'
    });
});

app.listen(3000);