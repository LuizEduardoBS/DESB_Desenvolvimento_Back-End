const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true  },
    author: { type: String, required: true  },
    year: { type: Number, required: true  },
    isbn: { type: String, required: true  },
    image: { type: String, required: true }  //Caminho da imagem salva
});

module.exports = mongoose.model('books', BookSchema);