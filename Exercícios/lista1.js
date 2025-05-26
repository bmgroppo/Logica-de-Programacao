function exercicio1() {
    let nome = prompt("Digite seu nome completo");
    let sexo = prompt("Digite seu sexo (Masculino/Feminino)");

    document.writeln(`Seu nome é ${nome} e seu sexo é ${sexo}.<br>`);
}

function exercicio2() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));  
    let num3 = Number(prompt("Digite o terceiro número:"));
    let num4 = Number(prompt("Digite o quarto número:"));
    let adição = (num1 + num2 + num3 + num4);
    let multiplica = (num1 * num2 * num3 * num4);

    document.writeln(`A soma dos números é: ${adição} <br>`);
    document.writeln(`A multiplicação dos números é: ${multiplica} <br>`);
}
function exercicio2c(){
    let dolar = Number(prompt("Digite o valor do dólar:"));    
    let real = dolar * 7.5; 

    document.writeln(`O valor do dólar em reais é: R$ ${real.toFixed(2)} <br>`);
}

function exercicio3() {
    let numero = Number(prompt("Digite um número:"));
    
    document.writeln(`O número antecessor é ${numero-1} e o número posterior é ${numero+1} <br>`);
}

function exercicio4() {
    let salario = Number(prompt("Digite o salário do funcionário:"));

    document.writeln(`O salário do funcionário com aumento de 15% é R$ ${(salario * 1.15).toFixed(2)} <br>`);
}

function exercicio5() {
    let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.writeln(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C <br>`);
}