// condicionais if else, aninhado

//aplique os descontos de acordo com o valor da compra:
//Acima de 1000 -> 15%
//De 500 a 1000 -> 10%
//Abaixo de 500 -> 5%

let valor = 2000;
let desconto = 0;

if (valor > 1000) {
    desconto = valor * 0.15;
}
else if (valor >=500 && valor <= 1000) {
    desconto = valor * 0.10;
}
else {
    desconto = valor * 0.05;
}

console.log(`O valor da compra é R$ ${valor} e o desconto é de R$ ${desconto.toFixed(2)}`);