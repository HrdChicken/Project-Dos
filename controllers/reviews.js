const Car = require('../models/car');

module.exports = {
    create
}

function create(req, res){
    Car.findById(req.params.id, function(err, carDocument){
        carDocument.reviews.push(req.body);
        carDocument.save(function(err){
            res.redirect(`/cars/${carDocument._id}`)
        })
    })
}