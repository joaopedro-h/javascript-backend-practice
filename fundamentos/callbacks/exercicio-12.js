// Exercício 12 - Callback com map() e operações matemáticas

// Crie um array com quatro números.
// Utilize o map() para percorrer o array.
// Passe uma arrow function como callback.
// Multiplique cada número por 3.
// Utilize return para devolver o resultado.
// Armazene o novo array em uma variável.
// Exiba o array original e o novo array no console.

let numeros = [2, 4, 6, 8];

let numerosMultiplicados = numeros.map((numero) => {
    
    return numero * 3;

});

console.log("Array original:", numeros);
console.log("Array multiplicado:", numerosMultiplicados);