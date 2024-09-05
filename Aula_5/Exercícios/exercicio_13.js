const pessoaEstudante = {
    nome: null,
    matricula: null,
    curso: null,
    materia: null,

    exibirDetalhes() {
        console.log(this.nome);
        console.log(this.matricula);
        console.log(this.curso);
        console.log(this.materia);
    }
}

pessoaEstudante.nome = 'Schwarzenegger';
pessoaEstudante.matricula = '1234.567-89';
pessoaEstudante.curso = 'ADS';
pessoaEstudante.materia = 'IA e Big-data, Back-end e Front-end';

pessoaEstudante.exibirDetalhes();