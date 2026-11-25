// Exercício 38 - Callback com reduce() e união de arrays

// Crie um array contendo quatro arrays internos.
// Utilize o reduce() para reunir todos os números em um único array.
// Preserve a ordem original dos elementos.
// Armazene o resultado em uma variável.
// Exiba o array original e o novo array no console.

let grupos = [
    [2, 4, 6],
    [8, 10],
    [12, 14, 16],
    [18, 20]
];

let numerosUnificados = grupos.reduce((acumulador, grupo) => {

    return acumulador.concat(grupo);

}, []);

console.log("Array original:", grupos);
console.log("Array unificado:", numerosUnificados);