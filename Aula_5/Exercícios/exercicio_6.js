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

const mostrarDetalhes = (`Título: ${livro.titulo}.\nAutor: ${livro.autor}.\nAno de publicação: ${livro.anoPublicacao}\nGênero: ${livro.genero}.\nIdade da publicação: ${livro.idadePublicacao} anos.`);

console.log(mostrarDetalhes);