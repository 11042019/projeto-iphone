const botao = document.getElementById('botao')
var horas = document.getElementById('horas')

function clicar(evento){
    data = new Date()
    console.log(data)
    horas.innerHTML = data
}
botao.addEventListener('click', clicar)