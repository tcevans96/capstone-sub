const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());



app.listen(PORT, ()=>{
    console.log('Running on port ', PORT);
})