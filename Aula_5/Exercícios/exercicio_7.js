const anoAtual = new Date().getFullYear();

const livro = {
  titulo: null,
  autor: null,
  anoPublicacao: null,
  genero: null,
}

livro.titulo = 'A Caverna dos Titãs';
livro.autor = 'Ivanir Calado';
livro.anoPublicacao = 2002;
livro.genero = 'Literatura Infanto-Juvenil';

livro.idadePublicacao = parseInt(anoAtual) - parseInt(livro.anoPublicacao);

console.log(`Título: ${livro['titulo']}`);
console.log(`Autor: ${livro['autor']}`);
console.log(`Ano de publicação: ${livro['anoPublicacao']}`);
console.log(`Gênero: ${livro['genero']}`);
console.log(`Idade de publicação: ${livro['idadePublicacao']}`);