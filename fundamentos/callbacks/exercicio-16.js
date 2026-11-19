// Exercício 16 - Callback com find() e comparação de strings

// Crie um array com cinco nomes.
// Utilize o find() para encontrar o nome "Pedro".
// Armazene o resultado em uma variável.
// Exiba o nome encontrado no console.

let nomes = ["João", "Maria", "Pedro", "Ana", "Gabriela"];

let nomeEncontrado = nomes.find((nome) => {

    return nome === "Pedro";

});

console.log("Nome encontrado:", nomeEncontrado);