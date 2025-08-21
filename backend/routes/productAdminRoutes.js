// const express = require("express");
// const Product = require("../models/Product");
// const { protect, admin } = require("../middileware/authMiddleware");

// const router = express.Router()

// // @route GET /api/admin/products
// // @desc GET all products (Admin only)
// // @access Private/admin

// router.get("/", protect, admin, async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     req.status(500).json({ message: "Server Error" });
//   }
// });


// // @route POST /api/admin/products
// // @desc Add a new products (Admin only)
// // @access Pivate/Admin

// router.post("/", protect, admin, async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists." });
//     }
//     user = new User({
//       name,
//       email,
//       password,
//       role: role || "customer",
//     });
//     await user.save();
//     res.status(201).json({ message: " User created successfully", user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });


// // @route PUT /api/admin/products
// // @desc update products (Admin only)
// // @access Pivate/Admin

// router.put("/:id", protect, admin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       user.role = req.body.role || user.role;
//     }
//     const updatedUser = await user.save();
//     res.json({ message: "User updated successfully", user: updatedUser });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });



// // @route DELETE /api/products/:id
// // @desc Delete a products
// // @access Private/admin
// router.delete("/:id", protect , admin, async (req,res) =>{
//     try {
//         const products = await Product.findById(req.params.id)
//         if (products) {
//             await products.deleteOne()
//             res.json({ message: "User deleted successfully "})
//         } else {
//             res.status(404).json({ message:"User not found"})
//         }

//    } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;


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
router.post("/", protect, admin, async (req, res) => {
  try {
    const { name, description, price, countInStock, sku, category, brand, colors, collections, rgb, images } = req.body;

    const product = new Product({
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
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
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
