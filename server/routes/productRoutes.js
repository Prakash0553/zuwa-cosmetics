const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct, getProductById } = require('../controllers/productController');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const router = express.Router();

router.post('/', upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct);


module.exports = router;