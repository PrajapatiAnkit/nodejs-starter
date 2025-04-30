const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello from node");
    res.end();
  }
  if (req.url === "/about") {
    res.write("hello from about node");
    res.end();
  }
});

const hostname = "localhost";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
