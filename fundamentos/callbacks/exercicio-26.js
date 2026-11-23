// Exercício 26 - Callback com reduce() e maior string

// Crie um array com cinco nomes.
// Utilize o reduce() para encontrar o nome com mais caracteres.
// Armazene o resultado em uma variável.
// Exiba o nome encontrado no console.

let nomes = ["João", "Mariana", "Pedro", "Alexandre", "Ana"];

let maiorNome = nomes.reduce((acumulador, nome) => {

    if (nome.length > acumulador.length) {
        return nome;
    }

    return acumulador;

}, "");

console.log(maiorNome);