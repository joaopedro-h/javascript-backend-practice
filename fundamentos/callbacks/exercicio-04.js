/*
Exercício 04 — Callback com múltiplos argumentos

Crie uma função chamada cadastrarUsuario que receba o nome,
a idade e um callback como parâmetros.

A função deverá exibir uma mensagem informando que o cadastro
está sendo realizado e, em seguida, executar o callback,
passando o nome e a idade do usuário como argumentos.

Crie também uma função chamada exibirUsuario, responsável
por receber o nome e a idade e exibir os dados do usuário.

Por fim, execute cadastrarUsuario passando os dados de um
usuário e exibirUsuario como callback.
*/

function cadastrarUsuario(nome, idade, callback) {
    
    console.log("Cadastro sendo realizado!");
    
    callback(nome, idade);

}

function exibirUsuario(nome, idade) {
    
    console.log(`Usuário cadastrado: ${nome}, ${idade} anos.`);

}

cadastrarUsuario("João Pedro", 22, exibirUsuario)