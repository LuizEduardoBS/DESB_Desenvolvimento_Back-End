//EXERCÍCIO 1

console.log("EXERCÍCIO 1");

const fraseEX1 = "Olá, meu nome é Luiz";

console.log(`A frase é: "${fraseEX1}."`);
console.log(`O comprimento da frase é: ${fraseEX1.length}`);
console.log(`A frase toda em letras maiúsculas: "${fraseEX1.toUpperCase()}".`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 2

console.log("EXERCÍCIO 2");

const variavel1 = null;
const variavel2 = undefined;

console.log(`A variavel1 tem valor "${variavel1}."`);
console.log(`A variavel2 tem tem valor "${variavel2}."`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 3

console.log("EXERCÍCIO 3");

const numEX3 = 990;
const textoEX3 = "Hello world!";
const vddEX3 = true;
const juntandoTodas = numEX3 + " " + textoEX3 + " " + vddEX3;

console.log(`A primeira variável tem valor "${numEX3}", a segunda tem valor "${textoEX3}" e a terceira tem valor "${vddEX3}".`);
console.log(`As 3 variáveis concatenadas em uma única variável: ${juntandoTodas}.`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 4

console.log("EXERCÍCIO 4");

let numEX4 = 2024;
let textoEX4 = "2025";

console.log(`A variável número convertida em string fica ${String(numEX4)}, tipo antes da conversão: ${typeof(numEX4)}, tipo depois da conversão: ${typeof(String(numEX4))}.`);
console.log(`A variável texto convertida em número fica ${Number(textoEX4)}, tipo antes da conversão: ${typeof(textoEX4)}, tipo depois da conversão: ${typeof(Number(textoEX4))}.`);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 5

console.log("EXERCÍCIO 5");

const EX5 = "Senai aula 3 - Quarta-Feira - 14/08/2024";

console.log(`O texto dentro da variável é: ${EX5}.`)
console.log(`Converdido com toUpperCase: ${EX5.toUpperCase()}`)
console.log(`Converdido com toLowerCase: ${EX5.toLowerCase()}`)
console.log(`Variável com slice: ${EX5.slice(15,27)}`)

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 6

console.log("EXERCÍCIO 6");

let saldo = 100000;
let deposito = 200000;
let saque = 3500;
let operador = "+";

console.log(`O valor do saldo é ${saque}, do depósito é ${deposito} e o saque é ${saque}`);
console.log(`Valor do operador: " ${operador} "`);
if (operador === "-") {
    console.log("Resultado da operação entre Saldo e Saque é:", Number(saldo) - Number(saque));
} else if (operador === "+") {
    console.log("Resultado da operação entre Saldo e Saque é:", Number(saldo) + Number(saque));
} 

if (operador === "-") {
    console.log("Resultado da operação entre Saldo e Depósito é:", Number(saldo) - Number(deposito));
} else if (operador === "+") {
    console.log("Resultado da operação entre Saldo e Depósito é:", Number(saldo) + Number(deposito));
} 

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 7

console.log("EXERCÍCIO 7");

const EX7 = 52;
const ternarioEX7 = (EX7%2) === 0? "O número é Par" : "O número é Impar"; 

console.log(ternarioEX7);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 8

console.log("EXERCÍCIO 8");

const usuarioEX8 = "Luiz123";
const senhaEX8 = 123456;
const condicao = 1

if (usuarioEX8 === "Luiz123" && senhaEX8 === 123456 && condicao === 1) {
    console.log(`Usuario ${usuarioEX8} aprovado para acesso como Administrador.`);
} else if (usuarioEX8 === "Luiz123" && senhaEX8 === 123456 && condicao === 2) {
    console.log(`Usuario ${usuarioEX8} aprovado para acesso visitante.`);
} else if (usuarioEX8 === "Luiz123" && senhaEX8 === 123456 && condicao!= 1 || condicao!= 2) {
    console.log("Nome de usuario, senha ou tipo de acesso incorreto");
}

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 9

console.log("EXERCÍCIO 9");

const vddEX9 = true;
const falEX9 = false;

console.log(`A variável vddEX9 é: ${vddEX9}, e a variável falEX9 é: ${falEX9}.`)

if (vddEX9 || falEX9) {
    console.log("Uma das variáveis é verdadeira.");
} else {
    console.log("Nenhuma das variáveis é verdadeira.")
}

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 10

console.log("EXERCÍCIO 10");

const idadeUsuario = 16;
const IdadeMinima = 18;

console.log(`A idade do usuário é ${idadeUsuario}, e o minímo para comprar o ingresso é ${IdadeMinima}.`);


if (idadeUsuario >= 18) {
    console.log(`O usuário PODE comprar o ingresso.`);
} else {
    console.log(`O usuário NÂO PODE comprar o ingresso.`);
}

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 11

console.log("EXERCÍCIO 11");

const nome = 'Luiz';

function saudacao(nome1) {
    let pessoa = nome1;
    console.log(`Olá ${pessoa}, como você está?`);
}

saudacao(nome);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 12

console.log("EXERCÍCIO 12");

let idade = 19;

function verificacao_idade(valor_idade) {
    let valor_ = valor_idade;
    if (valor_>=18){
        console.log(`A pessoa tem ${valor_} anos, portanto ela é MAIOR de idade.`)
    } else {
        console.log(`A pessoa tem ${valor_} anos, portanto ela é MENOR de idade.`)
    }
}

verificacao_idade(idade);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 13

console.log("EXERCÍCIO 13");

const palavra_1 = 'rotor';
const palavra_2 = 'novo';

function verificar_palindromo(string){
    const palavra_invertida = string.split('').reverse().join('');
    if (string === palavra_invertida) {
        console.log(`A palavra ${string} é um palíndromo.`);
    } else {
        console.log(`A palavra ${string} NÃO é um palíndromo.`);
    }
}

console.log(verificar_palindromo(palavra_1));
console.log(verificar_palindromo(palavra_2));

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 14

console.log("EXERCÍCIO 14");

const valor_1 = 180, valor_2 = 26, valor_3 = 30;

function verifica_numeros(val1, val2, val3) {
    if (val1 > val2 && val1 > val3) {
        console.log(`O maior valor entre os três é ${val1}.`)
    } else if (val2 > val1 && val2 > val3) {
        console.log(`O maior valor entre os três é ${val2}.`)
    } else if (val3 > val1 && val3 > val2) {
        console.log(`O maior valor entre os três é ${val3}.`)
    } else if (val1 === val2 && val2 === val3) {
        console.log(`Os três valores são iguais: ${val1}, ${val2},  ${val3}.`)
    }
}

verifica_numeros(valor_1, valor_2, valor_3);

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 15

console.log("EXERCÍCIO 15");

const base = 3;
const expoente = 3;

function calculaPotencia (B, Exp) {
    let resultado = B**Exp;
    console.log(`${base} elevado a ${Exp} é igual a: ${resultado}.`);
}

calculaPotencia(base, expoente);
