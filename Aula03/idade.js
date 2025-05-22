function idade() {
    let idade = prompt("Qual a sua idade?");
    let nacionalidade = prompt("Informe a nacionalidade").toLowerCase();
    // document.writeln(`A idade é ${idade} anos`)
    // alert(`A idade é ${idade} anos`)
    if (idade >=16){
        if(nacionalidade === "brasileira"){
            document.writeln(`Pode votar no Brasil`)
        }
        else{
            document.writeln(`Não pode votar no Brasil`)
        }        

    }
    else {
document.writeln(`Ainda não tem idade pra votar`);
    }
}

