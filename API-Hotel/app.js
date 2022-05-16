require('dotenv').config({ path:('.env') })
const hotel = require('./routes/hotel');
// const products = require('./routes/products');


const express = require('express');
const path = require('path');
const app = express();
app.use(express.json())
app.use('/hotel', hotel);


app.listen(3000, () => {
    console.log('Hotel API is running on port 3000');
    
}
);