const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is home");
    return;
  }

  if (req.url === "/about") {
    for (let index = 0; index < 10000; index++) {
      for (let index1 = 0; index1 < 1000; index1++) {
        console.log(`blocking it ${index}`);
      }
    }
    res.end("About Page");
    return;
  }
  if (req.url === "/contact") {
    res.end("this is contact");
    return;
  }
  res.end("Error Page");
});

server.listen(3000, () => {
  console.log("Server listening on port : 3000....");
});
