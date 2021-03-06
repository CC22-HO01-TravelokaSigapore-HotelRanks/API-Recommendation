const express = require('express');

const axios = require('axios');
const router = express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');


router.post('/:hotel_id', (req, res) => {
    const hotels = req.params.hotel_id;
    // res.status(200).json({
    //     text: hotel,
    // })
     axios.post(`https://hotel-ranking-ywu6raktuq-uc.a.run.app/hotel-similarity/${hotels}`)
    .then( async response => {
        const data = response.data;
        const result = await hotel.findAll({
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
            text: error.response.data
        })
      });
     
}
);


module.exports = router;