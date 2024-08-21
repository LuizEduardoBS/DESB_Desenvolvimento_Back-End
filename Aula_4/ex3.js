class Fruta {
    constructor() {
        this.sabor = "Doce";
        this.nome = "Laraja";
        this.cor = "Verde";
        this.peso = 400;
        this.diasdecolheita = 5;
        this.isMadura = null/ // O atributo pode ser opcional, inicializado com null
    }

    // Cria o método
    isMadura(diasParaMadura){
        f (diasParaMadura >= this.diasdecolheita) {
            console.log(`A ${this.nome} está madura.`);
        } else {
            console.log(`A ${this.nome} não está madura.`);
        }
    }
}

const tangerina = new Fruta();
tangerina.isMadura(6);