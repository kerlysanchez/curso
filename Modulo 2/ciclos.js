//SEMANA3, sesiòn 9 Modulo2 

//Tema ----> Ciclos - while

var contadorN1 = 15;
var contadorN2 = 5;

while ( contadorN1 < 20 && contadorN2 > 0 ) {
    console.log( " contadorN1: " + contadorN1 +
     " contadorN2: " + contadorN2  );
    contadorN1 ++;
    contadorN2 --; 

}

//ciclo-----> do - while
var contadorN3 = 0;
var condición = "hola";
do{
    console.log ( " ingresaste a do-while: " );
     contadorN3 ++;
    if ( contadorN3 == 2 ){
        condición = "adios"
    }
}while( condición == "hola");



var condicionN2 = 5;
do{
    console.log( "Valor: " + condicionN2 );
    condicionN2 -= 5;
}while( condicionN2 >= 5 );


//Ejercicio do-while
//Crear un programa que lea tantos números
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la
//suma de todos los números ingresados.
const prompt = require('prompt-sync')();
var recibeNumero;
var itinera = 2;
var suma = 0;
while( recibeNumero != 0 && itinera < 50 ){
   var recibeNumero = prompt(" Dame un número: ");
   itinera +=1;
    suma = suma + parseInt(recibeNumero);
}
console.log( "La suma total es: " + suma);