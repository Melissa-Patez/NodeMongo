//importar o express com o require
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//INICIANDO O APP .... a constante app vai excutar a funcao express
const app =  express();

//iniciando o DataBase
mongoose.connect('mongodb://40.76.228.121:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models'); // registra o model na aplicação

//rotas
app.use("/api", require("./src/routes")); //toda vezque receber uma requisição apartir de uma api
 
//porta do navegador
app.listen(3000);
