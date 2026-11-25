// Exercício 36 - Callback com reduce() e separação de números

// Crie um array com oito números.
// Utilize o reduce() para separar os números pares e ímpares.
// Armazene os números pares em um array.
// Armazene os números ímpares em outro array.
// Armazene os dois arrays dentro de um objeto.
// Exiba o resultado no console.

let numeros = [3, 8, 12, 5, 7, 10, 15, 20];


let resultado = numeros.reduce((acumulador, numero) => {

    if (numero % 2 === 0) {
        
        acumulador.pares.push(numero);

    } else {

        acumulador.impares.push(numero);

    }

    return acumulador;

}, { pares: [], impares: [] });

console.log(resultado);