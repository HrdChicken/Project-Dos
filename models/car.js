const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {content: String, rating: {type: Number, min: 1, max: 5, default: 5}},
    {timestamps: true}
)

const carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year:{type: Number, required: true},
    posted: {type: Date, default: function(){let newDate = new Date(); let nextYear = newDate.setFullYear(newDate.getFullYear() + 1)
    return nextYear},
    author: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    },
reviews: [reviewSchema],
},
{timestamps: {startedAt: 'startedAt', updatedAt: 'updatedAt'}},
);

module.exports = mongoose.model('Car', carSchema);