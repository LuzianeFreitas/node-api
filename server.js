// importando o express
const express = require('express');

const app = express();

// req: contem todos os detalhes e informações da requisição
// res: resposta da requisição feita
app.get('/', (req, res) => {
    res.send('Hello Rocketseat');
});

// aplicação estara ouvindo a porta 3001 do navegador
app.listen(3001);