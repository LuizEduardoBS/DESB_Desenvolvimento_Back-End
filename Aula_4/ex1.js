// Cria uma classe chama Casa
class Casa{
    constructor(){
        // Cria o construtor que serve para passar parâmetros para a classe
        this.cor = null; // Parâmetro cor
        this.qtdecomodos = null; // Parâmetro qtde de comodos
    }
    // Método para exibir informações
    exibeinfo(cor,qtdecomodos) {
        console.log(`A cor da casa é ${cor} e tem ${qtdecomodos} comodos.`);
    }
}

// ESSA FUNÇÃO SERVE PARA MODULARIZAR O CÓDIGO
// function main(){
//     let minhaCasa = new Casa(); // Cria um objeto chamado minhaCasa
//     minhaCasa.cor = "Azul";
//     minhaCasa.qtdecomodos = 3;
//     minhaCasa.exibeinfo(minhaCasa.cor, minhaCasa.qtdecomodos);
// }

// main()

let minhaCasa = new Casa(); // Cria um objeto chamado minhaCasa
minhaCasa.cor = "Azul";
minhaCasa.qtdecomodos = 3;
minhaCasa.exibeinfo(minhaCasa.cor, minhaCasa.qtdecomodos);
