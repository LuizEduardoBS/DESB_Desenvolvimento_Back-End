class Usuario{
    constructor(){
        this.nome = null;
        this.login = null;
        this.senha = null;
        this.cpf = null;
        this.celular = null;
    }
    exibir_info(){
        console.log(`Nome do usuário: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }
    verificar_login(user, senha){
        if((user == this.login) && (senha == this.senha)) {
            console.log(`Login correto ! Bem vindo ${user} !`)
        } else {
            console.log("Login incorreto ! Tente novamente !")
        }
    }
}

const Usuario1 = new Usuario(); // Cria um objeto usuário 1 a partir da classe Usuario
Usuario1.nome = "Luiz Ed";
Usuario1.login = "Luiz";
Usuario1.senha = "123456";
Usuario1.cpf = "123.123.123.00";
Usuario1.celular = "(19)91111-2222";
Usuario1.exibir_info();