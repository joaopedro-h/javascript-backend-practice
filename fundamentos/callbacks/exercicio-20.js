// Exercício 20 - Callback com reduce()

// Crie um array com quatro números.
// Utilize o reduce() para somar todos os elementos.
// Armazene o resultado em uma variável.
// Exiba a soma no console.

let numeros = [5, 10, 15, 20];

let soma = numeros.reduce((acumulador, numero) => {

    return acumulador + numero;

}, 0);

console.log(soma);