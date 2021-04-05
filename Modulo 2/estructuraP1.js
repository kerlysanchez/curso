//SEMANA1, Código de la Sesión 4 del Módulo 2
// Estructuro de control P1 
// Resultado operador &&
// true && true ---> true 
// false && false ---> false 
//false && true  ----> false 
// true && false ----> false 

//Resultado operador || - o 
// true || tue --> true 
//false || false --> false 
//fase || true --> true 
// true || true -->true 


//Resultado del operador ! - se lee como "negación"
// !true --> false
// !false --> true


//---------------------operadores logicos----------------
 
//opl = operadores logicos
var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

//operador && ("AND" O "Y")
//Ejemplo - Crear una condición compuesta de otras 2 condiciones,
//utilizando el operador && e imprimir el resultado
var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 );
console.log ( "El resultado del operador Y es: " + resultadoOperadorLY );

//operador || ("OR" o "O ")
//Ejemplo - Crear una condición compuesta de otras 2 condiciones, 
//utilizando el operador || e imprimir el resultado
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3  );
console.log ( "El resultado del operadorO es: " + resultadoOperadorLO );



//operador negación !
//Ejemplo - Crear una condición compuesta de otras 2 condiciones, 
//utilizando el operador ! e imprimir el resultado
var resultadoOperadorLN = !resultadoOperadorLO;
console.log ( "El resultado del operador de Negación es: " + resultadoOperadorLN );

