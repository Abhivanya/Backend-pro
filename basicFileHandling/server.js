const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`
        <form action='/postData' method="POST">
            <label>Enter Text</label>
            <input type="text" name="enteredText"/>
            <button type="submit">Add Text</button>
        </form>
        
        `);
  } else {
    if (req.url == "/postData") {
      let data = [];
      req.on("data", (chunks) => {
        //   console.log(chunks);
        data.push(chunks);
      });
      req.on("end", () => {
        // console.log(data.toString());
        //   console.log(data.toString().split("=")[1]);
        const combinedBufferData = Buffer.concat(data);
        const formatedData = combinedBufferData.toString().split("=")[1];
        fs.writeFile("example.txt", formatedData, (err) => {
          res.statusCode = 302; //redirect
          res.setHeader("location", "/message");
          res.end();
        });
      });
    }
    if (req.url == "/message") {
      fs.readFile("example.txt", (err, data) => {
        console.log(data.toString());
        res.end(`<h1>${data.toString()}</h1>`);
      });
    }
  }
});

server.listen(4000, console.log("server is running"));
