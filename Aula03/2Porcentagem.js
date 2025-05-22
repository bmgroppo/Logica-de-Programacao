//Porcentagem
const valor = 200;
const Porcentagem = 10;
const resultado = valor * (Porcentagem / 100);  
console.log(resultado); // 20
// // valor = valor * (Porcentagem / 100);
console.log("---------------------------------------------------------------");

function aplicarPercentual(valor, porcentagem){
    return valor * (porcentagem / 100);
}
console.log(aplicarPercentual(500, 12));

