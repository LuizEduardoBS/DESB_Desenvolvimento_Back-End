const mongoose = require('mongoose');

// Definindo o esquema do livro
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
})

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    senha: { type: String, required: true },
})

// Exportando o modelo
module.exports = mongoose.model('Book', BookSchema);
module.exports = mongoose.model('User', UserSchema);