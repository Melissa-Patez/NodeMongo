
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app =  express();
app.use(express.json())


mongoose.connect('mongodb://40.76.228.121:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models'); 

//rotas
app.use("/api", require("./src/routes"));
 
//porta do navegador
app.listen(3000, () => {
  console.log('listent to 3000')
});
