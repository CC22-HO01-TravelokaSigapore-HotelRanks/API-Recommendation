const express = require('express');
const axios = require('axios');
const router = express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');

router.post('/', (req, res) => {
    const long = req.body.longitude;
    const lat = req.body.latitude;
    let pages = 10
    let offset = 0
    if (req.query.page){
        pages = parseInt(req.query.page)
    }
    if (req.query.offset){
        offset = parseInt(req.query.offset)
    }
    // res.status(200).json({
    //     user_id: user_id,
    //     longitude: long,
    //     latitude: lat
    // })
     axios.post(`https://hotel-ranking-ywu6raktuq-uc.a.run.app/near_you/`,{
         longitude:long,
         latitude:lat
        })
    .then( async response => { 
        const data = response.data.slice(0,11);
        console.log(data)
        const result = await hotel.findAll({
            limit: pages,
            offset: offset,
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
        res.status(404).json(error.response.data)
      });
     
}
);


module.exports = router;