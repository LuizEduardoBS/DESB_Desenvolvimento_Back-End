//EXERCÍCIO 1

console.log("EXERCÍCIO 1");

const nome = 'Luiz';
let idade = 25;
let ABC = true;
console.log(`Variavel 'nome': ${nome}, é do tipo: ${typeof(nome)}.`);
console.log(`Variavel 'idade': ${idade} é do tipo: ${typeof(idade)}`);
console.log(`Variavel 'ABC': ${ABC}, é do tipo: ${typeof(ABC)}`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 2 

console.log("EXERCÍCIO 2");

const p_nome = 'Luiz';;
const u_nome = 'Eduardo';
const n_completo = p_nome + u_nome;
const n_template = `${p_nome} ${u_nome}`;

console.log(p_nome);
console.log(u_nome);
console.log(n_completo);
console.log(n_template);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 3 

console.log("EXERCÍCIO 3");

let produto = 'pães';
let quantidade = 6;
let acao = `Eu fui na padaria comprar ${quantidade} ${produto}.`;

console.log(acao);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 4

console.log("EXERCÍCIO 4");

let numero = 50;
console.log(`Primeiro valor da variavel número: ${numero}`);
numero = 100;
console.log(`Segundo valor da variavel número: ${numero}`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 5

console.log("EXERCÍCIO 5");

//Criando fora e acessando dentro do bloco:
let teste1 = 5;
var teste2 = 10;

if (1 > 0){
    console.log("Acessando variavel 'let' criada FORA do bloco dentro do bloco. Valor:", teste1);
    console.log("Acessando variavel 'var' criada FORA do bloco dentro do bloco. Valor:", teste2);
}
//Criando dentro do bloco e acessando dentro
if (1 > 0){
    let teste3 = 5;
    var teste4 = 12;
    console.log("Acessando variavel 'let' criada DENTRO do bloco DENTRO do bloco. Valor:", teste3);
    console.log("Acessando variavel 'var' criada DENTRO do bloco DENTRO do bloco. Valor:", teste4);
}
//Acessando fora do bloco:
// console.log("Acessando variavel 'let' criada DENTRO do bloco FORA do bloco. Valor:", teste3) // GERA ERRO POIS ESTÁ FORA DO BLOCO
console.log("A variavel let criada DENTRO do bloco não pode ser acessada fora: 'ReferenceError: teste3 is not defined'")
console.log("Acessando variavel 'var' criada DENTRO do bloco FORA do bloco. Valor:", teste4) //Permite, pois tem escopo GLOBAL 

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 6

console.log("EXERCÍCIO 6");

let chuva = true;

if (chuva == true){
    console.log("É melhor levar um guarda chuva.");
} else {
    console.log("O dia todo será ensolarado hoje. Aproveite!");
}

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 7

console.log("EXERCÍCIO 7");

const n1 = 8, n2 = 9, n3 = 5.5;
media = (n1 + n2 + n3) / 3;

console.log(`A média entre ${n1}, ${n2} e ${n3} é: ${media}`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 8

console.log("EXERCÍCIO 8");

const altura = 5; base = 10;
const area_triangulo = (altura * base) / 2;
console.log("A área de um triângulo é igual a multiplicação da base pela altura dividido por 2:");
console.log(`Triângulo de altura: ${altura} e base: ${base}`);
console.log(`A área desse triângulo é: ${area_triangulo}`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 9

console.log("EXERCÍCIO 9");

const pi = 3.14159, raio = 5;
const area_circulo = pi * (raio**2)
console.log("A área de um circulo é igual a pi vezes o raio elevado ao quadrado:");
console.log(`A area de um circulo de raio ${raio} é: ${area_circulo}`)

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 10

console.log("EXERCÍCIO 10");

const V = 135, I = 5;
const R = V / I;
console.log(`A resistência em um circuito com tensão de ${V}V e corrente de ${I}A é: ${R}.`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 11

console.log("EXERCÍCIO 11");

const salario = 20000;
const IR = 0.20;
const sal_liquido = salario - (IR * salario);
console.log(`O salário líquido de quem ganha R$ ${salario} descontando o IR de 20% é: R$ ${sal_liquido}.`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 12

console.log("EXERCÍCIO 12 - PARA RODAR OS EX DO 13 EM DIANTE PRECISAM ESTAR 'COMENTADOS'");

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const gasolina = 5.50;
// let valor;

// rl.question('Quantos litros vai abastecer? R: ', (litrosAbastecimento) => {
//     valor = litrosAbastecimento * gasolina;
//     console.log(`O valor do abastecimento é: R$ ${valor}.`);

//     rl.close();
// });

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 13

console.log("EXERCÍCIO 13");

const consumo = 1750;
const tempoLigada = 8;
const diasMes = 25;
const custo = 0.75;

const consumoTotal = (consumo / 1000) * tempoLigada * diasMes;
const valorConsumo = consumoTotal * custo;

console.log(`O valor gasto de energia será R$ ${valorConsumo}.`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 14

console.log("EXERCÍCIO 14");

const nota1 = 9, nota2 = 8, nota3 = 7;
const mediaEX14 = (nota1 + nota2 + nota3) / 3;

if (mediaEX14 >= 6) {
    console.log(`A média do aluno foi: ${mediaEX14}. Aluno APROVADO.`);
} else if (mediaEX14 == 5) {
    console.log(`A média do aluno foi: ${mediaEX14}. Aluno em RECUPERAÇÃO.`);
} else {
    console.log(`A média do aluno foi: ${mediaEX14}. Aluno REPROVADO.`);
};

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 15

console.log("EXERCÍCIO 15 - PARA RODAR O EX12 PRECISA ESTAR 'COMENTADO'");

// const readline2 = require('readline');
// const r2 = readline2.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r2.question('Qual a sua altura? (Ex: 1.84) R: ', (altura) => {
//         r2.question('Qual o seu peso? R:', (peso) => {
//             const IMC =  peso / (altura**2);

//             console.log(`O seu IMC é: ${IMC}.`);
//             if (IMC < 18.5) {
//                 console.log('Você está abaixo do peso.');
//             } else if (IMC >= 18.5 && IMC <= 24.9){
//                 console.log('Você está com o peso normal.');
//             } else if (IMC >= 25 && IMC <= 29.9){
//                 console.log('Você está com sobrepeso.');
//             } else if (IMC >= 30 && IMC <= 34.9){
//                 console.log('Você está com obesidade.');
//             } else if (IMC >= 35 && IMC <= 39.9){
//                 console.log('Você está com obesidade grau II.');
//             } else if (IMC >= 40){
//                 console.log('Você está com obesidade grau II.');
//             };        
    
//         r2.close();
//     });
// });






