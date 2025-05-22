// Looping (tipos de laços)
// for, while, do while

//while - executa enquanto a condição for verdadeira
let i = 0;
while (i <= 10) {
    console.log("Valor de i: " + i);
    i = i + 1; // i++
    // i += 1;
}

//do while - executa pelo menos uma vez e depois verifica a condição
let j = 0;
do {
    console.log("Valor de j: " + j);
    j = j + 1; // j++
}
while (j <= 10);

//for - executa um número fixo de vezes
// for (inicialização; condição; incremento) { bloco de código }
for (let k = 0; k < 2; k++) {
    console.log("Valor de k: " + k);
}
