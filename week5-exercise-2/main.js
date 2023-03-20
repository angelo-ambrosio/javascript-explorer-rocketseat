//criando evento de troca de páginas
const cookie = document.querySelector("#cookie")
const button = document.querySelector("#btnBack")

function changePage(){
    document.querySelector('.screen1').classList.toggle("hide")
    document.querySelector('.screen2').classList.toggle("hide")
}

cookie.addEventListener('click', changePage)
button.addEventListener('click', changePage)