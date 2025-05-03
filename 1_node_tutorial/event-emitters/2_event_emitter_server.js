const http = require("http");

// code block1
// const server = http.createServer((req, res) => {
//   console.log("received request");
//   res.end("hey");
// });

// this code is same as block1
//events are used internally by http to listen the requests
// and response to it,
// here we did manually to showcase the event
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("received request1");
  res.end("hey1");
});

const hostname = "localhost";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
