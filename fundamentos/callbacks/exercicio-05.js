/*
Exercício 05 — Callback com diferentes operações

Crie uma função chamada executarOperacao que receba dois
números e um callback como parâmetros.

A função deverá exibir uma mensagem informando que a operação
está sendo executada e, em seguida, executar o callback,
passando os dois números como argumentos.

Depois, execute executarOperacao duas vezes:

Na primeira chamada, passe um callback responsável por
realizar a soma dos números.

Na segunda chamada, passe um callback responsável por
realizar a multiplicação dos números.
*/

function executarOperacao(n1, n2, callback) {
    
    console.log("Executando operação.");
    callback(n1, n2);
    
}

executarOperacao(10,10, (n1, n2) => {

    console.log(`Resultado da soma: ${n1+n2}`);

});

executarOperacao(10,10, (n1, n2) => {

    console.log(`Resultado da multiplicação: ${n1*n2}`);

});