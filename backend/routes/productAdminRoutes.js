


const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middileware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/products
// @desc Get all products (Admin only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route POST /api/admin/products
// @desc Add a new product (Admin only)
// @access Private/Admin
// router.post("/", protect, admin, async (req, res) => {
//   try {
//     const { name, description, price, countInStock, sku, category, brand, colors, collections, rgb, images } = req.body;

//     const product = new Product({
//       name,
//       description,
//       price,
//       countInStock,
//       sku,
//       category,
//       brand,
//       colors,
//       collections,
//       rgb,
//       images,
//     });

//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });





router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      countInStock,
      sku,
      category,
      brand,
      colors,
      collections,
      rgb,
      images,
    } = req.body;


        // inside your createProduct controller
const existingProduct = await Product.findOne({ sku: req.body.sku });
if (existingProduct) {
  return res.status(400).json({ message: "SKU already exists. Please choose a unique one." });
}

    const product = new Product({
      user: req.user._id, // ✅ required field
      name,
      description,
      price,
      countInStock,
      sku,
      category,
      brand,
      colors,
      collections,
      rgb,
      images, // expects array of { url, altText }
    });
    




    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});


// @route PUT /api/admin/products/:id
// @desc Update product (Admin only)
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.price = req.body.price || product.price;
      product.countInStock = req.body.countInStock || product.countInStock;
      product.sku = req.body.sku || product.sku;
      product.category = req.body.category || product.category;
      product.brand = req.body.brand || product.brand;
      product.colors = req.body.colors || product.colors;
      product.collections = req.body.collections || product.collections;
      product.rgb = req.body.rgb || product.rgb;
      product.images = req.body.images || product.images;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route DELETE /api/admin/products/:id
// @desc Delete product (Admin only)
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
