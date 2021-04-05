//SEMANA3 ASESOSRIA #3 MODULO 2 
const prompt = require('prompt-sync')();

var mensaje = prompt ( "Ingresa un mensaje" );
//parseInt ( mensaje );
console.log ( parseInt( mensaje) );
//console.log ( mensaje );

//ParseInt --- Convertir de texto a entero 
//Int --> Entero 

//Si queremos hacer lo contrario, convertir un entero a texto
//no utilizaremos una función, si no que será un método llamado "toString"
var numero = 25;
console.log( numero.toString() );