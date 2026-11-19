// Exercício 15 - Callback com find()

// Crie um array com seis números.
// Utilize o find() para percorrer o array.
// Passe uma arrow function como callback.
// Verifique qual é o primeiro número maior que 15.
// Utilize return para retornar a condição.
// Armazene o resultado em uma variável.
// Exiba o resultado no console.

let numeros = [5, 10, 15, 20, 25, 30];

let numeroEncontrado = numeros.find((numero) => {

    return numero > 15;

});

console.log("Primeiro número encontrado:", numeroEncontrado);