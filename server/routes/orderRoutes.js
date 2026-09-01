const express = require("express");

const router = express.Router();

const { createOrder, getUserOrders, getAllOrders } = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/:userId", getUserOrders)
router.get("/", getAllOrders)

module.exports = router;