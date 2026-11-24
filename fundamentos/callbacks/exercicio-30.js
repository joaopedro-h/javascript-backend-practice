// Exercício 31 - Callback com reduce() e soma de valores de objetos

// Crie um array com quatro objetos, cada um representando um produto.
// Cada objeto deve possuir as propriedades nome e preco.
// Utilize o reduce() para somar os preços dos produtos.
// Armazene o resultado em uma variável.
// Exiba o valor total no console.

let produtos = [{nome: "Caderno", preco: 25,}, {nome: "Caneta", preco: 5}, {nome: "Mochila", preco: 80}, {nome: "Borracha", preco: 5}];

let valorTotal = produtos.reduce((acumulador, produto) => {

    return acumulador + produto.preco;

}, 0);

console.log("Valor total dos produtos:", valorTotal);