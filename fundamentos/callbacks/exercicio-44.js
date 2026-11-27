// Exercício 45 - Callback com sort() e ordenação de objetos

// Utilize o sort() para ordenar os produtos pelo preço.
// Organize os produtos em ordem decrescente.
// Utilize uma arrow function como callback para definir a ordem.
// Armazene o resultado em uma variável chamada produtosOrdenados.
// Exiba o resultado no console.

let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 800 },
    { nome: "Headset", preco: 150 },
    { nome: "Webcam", preco: 200 }
];

let produtosOrdenados = produtos.sort((produto1, produto2) => {

    return produto2.preco - produto1.preco;

});

console.log(produtosOrdenados);