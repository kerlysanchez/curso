// SEMANA 2, sesiòn 5 modulo 2
//ejemplos 
//Dado un nùmero, separarlo en centenas, decenas y unidades,
//interncabiar la posiciòn entre las centenas y las unidades
//e imprimir el numero final.



var numeroCompleto = 738;
//Centenas --> 7
//Decenas  --> 3
//Unidades --> 8

//Condicional if que controla que el número ingresado esté entre 100 y 999
if ( numeroCompleto <= 999 && numeroCompleto > 99 ){
    //Obtenemos primero las centenas al dividir el número original entre 100
   //Para que unicamente nos quedemos con el número que representa a las centenas,
   //utilizamos la instrucción "parseInt()" para quitar los decimales.
    //centenas 
    var centenas = parseInt (numeroCompleto / 100);
    //centenas = parseInt ( 738 / 100 );
    //console.log ( centenas );
    //Decenas 
    var decenas = parseInt ( (numeroCompleto % 100) / 10 );
    //decenas = parseInt ( 38 / 10 );
    //console.log ( decenas );
    //unidad
    var unidades = (numeroCompleto % 100) - (decenas*10);
    //unidades = parseInt ( 38 - 30 );
    //console.log ( unidades );
    //console.log ( "El valor final es:"+unidades+decenas+centenas );
}
else{
    console.log ( "Ingresa un numero de 3 cifras" );

}

//var resto = 120; 
//resultado = 210 / 20; 
//console.log ( resultado );


//------------------------------Condicional Switch----------------
var conSwitch = "Luis";
var edad = "18";
switch( conSwitch ){
    //El primer caso es si en vez de un nombre, guardamos un valor
    case 2:
        console.log ( "El valor ingresado es: 2" );
        //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
    case 6:
        console.log ( "El valor ingresado es: 6" );
        break;
    case "Luis":
        console.log ( "Hola Luis" );
        if ( edad >= 18 ){
            console.log ( "Felicidades eres mayor de edad" );
        }
        break;
    default:
        //Mostramos un mensaje si el número no es correcto
        console.log ( "El valor ingresado es distinto" );
         //Para salir del condicional switch y no ejecutar otro
        //código, utilizamos break.
        break;
}
