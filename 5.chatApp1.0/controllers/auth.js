const fs = require("fs");
const path = require("path");

exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
};
