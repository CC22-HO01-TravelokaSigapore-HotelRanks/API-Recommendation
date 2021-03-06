const express = require('express');
const axios = require('axios');
const router = express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');


router.post('/:user_id', (req, res) => {
    const users = req.params.user_id;
    // res.status(200).json({
    //     text: hotel,
    // })
    if (users == req.userData.id){
     axios.post(`https://hotel-ranking-ywu6raktuq-uc.a.run.app/sentiment-similarity/${users}`)
    .then( async response => {
        const data = response.data;
        if (data == 'User ID is not found/cached yet in ML. Please do recached on POST /re-cached/'){
            return res.status(200).json({
                message: 'User not found'
            });
        }
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
            text: error
        })
      });
    }
    else{
        return res.status(403).json({
            message: 'Forbidden'
        });
    }
     
}
);
module.exports = router;