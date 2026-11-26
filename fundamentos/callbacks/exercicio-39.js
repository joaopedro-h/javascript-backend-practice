// Exercício 40 - Callback com reduce() e resumo de transações bancárias

// Utilize o reduce() para percorrer o array de transações.
// Calcule separadamente o valor total das entradas e das saídas.
// Utilize um objeto como acumulador, com as propriedades entradas e saidas.
// Armazene o resultado em uma variável chamada resumo.
// Exiba o resultado no console.

let transacoes = [
    { descricao: "Depósito", tipo: "entrada", valor: 200 },
    { descricao: "Compra", tipo: "saida", valor: 50 },
    { descricao: "Pagamento", tipo: "saida", valor: 100 },
    { descricao: "Transferência recebida", tipo: "entrada", valor: 80 },
    { descricao: "Saque", tipo: "saida", valor: 30 },
    { descricao: "Salário", tipo: "entrada", valor: 150 }
];

let resumo = transacoes.reduce((acumalador, transacao) => {

    if (transacao.tipo === "entrada") {
        
        acumalador.entradas += transacao.valor

    } else {

        acumalador.saidas += transacao.valor

    }

    return acumalador;

}, {entradas: 0, saidas: 0});

console.log(resumo);