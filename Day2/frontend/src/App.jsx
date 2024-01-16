import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:3000/jokes")
      // use proxy in vite.config.js file
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>Jock Api Fetch</h1>
      <h4>All JOKES = {jokes.length}</h4>
      {jokes.map((joke, ind) => {
        return (
          <>
            <p key={joke.id}>{joke.joke}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
