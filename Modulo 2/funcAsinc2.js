//SEMANA 4 SESIÓN 16 MODÚLO2
/*
console.log( "Hola");
setTimeout( function timeout() {
    console.log( "Mundo" );
}, 5*1000);
console.log (  "Hola a los particantes");
*/


function primero ( callback ){
    setTimeout( function(){
        return callback( "Imprime la letra A" );
    }, 2*1000 );
}

function segundo( callback ){
    return callback( "Imprime la letra B" );
}

primero( function(resultado1 ){
    console.log( resultado1 );
    console.log( "Imprime la letra A" );
    console.log( "Imprime la letra C" );
    /*
    segundo ( function( resultado2 ){
        console.log(resultado2)
    } )
    */
});

