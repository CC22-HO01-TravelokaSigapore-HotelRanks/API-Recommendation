const express = require('express');
const axios = require('axios');
const router = express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');
const e = require('express');

router.post('/', (req, res) => {
    const user_id = req.body.user_id;
    const long = req.body.longitude;
    const lat = req.body.latitude;
    if (user_id == req.userData.id){
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
     axios.post(`https://for-you-page-ywu6raktuq-uc.a.run.app`,{
         user_id:user_id,
         longitude:long,
         latitude:lat
        })
    .then( async response => { 
        const data = response.data;
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
    else{
        return res.status(403).json({
            message: 'unauthorized'
        });
    }
}
);


module.exports = router;