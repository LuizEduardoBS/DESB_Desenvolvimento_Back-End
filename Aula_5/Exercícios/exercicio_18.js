const contaBancaria = {
    titular: null,
    saldo: null,

    depositar(valor) {
        console.log(`\nSaldo anterior: R$${this.saldo}`);
        console.log(`Valor do depósito: R$ ${valor}`);
        this.saldo = this.saldo + valor;
        console.log(`Saldo atualizado: R$ ${this.saldo}\n`);
    },
    sacar(valor) {
        console.log(`\nSaldo anterior: R$ ${this.saldo}`);
        console.log(`Valor do saque: R$ ${valor}`);
        this.saldo = this.saldo - valor;
        console.log(`Saldo atualizado: R$ ${this.saldo}\n`);
    }
}

const cliente = {
    nome: null,
    conta: Object.create(contaBancaria),
}

function mostrarSaldo(pessoa){
    console.log(`\nO saldo atual de ${pessoa.nome} é: R$ ${pessoa.conta.saldo}.\n`);
}

cliente.nome = 'João';
cliente.conta.titular = this.nome;
cliente.conta.saldo = 80000;

mostrarSaldo(cliente);
cliente.conta.sacar(25000);
cliente.conta.depositar(60222);