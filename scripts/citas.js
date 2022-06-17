const spanNombreDia = document.getElementById("spanNombreDia");
const spanDia = document.getElementById("spanDia");
const spanMes = document.getElementById("spanMes");
const spanAño = document.getElementById("spanAño");
const spanFecha = document.getElementsByClassName("spanFecha");
const horasDisponibles = document.getElementById("horasDisponibles");
const submit = document.getElementById("submit");
const imgCheck = document.getElementById("imgCheck");
const myAlert = document.getElementById("myAlert");

function getDate(fecha) {
    const numeroDia = new Date(fecha).getDay();
    const numeroMes = new Date(fecha).getMonth();
    horasDisponibles.innerHTML = "";

    fechaDividida = fecha.split("-");
    año = fechaDividida[0];
    mesNum = fechaDividida[1];
    dia = fechaDividida[2];
    arrayDiasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    mesNombre = arrayMeses[numeroMes];
    diaSemana = arrayDiasSemana[numeroDia]

    spanNombreDia.innerHTML = diaSemana;
    spanDia.innerHTML = dia;
    spanMes.innerHTML = mesNombre;
    spanAño.innerHTML = año;
    spanFecha[0].style.display = "block";
    spanFecha[1].style.display = "block";
    spanFecha[2].style.display = "block";
    spanFecha[3].style.display = "block";
    horasDisponibles.style.display = "block";

    for (var i = 7; i <= 17; i++) {
        let hora = [];
        hora.push(i);
        let newOption = document.createElement("option");
        let newHora = document.createTextNode(i + ": 00");
        newOption.appendChild(newHora);
        horasDisponibles.appendChild(newOption);
    }
}

function showButton(){
    submit.style.display = "flex";
}

function showAlert(){
    myAlert.style.transform = "translate(-50%, 50%) scale(1)";
    imgCheck.style.transform = "rotate(0deg)"
}

function hideAlert(){
    myAlert.style.transform = "translate(-50%, 50%) scale(0)";
}