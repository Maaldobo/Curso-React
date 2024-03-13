const ID_CONTENEDOR_TABLA = document.getElementById('table');
const ID_CONTENEDOR_STATUS = document.getElementById('status');
const gustos = ["leer", "manga", "documentales"];
const noGustos = ["dibujar", "redes sociales", "ruido"];


function insert(gustos) {
    gustos.forEach((element) => {
        const li = document.createElement("li")
        li.innerHTML = element
        ID_CONTENEDOR_TABLA.appendChild(li)
    });
}

obtenerDatos()
    .then((datos) => {
        insert(datos)
        ID_CONTENEDOR_STATUS.innerText = "Éxito"
    })
    .catch((error) => {
        console.error(error)
        insert(error)
        ID_CONTENEDOR_STATUS.innerText = "Error"
    })
    .finally(()=>{
        ID_CONTENEDOR_STATUS.innerText += " Finalizado"
    })
