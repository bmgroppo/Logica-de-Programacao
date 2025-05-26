

function calculo () {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let operador = prompt("Digite o operador (+, -, *, /):");
    let num2 = Number(prompt("Digite o segundo número:"));
    let resultado = 0;

    switch(operador) {
        case "+":
            resultado = num1 + num2;
            alert(`Resultado de ${num1} + ${num2} = ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            alert(`Resultado de ${num1} - ${num2} = ${resultado}`);
            break;
        case "*":
            resultado = num1 * num2;
            alert(`Resultado de ${num1} * ${num2} = ${resultado}`);
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
                alert(`Resultado de ${num1} / ${num2} = ${resultado}`);
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            alert("Operador inválido.");
    }
}