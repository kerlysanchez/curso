//SEMANA 4 SESIÓN 15 MODULO 2
/*
console.log( "Inicio " );

function dos(){
    console.log("Dos");
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Tres");
}
uno();
console.log(  "Fin" );
*/
console.log("Inicio");
function dos(){
    setTimeout(function(){
        console.log( "Dos" );
    }, 3000 );
}
function uno(){
    setTimeout(function(){
        console.log("Uno");
    }, 0 );
    dos();
    console.log( "Tres" );
}
uno();
console.log( "Fin" );