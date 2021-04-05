//Programación orientada a objeto

//Creación de un objeto
//Variable = { caracteristicas }
var celularMorado = {
    color: "Morado",
    peso: "80 g",
    numCamaras: 3,
    sistema: "Android",
    duracionBateria: 24,
    prender: function(){ return " Prendiendo... " },
    reiniciar : function(){ return " Reiniciando... " }
}
var celularAzul = {
    color: "Azul",
    peso: "80g"
}
var celularVerde = {
    color: "verde",
    peso: "80g"
}
//console.log( celularMorado );
//obtener el valor de una caracteristicas

//console.log ( celularMorado.prender() );
//console.log ( celular[ "numCamaras" ] );

class galleta{
    constructor ( tamaño, forma, sabor ){
            this.tamaño = tamaño;
            this.forma = forma; 
            this.sabor = sabor;
            this.hornea = function(){ return "horneando... " }
    }
}
//var tamaño = prompt( "Dame el tamaño de la galleta: " );
//var forma = prompt( "Dame la forma de la galleta: " );
//var sabor = prompt( "Dame el sabor de la galleta: " );

//let galletaChocolate = new galleta( tamaño, forma, sabor );
var galletaVainilla = new galleta( "3 cm", "Circulo", "Vainilla" );
//console.log(galletaVainilla.hornea() );
//console.log( galletaChocolate );
//console.log( galletaVainilla );

//console.log( galletaChocolate.sabor );
//console.log( galletaVainilla[ "sabor" ]);




//-------------------------
//SEMANA 4 SESIÓN 13 MODULO 2
var frutaN1 = { nombre: "uva" }
var frutaN2 = { nombre: "uva" }

//casoN1
var resultado = ( frutaN1 == frutaN2 );
console.log( resultado );

//casoN2
var frutaN3 = frutaN1;
var resultadoN2 = ( frutaN3 == frutaN1 );
console.log ( resultadoN2 );