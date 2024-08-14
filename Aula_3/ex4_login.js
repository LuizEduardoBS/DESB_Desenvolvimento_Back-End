const login = "senai";
const senha = "CFP501";
const op = 1;

if (login === "senai" && senha === "CFP501" && op === 1) {
    console.log("Bibliotecaria");
} else if (login === "senai" && senha === "CFP501" && op === 2) {
    console.log("Cliente");
} else if (login === "senai" && senha === "CFP501" && (op!= 1 || op > 2)) {
    console.log("Opção inexistente");
}







