const Car = require('../models/car');
const Reviews = require('../models/car')

module.exports = {
    create: createReview,
    delete: deleteReview
}

function createReview(req, res, next){
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




// function create(req, res){
//     Car.findById(req.params.id, function(err, carDocument){
//         carDocument.reviews.push(req.body);
//         carDocument.save(function(err){
//             res.redirect(`/cars/${carDocument._id}`)
//         })
//     })
// }