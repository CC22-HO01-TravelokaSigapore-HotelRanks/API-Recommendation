require('dotenv').config()
const hotel = require('./routes/hotel');

const express = require('express');
const app = express();

app.use('/hotel', hotel);

app.listen(3000, () => {
    console.log('Hotel API is running on port 3000');
}
);