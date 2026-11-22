// Exercício 24 - Callback com reduce() e contagem

// Crie um array com sete números.
// Utilize o reduce() para contar quantos números são maiores que 10.
// Armazene o resultado em uma variável.
// Exiba a quantidade no console.

let numeros = [4, 12, 7, 18, 25, 30, 9];

let quantidade = numeros.reduce((acumulador, numero) => {

    if (numero > 10) {
        return ++acumulador;
    }

    return acumulador;

}, 0);

console.log(quantidade);