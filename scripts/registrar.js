const formulario = document.getElementById('forms');
const inputs = document.querySelectorAll('#forms input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{9,15}$/, // 9 a 15 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/ //10 numeros.
}

const campos = {
    name: false,
    firstname: false,
    email: false,
    numberphone: false,
    password: false
}

const validarforms = (e) => {
    switch (e.target.name){
        case "name":
            campoValidar(expresiones.nombre, e.target, 'name');
        break;
        case "apellidos":
            campoValidar(expresiones.apellido, e.target, 'firstname');
        break;
        case "correo":
            campoValidar(expresiones.correo, e.target, 'email');
        break;
        case "celular":
            campoValidar(expresiones.telefono, e.target, 'numberphone');
        break;
        case "password":
            campoValidar(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
    }
}

const campoValidar = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}-group`).classList.remove('formulario_grupo-incorrect');
        document.getElementById(`${campo}-group`).classList.add('formulario_grupo-correct');
        document.querySelector(`#${campo}-group i`).classList.add('fa-circle-check');
        document.querySelector(`#${campo}-group i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#${campo}-group .message-error`).classList.remove('message-error-on');
        campos[campo] = true;
    } else {
        document.getElementById(`${campo}-group`).classList.add('formulario_grupo-incorrect');
        document.getElementById(`${campo}-group`).classList.remove('formulario_grupo-correct');
        document.querySelector(`#${campo}-group i`).classList.add('fa-circle-xmark');
        document.querySelector(`#${campo}-group i`).classList.remove('fa-circle-check');
        document.querySelector(`#${campo}-group .message-error`).classList.add('message-error-on');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`password2-group`).classList.add('formulario_grupo-incorrect');
        document.getElementById(`password2-group`).classList.remove('formulario_grupo-correct');
        document.querySelector(`#password2-group i`).classList.add('fa-circle-xmark');
        document.querySelector(`#password2-group i`).classList.remove('fa-circle-check');
        document.querySelector(`#password2-group .message-error`).classList.add('message-error-on');
        campos['password'] = false;        
    } else {
        document.getElementById(`password2-group`).classList.remove('formulario_grupo-incorrect');
        document.getElementById(`password2-group`).classList.add('formulario_grupo-correct');
        document.querySelector(`#password2-group i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#password2-group i`).classList.add('fa-circle-check');
        document.querySelector(`#password2-group .message-error`).classList.remove('message-error-on');
        campos['password'] = true; 
    }
}

inputs.forEach((input)=> {
    input.addEventListener('keyup', validarforms);
    input.addEventListener('blur', validarforms);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('input-condiciones');

    if(campos.name && campos.firstname && campos.numberphone && campos.email && campos.password && terminos.checked){
        formulario.reset();

        document.getElementById(`message-exito`).classList.add('message-exito-activo');

        setTimeout(() => {
            document.getElementById(`message-exito`).classList.remove('message-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario_grupo-correct').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correct');
        });
    } else {
        document.getElementById('error-formulario').classList.add('error-formulario-activo');
    }
});