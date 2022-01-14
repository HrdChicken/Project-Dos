const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    text: String,
    posted: {type: Date, default: function(){let newDate = new Date(); let nextYear = newDate.setFullYear(newDate.getFullYear() + 0)
        return nextYear}},
},
    {timestamps: true}
)

const carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    posted: {type: Date, default: function(){let newDate = new Date(); let nextYear = newDate.setFullYear(newDate.getFullYear() + 0)
            return nextYear}},
    author: {type: String, required: true},
    description: {type: String, required: true},
    reviews: [reviewSchema]
},

{timestamps: true}
)


// const carSchema = new Schema({
//     make: {type: String, required: true},
//     model: {type: String, required: true},
//     year:{type: Number, required: true},
//     posted: {type: Date, default: function(){let newDate = new Date(); let nextYear = newDate.setFullYear(newDate.getFullYear() + 1)
//     return nextYear},
//     author: {},
//     description:{type: String}
//     },
// reviews: [reviewSchema],
// },
// {timestamps: {startedAt: 'startedAt', updatedAt: 'updatedAt'}},
// );

module.exports = mongoose.model('Car', carSchema);