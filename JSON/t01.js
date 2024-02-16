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




  let interesesU = []
array.forEach(element => {
    if(element.activo){
        element.intereses.forEach(interes=>{

            if(!interesesU.includes(interes)){
        interesesU.push(interes)
       }
        })
       
    }
    });

console.log(interesesU)