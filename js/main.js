/////////////////////////////////////////////////// LEVEL 1 - Form validation

const formulario = document.querySelector('#carta-a-santa');
let localStorageIndex = localStorage.length;


// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validarForm();
//     if(validarNombre(nombre) && validarCiudad(ciudad) && validarComportamiento(comportamiento) && validarDescripcionRegalo(descripcionRegalo)){
//         formulario.submit();
//     }
// });


function validarNombre(nombre) {
    const regexSoloLetras = /^[a-zA-Z]+$/i;

    if (nombre.length === 0) {
        return 'El campo nombre debe tener al menos 1 caracter'
    }
    if (nombre.length > 50) {
        return 'El campo nombre debe tener menos de 50 caracteres'
    }
    if (!regexSoloLetras.test(nombre)) {
        return 'El campo nombre solo acepta letras'
    }
    return ""
};

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return 'El campo ciudad no puede estar vacío'
    }
    return ""
};

function validarDescripcionRegalo(descripcionRegalo) {
    const regexLetrasYNumeros = /^[A-z0-9,\.]+$/i;
    if (descripcionRegalo.length === 0) {
        return 'La descripcion no debe estar vacía'
    }
    if (descripcionRegalo.length > 100) {
        return 'La descripción no puede excederse de los 100 caracteres'
    }
    if (!regexLetrasYNumeros.test(descripcionRegalo)) {
        return 'La descripción contiene caracteres extraños'
    }
    return ""
};


function limpiarErroresPrevios(){
    let msjErrorAnteriores = formulario.querySelectorAll('#errores li');
    msjErrorAnteriores.forEach( msj => {
        msj.remove();
    })
};


function validarForm(event) {
    event.preventDefault();

    const nombre = formulario.nombre.value;
    const ciudad = formulario.ciudad.value;
    // const comportamiento = formulario.comportamiento.value;
    const descripcionRegalo = formulario['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    limpiarErroresPrevios();

    const esExitoso = manejarErrores(errores) === 0;

    if (esExitoso) {
        guardarEnLocalStorage();
        formulario.className = 'oculto';

        const msjExito = document.querySelector('#exito');
        msjExito.className = "";

        setTimeout(() => {
            // const urlActual = window.location.href;
            window.location.assign('wishlist.html');
        }, 3000);
    }

};

function manejarErrores(errores) {
    let arrErroresKeys = Object.keys(errores);
    let cajaParaErrores = document.querySelector('#errores');
    let cantidadErrores = 0;

    arrErroresKeys.forEach(key => {
        let error = errores[key];

        if (error) {
            cantidadErrores++;
            formulario[key].className = "error";

            let nuevaCajaError = document.createElement('li');
            nuevaCajaError.innerText = error;
            cajaParaErrores.appendChild(nuevaCajaError);

        } else {
            formulario[key].className = "";
        }
    });
    return cantidadErrores;
}

/////////////////////////////////////////////////// LEVEL 2 - localStorage usage

function guardarEnLocalStorage(){
    let nombre = formulario.nombre.value;
    let descripcion = formulario['descripcion-regalo'].value;
    let key = 'user'+localStorageIndex;

    localStorage.setItem(key, JSON.stringify(
        {
            username: nombre,
            giftDescription: descripcion
        }
    ));

    localStorageIndex++;
}

function mostrarRegalosDeseados(){
    let ul = document.querySelector('.wish-list');

    for(let i = 0; i < localStorageIndex; i++){
        let li = document.createElement('li');

        const data = JSON.parse(localStorage.getItem('user'+[i]));
        li.appendChild( document.createTextNode( data.giftDescription ) );

        ul.appendChild(li);
    }
}

/////////////////////////////////////////////////// LEVEL 3 - Info and img randomization

function generadorDeNumerosAleatorios( limit ){
    return Math.floor(Math.random() * limit) + 1;
};

const Comportamientos = {
    1: 'muy bueno',
    2: 'bueno',
    3: 'travieso'
};

function obtenerComportamientoAleatorio(){
    const numSorteado = generadorDeNumerosAleatorios( 3 );
    const comportamientoSorteado = Comportamientos[numSorteado];

    document.querySelector('.attitude').innerText = comportamientoSorteado;
};

function obtenerRegaloAleatorio(){
    const numRandom = generadorDeNumerosAleatorios( localStorageIndex -1 );
    const data = JSON.parse(localStorage.getItem( 'user'+[numRandom] ));
    const descripcionRandom = data.giftDescription;

    document.querySelector('.santa-gift-text').innerText = descripcionRandom;
};

const imagenesUrlList = {
    1: 'img/gifts/goldGift.jpg',
    2: 'img/gifts/groupGift.jpeg',
    3: 'img/gifts/redGift.jpg'
};

function obtenerImagenDeRegalo(){
    const numSorteado = generadorDeNumerosAleatorios( 3 );
    const regaloSorteado = imagenesUrlList[numSorteado];

    document.querySelector('.santa-gift').src = regaloSorteado;
}


function llenarContenido(){

    obtenerComportamientoAleatorio(); 

    obtenerRegaloAleatorio(); 

    obtenerImagenDeRegalo();
}


formulario.onsubmit = validarForm;