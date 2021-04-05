//SEMANA2 Sesiòn 6 Modulo2

//Pedir datos desde pantalla 
//npm install prompt-sync
//const prompt = require('prompt-sync')();
//var nombre = prompt("Ingresa tu nombre");
//console.log("Hola " +  nombre )




//Ejercicio 1
//Cada vez que una persona ingrese una hora del día
//se mostrará un mensaje que diga el deporte que se
//está realizando en la cancha.

/*const prompt = require('prompt-sync')();
var horaDia = prompt ( "Dame la hora: " );
//console.log ( horaDia );


//Para representar el rango de horas, utilizamos un
//condicional if, así comparamos si la hora ingresada
//se encuentra en el rango horario de un deporte

if ( horaDia <= 3 ) {
    console.log ( "Esta en el equipo de Futbol entrenando" );
}

//Dependiendo del rango horario se mostrará un mensaje
//con el deporte que se está haciendo en la cancha.
else if ( (horaDia > 3) && (horaDia <= 6) ){
    console.log ( "Esta el equipo de Futbol Americano E" );
}
else if ( (horaDia > 6) &&  (horaDia <= 9)  ){
    console.log ( "Esta el equipo de Atletismo" );
}


//También se realiza una versión del código con switch
//pero en esta versión, solo se obtienen 2 resultados
//true - verdadero o false - falso
//por lo tanto para este problema, el uso de switch 
//es sumamente inficiente.

switch( horaDia <=3 ){
    case true :
        console.log ( "Esta el equipo de Fultbol Entrenando" );
        break;
    case false:
        console.log ( "Esta otro equipo entrenado" );
}



//Ejercicio 2
//Cada vez que una persona ingrese un deporte, te dirá
//el horario que le corresponde para la cancha

var deporte = prompt( "Porfavor dime el nombre del deporte: " );

//La variable que controla el switch es "deporte", "deporte"
//tendrá distintos valores, pero ya se tienen contemplados 
//en los distintos caso del switch.

switch( deporte ){
    case "Futbol":
        console.log("Horario: 1 a 3 PM ");
        break;
    case "Americano":
        console.log("Horario: 3 a 6 PM" );
        break;
    case "Atletismo":
        console.log("Horario: 6 a 9 PM");
}
*/

//Tema --------> Arreglos

//Declaramos un arreglo con 5 elementos, todos ellos son números
var arregloNumerico = [ 1, 2, 3, 4, 5 ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNumerico );

//Declaramos un arreglo con 4 elementos, todos ellos son texto
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNombres );

//Declaramos un arreglo con 8 elementos de distintos tipos de datos
var arregloMixto = [20, 16, , "Luis", , "Paola", true, false];
//Imprimimos todo el arreglo en pantalla
console.log( arregloMixto );
//Accedemos a una posición del arreglo en específico
console.log( arregloNombres[0] );
