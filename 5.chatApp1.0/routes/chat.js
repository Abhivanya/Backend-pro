const chatController = require("../controllers/chat");

const express = require("express");

const router = express.Router();

router.get("/", chatController.homePage);

router.post("/send-message", chatController.addMessage);

router.get("/messages", chatController.getMessages);

router.get("/contactus", chatController.contactus);
router.get("/success", chatController.successPage);
module.exports = router;
