/*
Exercício 03 — Cálculo utilizando callback

Crie uma função chamada calcular que receba dois números
e um callback como parâmetros.

A função deverá somar os dois números e armazenar o resultado
em uma variável.

Em seguida, deverá executar o callback, passando o resultado
da soma como argumento.

Crie também uma função chamada exibirResultado, responsável
por receber o resultado e exibi-lo no console.

Por fim, execute a função calcular, passando dois números
e a função exibirResultado como callback.
*/

function calcular(n1, n2, callback) {
    
    const resultado = n1 + n2;

    callback(resultado);

}

function exibirResultado(resultado) {
    
    console.log(`Resultado da conta: ${resultado}`);
    
}

calcular(10, 20, exibirResultado);