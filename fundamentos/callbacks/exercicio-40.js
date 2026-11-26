let vendas = [
    { cliente: "Ana", valor: 150, status: "pago" },
    { cliente: "Carlos", valor: 200, status: "pendente" },
    { cliente: "Mariana", valor: 300, status: "pago" },
    { cliente: "Pedro", valor: 100, status: "cancelado" },
    { cliente: "João", valor: 250, status: "pago" },
    { cliente: "Lucas", valor: 180, status: "pendente" }
];

let totalVendas = vendas.filter((venda) => {

    return venda.status === "pago";

}).reduce((acumulador, venda) => {

    return acumulador + venda.valor;

}, 0);

console.log(`Total de vendas pagas:`, totalVendas);