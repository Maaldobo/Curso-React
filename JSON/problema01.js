const array = [
    {
      nombre: "Juan",
      edad: 30,
      activo: true,
      intereses: ["programacion", "viajes", "lectura"],
      direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Ciudad Principal"
      }
    },
    {
      nombre: "MarÃ­a",
      edad: 25,
      activo: false,
      intereses: ["musica", "deportes", "arte"],
      direccion: {
        calle: "Avenida Central",
        numero: 456,
        ciudad: "Ciudad Secundaria"
      }
    },
    {
      nombre: "Pedro",
      edad: 35,
      activo: true,
      intereses: ["fotografia", "naturaleza", "cocina"],
      direccion: {
        calle: "Calle de los Ãrboles",
        numero: 789,
        ciudad: "Ciudad Terciaria"
      }
    },
    {
      nombre: "Ana",
      edad: 28,
      activo: true,
      intereses: ["teatro", "moda", "viajes"],
      direccion: {
        calle: "Avenida de las Flores",
        numero: 1011,
        ciudad: "Ciudad Cuarta"
      }
    },
    {
      nombre: "Luis",
      edad: 40,
      activo: false,
      intereses: ["ciencia", "historia", "tecnologia"],
      direccion: {
        calle: "Avenida del Saber",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
    {
      nombre: "Teresa",
      edad: 15,
      activo: false,
      intereses: ["historia", "natacion", "tecnologia"],
      direccion: {
        calle: "Avenida del Conocimiento",
        numero: 1213,
        ciudad: "Ciudad Quinta"
      }
    },
  ];



  let newArray = array.filter(element => element.activo === true)
  let suma=0
  array.forEach((element)=>{
    if(element.activo){
        suma+=element.edad
    }

  })
  suma=suma/newArray.length
  console.log(suma)

//   Imprimir los nombres de las personas que tengan interés tecnología y el falso

let newArray2 = array.filter(element => {
    !element.activo &&  element.intereses.includes("tecnología") ;
  });


    newArray2.forEach(element => {
    console.log(element.nombre);
  });



//   // Filtrar las personas que tienen interés en tecnología y su estado es falso
// const personasInteresTecnologia = array.filter(persona => {
//     return persona.intereses.includes("tecnología") && !persona.activo;
//   });

//   // Imprimir los nombres de las personas filtradas
//   console.log("Personas con interés en tecnología y estado falso:");
//   personasInteresTecnologia.forEach(persona => {
//     console.log(persona.nombre);
//   });


// Ordenar a los usuarios del mas joven al mas adulto

console.log("Ordenar a los usuarios del mas joven al mas adulto")
array.sort((a,b)=>b.edad-a.edad);
array.forEach((element)=>{
    console.log(element.nombre)
})


// cambiar status,

let newArray3=[...array]

newArray3.forEach((element)=>{
    element.activo= !element.activo
})

newArray3.forEach((element)=>{
 element.activo ? element.intereses.push("js") : element.intereses.unshift("css/html")
})

console.log(newArray3)



//separar en 2 arreglos calle y en otro avenida

let newArray4=array.filter(element => element.direccion.calle.toLowerCase().includes('avenida'))
let newArray5=array.filter(element => element.direccion.calle.toLowerCase().includes('calle'))

console.log("Con Avenida")
console.log(newArray4)
console.log("Con Calle")
console.log(newArray5)