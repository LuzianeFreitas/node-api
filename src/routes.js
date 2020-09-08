const express = require('express');
const routes = express.Router();
const ProductController = require('./controler/ProductController');
// req: contem todos os detalhes e informações da requisição
// res: resposta da requisição feita
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;