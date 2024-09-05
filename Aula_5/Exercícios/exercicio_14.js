const pessoa = {
    nome: null,
    idade: null,
    solteiro: null,
    hobbies: [],
}

pessoa.nome = 'Schwarzenegger';
pessoa.idade = 70;
pessoa.solteiro = false;
pessoa.hobbies = 'Musculação e governar a California-USA';

function mostrarPessoa(pessoaEmQuestao) {
    objeto = pessoaEmQuestao;

    console.log(`Nome: ${objeto.nome}`);
    console.log(`Idade: ${objeto.idade}`);
    console.log(`Solteiro: ${objeto.solteiro}`);
    console.log(`Hobbies: ${objeto.hobbies}`);
}

mostrarPessoa(pessoa);