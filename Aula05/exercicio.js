// Crie um array de strings com nome de produtos e utilize as funções: 
let produtos = ["Notebook", "Smartphone", "Fone de ouvido", "Monitor", "Teclado"]
console.log(`\nOriginal: ${produtos}\n`)

//Inserir valores no array - push ou splice
produtos.splice(2, 0, "Mouse");
console.log(`Acrescentei 1: ${produtos}\n`);

//Delete o primeiro valor do array
produtos.splice(0, 1);
console.log(`Deletei o 1º: ${produtos}\n`);

//Delete o último valor do array
produtos.pop();
console.log(`Deletei último: ${produtos}\n`);

//Atualize o valor do indice 2 de sua array
produtos.splice(2,1,"Celular");
console.log(`Atualiza indice 2: ${produtos}\n`);

//Excluir a partir do indice 2 a quantidade de 3 elementos
produtos.splice(2, 3);
console.log(`Excluir indice 2: ${produtos}\n`);

//Conte a quantidade de elementos no seu array

console.log(`Total atualizado: ${produtos.length}\n`);
