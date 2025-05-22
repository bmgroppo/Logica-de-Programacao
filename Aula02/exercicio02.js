//Fá um programa que receba 4 notas e faça a média destas notas.
//no final o programa deve informar ao aluno: média <=5 "Reprovado", média > 5 E  média <7 "Recuperação", média >= 7 "Aprovado".

let nota1 = 5;
let nota2 = 6;
let nota3 = 7;
let nota4 = 8;
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media <= 5) {
    console.log(`A média é ${media} e o aluno está REPROVADO`);
}
if (media > 5 && media < 7) {
    console.log(`A média é ${media} e o aluno está em RECUPERAÇÃO`);
}
if (media >= 7) {
    console.log(`A média é ${media} e o aluno está APROVADO`);
}


