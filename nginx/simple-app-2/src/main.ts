import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("simple-server-2");
});

app.listen(5001, () => console.log("simple-server-2 is up and running"));
