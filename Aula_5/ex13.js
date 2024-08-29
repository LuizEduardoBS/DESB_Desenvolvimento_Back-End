let carro = {
    nome : 'Jeep',
    cor : 'Vermelho',
    ano : 2022,
    velocidade : function() {
        return this.nome + ' 150km/h'
    }
}
console.log(carro);
console.log(carro.velocidade());