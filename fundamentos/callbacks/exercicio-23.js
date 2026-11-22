// Exercício 23 - Callback com reduce() e comparação

// Crie um array com cinco números.
// Utilize o reduce() para encontrar o maior número.
// Armazene o resultado em uma variável.
// Exiba o maior número no console.

let numeros = [12, 7, 25, 9, 18];

let maiorNumero = numeros.reduce((acumulador, numero) => {

    if (acumulador < numero) {
        return numero;
    }   

    return acumulador;

}, 0);

console.log(maiorNumero);