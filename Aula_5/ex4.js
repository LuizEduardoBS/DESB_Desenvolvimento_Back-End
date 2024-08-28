nomes = ['Daniel', 'Bruna', 'Camila', 'Julia'];
console.log(nomes);

nomes.splice(1, 1, 'Viviane') // Adiciona um elemento no lugar de outro
console.log(nomes);

 const nomes2 = nomes.slice(1, 3); // Fatia a lista da posição 1 até a 3
 console.log(nomes2);

 const tamanho = nomes.length; // Retorna o tamanho da lista
 console.log(tamanho);