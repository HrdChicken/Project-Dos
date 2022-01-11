const express = require('express');
const router = express.Router();
const carCtrl = require('../controllers/cars');

router.get('/', carCtrl.index);
router.get('/new', carCtrl.new);
router.get('/:id/edit', carCtrl.edit),
router.get('/:id', carCtrl.show),
router.post('/', carCtrl.create),
router.delete('/:id', carCtrl.delete),
router.put('/:id', carCtrl.update),

module.exports = router;