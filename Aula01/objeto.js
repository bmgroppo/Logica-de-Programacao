//Objeto em JavaScript
// Objeto é uma coleção de propriedades
const usuario = {
    nome: "Carlos",
    idade: 25,
};

usuario.idade=26; // Reatribuição de valor
console.log(usuario); // { nome: 'Carlos', idade: 26 }
// Objeto é uma coleção de pares chave-valor

//Array é um tipo especial de objeto
const numeros = [1, 2, 3]; // Array de números
numeros.push(4); // Adiciona o valor 4 ao array
console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[10]);
console.log(numeros); // [ 1, 2, 3, 4, 5, 4 ]
// Array é um objeto que possui propriedades e métodos

//Concactenar - string
let mensagem = "Olá mundo!!";
let nome = "Paulo";
console.log("Sr " + nome + " Mensagem: " + mensagem);
console.log(`Sr ${nome} Mensagem: ${mensagem}`);
