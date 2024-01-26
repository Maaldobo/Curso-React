let arreglo=[ 1,7,3,6,5,6];
let sumIzq=0;
let sumDer=0;
let TAM=arreglo.length;
for(let i=0;i<TAM;i++){

    if(sumDer==0){
        for( j = i+1; j<arreglo.length;j++);
        {
            sumDer=sumDer+arreglo[j+1];
        }
        
    }
    {
        if(sumDer==sumIzq){
            console.log(i);
            return 0;
            }
        
        sumDer=sumDer-arreglo[i];
        sumIzq= sumIzq+arreglo[i];
    }
    
}
console.log(-1);