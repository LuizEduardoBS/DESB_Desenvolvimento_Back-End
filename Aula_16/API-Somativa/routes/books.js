const express = require('express');
const Book = require('../models/Book');
const router = express.Router();
const multer = require('multer');
const path = require('path');  // Importa o path
const fs = require('fs');      // Importa o fs
const mongoose = require('mongoose');

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Diretório onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo gerado
    }
});

const upload = multer({ storage: storage });

// *** CRIAÇÃO (POST) ***
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, author, year, isbn } = req.body;
        const image = req.file.path;  // Caminho da imagem

        const newBook = new Book({
            title,
            author,
            year,
            isbn,
            image
        });

        await newBook.save();
        res.status(200).json({ message: 'Livro cadastrado com sucesso', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar livro', error });
    }
});

// *** LEITURA (GET) ***
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error });
    }
});

// BUSCAR LIVRO PELO ID, TITLE OU AUTHOR
router.get('/:searchParam', async (req, res) => {
    try {
        const { searchParam } = req.params; // Obtém o parâmetro de busca

        let books;

        // Verifica se o parâmetro é um ID válido (se for um ObjectId do MongoDB)
        if (mongoose.Types.ObjectId.isValid(searchParam)) {
            // Se for um ID válido, buscar por ID
            books = await Book.find({ _id: searchParam });
        } else {
            // Caso contrário, busca por título ou autor
            books = await Book.find({
                $or: [
                    { title: { $regex: searchParam, $options: 'i' } }, // Busca por título (case insensitive)
                    { author: { $regex: searchParam, $options: 'i' } } // Busca por autor (case insensitive)
                ]
            });
        }

        if (!books.length) {
            return res.status(404).json({ message: 'Nenhum livro encontrado' });
        }

        res.status(200).json(books);
    } catch (error) {
        console.error("Erro ao buscar livros:", error); // Log do erro detalhado
        res.status(500).json({ message: 'Erro ao buscar livros', error: error.message });
    }
});



// *** ATUALIZAÇÃO (PUT) ***
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const { title, author, year, isbn } = req.body;
        let image = req.file ? req.file.path : undefined; // Se houver uma imagem, pega o caminho

        // Encontre o livro a ser atualizado
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Se o livro já tem uma imagem e uma nova foi enviada, deletamos a antiga
        if (book.image && image) {
            const oldImagePath = path.join(__dirname, '..', book.image); // Corrige o caminho da imagem
            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    console.error('Erro ao deletar a imagem antiga:', err);
                }
            });
        }

        // Atualizar os dados do livro, incluindo a nova imagem, se houver
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, year, isbn, image: image || book.image }, // Se não houver nova imagem, mantém a antiga
            { new: true }
        );

        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error });
    }
});

// *** EXCLUSÃO (DELETE) ***
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Deletar a imagem associada ao livro, se existir
        if (book.image) {
            const filePath = path.join(__dirname, '..', book.image);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Erro ao deletar a imagem:', err);
                    return res.status(500).json({ message: 'Erro ao deletar a imagem do livro', error: err });
                }
            });
        }

        // Deletar o livro do banco de dados
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Livro deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar livro', error });
    }
});

module.exports = router;
