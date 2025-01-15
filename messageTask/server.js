const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("messages.txt", (err, data) => {
      let messages = "";
      if (!err && data.length > 0) {
        messages = data.toString();
      }

      res.setHeader("Content-Type", "text/html");
      res.end(`
        <h1>${messages}</h1>
        <form action='/postData' method="POST">
            <label>Enter Text</label>
            <input type="text" name="enteredText" required/>
            <button type="submit">Add Message</button>
        </form>
      `);
    });
  } else if (req.url === "/postData" && req.method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const enteredText = new URLSearchParams(parsedBody).get("enteredText");

      fs.appendFile("messages.txt", enteredText, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.statusCode = 500;
          res.end("Internal Server Error");
          return;
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404: Page Not Found</h1>");
  }
});

server.listen(4000, () => {
  console.log("server running");
});
