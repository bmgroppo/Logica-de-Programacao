
let pessoa = {
    nome: "João",
    idade: 30,
    cpf: "123.456.789-00",
}

let pessoas = []
//função criar uma nova pessoas
function criarPessoa(nome, idade, cpf) {
    const pessoa = {
        nome: nome,
        idade: idade,
        cpf: cpf,
    }
    pessoas.push(pessoa)
    console.log(`Pessoa adicionada: ${nome}, Idade: ${idade}, CPF: ${cpf}`);
}

//função listar todas as pessoas
function listarPessoas() {
    console.log("\nLista de pessoas:");
    pessoas.forEach((valor, index) => {
        console.log(`${index} : ${valor.nome} - ${valor.idade} anos, ${valor.cpf}`);
    });
}

//função para atualizar uma pessoa
function atualizarPessoa(indice, novoNome, novaIdade, novoCpf) {
    if (pessoas[indice]) {
        pessoas[indice].nome = novoNome;
        pessoas[indice].idade = novaIdade;
        pessoas[indice].cpf = novoCpf;
        console.log(`\nPessoa atualizada: ${pessoas[indice].nome}`);
    } else {
        console.log("Índice inválido.");
    }
}

//função para excluir uma pessoa
function excluirPessoa(indice) {
    if (pessoas[indice]) {
        const removida = pessoas.splice(indice, 1);
        console.log(`\nPessoa removida: ${removida[0].nome}`);
    } else {
        console.log("Índice inválido.");
    }
}

//----------------teste---------------
criarPessoa("Maria", 25, "987.654.321-00");
criarPessoa("Pedro", 40, "111.222.333-44");
criarPessoa("Ana", 35, "555.666.777-88");
listarPessoas();
atualizarPessoa(1, "Maria Silva", 26, "987.654.321-00");
listarPessoas();
excluirPessoa(2);
listarPessoas();