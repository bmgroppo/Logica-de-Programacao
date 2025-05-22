//Crie um programinha que receba uma senha e fazer a verificação.
//Se for verdadeiro, exiba "Acesso permitido" Se for falso, exiba "Acesso negado"
var senha = "123456";
var senhaCorreta = "123456";
if (senha == senhaCorreta) {
    console.log(`A senha: ${senha} está correta`);
}
else {
    console.log(` A senha: ${senha} está incorreta`);
}


//mesma coisa, mas com operador ternário
var senha = "123456";  
var senhaCorreta = "123456";
var resultado = (senha == senhaCorreta) ? "Acesso permitido" : "Acesso negado";
console.log(resultado);
