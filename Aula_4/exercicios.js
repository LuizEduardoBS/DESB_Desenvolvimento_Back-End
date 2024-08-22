//EXERCÍCIO 1

console.log("EXERCÍCIO 1");

class Carro_EX1 {
    constructor() {
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motor = false;
    }
    ligar_motor() {
        if(this.motor == false){
            this.motor = true;
            console.log(`Motor ligado : Valor da variável ="${this.motor}"`);
        } else if (this.motor == true) {
            console.log(`O motor já está ligado : Valor da variável ="${this.motor}"`);
        }
    }
    desligar_motor() {
        if(this.motor == true) {
            this.motor = false;
            console.log(`Motor desligado : Valor da variável ="${this.motor}"`)
        } else if (this.motor == false) {
            console.log(`O motor já está desligado : Valor da variável ="${this.motor}"`)
        }
    }
    status_motor() {
        if (this.motor == false) {
            console.log("O motor está desigado no momento.")
        } else if (this.motor == true) {
            console.log("O motor está ligado no momento.")
        }
    }
}

const carroEX1 = new Carro_EX1();
carroEX1.marca = "Honda";
carroEX1.modelo = "Civic";
carroEX1.ano = 2024;

carroEX1.ligar_motor();
carroEX1.ligar_motor();
carroEX1.desligar_motor();
carroEX1.desligar_motor();

carroEX1.status_motor();
carroEX1.ligar_motor();

carroEX1.status_motor();

carroEX1.desligar_motor();
carroEX1.status_motor();

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 2

console.log("EXERCÍCIO 2");

class Pessoa {
    constructor(){
        this.nome = null;
        this.idade = null;
        this.profissao = null;
        this.salario = null;
    }
    exibe_info() {
        console.log(`Nome: ${this.nome}.`);
        console.log(`Idade: ${this.idade}.`);
        console.log(`Profissão: ${this.profissao}.`);
        console.log(`Salário: ${this.salario}.`);
    }
    exibe_trabalho(nome_empresa, tempo_de_trabalho) {
        console.log(`Nome da empresa: ${nome_empresa}.`)
        console.log(`Tempo de trabalho: ${tempo_de_trabalho}.`)
    }
}

const pessoaEX2 = new Pessoa();
pessoaEX2.nome = "Luiz";
pessoaEX2.idade = "25";
pessoaEX2.profissao = "Desenvolvedor Back-End";
pessoaEX2.salario = 80000;

pessoaEX2.exibe_info()
pessoaEX2.exibe_trabalho("Google", "6 meses");

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 3

console.log("EXERCÍCIO 3");

class Automovel {
    constructor() {
        this.cor_automovel = null;
        this.tipo_combustivel = null;
        this.qtde_rodas = null;
    }
    ligar_carro() {
        console.log("C")
    }
}
class Carro_EX3 extends Automovel {
    constructor() {
        super();
        this.modelo = null;
        this.marca = null;
    }
}
class Moto_EX3 extends Automovel {
    constructor() {
        super();
        this.modelo = null;
        this.marca = null;
    }
}
class Caminhão_EX3 extends Automovel {
    constructor() {
        super();
        this.modelo = null;
        this.marca = null;
    }
}



