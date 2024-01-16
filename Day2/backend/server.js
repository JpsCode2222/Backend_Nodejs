import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const port = 3000;

// api list of jokes
const jokes = [
  {
    id: "1",
    joke: "first joke",
    desc: "joke",
  },
  {
    id: "2",
    joke: "Second joke",
    desc: "joke",
  },
  {
    id: "3",
    joke: "Third joke",
    desc: "joke",
  },
];

app.get("/", (req, res) => {
  res.send("server start");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log("server start on http://localhost:" + port);
});
