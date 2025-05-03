const express = require("express");
const app = express();
const port = 3000;

const { users, products } = require("./my-data");

app.get("/", (req, res) => {
  res.end(`
    <h1>Products : <a href='/api/products'>Product</a></h1>
    <h1>Products details : <a href='/api/products/1'>Product detail</a></h1>
    `);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
    };
  });
  return res.json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  const params = req.params;
  console.log(params);
  console.log("pram type", typeof params.productId);
  const productId = Number(params.productId);
  const singleProduct = products.find((product) => product.id === productId);
  if (!singleProduct) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.json(singleProduct);
});

app.get("/api/products/v1/filter", (req, res) => {
  console.log("queryObject", req.query);
  let myProducts = [...products];
  const { search, limit } = req.query;
  console.log("search", search);
  console.log("limit", limit);
  if (search) {
    myProducts = myProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }
  if (limit) {
    myProducts = myProducts.splice(0, Number(limit));
  }
  if (myProducts.length == 0) {
    return res.status(404).json({ message: "Product not found1" });
  }
  return res.json(myProducts);
});

app.listen(port, () => {
  console.log("App is running at http://localhost:3000");
});
