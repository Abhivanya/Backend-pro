const path = require("path");

const chatRoutes = require("./routes/chat");
const authRoutes = require("./routes/auth");

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(bodyParser.json())

app.use(chatRoutes);
app.use(authRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000, console.log("server is running"));
