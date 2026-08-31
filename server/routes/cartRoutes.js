const express = require('express');
const { addToCart, fetchCartItems, updateCartQuantity, removeFromCart } = require('../controllers/cartController');
const router = express.Router()

router.post('/', addToCart);
router.get('/:userId', fetchCartItems);
router.patch("/:userId/:productId", updateCartQuantity);
router.delete("/:userId/:productId", removeFromCart);

module.exports = router;