// Exercício 42 - Callback com filter() e reduce() para calcular média

// Utilize o filter() para selecionar os alunos com nota maior ou igual a 7.
// Utilize o reduce() para somar as notas dos alunos aprovados.
// Calcule a média dividindo a soma pela quantidade de alunos aprovados.
// Armazene o resultado em uma variável chamada mediaAprovados.
// Exiba a média com duas casas decimais no console.

let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Mariana", nota: 9 },
    { nome: "Pedro", nota: 6 },
    { nome: "João", nota: 7.5 },
    { nome: "Lucas", nota: 4 }
];

let alunosAprovados = alunos.filter((aluno) => {

    return aluno.nota >= 7;

});

let soma = alunosAprovados.reduce((acumulador, aluno) => {

    return acumulador + aluno.nota

}, 0);

let mediaAprovados = soma / alunosAprovados.length;

console.log(`Média dos aprovados:`, mediaAprovados.toFixed(2));