const Product = require("../components/Product.js");
const config = require("../constants/index");

let products = [];

const productsController = {
  listProducts: (req, res) => {
    if (req.params.id != undefined) {
      res.status(200).json(products.filter((prod) => prod.id == req.params.id));
    } else {
      res.status(200).json(products);
    }
  },
  addProduct: (req, res, next) => {
    if (!config.isAdmin) {
      next({
        code: 403,
        route: `${config.hostname}product/add`,
        method: "POST",
      });
    } else {
      let newProd = new Product();
      newProd = { ...newProd, ...req.body };
      products.push(newProd);
      res.status(200).json(products);
    }
  },
  updateProduct: (req, res, next) => {
    if (!config.isAdmin) {
      next({
        code: 403,
        route: `${config.hostname}product/update/:id`,
        method: "PUT",
      });
    } else {
      const prodIndex = products.findIndex((p) => p.id == req.params.id);

      if (prodIndex != -1) {
        products[prodIndex] = req.body;
        res.status(200).json(products);
      } else {
        res
          .status(404)
          .json({ status: 404, description: "Product not found." });
      }
    }
  },
  deleteProduct: (req, res, next) => {
    if (!config.isAdmin) {
      next({
        code: 403,
        route: `${config.hostname}product/delete/:id`,
        method: "DELETE",
      });
    } else {
      products = products.filter((prod) => prod.id !== req.params.id);
      res.status(200).json(products);
    }
  },
};

module.exports = productsController;
