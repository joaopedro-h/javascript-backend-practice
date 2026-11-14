// Exercício 08 - Callback com forEach()

// Crie um array com três tarefas.
// Utilize o forEach() para percorrer o array.
// Passe uma arrow function como callback.
// Exiba cada tarefa junto com sua posição na lista, começando pelo número 1.

let tarefas = ["Estudar JavaScript", "Praticar callbacks", "Revisar funções"];

tarefas.forEach((tarefa, index) => {

    console.log(`Tarefa ${index + 1}:`, tarefa);

});