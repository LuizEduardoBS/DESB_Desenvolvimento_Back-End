require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors')

// Inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, // Usa o novo parser de URl do MongoDB
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar ao MongoDB:', err));

//Importação das rotas
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000; // Define a porta do servidor, usando variável de ambiente ou padrão 5000

// Definir a porta do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // Inicia o servidor e exibe mensagem no console
})