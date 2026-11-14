/*
Exercício 07 — Callback com retorno booleano e condição

Crie uma função chamada verificarNumero que receba um número
e um callback como parâmetros.

A função deverá executar o callback, passando o número como
argumento, e armazenar o valor retornado em uma constante
chamada resultado.

Em seguida, utilize uma estrutura condicional if/else para
verificar o valor de resultado.

Se o resultado for true, exiba uma mensagem informando que
o número é par.

Se o resultado for false, exiba uma mensagem informando que
o número é ímpar.

Por fim, execute verificarNumero duas vezes, passando os
números 10 e 7, respectivamente.

Utilize uma arrow function diretamente como callback.
*/

function verificarNumero(num, callback) {
    
    const resultado = callback(num);

    if (resultado) {

        console.log(`O número ${num} é par.`);

    } else {

        console.log(`O número ${num} é impar.`);

    }
}

verificarNumero(10, (num) => {

    return num % 2 === 0;

});

verificarNumero(7, (num) => {

    return num % 2 === 0;

});