const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request received");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Welcome to Node js</h1>");
  res.end();
});

const hostname = "localhost";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
