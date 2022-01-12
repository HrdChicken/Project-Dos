const Car = require('../models/car');
const Reviews = require('../models/car')

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res, next){
    Car.findById(req.params.carId, function(err, carDocument){
        carDocument.reviews.push(req.body);
        carDocument.save(function(err){
            res.redirect(`/cars/${carDocument._id}`)
        })
    })
}

function deleteReview(req, res, next){
    Car.findById(req.params.carId, function(err, carDocument){
        carDocument.reviews.pull({_id: req.params.reviewId});
        carDocument.save(function(err){
            res.redirect(`/cars/${carDocument._id}`)
        })
    })
}