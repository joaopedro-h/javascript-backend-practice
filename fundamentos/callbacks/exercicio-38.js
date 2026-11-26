// Exercício 39 - Callback com reduce() e cálculo de saldo bancário

// Crie um array com cinco objetos representando transações bancárias.
// Cada objeto deve possuir as propriedades descricao, tipo e valor.
// Utilize o reduce() para calcular o saldo final.
// Some os valores das entradas e subtraia os valores das saídas.
// Considere um saldo inicial de 500.
// Armazene o resultado em uma variável.
// Exiba o saldo final no console.

let transacoes = [
    { descricao: "Depósito", tipo: "entrada", valor: 200 },
    { descricao: "Compra", tipo: "saida", valor: 50 },
    { descricao: "Pagamento", tipo: "saida", valor: 100 },
    { descricao: "Transferência recebida", tipo: "entrada", valor: 80 },
    { descricao: "Saque", tipo: "saida", valor: 30 }
];

let saldoFinal = transacoes.reduce((acumulador, transacao) => {

    if (transacao.tipo === "entrada") {
        
        acumulador += transacao.valor;

    } else {

        acumulador -= transacao.valor;

    }

    return acumulador;


}, 500);

console.log(`Saldo final:`, saldoFinal);