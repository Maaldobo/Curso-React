let estaImprimiendo=false;
let contador=0;

function mandarImprimir(){
    estaImprimiendo=true;
    console.log("Imprimiendo foto...");
}

function laFotoEstaLista(){
    return Math.random()<0.5
}
function recolectarFoto(){
 do{
       console.log("imprimiendo...");
    }while(laFotoEstaLista());
    if(laFotoEstaLista()){
        console.log("La foto esta lista")
    }
}
mandarImprimir();
recolectarFoto();