//Teste com switch case todos os dias da semana, caso não seja 
// um dia válido, apareça "dados inválidos."
// 1 - segunda, 2 - terça , 3 - quarta.. , outros números - "dados inválidos"

let dia = 1;

switch(dia) {
    default:
        console.log("Dados inválidos.");
        break;
    case 1:
        console.log("Hoje é segunda-feira: Começo da semana.");
        break;
    case 2:
        console.log("Hoje é terça-feira: Dia de trabalho.");
        break; 
    case 3:
        console.log("Hoje é quarta-feira: Meio da semana.");
        break;
    case 4:
        console.log("Hoje é quinta-feira: Quase lá.");
        break;
    case 5:
        console.log("Hoje é sexta-feira: Fim de semana chegando!");
        break
    case 6:
        console.log("Hoje é sábado: Dia de descanso.");
        break;
    case 7:
        console.log("Hoje é domingo: Preparando para a próxima semana.");
        break;
}
