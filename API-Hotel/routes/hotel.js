const express  = require('express');
const router= express.Router();

router.get('/', (req, res) => {
    res(200).json({
        message: 'Welcome to Hotel API'
    });
}
);
router.list('/list',async (req, res) => {
    const hotel = await Hotel.findAll();
    res.json(hotel);
}
);

module.exports=router;

