const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
routes.get("/products", ProductController.index);

routes.post('/products', ProductController.storeProduct); //post para criação // no insonia tem q ser em json

routes.get("/products/:id", ProductController.show); // detale

routes.put("/products/:id", ProductController.update); //update

routes.delete("/products/:id", ProductController.destroy); //deletar

module.exports = routes;