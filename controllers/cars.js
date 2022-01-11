const Car = require('../models/car');

module.exports = {
    index,
    new: newCar,
    create,
    show,
    update,
    edit,
    delete: deleteCar
};


async function index(req, res){
    try{
        const carDocuments = await Car.find({});
        res.render('cars/index.ejs',{
            title: 'Cars',
            cars: carDocuments
        })
    } catch(err){
        res.send(err)
    }
}

function newCar(req, res){
    res.render('cars/new.ejs', {title: 'Cars New'});
}

async function show(req, res){
    try{
        const foundCar = await Car.findById(req.params.id);
        res.render('cars/show.ejs',{
            car: foundCar
        })
    } catch(err){
        res.send(err)
    }
}

function edit(req, res){
    Car.findById(req.params.id, function(err, foundCar){
        if(err){
            res.send(err);
        } else {
            res.render('cars/edit.ejs',{
                car: foundCar
            })
        }
    })
}

function update(req, res){
    Car.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedCar){
        res.redirect('/cars')
    })
}


function deleteCar(req, res){
    Car.findByIdAndRemove(req.params.id, function (err, deletedCar){
        res.redirect('/cars')
    })
}

function create(req, res){
    Car.create(req.body, function(err, car){
        res.redirect('/cars')
    })
}

// async function create(req, res){
//     try{
//     const makeCar = await Car.create(req.body);
//     res.render('car/index', {
//         car: makeCar
//     })
// } catch(err){
//     res.send(err)
// }
// }

// function index(req, res){
    //     Car.find({}, function(err, carDocuments){
        //         res.render('cars/index', {
            //             title: 'Cars',
            //             car: carDocuments
            //         })
//     })
// }

// function newCar(req, res){
//     res.render('cars/new', {title: 'Cars New'})
// }

// function create(req, res){
//     Car.create(req.body, function(err, carDocument){
//         res.redirect(`/cars/${carDocument._id}`)
//     })
// }

// function create(req, res){
//     req.body.reviewSchema = !!req.body.reviewSchema;
//     req.body.releaseYear = parseInt(req.body.releaseYear)
//     Car.create(req.body, function(err, carDocument){
//         res.redirect(`/cars/${carDocument._id}`)
//     })
// }

// function show (req, res){
//     Car.findById(req.params.id, function(err, car){
//         res.render('cars/show', {title: 'Car Details', car})
//     })
// }