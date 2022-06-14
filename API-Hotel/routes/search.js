const express  = require('express');
const router= express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');
const axios = require('axios')
router.get('/',async (req, res) => {
    let pages = 10
    let offset = 0
    if (req.query.page){
        pages = parseInt(req.query.page)
    }
    if (req.query.offset){
        offset = parseInt(req.query.offset)
    }
    try{
        const info = req.query.keyword;
        
        if (info){
            axios.post(`https://location-recognition-ywu6raktuq-uc.a.run.app`,{text:info})
            .then( async response => {
            const data = response.data;
            let result = "";
            if (data.length>0){
                result = data[0];
            }else{
                result = info;
            }
            const Hotel = await hotel.findAll({
                limit: pages,
                offset: offset,
                where: {
                    [Op.or]:[
                        {
                        name: {[Op.like]: `%${info}%`}
                    },{   
                         neighborhood: {[Op.like]: `%${result}%`}
                    },{
                        type_nearby_destination: {[Op.like]: `%${info}%`},
                    }
                    ]
                }
            });
            if (Hotel.length > 0) {
                return res.status(200).json({
                    message: 'Success',
                    data: Hotel
                });
            } else {
                return res.status(200).json({
                    message: 'No hotel found'
                });
            }
        });
        }
        else{
            return res.status(200).json({
                message: 'Please enter a hotel'
            });
        }
        
    }catch(err){
        return res.status(404).json({
            message: err
        });
    }
}
);
module.exports=router;