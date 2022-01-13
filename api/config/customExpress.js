const express = require('express');
const parser = require('body-parser');
const routes = require('../rotas');

//faz a chamada do express e define os tipos de dados que serão trabalhados nesta aplicação;
module.exports = () => {

    const app = express();

    app.use(parser.urlencoded({extended: true}));
    app.use(parser.json());

    //faz chamada ao rotas/index.js para a criação e customização das rotas que serão necessárias nesta aplicação;
    routes(app);

    return app;
}