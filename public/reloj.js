const $Fecha = document.getElementById("fecha");
const $Hora = document.getElementById("hora");

function digitalClock(){
    let f = new Date();
    dia = f.getDate();
    mes = f.getMonth();
    año = f.getFullYear();
    diaSem = f.getDay();

    let timeString = f.toLocaleTimeString();
    let semana = ["DOMINGO","LUNES","MARTES","MIERCOLES","VIERNES","SABADO"]
    $Hora.innerHTML = timeString;
    $Fecha.innerHTML = `${dia}-${mes + 1}-${año}-${semana[diaSem]}`;
}
digitalClock();
setInterval(() => {
    digitalClock()
}, 1000);