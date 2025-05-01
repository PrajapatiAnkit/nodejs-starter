const { readFile, writeFile } = require("fs");

const util = require("util");
const writeFileWithAsync = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const file1 = await getText("../content/api/first_content.txt");
    const file2 = await getText("../content/api/second_content.txt");
    writeFile("../content/api/new_result.txt", `${file1} + ${file2}`, () => {});

    console.log(file1);
  } catch (err) {
    console.log(err);
  }
};

console.log("starting");

start();

console.log("waiting for the next");

// getText("../content/api/first_content.txt")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
