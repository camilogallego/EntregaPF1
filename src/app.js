const express = require("express");
const RoutesProduct = require("./routes/routesProdutct");
const RouterCart = require("./routes/routesCart");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Route System
app.use("/products", RoutesProduct);
app.use("/cart", RouterCart);

//Default
app.get("/", (req, res) => res.json({ message: "Default" }));

module.exports = app;
