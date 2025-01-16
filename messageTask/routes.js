const fs = require("fs");
const handleRoute = (req, res) => {
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
      // const enteredText = new URLSearchParams(parsedBody).get("enteredText");
      // console.log(parsedBody);
      const enteredText = parsedBody.replace("+", " ").split("=")[1];

      fs.writeFile("messages.txt", enteredText, (err) => {
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
};

// 1 . default export
module.exports = handleRoute;

// 2
// module.exports = {
//   handleRoute,
//   data: { id: 1, name: "test" },
// };

// 3
// exports.handleRoute;

// 4
// exports.data = {id:1,name:"test"};
// exports.handler = handleRoute
