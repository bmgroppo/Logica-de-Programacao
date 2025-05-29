//Continuação de Recursão
//fatorial - fibonacci - 5! = 5 * 4 * 3 * 2 * 1 = 120

function fatorial (numero){
    if (numero===0 || numero===1){
        return 1
    }
    else{
        return numero * fatorial (numero - 1); // Chama o número e multiplica por ele mesmo menos 1
    }
}
console.log(fatorial(5))