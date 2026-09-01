const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoute")
const categoryRoutes = require("./routes/categoryRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const orderRoutes = require("./routes/orderRoutes")


connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(" backend is running...")
});

app.use("/api/auth", authRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});