const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/cars');


router.post('/cars', isLoggedIn, carCtrl.create);
router.get('/cars/new', carCtrl.new);
router.get('/cars', carCtrl.index);
router.get('/cars/:id', carCtrl.show);
router.post('/cars/:id', carCtrl.create);
router.delete('/cars/:id', carCtrl.delete);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;