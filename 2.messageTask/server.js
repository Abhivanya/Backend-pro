const http = require("http");
const routes = require("./routes.js");

const server = http.createServer(routes);

server.listen(4000, () => {
  console.log("server running");
});
