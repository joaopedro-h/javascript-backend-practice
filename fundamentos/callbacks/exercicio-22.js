// Exercício 22 - Callback com reduce() e condição

// Crie um array com seis números.
// Utilize o reduce() para somar somente os números pares.
// Armazene o resultado em uma variável.
// Exiba a soma no console.

let numeros = [5, 10, 15, 20, 25, 30];

let somaPares = numeros.reduce((acumulador, numero) => {

    if (numero % 2 === 0) {
        
        return acumulador + numero;

    } else {

        return acumulador;
        
    }

}, 0);

console.log(somaPares);
