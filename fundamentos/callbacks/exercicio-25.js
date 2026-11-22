// Exercício 25 - Callback com reduce() e média

// Crie um array com cinco notas.
// Utilize o reduce() para somar todas as notas.
// Calcule a média dividindo a soma pela quantidade de notas.
// Armazene o resultado em uma variável.
// Exiba a média no console.

let notas = [8, 7, 10, 9, 6];

let soma = notas.reduce((acumulador, nota) => {

    return acumulador + nota;

}, 0);

let media = soma / notas.length;

console.log(media);