const calculadora = {

    somar(num1, num2) {
        resultado = parseFloat(num1) + parseFloat(num2)
        console.log(`${num1} + ${num2} = ${resultado}`);
    },
    subtrair(num1, num2) {
        resultado = parseFloat(num1) - parseFloat(num2)
        console.log(`${num1} - ${num2} = ${resultado}`);
    },
    multiplicacao(num1, num2) {
        resultado = parseFloat(num1) * parseFloat(num2)
        console.log(`${num1} * ${num2} = ${resultado}`);
    },
    divisao(num1, num2) {
        if (parseFloat(num2) === 0 || parseFloat(num2) === 0) {
            console.log(`${num1} / ${num2} = Entrada imcorreta, nenhum número pode ser divididopor zero"0".`);
        } else {
            resultado = parseFloat(num1) / parseFloat(num2)
            console.log(`${num1} / ${num2} = ${resultado}`); 
        }
    }
}

calculadora.somar(5, 8);
calculadora.subtrair(5, 8);
calculadora.multiplicacao(5, 8);
calculadora.divisao(5, 8);
calculadora.divisao(5, 0);