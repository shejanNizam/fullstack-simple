import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`Server is ready!`);
});

//  get a list of 5 jokes
app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      text: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      text: "Did you hear about the claustrophobic astronaut?",
      content: "He just needed a little space.",
    },
    {
      id: 3,
      text: "Why don't eggs tell jokes?",
      content: "They'd crack each other up.",
    },
    {
      id: 4,
      text: "How do you organize a space party?",
      content: "You planet!",
    },
    {
      id: 5,
      text: "What's the best thing about Switzerland?",
      content: "I don't know, but the flag is a big plus.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 7000;

app.listen(port, (req, res) => {
  console.log(`Server is running on port http://localhost:${port}`);
});
