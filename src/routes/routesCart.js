const express = require("express");
const RouterCart = express.Router();
const controllersCart = require("../controllers/controllerCart");

RouterCart.get("/", controllersCart.cart);
RouterCart.get("/:id", controllersCart.listItems);
RouterCart.post("/add/:prod_id", controllersCart.addItem);
RouterCart.delete("/delete/:id", controllersCart.deleteItem);

module.exports = RouterCart;
