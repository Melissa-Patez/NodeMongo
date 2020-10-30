
const mongoose = require("mongoose");
const Product = mongoose.model('Product');


module.exports = {
    //listagem
    async index(req, res) {
      const {page=1} = req.query;
      const products = await Product.paginate({}, { page, limit:10}); // await vai buscar os registros no bd

      return res.json(products);
    }, //vai fazer a listagem de todos os produtos


    // detale
    async show(req, res){
      const product = await Product.findById(req.params.id);
      
      return res.json(product);
    },

    //Criação
    async storeProduct(req, res) {
      const {title, description, url} = req.body;
      await Product.create({title: title, description: description, url: url});
      return res.send(title, description, url);
      //const product = await Product.create(req.body);
      //return res.json(product); 
    },

    //update
    async update(req, res) {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}); //new retornar o produto atualizado
    
      return res.json(product);
    },

    //remoção
    async destroy(req, res) {
      await Product.findByIdAndRemove(req.params.id);

      return res.send();
    }
};