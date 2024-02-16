const productos = [
    { nombre: 'Camiseta', precio: 20 },
    { nombre: 'Pantalón', precio: 40 },
    { nombre: 'Zapatos', precio: 50 },
    { nombre: 'Sombrero', precio: 15 }
    ];

    const suma = productos.reduce((acumulador, actual) =>{
        return acumulador + actual.precio
    },0)
    console.log(suma)

    const max = productos.reduce((acumulador, actual) =>{
     if(acumulador.precio > actual.precio){
        return acumulador
     }
     else{
        return actual
     }
        
    },0)
    console.log(max)

    const max2 = productos.reduce((acumulador, actual) =>
        acumulador.precio > actual.precio ? acumulador:actual,0)
    console.log(max2)