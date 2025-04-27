const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");

try {
  console.log("starting...");
  const firstContent = readFileSync("content/api/first_content.txt", "utf8");
  const secondContent = readFileSync("content/api/second_content.txt", "utf8");
  console.log(firstContent);
  console.log(secondContent);

  console.log("File read is done...");

  // by default it overrites

  writeFileSync(
    "content/api/result.txt",
    `${firstContent}` + `${secondContent}`
  );

  console.log("File writing done!!!");

  // {flag: "a"} keeps on appending the content to exiting
  //   writeFileSync(
  //     "content/api/result.txt",
  //     `${firstContent}` + `${secondContent}`,
  //     { flag: "a" }
  //   );
} catch (error) {
  console.log(error);
}
