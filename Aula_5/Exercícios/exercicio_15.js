const pessoa = {
    nome: null,
    idade: null,
    solteiro: null,
    hobbies: [],
    endereco: {
        rua: null,
        cidade: null,
        estado: null,
    }
}

pessoa.nome = 'Schwarzenegger';
pessoa.idade = 70;
pessoa.solteiro = false;
pessoa.hobbies = 'Musculação e governar a California-USA';
pessoa.endereco.rua = 'Wall Street';
pessoa.endereco.cidade = 'New York City';
pessoa.endereco.estado = 'NY';

function mostrarPessoa(pessoaEmQuestao) {
    objeto = pessoaEmQuestao;

    console.log(`Nome: ${objeto.nome}`);
    console.log(`Idade: ${objeto.idade}`);
    console.log(`Solteiro: ${objeto.solteiro}`);
    console.log(`Hobbies: ${objeto.hobbies}`);
    console.log(`Rua: ${objeto.endereco.rua}`);
    console.log(`Cidade: ${objeto.endereco.cidade}`);
    console.log(`Estado: ${objeto.endereco.estado}`);
}

mostrarPessoa(pessoa);