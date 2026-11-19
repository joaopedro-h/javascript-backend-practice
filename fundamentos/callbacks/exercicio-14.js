// Exercício 14 - Callback com filter() e propriedades de strings

// Crie um array com seis nomes.
// Utilize o filter() para percorrer o array.
// Passe uma arrow function como callback.
// Verifique quais nomes possuem mais de cinco caracteres.
// Utilize return para retornar os nomes que atendem à condição.
// Armazene o novo array em uma variável.
// Exiba o array original e o array filtrado no console.

let nomes = ["João", "Mariana", "Pedro", "Alexandre", "Ana", "Gabriela"];

let nomesFiltrados = nomes.filter((nome) => {

    return nome.length > 5;

});

console.log("Array original:", nomes);
console.log("Array filtrado:", nomesFiltrados);