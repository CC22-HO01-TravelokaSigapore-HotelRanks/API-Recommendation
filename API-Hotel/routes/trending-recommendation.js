const express = require('express');
const axios = require('axios');
const router = express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');

router.get('/', (req, res) => {
    axios.post('https://hotel-ranking-ywu6raktuq-uc.a.run.app/trending_system/')
    .then( async response => {
        const data = response.data;
        const result = await hotel.findAll({
            attributes: ['id', 'name','neighborhood','hotel_star','price_per_night','image_links','free_refund'],
            where: {
                id: {
                    [Op.or]:data
                }
            }
        });
        if (result) {
            return res.status(200).json({
                message: 'Success',
                data: result
            });
        }
        else{
            return res.status(200).json({
                message: 'No hotel found'
            });
        }
    
    })
    .catch(function (error) {
        res.status(404).json({
            text: error
        })
      });
     
     
}
);
module.exports = router;