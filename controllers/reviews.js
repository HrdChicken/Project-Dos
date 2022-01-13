const Car = require('../models/car');

module.exports = {
    create,
    edit,
    delete: deleteReview
}

function create(req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (!req.user) {
            res.redirect(`/cars/${car._id}`)
        } else {
            req.body.userId = req.user._id;
            req.body.userName = req.user.name;
            car.reviews.push(req.body);
            car.save(function (err) {
                res.redirect(`/cars/${car._id}`)
            })
        }

    })
}

function deleteReview(req, res) {
    Car.findOne({ 'reviews._id': req.params.id }, function (err, car) {
        const reviewSubdoc = car.reviews.id(req.params.id);
        if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/cars/${car._id}`);
        reviewSubdoc.remove();
        car.save(function (err) {
            res.redirect(`/cars/${car._id}`);
        })
    })
}

function edit(req, res) {
    Car.findOne({ 'reviews._id': req.params.id }, function (err, car) {
        const reviewSubdoc = car.reviews.id(req.params.id);
        if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/cars/${car._id}`);
        reviewSubdoc.text = req.body.text;
        car.save(function (err) {
            // Redirect back to the book's show view
            res.redirect(`/cars/${car._id}`);
        });
    });

}

// function create(req, res){
//     let newReview = {
//         userId: req.user._id,
//         userName: req.user.name,
//         content: req.body.content,
//         rating: req.body.rating,
//     };
//     Car.findById(req.params.id, function(err, carDocument){
//         carDocument.reviews.push(newReview);
//         carDocument.save(function(err){
//             res.redirect(`/cars/${carDocument._id}`);
//         })
//     })
// }

// function edit(req, res){
//     Car.findOne({'reviews._id': req.params.id, function(err, carDocument){
//         const review = carDocument.reviews.id(req.params.id);
//         if(!review.userId.equals(req.user._id)) return res.redirect(`/cars/${carDocument._id}`)
//         review.content = req.body.text;
//         review.rating = req.body.rating;
//         carDocument.save(function(err){
//             res.redirect(`/cars/${carDocument._id}`)
//         })
//     }})
// }

// function deleteReview(req, res){
//     Car.findOne(
//         {'reviews._id': req.params.id, 'reviews.userId': req.user._id},
//         function(err, car) {
//           if (!car || err) return res.redirect(`/cars/${car._id}`);
//           car.reviews.remove(req.params.id);
//           car.save(function(err) {
//             res.redirect(`/cars/${car._id}`);
//           });
//         }
//       );
// }