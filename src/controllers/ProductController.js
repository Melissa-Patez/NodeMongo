//aqui vai a logica das rotas
//operaçoes de determinado model
const mongoose = require("mongoose");
const Product = mongoose.model('Product');

//obj com funçoes
module.exports = {
    async index(req, res) {
      const products = await Product.find(); // await vai buscar os registros no bd

      return res.json(products); //json estruturas de dados facil de ler 
    } //vai fazer a listagem de todos os produtos
};