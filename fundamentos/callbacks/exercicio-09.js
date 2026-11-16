// Exercício 09 - Callback com forEach() e condição

// Crie um array com seis números.
// Utilize o forEach() para percorrer o array.
// Passe uma arrow function como callback.
// Utilize uma condição para verificar quais números são pares.
// Exiba somente os números pares no console.

let numeros = [5, 10, 15, 20, 25, 30];

numeros.forEach((numero) => {
    
    if (numero % 2 === 0) {
        console.log(`Número par: ${numero}`);
    }

});