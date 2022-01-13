const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/cars/:id/reviews/', reviewsCtrl.create);
router.put('/cars/:id/reviews/:id/', reviewsCtrl.edit);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;
