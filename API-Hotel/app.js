require('dotenv').config({ path:('.env') })
const hotel = require('./routes/hotel');
const searchEnpoint = require('./routes/search');
const cors = require('cors');
// const products = require('./routes/products');


const express = require('express');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json())
app.use('/hotel', hotel);
app.use('/search', searchEnpoint);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Hotel API is running on port ${port}`);
    
}
);