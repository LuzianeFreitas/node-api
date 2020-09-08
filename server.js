const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// iniciando o app
const app = express();
app.use(express.json()); // permite fazer envios no formato json
app.use(cors()); // Libera acesso para o dominio que desejar rodar sua api

// Iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
     { useUnifiedTopology: true, useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
// Toda vez em que se receber uma requisição vinda da rota api então será enviado a ./src/routes
app.use('/api', require("./src/routes"));

// aplicação estara ouvindo a porta 3001 do navegador
app.listen(3001);