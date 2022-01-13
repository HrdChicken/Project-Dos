const Car = require('../models/car');
const User = require('../models/user');

module.exports = {
    new: newCar,
    index,
    create,
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

function create(req, res, next){
    Car.create(req.body, function(err, carDocument){
        res.redirect('/cars')
    })
}

function show(req, res, next){
    Car.findById(req.params.id, function(err, car){
        res.render('cars/show',{
            title: 'Car Details',
            car
        })
    })
}

function newCar(req, res){
    res.render('cars/new', {title: 'Cars New'});
}