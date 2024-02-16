const alumnos = [
    { nombre: "carlos", edad: "15" },
    { nombre: "carlos", edad: "18" },
    { nombre: "juan", edad: "19" }
    ];
let alumnosFiltrados={}



const conteoAlum={}
alumnos.forEach((element)=>{
    const nombre=element.nombre
    if(conteoAlum[nombre]){
        conteoAlum[nombre]++
    }
    else{
        conteoAlum[nombre]=1
    }


})
console.log(conteoAlum)