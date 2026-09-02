const express = require("express");
const { createReview, getReviews, getAllReviews } = require("../controllers/reviewController");


const router = express.Router();

router.post("/", createReview);
router.get("/all", getAllReviews)
router.get("/:productId", getReviews);


module.exports = router