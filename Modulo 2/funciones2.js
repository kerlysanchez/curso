//SEMANA3 , SESIÓN 11 MODULO 2
//Ejercicio 1 
//Escribir un programa que obtenga el
//precio de un producto, y calcule el 
//precio total, ya que también se va a 
//cobrar el costo de envio unicamente
//si el precio del producto es menor o 
//igual a $100.

//const prompt = require('prompt-sync')();
//ambito globales
var nomProducto = " perfume ";
var precioProducto = 15;

function precioT ( precio, nomProducto ){
    //ambito local
    var resultado = 0;
    if ( precio <= 100 ){
        console.log ( "Factura" );
        console.log ( "Costo del"+ nomProducto + " es: " + precio );
        console.log ( " Costo envio: 50 " );
        resultado = precio + 50;
        console.log  ( " El total a pagar es:  " + resultado );
    }
    else if ( precio >= 100 ){
        console.log ( "Factura" );
        console.log ( " Costo del" + nomProducto + " es: " + precio );
        console.log ( " Costo de envio: 0" );
        resultado = precio;
        console.log ( " El total as pagar es: "  + precio );
    }
}
//esto comentarios son llamada para que se ejecute el programa.
//precioT ( precioProducto, nomProducto );
//precioT ( 300, " Nevera " );

//ambito de una función.
function ambitoVar(){
    const i = 1;
    if ( i == 1 ){
        var variableVar = " Ambito variable ";
    }
    console.log ( variableVar );
}
//ambitoVar();

//tipos de declaraciones ---> let 
//let nombre = " Kerly ";
//nombre = " Karina ";
//console.log ( nombre );

function ambitoLet(){
    const i = 1;
    if( i == 1 ){
        let variableLet = "ambito de variable - let";
         console.log ( variableLet );
    }
}
//ambitoLet();
//console.log ( variableLet );

var mensaje ="texto";

function mensajeFuncion(){
    var mensaje = "texto 2";
    console.log ( mensaje );
}
//console.log ( mensaje);
//mensajeFuncion();
//console.log ( mensaje );


//SEMANA 3 SESIÓN 12MODULO2 

//Introdución a paradigna de programación orientada a objetos

//Declaración explicita

//multiplicar ( 12 );
function multiplicar ( primerOperando ){
    var resulta = 3 * primerOperando;
    console.log( " El resultado es: " + resultado );
}
//Declaración como expresión 
var resultado = function multiplicar( segundoOperando ){
    return 3 * segundoOperando;
}
console.log (resultado ( 12 ));