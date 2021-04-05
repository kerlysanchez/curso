//SEMANA 4 SESIÓN 14 MODULO2 
//console.log( Math.round(Math.random ()*10) );

/*exports.numAleatorio = () => { 
    return resultado = Math.round( Math.random()*10 );
}*/

//Metodo de cadenas de texto 
var cadenaTexto = "Hola Karina, buenas noches Karina";

//Método length
console.log(cadenaTexto.length);
//Método indexOf
console.log(cadenaTexto.indexOf("Karina") );
//Método replace
console.log (cadenaTexto.replace( "Karina", "Kerly") );
//Método slice
var nombre = cadenaTexto.slice( 5, 11 );
console.log( nombre );

//Cadenas de texto de ejemplo
var cadenaT = "ColOr dEl VeSTiDo"
var color = "Morado"

//Método toUpperCase

var textoFinal = cadenaT.toUpperCase();
console.log( textoFinal );

//Metodo toLowerCase

//var textoFinal =  cadenaT.toLowerCase();
//console.log( textoFinal );

//Método concat
console.log(textoFinal.concat( color ) );