let monthNames = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const $tiempo = document.querySelector('.tiempo');

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());

writeMonth(monthNumber);

function writeMonth(month) {
    for(let i = startDay(); i>0; i--){
        dates.innerHTML +=` <div class="calendar__dates calendar__item calendar__resto">
        ${getTotalDays(monthNumber-1)-(i-1)}</div>`;
    }
    for (let i=1; i<=getTotalDays(month); i++) {

        if(i===currentDay){
        dates.innerHTML += ` <div class="calendar__dates calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML +=` <div class="calendar__dates calendar__item">${i}</div>`;
        }
    }
}

function getTotalDays(month) {

    if (month === -1) month = 11;
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;
    } else {
        return isLeap() ? 29:28;
    }
}

function isLeap() {
    if ((currentYear % 4 ==0) && ((currentYear % 100 != 0) || (currentYear % 400 == 0))){
        return true;
    }
    else{
        return false;
    }
}

function startDay() {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

function lastMonth() {
    if (monthNumber !== 0) {
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
}

function nextMonth() {
    if (monthNumber !== 11) {
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

function digitalClock(){
    let f= new Date();
    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;
}

setInterval (() => {
    digitalClock()
}, 1000);

function boton(){
        alert("Guardado con exito")
        var uno = document.getElementById('boton');
        if (uno.innerHTML == 'REGISTRAR FIN DE JORNADA') 
            uno.innerHTML = 'REGISTRAR INICIO DE JORNADA';
        else uno.innerHTML = 'REGISTRAR FIN DE JORNADA'; 
        return;
}

function validaten(){
    var solicitud = document.getElementById("solicitud").value;
    var estado = document.getElementById("estado").value;
    

    if (solicitud == "0")
        alert("Porfavor seleccione el tipo de novedad");
    
    if(estado =="0")
        alert("Porfavor seleccione el estado de la novedad");

}


function validatee(){

    var cargo = document.getElementById("cargo").value;
    var jornada = document.getElementById("jornada").value;
    var contrato = document.getElementById("contrato").value;

    valor = document.getElementById("nombres").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert("Porfavor ingrese un nombre valido");
    }

    valor = document.getElementById("apellidos").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert("Porfavor ingrese un apellido valido");
    }

    if(cargo == "0")
        alert("Porfavor seleccione una cargo");
    
    if(jornada == "0")
        alert("Porfavor seleccione una jornada");

    if(contrato == "0")
        alert("Porfavor seleccione un tipo de contrato");
    
    valor = document.getElementById("celu").value;
    if( !(/^\d{10}$/.test(valor)) ) {
        alert("Ingrese un numero de celular valido");
    }
    
}