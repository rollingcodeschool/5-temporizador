let minutos = document.querySelector('#minutos').value
let segundos = document.querySelector('#segundos').value

let formTemp = document.querySelector('#formTemp')
let tiempo = document.querySelector('#tiempo')
formTemp.addEventListener('submit', iniciar)

function iniciar(e){
    e.preventDefault();
    tiempo.innerHTML=`${minutos}: ${segundos}`
}