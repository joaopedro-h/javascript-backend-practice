// Exercício 27 - Callback com reduce() e quantidade de caracteres

// Crie um array com cinco nomes.
// Utilize o reduce() para somar a quantidade de caracteres de cada nome.
// Armazene o resultado em uma variável.
// Exiba o total de caracteres no console.

let nomes = ["João", "Mariana", "Pedro", "Alexandre", "Ana"];

let totalCaracteres = nomes.reduce((acumulador, nome) => {

    return acumulador + nome.length;


}, 0);

console.log(totalCaracteres);