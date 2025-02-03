module.exports.getAppointments = (req, res) => {
  res.json({
    message: "success",
    data: [{ username: "test", email: "test@gmail.com" }],
  });
};
module.exports.postAppointments = (req, res) => {
  res.send("test");
};
