// 5 valores digitados - esses valores serão somados e no final do programa mostra o total da soma.
function somar() {
  let soma = 0;
  let contador = 0;

  while (contador < 5) {
    let numero = Number(prompt(`Digite o ${contador + 1}º valor de 5:`));
    if (!isNaN(numero)) {   
    soma += numero;
    contador++;
    }
    else {
      alert("Valor inválido. Tente novamente.");
    }
  }
  alert(`A soma dos 5 valores é: ${soma}`);
}
