let numero = process.argv[2];
if(numero<0){
    console.log("es negativo");
}
else if(numero==0){
    console.log("es cero");
}
else if(numero>0){
    console.log("es positivo");
}
else{
    console.log("No es un numero");
}