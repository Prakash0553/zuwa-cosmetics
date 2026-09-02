const express = require("express")
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
  getCategoriesWithProducts,
  getProductsByCategory
} = require("../controllers/categoryController.js");
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const router = express.Router();


router.post("/", upload.single("image"), createCategory);

router.get("/", getCategories);

router.get("/with-products", getCategoriesWithProducts);

router.get("/category/:id", getProductsByCategory);

router.get("/:id", getCategory);

router.put("/:id", upload.single("image"), updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router