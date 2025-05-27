//crud simples

let pessoas = []

//create
function create(nome){
    pessoas.push(nome);
}

//read
function read(){
    console.log(pessoas);
}

//Update
function update(indice, novoNome){
    pessoas[indice] = novoNome;
}

//delete
function del (indice){
    pessoas.splice(indice, 1);
}

create("Carlos");
create("Marcia");
update(1, "Ferreira")
read();
del(1);
read();



