//Operadores Aritméticos
var v1 = 20;
var v2 = 45;
var v3 = 25;
var v4 = 58;

console.log(v1 + v2); // Adição
console.log(v1 - v2); // Subtração
console.log(v1 * v2); // Multiplicação
console.log(v1 / v2); // Divisão
console.log(v1 % v2); // Resto da Divisão
console.log(v1 ** v2); // Potenciação
console.log(v1++); // Incremento
console.log(v1--); // Decremento


let valor = 20;

if (valor % 2 == 0) {
    console.log("O número é par");
}
else {
    console.log("O número é ímpar");
}

//Operadores de Comparação
var z = 50;
var f = 50;
console.log(z == f); // Igualdade
console.log(z === f); // Igualdade Estrita
console.log(z != f); // Desigualdade
console.log(z !== f); // Desigualdade Estrita
console.log(z > f); // Maior que
console.log(z < f); // Menor que
console.log(z >= f); // Maior ou igual
console.log(z <= f); // Menor ou igual

//Operadores Lógicos
var n1 = 20;
var n2 = 2;
var n3 = 8;
var n4 = 6;

//&& - É o E lógico (and) Ele retorna verdadeiro se ambos os operandos forem verdadeiros
console.log(n1 > n4) && (n3 < n2); // false

//|| - É o OU lógico (or) Ele retorna verdadeiro se pelo menos um dos operandos for verdadeiro
console.log(n1 > n4) || (n3 > n2); // true

//! - É o NÃO lógico (not) Ele inverte o valor lógico do operando
console.log(!((n1 > n4) && (n3 > n2))); // false

