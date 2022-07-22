let tiempo = document.querySelector("#tiempo");
let btnIniciar = document.querySelector("#btnIniciar");
let btnDetener = document.querySelector("#btnDetener");
let intervalo =0, minutos = 0, segundos = 0;

function establecerTiempo(temp) {
  btnIniciar.className = "btn btn-success";
  switch (temp) {
    case 15:
    case 30:
      segundos = temp;
      tiempo.innerHTML = `00: ${segundos}`;
      break;
    case 1:
    case 2:
      minutos = temp;
      tiempo.innerHTML = `0${minutos}: 00`;
      break;
    default:
      console.log("tiempo no establecido");
  }
}

function iniciar() {
  btnIniciar.className = "btn btn-success disabled";
  btnDetener.className = "btn btn-danger";
  if (minutos > 0) {
    minutos--;
    segundos = 60;
    intervalo = setInterval(() => {
      segundos--;
      tiempo.innerHTML = segundos < 10
          ? `0${minutos}: 0${segundos}`
          : `0${minutos}: ${segundos}`;
      if (minutos === 0 && segundos === 0) {clearInterval(intervalo);  btnDetener.className = "btn btn-danger disabled";}
      if (segundos === 0 && minutos > 0){ minutos--, segundos=60};
    }, 1000);
    return;
  }
  if (segundos > 0 && minutos === 0) {
    intervalo = setInterval(() => {
      segundos--;
      tiempo.innerHTML = segundos < 10 ? `00: 0${segundos}` : `00: ${segundos}`;
      if (segundos === 0) {
        clearInterval(intervalo);
        btnDetener.className = "btn btn-danger disabled";
      }
    }, 1000);
  }
}

function detener(){
    tiempo.innerHTML =`00: 00`;
    minutos=0, segundos= 0;
    clearInterval(intervalo);
    btnIniciar.className = "btn btn-success disabled";
   btnDetener.className = "btn btn-danger disabled" ;
}