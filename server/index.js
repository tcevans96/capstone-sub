const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const subscriptionRoutes = require('./routes/subscriptionRoute.js');
const userRoutes = require('./routes/userRoute.js');

app.use('/static',express.static('public'));
app.use('/subscriptions', subscriptionRoutes);
app.use('/user', userRoutes);

app.use(cors());
app.use(express.json());


app.listen(PORT, ()=>{
    console.log('Running on port ', PORT);
})