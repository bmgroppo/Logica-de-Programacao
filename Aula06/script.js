const nome = ["João", "Maria", "José", "Ana"];
const copia = [...nome];
copia.push("Pedro");
console.log(copia);

//-----------------------------------------------------------------
const parte1 = [1,2]
const parte2 = [3,4];
const tudo = [...parte1, ...parte2];
console.log(tudo);

//-----------------------------------------------------------------
function somar(a, b, c){
    return a + b + c;
}
const numeros = [1, 2, 3];
console.log(somar(...numeros));