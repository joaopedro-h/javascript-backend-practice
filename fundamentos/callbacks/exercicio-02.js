/*
Exercício 02 — Callback com arrow function

Utilize a função executarTarefa criada no exercício anterior,
que recebe o nome de uma tarefa e um callback como parâmetros.

Desta vez, não crie uma função separada para finalizar a tarefa.
Na chamada de executarTarefa, passe uma arrow function diretamente
como segundo argumento.

A arrow function deverá receber o nome da tarefa e exibir uma
mensagem informando que ela foi concluída.
*/

function executarTarefa(tarefa, callback) {
    
    console.log(`Iniciando tarefa: ${tarefa}`);
    
    callback(tarefa);

}

executarTarefa("Estudar JavaScript", (tarefa) => {

    console.log(`Tarefa concluída: ${tarefa}`);
    
});