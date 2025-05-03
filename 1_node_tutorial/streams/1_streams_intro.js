/*
 1. readable
 2. writeable
 3. Duplex
 4. Transform


 */

const { createReadStream } = require("fs");
const stream = createReadStream("../content/api/big-file.txt");
stream.on("ready", () => {
  console.log("strem is ready");
});
stream.on("data", (data) => {
  console.log(`Size: ${data.length}`, data);
});

stream.on("error", (error) => {
  console.log("Ohh something wrong with streams:", error);
});

stream.on("end", () => {
  console.log("There will be no more data.");
});
