import express from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
// import User from "./models/userSchema.js";
import connectDB from "./config/db.js";
import productRoutes from './Routes/productRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import orderRoutes from "./Routes/orderRoutes.js"
import products from "./Data/products.js";

dotenv.config();

connectDB();
const port = process.env.PORT || 5000;
const app = express();

// console.log("Hello World");


// // Mongoose connection
// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log("Data base connect");
// });

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cookie Parser
app.use(cookieParser());

// Backend main
app.get('/', (req, res) => {
    res.send("API is running...");
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Paypal Config
app.get('/api/config/paypal', (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}));

app.listen(process.env.PORT, () => {
  console.log(`Server runing on http://localhost:${process.env.PORT}`);
});
