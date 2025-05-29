
const recursiva = (numero) => { 
    if (numero<=10){
    console.log ("Essa minha primeira recursiva com arrowFunction")
    recursiva(numero + 1);}
}
recursiva(2);