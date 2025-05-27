function teste(){
    console.log ("Chamada de Função");
}
teste();
//---------------------------------------------------

function soma(a, b){
    return (a+b)
}
console.log(soma(2, 4))
//---------------------------------------------------

let dobro = function(x){ //função anônima
    return x*2
}
console.log(dobro(4));
//--------------------------------------------------

const quadrado = (n) => {return n*n};
console.log (quadrado(5));


