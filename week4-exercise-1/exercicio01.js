/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações! */ 

alert("Seja bem-vindo ao 'Calcula Rápido'.\n Siga os passos atentamente para obter o resultado desejado.")

const number1 = Number(prompt("Informe o primeiro número:"))
const number2 = Number(prompt("Informe o segundo número:"))

alert(`A soma dos dois números é: ${number1 + number2}`)
alert(`A subtração dos dois números é: ${number1 - number2}`)
alert(`A multiplicação dos dois números é: ${number1 * number2}`)
alert(`A divisão dos dois números é: ${number1 / number2}`)
alert (`O resto da divisão dos dois números é: ${number1 % number2}`)

if((number1 + number2) % 2 == 0){
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é ímpar")
}

if(number1 == number2){
    alert("Os dois números são iguais.")
} else {
    alert("Os dois números são diferentes")
}
