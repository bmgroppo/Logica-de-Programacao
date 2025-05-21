// Tipos de variáveis: var, let e const
//Redeclaração
let nome = "Carlos";
nome = "Celso";
console.log(nome); 
// Redeclaração com let não é permitido
// Redeclaração com var é permitido
var valor1 = "Olá voçê !";
var valor1 = "Olá voçê !!!";
console.log(valor1); // Olá voçê !!!
// Redeclaração com const não é permitido



//Reatribuição



//Tipos e Constantes
const valorIp = 12346789;
//valorIp = 65489798; // Não é permitido reatribuir valor a uma constante
console.log(valorIp); // 12346789
//Constantes são variáveis que não podem ser reatribuídas

//Hoisting

//Visibilidade
console.log("-----------------------------------------"); 
{
    console.log("Isso é um bloco");
    let idade = 25;
    const real = 50;
}
{
    var x ="Teste de escopo";
}

//console.log(idade); // Erro: idade is not defined
//console.log(real); // Erro: real is not defined
console.log(x); // Teste de escopo

// var: escopo global ou de função
// let: escopo de bloco
// const: escopo de bloco e não pode ser reatribuído

//function() { instructions - tarefas especificas } - bloco
function executar() {
    console.log("Dentro da função !!");
    let numero = 200;
    console.log(numero);
}
executar(); // Dentro da função !!



