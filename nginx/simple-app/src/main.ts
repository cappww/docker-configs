import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("simple-server-1");
});

app.listen(5000, () => console.log("simple-server-1 is up and running"));
