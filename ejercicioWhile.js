let galletasEnLaCaja = 10;
function quedanGalletas(){
    return galletasEnLaCaja>0;
}

function comerGalletas(){

    while(quedanGalletas()){
        galletasEnLaCaja--;
        console.log("Hay Galletas, ahora quedan ",galletasEnLaCaja, " galletas en la caja");
    }
    if(!quedanGalletas())
    {
        console.log("Se han acabado las galletas!")
    }
}
comerGalletas();