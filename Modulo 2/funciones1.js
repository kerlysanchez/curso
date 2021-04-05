//SEMANA3, sesiòn 10 Modulo2 
//Declaración de una función 
function multiplica ( primerOperando, segundoOperando ){
    var resultado = primerOperando * segundoOperando;
    console.log ( " El resultado es: " + resultado );
}
//multiplica ( 25, 2 );

function multiplicaN3(){
    var resultado2 = 5 * 8;
    console.log ( " Resultado es: " + resultado2 );
}
//multiplicaN3();

//función como expresión
var resultado = function multiplicaN2( primerOperando ){
    return 5 * primerOperando;
}
//console.log ( resultado( 25 ) );

//función flecha 
//función que saluda a un persona
const saludaPersona = ( nombre ) => console.log ( " Eres hermosa madre bella " + nombre );
saludaPersona ( " Karina " );

const suma = ( numero  ) => console.log ( 12 * 2 );
suma ( 12 );

//ejercicio#1 
//Escribir un programa que tenga una función a la que 
//se le pasa como parárametro un número y devuelve como 
//resultado un texto que indica si el numero es par o impar

function determinaN ( numero ){
    if ( ( numero % 4 ) == 1){
        console.log ( " El numero es impar " );
    }
    else if ( ( numero % 4 ) == 0 ){
        console.log ( " El numero es par " );
    }
}
determinaN ( 5 );

//Ejercicio#2
//Definir una función que muestre la información de un texto
//que se introduce como argumento y determina si el texto
//contiene mayuscula, minuscula, o ambas.

function determinaT( texto ){
    if ( texto == texto.toUpperCase() ){
        console.log ( " El texto esta en mayusculas " );
    }
    else if ( texto == texto.toLowerCase() ){
        console.log ( "El texto esta minusculas" );
    }
}
determinaT ( "hola" );