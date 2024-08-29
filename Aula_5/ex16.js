const dadoP = {
    nome : 'Luiz',
    idade : 25,
    endereco : [{
        rua : 'Av. UmDoiTres',
        numero : 123
    },
    {
        rua : 'Av. TresDoiUm',
        numero : 321
    }
]
}
console.log(dadoP);
console.log(dadoP.endereco[1].rua); // Exibe a rua do segundo endereço
console.log(dadoP.endereco[0]);
console.log(dadoP.endereco[0].numero);