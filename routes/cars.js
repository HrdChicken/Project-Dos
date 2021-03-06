const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/cars');

router.get('/cars', carCtrl.index);
router.get('/cars/new', isLoggedIn, carCtrl.new);
router.get('/cars/:id', carCtrl.show);
router.post('/cars', isLoggedIn, carCtrl.create);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;