let arreglo = [50, 39, 78, 100, 55, 36, 17];

for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length - 1 - i; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
            let aux = arreglo[j];
            arreglo[j] = arreglo[j + 1];
            arreglo[j + 1] = aux;
        }
    }
}

console.log(arreglo);
