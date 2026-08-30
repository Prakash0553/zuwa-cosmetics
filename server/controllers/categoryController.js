const Category = require("../model/Category.js")
const cloudinary = require("../config/cloudinary.js")

const createCategory = async (req, res) => {
  try {
    const { name} = req.body;
    let imageUrl = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }
    const category = new Category({
      name,
      image: imageUrl
    });
    const createdCategory = await category.save();

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      category: createdCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Product.findById(req.params.id);
    // Update product fields if they are provided in the request body else keep the existing values
    if (category) {
      category.name = name || category.name;

      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        category.imageUrl = result.secure_url;
      }
      const updatedCategory = await category.save();
      res.json(updatedCategory);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    await category.deleteOne();

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports ={ createCategory, getCategories, getCategory, updateCategory, deleteCategory}