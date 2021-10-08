const express = require("express");
const routerProducts = express.Router();
const controllersProducts = require("../controllers/controllersProducts");

routerProducts.get("/:id?", controllersProducts.listProducts);
routerProducts.post("/add", controllersProducts.addProduct);
routerProducts.put("/update/:id", controllersProducts.updateProduct);
routerProducts.delete("/delete/:id", controllersProducts.deleteProduct);

module.exports = routerProducts;
