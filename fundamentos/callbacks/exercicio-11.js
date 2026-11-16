// Exercício 11 - Callback com map()

// Crie um array com quatro nomes.
// Utilize o map() para percorrer o array.
// Passe uma arrow function como callback.
// Transforme cada nome em letras maiúsculas.
// Armazene o novo array em uma variável.
// Exiba o novo array no console.

let nomes = ["João", "Maria", "Pedro", "Ana"];

let maiusculas = nomes.map((nome) => {
    
    return nome.toUpperCase();
    
});

console.log(maiusculas);