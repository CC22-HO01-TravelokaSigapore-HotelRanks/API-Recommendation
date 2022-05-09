const express  = require('express');
const router= express.Router();

router.get('/', (req, res) => {
    res(200).json({
        message: 'Welcome to Hotel API'
    });
}
);

module.exports=router;

