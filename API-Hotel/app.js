require('dotenv').config({ path:('.env') })

const hotel = require('./routes/hotel');
const searchEnpoint = require('./routes/search');
const hotelRecommendationEndpoint = require('./routes/hotel-recommendation');
const userRecommendationEndpoint = require('./routes/user-recommendation');
const trendingRecommendationEndpoint = require('./routes/trending-recommendation');
const forYouEndpoint = require('./routes/forYou-recommendation');
const byLocationEndpoint = require('./routes/byLocation-recommendation');
const authMiddleware = require('./middleware/authMiddleware');




const cors = require('cors');
// const products = require('./routes/products');


const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use('/hotel', hotel);
app.use('/search', searchEnpoint);
app.use('/hotel-recommendation',authMiddleware,hotelRecommendationEndpoint); //might use auth
app.use('/user-recommendation',authMiddleware,userRecommendationEndpoint); //might use auth
app.use('/trending',trendingRecommendationEndpoint); 
app.use('/for-you',authMiddleware,forYouEndpoint); //might use auth
app.use('/by-location',authMiddleware,byLocationEndpoint);//might use auth


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Hotel API is running on port ${port}`);
    
}
);