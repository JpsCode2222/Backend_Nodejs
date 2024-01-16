// .env configuration
require("dotenv").config();
// express
const express = require("express");
// app
const app = express();
// port
const port = process.env.PORT;
// json data
const userData = {
  name: "Jayad",
  user_id: "abdkjdsijl",
  pass: "dkfjeijlkjIZj",
};

// get request
app.get("/", (req, res) => {
  res.send(port);
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/user", (req, res) => {
  res.status(200).json(userData);
  //   res.json(200, userData);
});

// app listen on port
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
