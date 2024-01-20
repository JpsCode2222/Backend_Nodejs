import connectDB from "./db/index.js";
import { app } from "./app.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed", err);
  });

const port = process.env.PORT;
