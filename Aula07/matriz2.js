// const matrizZero = []

// for(let i = 0; i < 3; i++){ // linha

//     matrizZero[i] = []
//     for(let x = 0; x < 3 ; x++){ //coluna
//       matrizZero[i][x]  = 0
//     }
// }
// console.log(matrizZero)

let dados = []
for (let linha = 0; linha < 3; linha++){
    dados[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++){
        dados[linha][coluna] = prompt(`Digite o valor para a posição [${linha}][${coluna}]: `);
    }
}

for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        document.writeln(`${dados[linha][coluna]} `);
    }
    document.writeln("<br>");
}