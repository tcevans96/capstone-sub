require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { uuid } = require('uuidv4')
const PORT = process.env.PORT || 8080;
const subscriptionRoutes = require('./routes/subscriptionRoute.js');
const userRoutes = require('./routes/userRoute.js');

app.use(cors());
app.use(express.json());

app.use('/static',express.static('public'));
app.use('/subscriptions', subscriptionRoutes);
app.use('/users', userRoutes);



app.listen(PORT, ()=>{
    console.log('Running on port ', PORT);
})