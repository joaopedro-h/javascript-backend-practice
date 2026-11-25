// Exercício 37 - Callback com reduce() e remoção de números duplicados

// Crie um array com nove números, incluindo valores repetidos.
// Utilize o reduce() para criar um novo array sem números duplicados.
// Preserve a ordem da primeira ocorrência de cada número.
// Armazene o resultado em uma variável.
// Exiba o array original e o novo array no console.

let numeros = [5, 10, 5, 20, 10, 30, 15, 20, 30];

let numerosUnicos = numeros.reduce((acumulador, numero) => {

    if (!acumulador.includes(numero)) {
        
        acumulador.push(numero);

    }

    return acumulador;

}, []);

console.log(`Array original:`, numeros);
console.log(`Array sem duplicados:`, numerosUnicos);