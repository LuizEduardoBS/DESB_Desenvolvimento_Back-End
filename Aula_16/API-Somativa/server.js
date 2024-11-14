require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const books = require('./routes/books');
const authRoutes = require('./routes/authRoutes');

const path = require('path');


const app = express();

// Conecta ao MongoDB
mongoose.connect('mongodb+srv://luized:Luiz123@cluster0.u7srm.mongodb.net/somativa-books', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParse.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas
app.use('/api/books', books);

app.use('/api/auth', authRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});