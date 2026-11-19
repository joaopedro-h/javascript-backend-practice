// Exercício 13 - Callback com filter()

// Crie um array com seis números.
// Utilize o filter() para percorrer o array.
// Passe uma arrow function como callback.
// Verifique quais números são maiores que 15.
// Utilize return para retornar os números que atendem à condição.
// Armazene o novo array em uma variável.
// Exiba o array original e o novo array no console.

let numeros = [5, 10, 15, 20, 25, 30];

let numerosFiltrados = numeros.filter((numero) => {

    return numero > 15;

});

console.log("Array original:", numeros);
console.log("Array filtrado:", numerosFiltrados);