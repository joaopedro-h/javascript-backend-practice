// Exercício 34 - Callback com reduce() e identificação do produto de maior valor em estoque

// Crie um array com quatro objetos representando produtos.
// Cada objeto deve possuir as propriedades nome, preco e quantidade.
// Utilize o reduce() para identificar o produto com maior valor em estoque.
// Considere o preço multiplicado pela quantidade.
// Armazene o nome e o valor do produto encontrado.
// Exiba o resultado no console.

let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 2 },
    { nome: "Teclado", preco: 120, quantidade: 1 },
    { nome: "Monitor", preco: 800, quantidade: 2 },
    { nome: "Headset", preco: 150, quantidade: 3 }
];

let produtoMaisValioso = produtos.reduce((acumulador, produto) => {

    let valorProduto = produto.preco * produto.quantidade;
    
    if (acumulador.valor < valorProduto) {
        
        acumulador.nome = produto.nome
        acumulador.valor = valorProduto

    }

    return acumulador;

}, {nome: "", valor: 0});

console.log(`Produto:`, produtoMaisValioso.nome);
console.log(`Valor em estoque:`, produtoMaisValioso.valor)