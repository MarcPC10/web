var segundos = 0;
//Definicion de la funcion
function temporizador(){
    segundos = segundos + 1; // segundos =+ 1; segundos++;
    document.getElementById("contador").innerHTML = segundos;
}

function iniciar() {
    //SetInterval llama a la funcion temporizador cada 1000 ms.
setInterval(temporizador, 1000);
}

function parar() {
    clearInterval(); //para el temporizador
}
