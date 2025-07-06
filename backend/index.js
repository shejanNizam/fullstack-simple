import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`Server is ready!`);
});

//  get a list of 5 jokes

const port = process.env.PORT || 7000;

app.listen(port, (req, res) => {
  console.log(`Server is running on port http://localhost:${port}`);
});
