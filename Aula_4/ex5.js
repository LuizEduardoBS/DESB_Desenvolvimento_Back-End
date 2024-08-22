class Usuario{
    constructor(){
        this.nome=null;
        this.idade;
    }
    exibeinfo(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}.`);
    }
}
class Cliente extends Usuario{
    constructor(){
        super();
               

        this.cargo = null;
    }
    exibeinfocargo(){
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, cargo: ${this.cargo}.`);
    }

}

const Luiz = new Cliente();
Luiz.nome = "Luiz"
Luiz.idade = 25;
Luiz.cargo= "Aluno";

const Luiz1 = new Usuario();
Luiz1.nome = "Eduardo";
Luiz1.idade = 26;

Luiz.exibeinfocargo();
Luiz1.exibeinfo();