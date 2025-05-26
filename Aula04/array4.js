//Crie um programa que contenha um array com 8 notas 
//utilize for para varrer o array, e o switch-case para analisar 
// a seguinte situação: 
//nota >= 9 conceito A
//nota <9 E >= 7 conceito B
//nota  <7 E >= 5 conceito C
//nota  <5 E >= 3 conceito D
//nota <3 E   conceito E
//nota = 0 conceito F
let notas = [9.5, 8, 6.5, 2.8, 10, 6.8, 7, 7.7];
let conceito = ""

for (let i = 0; i < notas.length; i++){
    //console.log(notas[i])
    let notaIndividual = notas[i]
    

    switch(true) {
    case (notaIndividual >= 9): conceito = "A"; break;
    case (notaIndividual < 9 && notaIndividual >= 7): conceito = "B"; break;
    case (notaIndividual < 7 && notaIndividual >= 5): conceito = "C"; break;
    case (notaIndividual < 5 && notaIndividual >= 3): conceito = "D"; break;
    case (notaIndividual < 3 && notaIndividual > 0): conceito = "E"; break;
    case (notaIndividual === 0): conceito = "F"; break;
    default: conceito = "Nota inválida";
    }
    console.log(`Nota: ${notaIndividual} - Conceito: ${conceito}`);
}