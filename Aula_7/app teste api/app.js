const express = require('express');
const bodyParser = require('body-parser'); // Faz o parse das informações quando realiza
const bookRoutes = require('./routes/bookRoutes'); // Rotas dos livros

const app = express(); // Define o servidor como express
app.use(bodyParser.json()); // Função para realizar o parse
app.use('/api', bookRoutes); // Rota apk

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});