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
        this.modelo = null;
        this.tipo_combustivel = null;
        this.qtde_rodas = null;
    }
    ligar_carro() {
        console.log(`Motor do ${this.modelo} ligado.`);
    }
    desligar_carro() {
        console.log(`Motor do ${this.modelo} desligado.`);
    }
    abrir_vidro() {
        console.log(`Vidros do ${this.modelo} abertos.`);
    }
    fechar_vidro() {
        console.log(`Vidros do ${this.modelo} fechados.`);
    }
    ver_infos() {
        console.log(`Cor do automovel ${this.cor_automovel}`);
        console.log(`Modelo do automovel ${this.modelo}`);
        console.log(`Combustivel do automovel ${this.tipo_combustivel}`);
        console.log(`Qtde de rodas do automovel ${this.qtde_rodas}`);
    }
}
class Carro_EX3 extends Automovel {
    constructor() {
        super();
    }
}
class Moto_EX3 extends Automovel {
    constructor() {
        super();
    }
}
class Caminhão_EX3 extends Automovel {
    constructor() {
        super();
    }
}

carro_1 = new Carro_EX3();
carro_1.cor_automovel = "Branco"
carro_1.modelo = "Onix";
carro_1.tipo_combustivel = "Gasolina";
carro_1.qtde_rodas = 4;

carro_1.ligar_carro();
carro_1.desligar_carro();
carro_1.abrir_vidro();
carro_1.fechar_vidro();
carro_1.ver_infos();

moto_1 = new Carro_EX3();
moto_1.cor_automovel = "Vermelho"
moto_1.modelo = "Factor 150";
moto_1.tipo_combustivel = "Gasolina/Alcool";
moto_1.qtde_rodas = 2;

moto_1.ligar_carro();
moto_1.desligar_carro();
moto_1.ver_infos();

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 4

console.log("EXERCÍCIO 4 - O exercicio 5 precisa estar comentado para funcionar.");

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// class Cliente {
//   constructor() {
//     this.nome = null;
//     this.profissao = null;
//     this.saldo = 0;
//   }

//   operacao() {
//     console.log("O que deseja fazer? \n 1 - Pix \n 2 - Saque \n 3 - Depósito \n 4 - Extrato");

//     rl.question('Escolha uma opção (1-4): ', (resposta) => {
//       if (resposta === "1") {
//         rl.question('Qual o valor do pix: ', (pix) => {
//           this.saldo -= parseFloat(pix);
//           console.log(`Seu saldo agora é: ${this.saldo}`);
//           this.continuar();
//         });
//       } else if (resposta === "2") {
//         rl.question('Qual o valor do saque: ', (op_saque) => {
//           this.saldo -= parseFloat(op_saque);
//           console.log(`Seu saldo agora é: ${this.saldo}`);
//           this.continuar();
//         });
//       } else if (resposta === "3") {
//         rl.question('Qual o valor do depósito: ', (op_deposito) => {
//           this.saldo += parseFloat(op_deposito); 
//           console.log(`Seu saldo agora é: ${this.saldo}`);
//           this.continuar();
//         });
//       } else if (resposta === "4") {
//         console.log(`Extrato: ${this.saldo}`);
//         this.continuar();
//       } else {
//         console.log("Opção incorreta.");
//         this.continuar();
//       }
//     });
//   }

//   continuar() {
//     rl.question('\nDeseja realizar outra operação? (s/n): ', (resposta) => {
//       if (resposta.toLowerCase() === 's') {
//         this.operacao();
//       } else {
//         console.log('Encerrando...');
//         rl.close();
//       }
//     });
//   }
// }

// cliente_1 = new Cliente();
// cliente_1.nome = "Luiz";
// cliente_1.profissao = "Programador";
// cliente_1.saldo = 500000;
// cliente_1.operacao();

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 5

