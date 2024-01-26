const ID_CONTENEDOR_RESPUESTA = 'scResultados'


function guardarDatos(){

    limpiarRespuesta()

    let vNombre = validaNombre()
    let vCorreo = validaCorreo()
    let vGenero = validaGenero()

    if(vNombre && vCorreo && vGenero){
        reportaExito("Guardado!")
    }
}

function validaNombre(){
    let nombre = obtenerValor('txtNombre')
    if(nombre==""){
        reportaError("Escribe un Nombre")
        return false
    }
    return true
}

function validaCorreo(){
    let correo = obtenerValor('txtEmail')
    if(correo.value==""){
        reportaError("Escribe un Correo")
        return false
    }    
    if(!correo.value.includes("@")|| !correo.value.includes(".com")){
        reportaError("Escribe un Correo Valido ejemplo blabla@misitio.com")
        return false
    }

    return true
}

function validaGenero(){
    let genero = document.querySelector('input[name="rdoGenero"]:checked')
    if(genero== null){
        reportaError("Selecciona genero")
        return false
    }


    return true
}

function limpiarRespuesta(){
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.innerText = ""
}

function reportaError(mensaje) {
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.classList.add('error')
    contenedorRespuesta.innerText += mensaje +"\n"
     
}

function reportaExito(mensaje){
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.classList.add('exito')
    contenedorRespuesta.innerText = mensaje
     
}

function obtenerValor(input){
    let element = document.getElementById(input)
    if(element)
        return element.value

    return "" 
}

function actualizaSatisfaccion(){
    let elementoScSatisfaccion = document.getElementById('scSatisfaccion')
    let elementoNmSatisfaccion = document.getElementById('nmSatisfaccion')
    elementoScSatisfaccion.innerText = elementoNmSatisfaccion.value
}


