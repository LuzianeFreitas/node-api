// importando o express
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// iniciando o app
const app = express();

// Iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir('./src/models');

// const Product = mongoose.model('Product');

// Rotas
// Toda vez em que se receber uma requisição vinda da rota api então será enviado a ./src/routes
app.use('/api', require("./src/routes"));

// aplicação estara ouvindo a porta 3001 do navegador
app.listen(3001);