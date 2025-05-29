// Fibonacci - cada número é a soma dos dois anteriores
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

function fibonacci(numero){
    if (numero === 0){
        return 0
    }
    if (numero === 1){
        return 1
    } else{
        return fibonacci(numero-1) + fibonacci (numero -2); 
    }
}
console.log(fibonacci(6)); // 8 (posição 6 da sequência de Fibonacci) Então descobre a proxima posição da sequência de Fibonacci, que é 8.
// Explicação:  
//1ª passada (6-1) + (6-2) = 5+4 = 9
//2ª passada (5-1) + (5-2) = 4+3 = 7
//3ª passada (4-1) + (4-2) = 3+2 = 5
//4ª passada (3-1) + (3-2) = 2+1 = 3
//5ª passada (2-1) + (2-2) = 1+0 = 1
//6ª passada (1-1) + (1-2) = 0+1 = 1
//7ª passada (0-1) + (0-2) = 0+0 = 0
// A soma dos dois últimos números é o número atual da sequência de Fibonacci
// A função continua chamando a si mesma até chegar ao caso base (0 ou 1), onde retorna o valor correspondente.
// A cada chamada recursiva, a função calcula a soma dos dois números anteriores na sequência de Fibonacci.
// A função retorna o valor do número na posição especificada da sequência de Fibonacci.

// Vamos tentar fazer arrow function
const fibonacciArrow = (numero) => {
    if (numero === 0) {
        return 0;
    }
    if (numero === 1) {
        return 1;
    } else {
        return fibonacciArrow(numero - 1) + fibonacciArrow(numero - 2);
    }
};