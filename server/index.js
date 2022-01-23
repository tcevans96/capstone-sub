const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080;

app.use('/static',express.static('public'));

app.use(cors());
app.use(express.json());


app.listen(PORT, ()=>{
    console.log('Running on port ', PORT);
})