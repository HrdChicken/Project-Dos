const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/cars');

// router.get('/', carCtrl.index);
// router.get('/new', carCtrl.new);
// router.get('/cars/:id/edit', carCtrl.edit),
// router.get('/:id', carCtrl.show),
// router.post('/', carCtrl.create),
// router.delete('/:id', carCtrl.delete),
// router.put('/:id', carCtrl.update),
router.get('/cars', carCtrl.index);
router.post('/cars', isLoggedIn, carCtrl.create);
router.get('/cars/:carId', carCtrl.show);
router.post('/cars/:id', carCtrl.create);
router.delete('/cars/:carId', carCtrl.delete);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;