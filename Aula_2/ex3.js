const valor = 20; // Essa variavel esta no escopo global, se estivesse dentro do if
// daria um erro, pois ela não pode ser chamada fora do bloco a que pertence.

if (1 > 0){
    console.log(valor);
}
console.log(valor);

valor = 5
console.log(valor);
