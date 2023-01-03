document.getElementById("contador").innerHTML = localStorage.getItem("quantidade") || 0
let counter = localStorage.getItem("quantidade")
console.log(localStorage.getItem("quantidade"))
const botao = document.getElementById("botao")
const limpar = document.getElementById("limpa")

botao.addEventListener("click", () => {
    counter = localStorage.getItem("quantidade")
    counter++

    document.querySelector("#contador").innerHTML = counter
 
    localStorage.setItem("quantidade", counter)
})

limpar.addEventListener("click", () =>{
    counter = localStorage.getItem("quantidade")
    counter--

    document.querySelector("#contador").innerHTML = counter

    localStorage.setItem("quantidade", counter)
})



