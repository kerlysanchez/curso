//SEMANA1, Código de la Sesión 4 del Módulo 2
// ACONSTINUACIÒN
//Condicional if, else if y else
var numero1 = 125;
var numero2 = 50;
var numero3 = 30;

//Ejemplo - Crear condiciones utilizando las variables declaradas anteriormente y 
//desplegar un mensaje si se cumple la condición de cada una de ellas

//Condicional if - Dependiendo de la condición ejecutará las instrucciones dentro de las llaves {}.
if( (numero1 < numero2) && (numero2 < numero3) ){
    console.log( "Entraste al IF" );
}
//Condicional else if - Si no se ejecutaron las instrucciones dentro del IF, comprobará una nueva condición.
else if( numero1 < numero3 ){
    console.log( "Entraste al ELSE IF" );
}
//else -  Si no se ha cumplido ninguna condición, se ejecutarán estas instrucciones por defecto.
else{
    console.log( "Entraste al ELSE" );
}