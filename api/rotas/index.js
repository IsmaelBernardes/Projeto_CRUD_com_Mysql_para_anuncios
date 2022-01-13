const express = require('express');
const router = express.Router();
const routerAnuncios = require('./anuncios');
const routerPesquisas = require('./pesquisas');

//recebe o parâmetro "app" que tem como valor o "express";
//faz chamada do método "use" do "express" que recebe como primeiro parâmetro a rota principal de acesso a esta aplicação;
//e como segundo parâmetro recebe o "Router" do "express", que gerenciarar e roteará as demais rotas necessarias;
module.exports = (app) => {

    routerAnuncios(router);
    routerPesquisas(router);
    
    app.use('/api/propaganda/',  router);
}