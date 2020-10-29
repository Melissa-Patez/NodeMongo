
const mongoose = require("mongoose");
const Product = mongoose.model('Product');


module.exports = {
    async index(req, res) {
      const products = await Product.find(); // await vai buscar os registros no bd

      return res.json(products);
    }, //vai fazer a listagem de todos os produtos

    async storeProduct(req, res) {
      const {title, description, url} = req.body;
      await Product.create({title: title, description: description, url: url});
      return res.send(title, description, url);
    }
};