const path = require("path");



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrdersRoute = require("./routes/adminOrdersRoute");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

//connect database
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO CTRLHUB API");
});


app.use("/images", express.static(path.join(__dirname, "public/images")));


//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

//Admin routes
app.use("/api/admin/users", adminRoutes)
app.use("/api/admin/products", productAdminRoutes)
app.use("/api/admin/orders", adminOrdersRoute)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

