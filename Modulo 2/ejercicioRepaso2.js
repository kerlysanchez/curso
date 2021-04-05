//SEMANA2, ASESORIA2 MODULO2 ------> APRENDIENDO A PROGRAMAR

//Crea un programa en donde tengas que adivinar 
//las letras de una palabra de 4 letras, tendrás solo 
//4 intentos para adivinarla, en un inicio la palabra 
//estará oculta, pero cada vez que aciertes, se mostrará 
//la letra, si adivinas la palabra antes de que se
//te acaben los intentos ganas, sino pierdes

//Utilizamos la funcionalidad prompt para pedir valor en pantalla
const prompt = require("prompt-sync")();
console.log( "Ingresa letra a letra la palabra a adivinar" );

//Declaramos los 2 arreglos, uno para guardar las letras
//y otro para guardar la palabra oculta y podamos descubrirla
var palabraOculta = [];
var palabraMostrada = ["-","-","-"];

//Declaramos 2 variables, una que cuenta los ciertos que tenemos
// y la otra que cuenta los fallos que tenemos
var contadorAciertos = 0;
var contadorFallas = 3;

//Guardamos la palabra letra a letra y la guardamos 
//en una posición del arreglo
palabraOculta[0] = prompt( "Dame la letra número 1: ");
palabraOculta[1] = prompt( "Dame la letra número 2: ");
palabraOculta[2] = prompt( "Dame la letra número 3: ");
//console.log ( palabraOculta );

//Creamos un bucle for para que podamos repetir
//las instrucciones un número de veces
for ( var i = 0; i < (palabraOculta.length *2 ); i++ ){
    var intento = prompt ( "Ingresa la letra: " );
    switch ( intento ){
        case palabraOculta[0]:
            palabraMostrada[0] = palabraOculta[0];
            console.log( palabraMostrada );
            contadorAciertos++;
            break;
        case palabraOculta[1]:
            palabraMostrada[1] = palabraOculta[1];
            console.log ( palabraMostrada );
            contadorAciertos++;
            break;
        case palabraOculta[2]:
            palabraMostrada[2] = palabraOculta[2];
            console.log ( palabraMostrada );
            contadorAciertos++;
            break;   
        default:
            console.log  ( "Army te equivocaste :´C " );
            console.log ( "Te quedan" + (contadorFallas -1)  + "intentos" );
            console.log ( palabraMostrada );
            contadorFallas--;
            break;
    } 
    if( contadorAciertos == 3 ){
    break;
    }  
    else if( contadorFallas == 0 ){
    break;
    }
}

if ( ( contadorFallas == 0 && contadorAciertos < 3) || ( contadorFallas < 3 && contadorAciertos < 3 ) ){
    console.log ( "PERDISTE, vuelve a intentralo" );
}
else if ( contadorAciertos == 3 ){
    console.log ( "GANASTE, ADIVINASTE LAS PALABRA ARMY :D" );
}