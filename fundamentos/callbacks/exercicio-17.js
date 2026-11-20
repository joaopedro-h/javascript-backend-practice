// Exercício 17 - Callback com some()

// Crie um array com cinco números.
// Utilize o some() para verificar se existe pelo menos um número par.
// Armazene o resultado em uma variável.
// Exiba o resultado no console.

let numeros = [3, 7, 10, 15, 18];

let existeNumeroPar = numeros.some((numero) => {

    return numero % 2 === 0;

});

console.log(existeNumeroPar);