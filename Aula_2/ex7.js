let readline = require("readline")
// Cria uma interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta ao usuario
rl.question("Digite algo: ", (answer) => {
    //resposta do usuario
    console.log(`Você digitou: ${answer}`);

    // Fecha a interface
    rl.close();
})
console.log(readline)