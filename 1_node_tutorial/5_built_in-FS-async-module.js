const { readFile, writeFile } = require("fs");

console.log("starting...");

readFile("./content/api/first_content.txt", "utf8", (error, data) => {
  if (error) {
    console.log("oops error 1: ", error);
    return;
  }
  const content1 = data;
  console.log("My data is1: ", data);

  readFile("./content/api/second_content.txt", "utf8", (error, data) => {
    if (error) {
      console.log("oops error 2: ", error);
      return;
    }
    const content2 = data;
    console.log("My data is2: ", data);
    console.log("Writing the file...");

    writeFile(
      "./content/api/result_async.txt",
      `${content1}` + `${content2}`,
      (error) => {
        if (error) {
          console.log("Error in writing file", error);
          return;
        }
        console.log("done with this task");
      }
    );
    console.log("File writing done!!");
  });
});

console.log("ready for next task...");
