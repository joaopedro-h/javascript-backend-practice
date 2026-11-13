/*
Exercício 06 — Callback com retorno de valores

Crie uma função chamada executarOperacao que receba dois
números e um callback como parâmetros.

A função deverá executar o callback, passando os dois números
como argumentos, e armazenar o valor retornado em uma constante
chamada resultado.

Em seguida, deverá exibir o resultado no console.

Depois, execute executarOperacao duas vezes:

Na primeira chamada, passe um callback responsável por
realizar a soma dos números.

Na segunda chamada, passe um callback responsável por
realizar a subtração dos números.

Utilize arrow functions diretamente nas chamadas.
*/

function executarOperacao(n1, n2, callback) {
    
    const resultado = callback(n1, n2);

    console.log(`Resultado: ${resultado}`);

}

executarOperacao(10, 10, (n1, n2) => {

    return n1 + n2;
    
});

executarOperacao(10, 10, (n1, n2) => {

    return n1 - n2;

});