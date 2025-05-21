//Hoisting
//É um conceito do JavaScript que permite que variáveis e funções sejam usadas antes de serem declaradas.
//Isso acontece porque o JavaScript "eleva" as declarações de variáveis e funções para o topo do seu escopo.

console.log(x);
var x = 20
//O código acima não gera erro, mas sim undefined, pois a variável x é elevada para o topo do escopo, mas sua atribuição permanece na mesma linha.

//O mesmo acontece com funções
console.log(somar(20, 30));

function somar(x, y) {
    return x + y;
}
//O código acima não gera erro, pois a função somar é elevada para o topo do escopo, permitindo que seja chamada antes de sua declaração.
//No entanto, se usarmos uma expressão de função, o comportamento é diferente.
//Exemplo de expressão de função
var somar = function(x, y) {
    return x + y;
}
//Nesse caso, a variável somar é elevada, mas a função não, resultando em um erro se tentarmos chamá-la antes de sua declaração.
console.log(somar(20, 30)); // TypeError: somar is not a function
//Isso acontece porque a variável somar é elevada, mas sua atribuição como função não é, resultando em undefined.

console.log("------------------------------------------------------------------------------");

var x = 10;
console.log(typeof x); // number

