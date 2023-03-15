/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */ 

let studentList = [
    {
        name: "Diego",
        firstTest: 7.5,
        secondTest: 9.2
    },
    
    {
        name: "Letícia",
        firstTest: 3.5,
        secondTest: 8.0
    },

    {
        name: "Mariana",
        firstTest: 1.5,
        secondTest: 3.6
    },

    {
        name: "Cecília",
        firstTest: 10,
        secondTest: 9.4
    },

    {
        name: "Miguel",
        firstTest: 7.2,
        secondTest: 8.1
    },

]

let average;

function averageCalc(student){
    average = (student.firstTest + student.secondTest) / 2
    return average
}

function printResult (student){
    if (average >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}.
        Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}.
        Que pena, ${student.name}! Não foi dessa vez. Tente novamente`)
    }
}

for(i = 0; i < studentList.length; i++){
    averageCalc(studentList[i])
    printResult(studentList[i])
}