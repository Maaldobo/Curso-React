let numero = parseInt(process.argv[2]);
let residuo=numero%2;

if(residuo==0){
    console.log("Es par");
}
else{
    console.log("no es par");
}