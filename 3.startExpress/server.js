const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.get("/", (req, res, next) => {
  res.redirect("/shop");
});

app.use((req, res, next) => {
  res.send("<h1>Page not Found</h1>");
});

app.listen(4000, console.log("server is running"));
