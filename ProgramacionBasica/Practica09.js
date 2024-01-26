let edad = process.argv[2];
if(edad<=2){
    console.log("Bebe");
}
else if(edad>=3 && edad<=10){
    console.log("Niño");
}
else if(edad<=17){
    console.log("Adolescente");
}
else if(edad<=40){
    console.log("Adulto Joven");
}
else if(edad<=60){
    console.log("Adulto en Crisis");
}
else{
    console.log("Adulto Mayor");
}