$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        window.datosCV = {
            name: data.results[0].name.first,
            mail: data.results[0].email,
            nacimiento: data.results[0].dob.date,
            ubicacion: data.results[0].location.street.name,
            fotocv: data.results[0].picture.large,
            telefono: data.results[0].phone
        }
        document.getElementById('foto-cv').src = data.results[0].picture.large;

    }
})

window.modoDark = {
    activado: true
}

var nombre = document.querySelector('#nombre');
nombre.addEventListener('click', function () {
    document.getElementById('titulo').innerHTML = 'Hola! Mi nombre es:';
    document.getElementById('dato').innerHTML = window.datosCV.name;


})

var mailUser = document.querySelector('#mailUser');
mailUser.addEventListener('click', function () {
    document.getElementById('titulo').innerHTML = 'mail:';
    document.getElementById('dato').innerHTML = window.datosCV.mail;
})

var fechaNacimiento = document.querySelector('#fechaNacimiento');
fechaNacimiento.addEventListener('click', function () {
    document.getElementById('titulo').innerHTML = 'Fecha de cumpleaños:';
    document.getElementById('dato').innerHTML = window.datosCV.nacimiento.substring(0, 10);

})

var direccionUser = document.querySelector('#direccionUser');
direccionUser.addEventListener('click', function () {
    document.getElementById('titulo').innerHTML = 'Direccion:';
    document.getElementById('dato').innerHTML = window.datosCV.ubicacion;

})

var telefonoUser = document.querySelector('#telefonoUser');
telefonoUser.addEventListener('click', function () {
    document.getElementById('titulo').innerHTML = 'Telefono de contacto:';
    document.getElementById('dato').innerHTML = window.datosCV.telefono;

})

function setDarkMode() {
    var body = document.getElementById('body');
    if (window.modoDark.activado == false) {
        body.style.background = '#323334';
        body.style.color = 'white';
        window.modoDark.activado = true;

    }
    else {
        body.style.background = 'white';
        window.modoDark.activado = false;
        body.style.color = 'black';
    }
}

