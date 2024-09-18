const express = require('express'); // Importa o Express

const app = express() // Cria a instância

const port = 3000; // Define a porta onde a api irá rodar

app.use(express.json()); // Middleware para permitir que o servidor lide com requisições no formato json

// Cria a rota GET na raiz '/', 'res'=requisição e 'res'=resposta
app.get('/', (req, res) => {
    res.send('API funcionando');
})

app.post('/data', (req, res) => {
    const { nome, idade } = req.body;
    res.send(`Nome: ${nome}, Idade: ${idade}`);
})


// Inicia o servidor e define que ele deve rodar na porta especificada
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
})