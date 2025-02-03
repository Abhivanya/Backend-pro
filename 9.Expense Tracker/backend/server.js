const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const appointmentRoute = require("./routes/appointment");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(appointmentRoute);
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3000, console.log("server is running on 3000"));
