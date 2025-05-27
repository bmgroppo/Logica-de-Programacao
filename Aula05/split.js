// split - transforma em Array.

// const frase = "Javascript é incrível";
// const palavras = frase.split(" ")
// console.log(palavras); // Separa a frase por espaço e transforma em Array

// const nome = "Ana, Bruno, Carlos, André"
// const lista = nome.split(", "); //Separou a string por ", " e transformou em Array
// console.log(lista);


// Crie um programa que leia uma string e mostre o total de vogais existente
const texto = " Aprendizado constante!";
let vogais = 0;

texto.toLowerCase().split("").forEach(letra => {
    if("aeiou".includes(letra)){
        vogais++
    }
})
console.log(`A quantidade de vogais é ${vogais}`);

// Utilize o split e forEach para verificar um texto e descobrir a quantidade de espaços

const texto2 = "Utilize o split e forEach para verificar um texto e descobrir a quantidade de espaços";
let cont = 0;

texto2.split("").forEach(espaco => {
    if (" ".includes(espaco)){
        cont++
    }
})

console.log(`Espaços na frase ${cont}`)