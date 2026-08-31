const express = require('express');
const { addToCart, fetchCartItems } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);
router.get('/:userId', fetchCartItems);

module.exports = router;