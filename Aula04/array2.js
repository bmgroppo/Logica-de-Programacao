// let valor = [10, 21, 30, 43, 50, 61, 72, 83, 94, 105];
// let impares = 0;

// for (let i = 0; i < valor.length; i++) {
//     if (valor[i] % 2 !== 0) {
//         impares++;
//     }
//  }
//     console.log(`O total de númeos ímpares é: ${impares}`);


//foreach
let valor2 = ["maçã", "banana", "laranja", "mamão", "uva", "abacaxi"]

valor2.forEach(function(item, indice){
    console.log("frutas na posição: ", indice, "é: ", item )
})
console.log("-------------- exemplo 2 -------------------")

valor2.forEach((valor2, index) => {
    console.log("frutas na posição: ", index, "é: ", valor2 )
})