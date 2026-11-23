// Exercício 28 - Callback com reduce() e contagem de strings

// Crie um array com cinco nomes.
// Utilize o reduce() para contar quantos nomes possuem mais de cinco caracteres.
// Armazene o resultado em uma variável.
// Exiba a quantidade encontrada no console.

let nomes = ["João", "Mariana", "Pedro", "Alexandre", "Ana"];

let quantidade = nomes.reduce((acumulador, nome) => {

    if (nome.length > 5) {

        return ++acumulador;

    } else {

        return acumulador;

    }

}, 0);

console.log(quantidade);