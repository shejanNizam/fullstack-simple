import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  console.log(jokes);

  useEffect(() => {
    axios
      .get(`/api/jokes`)
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h3>Simple React with vite</h3>
      <h4>All Jokes: {jokes.length}</h4>
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.text}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
