import mongoose from "mongoose";
import connectDB from "./db/index.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});
connectDB();
const port = process.env.PORT;
