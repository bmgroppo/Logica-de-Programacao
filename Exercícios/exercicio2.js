function idade (){
    let quantidade = Number(prompt("Digite quantas pessoas deseja cadastrar"));
    let idade = [];
    let crianca = 0;
    let adolescente = 0;
    let adulto = 0;
    let idoso = 0;

    for(let i=1; i <=quantidade; i++){
        idade = Number(prompt(`Digite a idade da ${i}ª pessoa de ${quantidade} escolhidas`));
            if (idade <=12){
                crianca++;
            }
                else if (idade > 12 && idade < 18){
                    adolescente++
            }
                else if (idade > 18 && idade < 60){
                    adulto++
            }
            else{
                idoso++
            }

    }document.writeln(`Crianças: ${crianca}<br>
        Adolescentes: ${adolescente} <br>
        Adultos: ${adulto} <br>
        Idosos: ${idoso} <br><br>
        <strong>Total de ${quantidade} pessoas!</strong>`)
}
    
function estoque (){
    let saldo = 100;
    let entrada = 0;
    let saida = 0;
    let opcao;

    while (opcao !=="sair"){

    }
    switch (saldo){
        case "1":
            saldo += Number(prompt("Digite a quantidade da ENTRADA de produtos"));
        return
        
        case "2":
            saldo -= Number(prompt("Digite a quantidade da SAÍDA de produtos"));
        return

        case "3":
            prompt(`O saldo atual é ${saldo}`);
        return

        case "sair":
            break
        default:
            alert("comando inválido")
    }

}