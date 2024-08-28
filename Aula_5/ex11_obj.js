let pessoa = {
    nome : 'Luiz',
    idade : 25,
    profissao : 'Programador',
    saudacao : function() {
        console.log("Ola! Seja bem vindo!");
    }
}
pessoa.time = 'Corinthians';

console.log(pessoa);
console.log(pessoa.saudacao());
console.log(pessoa.idade);