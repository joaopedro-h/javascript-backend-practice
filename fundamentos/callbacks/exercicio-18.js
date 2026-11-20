// Exercício 18 - Callback com every()

// Crie um array com cinco números.
// Utilize o every() para verificar se todos os números são pares.
// Armazene o resultado em uma variável.
// Exiba o resultado no console.

let numeros = [4, 8, 12, 15, 20];

let todosSaoPares = numeros.every((numero) => {

    return numero % 2 === 0;

});

console.log(todosSaoPares);