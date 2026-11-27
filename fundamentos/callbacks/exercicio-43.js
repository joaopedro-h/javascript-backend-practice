// Exercício 44 - Callback com sort() e ordenação numérica

// Utilize o sort() para ordenar os números em ordem crescente.
// Utilize uma arrow function como callback para definir a ordem numérica.
// Armazene o resultado em uma variável chamada numerosOrdenados.
// Exiba o array ordenado no console.

let numeros = [45, 12, 89, 3, 27, 64, 8];

let numerosOrdenados = numeros.sort((numero1, numero2) => {

    return numero1 - numero2;

});

console.log(numerosOrdenados);