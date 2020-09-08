const express = require('express');
const routes = express.Router();
const ProductController = require('./controler/ProductController');
// req: contem todos os detalhes e informações da requisição
// res: resposta da requisição feita
routes.get('/products', ProductController.index);

module.exports = routes;