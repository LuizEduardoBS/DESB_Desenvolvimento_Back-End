const nomes = ['Daniel', 'Bruna', 'Camila', 'Julia'];

nomes.forEach(function(nome, index) {
    console.log(index, nome);
});


for (let i = 0; i < nomes.length; i++) {
    console.log(`${i}, ${nomes[i]}`);
}
