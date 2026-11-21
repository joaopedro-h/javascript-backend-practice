// Exercício 21 - Callback com reduce() e multiplicação

// Crie um array com quatro números.
// Utilize o reduce() para multiplicar todos os elementos.
// Armazene o resultado em uma variável.
// Exiba o resultado no console.

let numeros = [2, 3, 4, 5];

let resultado = numeros.reduce((acumulador, numero) => {

    return acumulador * numero;

}, 1);

console.log(resultado);