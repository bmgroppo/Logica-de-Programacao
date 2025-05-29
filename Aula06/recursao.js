//laço
for (let i = 5; i > 0; i--) {
    console.log(i);
    }
console.log ("-----------------------------------------------------")


// funçao recursiva - função que chama a si mesma
function contagemRegressiva(n){
    console.log(n);
    if (n === 0) { // caso base. Limite da recursão
        return;
    }
        //chamada recursiva
        contagemRegressiva(n - 1); // chama a função novamente com n - 1 (Lógica de programação)
}
contagemRegressiva(5);
// função recursiva com retorno