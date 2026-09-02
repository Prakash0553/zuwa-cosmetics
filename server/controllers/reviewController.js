const Review = require("../model/Review");

// Create a review
 const createReview = async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;

    if (!userId || !productId || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const review = await Review.create({
      userId,
      productId,
      rating,
      comment,
    });

    res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      review,
    });
  } catch (error) {
    console.error("CREATE REVIEW ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


 const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await Review.find({ productId })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.error("GET REVIEWS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

 const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  getReviews,
  getAllReviews
}