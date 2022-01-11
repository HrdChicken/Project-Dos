const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/cars/:carId/reviews', reviewsCtrl.create);
router.delete('/cars/:carId/reviews/reviewsId', reviewsCtrl.delete);

module.exports = router;

// item = review
// list = car