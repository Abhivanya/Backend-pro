const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`
    <form action='/product' method='POST'>
        <input type="text" name="name" /><br />
        <input type="number" name="size" /><br />
        <button>Add Product</button>
    </form>
    `);
});

app.post("/product", (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("Home page");
});

app.listen(4000, console.log("server is running"));
