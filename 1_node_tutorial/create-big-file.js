const fs = require("fs");

for (let index = 0; index < 10000; index++) {
  fs.writeFileSync(
    "./content/api/big-file.txt",
    `Hello this is line ${index}`,
    { flag: "a" }
  );
}
