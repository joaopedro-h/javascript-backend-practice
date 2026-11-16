// Exercício 10 - Callback com forEach() e acumulador

// Crie um array com cinco números.
// Crie uma variável soma iniciando com 0.
// Utilize o forEach() para percorrer o array.
// Passe uma arrow function como callback.
// Some cada número ao valor armazenado em soma.
// Ao terminar a execução, exiba o resultado da soma.

let numeros = [10, 20, 30, 40, 50];

let soma = 0;

numeros.forEach((numero) => {
    
    soma += numero;
    
});

console.log(`Soma dos números: ${soma}`);
