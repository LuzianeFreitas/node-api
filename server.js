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

const Product = mongoose.model('Product');

// Primeira rota
// req: contem todos os detalhes e informações da requisição
// res: resposta da requisição feita
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    
    return res.send('Hello Rocketseat');
});

// aplicação estara ouvindo a porta 3001 do navegador
app.listen(3001);