const anoAtual = new Date().getFullYear();

const livro = {
  titulo: 'A Caverna dos Titãs',
  autor: 'Ivanir Calado',
  anoPublicacao: 2002,
  genero: 'Literatura Infanto-Juvenil',
  idadePublicacao: anoAtual - this.anoPublicacao,
}

console.log(`Gênero antes de ser alterado: ${livro.genero}`);

livro.genero = 'Aventura'
console.log(`Gênero depois de ser alterado: ${livro.genero}`);