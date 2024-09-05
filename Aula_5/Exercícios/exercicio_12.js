const pessoa = {
    nome: 'Bruce Banner',
    dataNascimento: '25/01/1980',
    carteiraIdentidade: '997776-X',
    email: 'profbanner@email.com',
    telefone: '+552877776666',
    cidade: 'Cachoeiro de Itapemirim',
    estado: 'ES',
    cpf: '111.222.333444',
    seguroSocial: '12.123.123-4',

    exibirDetalhes() {
        console.log(this.nome);
        console.log(this.dataNascimento);
        console.log(this.carteiraIdentidade);
        console.log(this.email);
        console.log(this.telefone);
        console.log(this.cidade);
        console.log(this.estado);
        console.log(this.cpf ? this.cpf.slice(0, 5) : 'CPF não definido');
        console.log(this.seguroSocial ? this.seguroSocial.slice(0, 5) : 'RG não definido');
    }
}


pessoa.exibirDetalhes();