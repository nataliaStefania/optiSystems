const formulario = document.getElementById('forms');
const inputs = document.querySelectorAll('#forms input')

const expresiones = {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{9,15}$/, // 9 a 15 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    email: false,
    password: false
}

const validarforms = (e) => {
    switch (e.target.name) {
        case "correo":
            campoValidar(expresiones.correo, e.target, 'email');
            break;
        case "password":
            campoValidar(expresiones.password, e.target, 'password');
            break;
    }
}

const campoValidar = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}-group`).classList.remove('formulario_grupo-incorrect');
        document.getElementById(`${campo}-group`).classList.add('formulario_grupo-correct');
        // document.querySelector(`#${campo}-group i`).classList.add('fa-circle-check');
        // document.querySelector(`#${campo}-group i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo}-group .message-error`).classList.remove('message-error-on');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}-group`).classList.add('formulario_grupo-incorrect');
        document.getElementById(`${campo}-group`).classList.remove('formulario_grupo-correct');
        // document.querySelector(`#${campo}-group i`).classList.add('fa-circle-xmark');
        // document.querySelector(`#${campo}-group i`).classList.remove('fa-circle-check');
        document.querySelector(`#${campo}-group .message-error`).classList.add('message-error-on');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarforms);
    input.addEventListener('blur', validarforms);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const terminos = document.getElementById('input-condiciones');


    if (campos.email && campos.password && terminos.checked) {
        if (email == "adminti@gmail.com" && password == "Adminti12,") {
            window.alert("El ingreso ha sido exitoso");
            window.location = "./admin/html/indexAdmin.html";
            return true;
        }
        if (email == "gerentecompras@gmail.com" && password == "Gerentei12,") {
            window.alert("El ingreso ha sido exitoso");
            window.location = "./admin/html/proveedores.html";
            return true;
        }
        if (email == "jefeInventario@gmail.com" && password == "Inventario12,") {
            window.alert("El ingreso ha sido exitoso");
            window.location = "./admin/html/inventario.html";
            return true;
        }
        if (email == "jefePersonal@gmail.com" && password == "Recursosh12,") {
            window.alert("El ingreso ha sido exitoso");
            window.location = "./admin/html/rrhh.html";
            return true;
        }

        // document.querySelectorAll('.formulario_grupo-correct').forEach((icono) => {
        //     icono.classList.remove('formulario_grupo-correct');
        // });
    } else {
        document.getElementById('error-formulario').classList.add('error-formulario-activo');
    }
});

