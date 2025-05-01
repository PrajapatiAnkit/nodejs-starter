const { readFileSync, createReadStream } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  // const normalReadText = readFileSync("../content/api/big-file.txt", "utf8");
  // res.end(normalReadText);

  const fileStream = createReadStream("../content/api/big-file.txt", {
    encoding: "utf8",
  });
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
});

const hostname = "localhost";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
