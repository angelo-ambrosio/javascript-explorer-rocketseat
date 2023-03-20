//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//callback function
function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert("Número inválido. Digite um número de 1 a 10")
        inputNumber.value = ""
        xAttempts--
    }

   if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick(){
    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")

    const inputNumber = document.querySelector("#inputNumber")
    inputNumber.value = ""
    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1
}

//Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

