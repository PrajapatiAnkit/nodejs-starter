const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });
app.get("/about", (req, res) => {
  res.status(200).send("this is about page");
});
app.get("/contact", (req, res) => {
  res.status(200).send("this is contact page");
});

app.all("/{*any}", (req, res) => {
  res.sendFile;
  res.status(404).send("Reesource not found!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
