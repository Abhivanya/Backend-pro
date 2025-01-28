const express = require("express");

const { getAppointments } = require("../controller/appointment");
const router = express.Router();

router.get("/api/get-appointments", getAppointments);
router.post("/api/post-appointments", getAppointments);

module.exports = router;
