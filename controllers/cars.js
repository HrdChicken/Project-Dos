const Car = require('../models/car');
const User = require('../models/user');

module.exports = {
    new: newCar,
    // update,
    // edit,
    index,
    create: createCar,
    delete: deleteCar,
    show
};

function index(req, res, next){
    Car.find({}, function (err, carDocuments){
        res.render('cars/index',{
            title: 'Car Reviews',
            cars: carDocuments
        })
    })
}

function createCar(req, res, next){
    Car.create(req.body, function(err, car){
        res.redirect('/cars')
    })
}

function deleteCar(req, res, next){
    if(!req.params.carId) return;
    Car.findOneAndDelete(req.params.carId, function(err, carDoc){
        res.redirect('/cars')
    })
}

function show(req, res){
    Car.findById(req.params.carId, function(err, carDocument){
        res.render('cars/show',{
            car: carDocument
        })
    })
}

function newCar(req, res){
    res.render('cars/new', {title: 'Cars New', make: 'gotti'});
}