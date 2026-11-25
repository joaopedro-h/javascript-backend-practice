// Exercício 33 - Callback com reduce() e cálculo do valor do estoque

// Crie um array com quatro objetos representando produtos.
// Cada objeto deve possuir as propriedades nome, preco e quantidade.
// Utilize o reduce() para calcular o valor total do estoque.
// Multiplique o preço pela quantidade de cada produto.
// Armazene o resultado em uma variável.
// Exiba o valor total no console.

let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 120, quantidade: 1 },
    { nome: "Monitor", preco: 800, quantidade: 2 },
    { nome: "Headset", preco: 150, quantidade: 3 }
];

let valorEstoque = produtos.reduce((acumulador, produto) => {

    return acumulador + produto.preco * produto.quantidade;

}, 0);

console.log(`Valor total do estoque:`, valorEstoque);