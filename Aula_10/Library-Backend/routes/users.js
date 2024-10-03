const express = require('express'); // Importamos o Express
const Book = require('../models/Book'); // Importamos o modelo Book
const router = express.Router(); // Criamos o roteador

router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // Buscamos todos os livros
        res.status(200).json(users); // Retornamos a lista de livros 
    } catch (error) {
        res.status(500).json({ message: 'Erro ao Logar', error }); // Retornamos erro, se houver
    }
});

// *** CRIAÇÃO (POST) ***
router.post('/', async (req, res) => {
    const { name, senha } = req.body; // Extraimos os dados da requisição
    try {
        const newUser = new Book({ name, senha }); // Criamos e salvamos o livro
        await newUser.save();
        res.status(201).json(newUser); // Retornamos o livro criado
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuario', error });
    }
});


// Exportamos o roteador para ser usado no server.js
module.exports = router;