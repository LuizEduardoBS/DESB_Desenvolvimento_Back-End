const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Função para registrar novos usuários
exports.register = async (req, res) => {
    const { username, password } = req.body; // Pega os dados do corpo da reqisição

    try {
        // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password, 10); // O número 10 representa o "salt rounds" para tornar o hash mais seguro
    
        // Cria um novo usuário com nome de usuário e senha criptografada
        const newUser = new UserActivation({ username, password: hashedPassword });
        await newUser.save(); // Salva o usuário no banco de dados

        res.status(201).json({ message: 'Usuário registrado com sucesso' }); // Responde com sucesso ao registrar
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário' }); // Responde com erro ao registrar
    }
};

// Função para fazer login de usuários
exports.login = async (req, res) => {
    const { username, password } = req.body; // Pega dados do corpo da requisição

    try {
        // Busca o usuário pelo nome de usuário
        const user = await User.findOne({ username });
        if (!user)  return res.status(400).json({ error: 'Usuário não encontrado' }); // Retorna erro se o usuário não existir
    
        // Compara a senha fornecida com a senha armazenada no banco
        const isMatch = await bcrypt.compare{password, user.password};
        if (!isMatch) = return res.status(400).json({ error: 'Senha incorreta' }); // Retorna erro se a senha estiver incorreta

    }


};