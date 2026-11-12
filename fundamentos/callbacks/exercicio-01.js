/*
Exercício 01 — Execução de tarefas com callback

Crie uma função chamada executarTarefa que receba o nome de uma tarefa
e um callback como parâmetros.

A função deverá exibir uma mensagem informando o início da tarefa e,
em seguida, executar o callback, passando o nome da tarefa como argumento.

Crie também uma função chamada finalizarTarefa, responsável por receber
o nome da tarefa e exibir uma mensagem informando sua conclusão.

Por fim, execute executarTarefa passando o nome da tarefa e
finalizarTarefa como callback.
*/

function executarTarefa(tarefa, callback) {
    
    console.log(`Iniciando tarefa: ${tarefa}`);
    
    callback(tarefa);

}

function finalizarTarefa(tarefa) {
    
    console.log(`Tarefa concluída: ${tarefa}`);
    
}

executarTarefa("Estudar JavaScript", finalizarTarefa)