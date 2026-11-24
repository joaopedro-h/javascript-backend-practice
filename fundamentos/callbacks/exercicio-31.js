// Exercício 32 - Callback com reduce() e contagem de tarefas por status

// Crie um array com cinco objetos representando tarefas.
// Cada objeto deve possuir as propriedades descricao e status.
// Utilize o reduce() para contar as tarefas pendentes e concluídas.
// Armazene o resultado em um objeto.
// Exiba o objeto no console.

let tarefas = [
    { descricao: "Estudar JavaScript", status: "pendente" },
    { descricao: "Praticar reduce()", status: "concluida" },
    { descricao: "Revisar callbacks", status: "pendente" },
    { descricao: "Fazer exercícios de arrays", status: "concluida" },
    { descricao: "Estudar objetos em JavaScript", status: "pendente" }
];

let resumo = tarefas.reduce((acumulador, tarefa) => {
    
    if (tarefa.status === "pendente") {

        acumulador.pendentes++;

    } else {

        acumulador.concluidas++;

    }

    return acumulador;

}, {pendentes: 0, concluidas: 0});

console.log(resumo);