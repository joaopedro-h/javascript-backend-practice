// Exercício 19 - Callback com findIndex()

// Crie um array com seis números.
// Utilize o findIndex() para encontrar a posição do primeiro número maior que 15.
// Armazene o resultado em uma variável.
// Exiba o índice encontrado no console.

let numeros = [5, 10, 15, 20, 25, 30];

let indiceEncontrado = numeros.findIndex((numero) => {

    return numero > 15;

});

console.log(indiceEncontrado);