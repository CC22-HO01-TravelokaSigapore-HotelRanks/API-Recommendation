const express  = require('express');
const router= express.Router();
const {hotel}= require('../models');

router.get('/', (req, res) => {
    return res.json({
        message: 'Welcome to Hotel API'
    });
}
);
router.get('/list',async (req, res) => {
    const Hotel = await hotel.findAll();
    return res.json(Hotel);
}
);



module.exports=router;

