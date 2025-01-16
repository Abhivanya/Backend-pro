const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middelware");
  next();
});

app.use((req, res, next) => {
  console.log("second middelware");
  res.send("Middelware test");
});

app.listen(4000, console.log("server is running"));
