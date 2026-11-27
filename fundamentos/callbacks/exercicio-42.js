// Exercício 43 - Callback com reduce() e resumo de vendas

// Utilize o reduce() para percorrer o array de produtos.
// Calcule a quantidade total de unidades vendidas.
// Calcule o valor total das vendas considerando preço e quantidade.
// Utilize um objeto como acumulador, com as propriedades quantidadeTotal e valorTotal.
// Armazene o resultado em uma variável chamada resumoVendas.
// Exiba o resultado no console.

let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 120, quantidade: 1 },
    { nome: "Monitor", preco: 800, quantidade: 2 },
    { nome: "Headset", preco: 150, quantidade: 3 },
    { nome: "Webcam", preco: 200, quantidade: 2 }
];

let resumoVendas = produtos.reduce((acumulador, produto) => {

    acumulador.quantidadeTotal += produto.quantidade;
    acumulador.valorTotal += produto.quantidade * produto.preco;

    return acumulador;

}, {quantidadeTotal: 0, valorTotal: 0});

console.log(resumoVendas);