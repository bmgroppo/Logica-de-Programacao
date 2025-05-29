// matriz
//      0 - 1 - 2 - 3
// 0 - 10, 41, 41, 14
// 1 - 20, 45, 47, 74
// 2 - 10, 45, 54, 23
// 
const matriz = [
    [10, 41, 41, 14],
    [20, 45, 47, 74],
    [10, 45, 54, 23]
];
// Acessando os elementos da matriz
console.log(matriz[0][0]); // 10
console.log(matriz[1][2]); // 47

console.log(`Tamanho ${matriz.length}`)
for (let linha =0; linha < matriz.length ; linha++){
    
    for (let coluna = 0; coluna < matriz[linha].length; coluna++){
        console.log (`Elemento na linha ${linha} e coluna ${coluna} é: ${matriz[linha][coluna]}`)
    }
}