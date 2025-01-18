const fs = require("fs");
const path = require("path");

exports.contactus = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};

exports.successPage = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
};

exports.getMessages = (req, res) => {
  fs.readFile(path.join(__dirname, "message.json"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load messages" });
    }

    res.json(JSON.parse(data || "[]"));
  });
};

exports.addMessage = (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: "Username and message are required" });
  }

  fs.readFile(path.join(__dirname, "message.json"), "utf-8", (err, data) => {
    const messages = err ? [] : JSON.parse(data || "[]");

    messages.push({ username, message });

    fs.writeFile(
      path.join(__dirname, "message.json"),
      JSON.stringify(messages, null, 2),
      (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to save message" });
        }

        res.status(200).json({ success: true });
      }
    );
  });
};

exports.homePage = (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: "Username and message are required" });
  }

  fs.readFile(path.join(__dirname, "message.json"), "utf-8", (err, data) => {
    const messages = err ? [] : JSON.parse(data || "[]");

    messages.push({ username, message });

    fs.writeFile(
      path.join(__dirname, "message.json"),
      JSON.stringify(messages, null, 2),
      (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to save message" });
        }

        res.status(200).json({ success: true });
      }
    );
  });
};