console.log("EXERCÍCIO 5  - O exercicio 4 precisa estar comentado para funcionar.");

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// class Maquina {
//     constructor() {
//         this.nome_maquina = null;
//         this.qtde_eixos = null;
//         this.rotacoes_min = null;
//         this.consumo_eletrico = null;
//     }
//     info_maquina() {
//         console.log(`Maquina: ${this.nome_maquina}`);
//         console.log(`Qtde eixos: ${this.qtde_eixos}`);
//         console.log(`Rotações por minuto: ${this.rotacoes_min}`);
//         console.log(`Consumo: ${this.consumo_eletrico}kw/h`);
//     }
//     ligar_maquina() {
//         console.log(`Maquina ${this.nome_maquina} ligada.`)
//     }
//     desligar_maquina() {
//         console.log(`Maquina ${this.nome_maquina} desligada.`)
//     }
//     ajutar_rotacoes() {
//         rl.question('Velocidade de rotação desejada: ', (rotacao_desejada) => {
//             this.rotacoes_min = parseFloat(rotacao_desejada);
//             console.log(`Rotação alterada para ${this.rotacoes_min}.`);
//             rl.close();
//         });
//     }
// }

// class Furadeira extends Maquina {
//     constructor() {
//         super();
//     }
// }

// furadeira = new Furadeira();
// furadeira.nome_maquina = "Furadeira Y";
// furadeira.qtde_eixos = 1;
// furadeira.rotacoes_min = 3000;
// furadeira.consumo_eletrico = 600;

// furadeira.ligar_maquina();
// furadeira.desligar_maquina();
// furadeira.ajutar_rotacoes();

console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 6

console.log("EXERCÍCIO 6");

class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.tipoComunicacao = tipoComunicacao;
      this.consumoEnergia = consumoEnergia;
    }
  }
  
  class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
    ligar_fritadeira() {
        console.log(`${this.nome} ligada.`);
      }
    desligar_fritadeira() {
        console.log(`${this.nome} desligada.`);
      }
    ajusteTemperatura(setpoint) {
        console.log(`Ajustando temperatura de ${this.nome} para ${setpoint}°C.`);
      }
  }
  
  class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
    ligar_televisao() {
        console.log(`${this.nome} ligada.`);
      }
    desligar_televisao() {
        console.log(`${this.nome} desligada.`);
      }
  }
  
  class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
    ligar_arcondicionado() {
        console.log(`${this.nome} ligado.`);
      }
    desligar_arcondicionado() {
        console.log(`${this.nome} desligado.`);
      }
    ajusteTemperatura(setpoint) {
        console.log(`Ajustando temperatura de ${this.nome} para ${setpoint}°C.`);
      }
  }
  
  const fritadeira = new Fritadeira('Fritadeira Elétrica', 10, 250.0, 'WiFi', 1500);
  fritadeira.ligar_fritadeira();
  fritadeira.ajusteTemperatura(180);
  fritadeira.desligar_fritadeira();
  
  const tv = new Televisao('Televisão LED', 5, 1200.0, 'Bluetooth', 200);
  tv.ligar_televisao();
  tv.desligar_televisao();
  
  const arCondicionado = new ArCondicionado('Ar Condicionado Split', 3, 2500.0, 'IR', 1200);
  arCondicionado.ligar_arcondicionado();
  arCondicionado.ajusteTemperatura(22);
  arCondicionado.desligar_arcondicionado();
  
  console.log('////////////////////////////////////////////////////////////');

//EXERCÍCIO 7

console.log("EXERCÍCIO 7");

class Livros {
    constructor() {
        this.nome_do_livro = null;
        this.qtde_livro = null;
        this.autor = null;
        this.n_edicao = null;
    }
    info() {
        console.log(`Título: ${this.nome_do_livro}.`);
        console.log(`Quantidade de livros no estoque: ${this.qtde_livro}.`);
        console.log(`Autor: ${this.autor}.`);
        console.log(`Edição: ${this.n_edicao}.`);
    }
    emprestar(qtde_emprestada) {
    this.qtde_livro = this.qtde_livro - qtde_emprestada;
    console.log(`${qtde_emprestada} unidade do livro "${this.nome_do_livro}" emprestado.`);
    console.log(`Estoque do livro "${this.nome_do_livro}" disponivel: ${this.qtde_livro}.`);
    }
    devolver(qtde_devolvida) {
        this.qtde_livro = this.qtde_livro + qtde_devolvida;
        console.log(`${qtde_devolvida} unidades do livro "${this.nome_do_livro}" devolvidos.`);
        console.log(`Estoque do livro "${this.nome_do_livro}" disponivel: ${this.qtde_livro}.`);
    }
}

const livro1 = new Livros();
livro1.nome_do_livro = "Roube Como Um Artista";
livro1.qtde_livro = 20;
livro1.autor = "Austin Kleon";
livro1.n_edicao = 1;

livro1.info();
livro1.emprestar(5);
livro1.devolver(3);