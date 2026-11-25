// Exercício 35 - Callback com reduce() e total de vendas por vendedor

// Crie um array com seis objetos representando vendas.
// Cada objeto deve possuir as propriedades vendedor e valor.
// Utilize o reduce() para somar as vendas de cada vendedor.
// Armazene os resultados em um objeto.
// Exiba o objeto no console.

let vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Carlos", valor: 200 },
    { vendedor: "Ana", valor: 150 },
    { vendedor: "Mariana", valor: 300 },
    { vendedor: "Carlos", valor: 50 },
    { vendedor: "Mariana", valor: 100 }
];

let totalPorVendedor = vendas.reduce((acumulador, venda) => {

    if (acumulador[venda.vendedor] === undefined) {
        acumulador[venda.vendedor] = 0;
    }

    acumulador[venda.vendedor] += venda.valor;

    return acumulador;

}, {});

console.log(totalPorVendedor);