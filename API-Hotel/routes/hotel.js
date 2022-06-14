const express  = require('express');
const router= express.Router();
const {hotel}= require('../models');
const {Op} = require('sequelize');
// const axios = require('axios');

router.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to Hotel API'
    });
}
);
router.post('/',(req,res)=>{
    let test = req.body.name;
    return res.json({
        message: test
    });
});
router.get('/list',async (req, res) => {
    let pages = 10
    let offset = 0
    if (req.query.page){
        pages = parseInt(req.query.page)
    }
    if (req.query.offset){
        offset = parseInt(req.query.offset)
    }
    try{
    const filters={};
    const{name,
        neighborhood,
        hotel_star,
        price_per_night,
        // room_type,
        free_refund,
        type_nearby_destination,
        nearby_destination,
        breakfast,
        pool,
        wifi,
        parking,
        smoking,
        air_conditioner,
        wheelchair_access,
        average_bed_size,
        staff_vaccinated,
        child_area,
        price_category} = req.query;
    if (name){
        filters.name= {[Op.like]: `%${name}%`};
    }
    if (neighborhood){
        filters.neighborhood= {[Op.like]: `%${neighborhood}%`};
    }
    if (hotel_star){
        filters.hotel_star= {[Op.like]: `%${hotel_star}%`};
    }
    if (price_per_night){
        filters.price_per_night={[Op.like]: `%${price_per_night}%`};
    }
    // if (room_type){
    //     filters.room_type={[Op.like]: `%${room_type}%`};
    // }
    if (free_refund){
        filters.free_refund={[Op.like]: `%${free_refund}%`};
    }
    if (type_nearby_destination){
        filters.type_nearby_destination={[Op.like]: `%${type_nearby_destination}%`};
    }
    if (nearby_destination){
        filters.nearby_destination={[Op.like]: `%${nearby_destination}%`};
    }
    if (breakfast){
        filters.breakfast={[Op.like]: `%${breakfast}%`};
    }
    if (pool){
        filters.pool={[Op.like]: `%${pool}%`};
    }
    if (wifi){
        filters.wifi={[Op.like]: `%${wifi}%`};
    }
    if (parking){
        filters.parking={[Op.like]: `%${parking}%`};
    }
    if (smoking){
        filters.smoking={[Op.like]: `%${smoking}%`};
    }
    if (air_conditioner){
        filters.air_conditioner={[Op.like]: `%${air_conditioner}%`};
    }
    if(wheelchair_access){
        filters.wheelchair_access={[Op.like]: `%${wheelchair_access}%`};
    }
    if(average_bed_size){
        filters.average_bed_size={[Op.like]: `%${average_bed_size}%`};
    }
    if(staff_vaccinated){
        filters.staff_vaccinated={[Op.like]: `%${staff_vaccinated}%`};
    }
    if(child_area){
        filters.child_area={[Op.like]: `%${child_area}%`};
    }
    if(price_category){
        filters.price_category={[Op.like]: `%${price_category}%`};
    }
    const Hotel = await hotel.findAll({
        limit: pages,
        offset: offset,
        where:filters
    });
    if (Hotel.length > 0) {
        return res.status(200).json({
            message: 'Success',
            data: Hotel
        });
    } else {
        return res.status(200).json({
            message: 'No data found'
        });
    }
    }catch(err){
        return res.status(404).json({
            message: err
        });
    }
}
);
router.get('/:rating',async (req, res) => {
    let pages = 10
    let offset = 0
    if (req.query.page){
        pages = parseInt(req.query.page)
    }
    if (req.query.offset){
        offset = parseInt(req.query.offset)
    }
    try{
        const Hotel = await hotel.findAll({
            limit: pages,
            offset: offset,
            where: {
                hotel_star: req.params.rating
            }
        });
        if (Hotel) {
            return res.status(200).json({
                message: 'Success',
                data: Hotel
            });
        } else {
            return res.status(200).json({
                message: 'No data found'
            });
        }
    }catch(err){
        return res.status(404).json({
            message: err
        });
    }
}
);
router.post('/details/:hotel_id',async (req, res) => {
    try{
        const Hotel = await hotel.findOne({
            where: {
                id: req.params.hotel_id
            }
        });
        if (Hotel) {
            return res.status(200).json({
                message: 'Success',
                data: Hotel
            });
        } else {
            return res.status(200).json({
                message: 'No data found'
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

