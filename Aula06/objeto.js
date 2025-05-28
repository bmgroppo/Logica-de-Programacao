//objeto em JavaScript é uma coleção de propriedades, onde cada propriedade é uma associação entre uma chave (ou nome) e um valor.
// Objetos são estruturas de dados que permitem armazenar informações de forma organizada e acessível.
// Objetos são definidos usando chaves {} e podem conter propriedades e métodos.
// Objetos podem ser criados usando a notação de objeto literal, que é a forma mais comum de criar objetos em JavaScript.
// Exemplo de objeto em JavaScript
let pessoas = {nome: "Marcia", idade: 20, profissao: "Dev"};
console.log(pessoas.idade); // Acessando a propriedade idade do objeto pessoas

for (let chave in pessoas) {
    console.log(chave + ": " + pessoas[chave]); // Iterando sobre as propriedades do objeto pessoas
}

console.log(pessoas); // Exibindo o objeto pessoas completo

