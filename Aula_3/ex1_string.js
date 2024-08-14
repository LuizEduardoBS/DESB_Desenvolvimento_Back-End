const estudante = "Luiz";
let num = 5;
let texto = estudante + " " + num;
let stexto = `nome ${estudante} numero ${num}.`; // Template String

console.log(stexto);

console.log(`A variavel "estudante" com valor "${estudante}" é do tipo:`, typeof(estudante));
console.log(`A variavel "num" com valor "${num}" é do tipo:`, typeof(num));
console.log(`A variavel "texto" com valor "${texto}" é do tipo:`, typeof(texto));
console.log(`A variavel "stexto" com valor "${stexto}" é do tipo:`, typeof(stexto));

