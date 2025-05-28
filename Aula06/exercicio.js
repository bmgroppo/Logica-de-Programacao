// Cria um array de objetos, cada um representando um aluno com nome e nota
const alunos = [
  { nome: 'José', nota: 7.5 },
  { nome: 'Celso', nota: 9.2 },
  { nome: 'Bruno', nota: 6.8 },
  { nome: 'Daniela', nota: 5.5 },
  { nome: 'Eduardo', nota: 2.8 },
];

// 1 - Ordenar por nota em ordem crescente
// Usamos o spread operator [...] para copiar o array e sort para ordenar pelo campo 'nota'
const porNota = [...alunos].sort((a, b) => a.nota - b.nota);
console.log(`Ordenação por nota (crescente):`);
console.log(porNota); // Mostra o array ordenado por nota no console

// 2 - Ordenar por nome em ordem alfabética
// Também copiamos o array e usamos sort com localeCompare para comparar nomes
const porNome = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));
console.log(`Ordenação por nome (alfabética):`);
console.log(porNome); // Mostra o array ordenado por nome no console

// 3 - Maior nota
// O último elemento do array ordenado por nota é o aluno com maior nota
const maiorNota = porNota[porNota.length - 1];
console.log("Maior nota: ", maiorNota); // Mostra o objeto do aluno com maior nota

// 4 - Menor nota
// O primeiro elemento do array ordenado por nota é o aluno com menor nota
const menorNota = porNota[0];
console.log("Menor nota:", menorNota); // Mostra o objeto do aluno com menor nota

// 5 - Média das notas
// Usamos reduce para somar todas as notas e depois dividimos pelo total de alunos
const mediaNotas = porNota.reduce((acc, aluno) => acc + aluno.nota, 0) / porNota.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`); // Exibe a média com duas casas decimais