const authController = require("../controllers/auth");

const express = require("express");

const router = express.Router();

router.get("/login", authController.login);

module.exports = router;
