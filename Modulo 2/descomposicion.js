//SEMANA 4 SESIÓN 13 MODULO 2 ------> CLASE DE HOY 
let persona = { nombre: " Kerly ", apellido: " Sanchez ", edad: " 17 " }
//con descomposición
let { nombre, apellido } = persona;
console.log( "El nombre del participante es:" + nombre + "" +  apellido );

//sin descomposición 
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;

//Ejemplo # 2
let celular = { color: "Rojo", numCamaras: 4 }
let { color } = celular;
console.log ( color );

//Ejemplo # 3 
var paquete = {
    numEnvio: 160404,
    direción: "Jose Antepara y Trujillo",
    peso: "3kg",
}
var numEnvio, peso;
( { numEnvio, peso } = paquete );
console.log ( numEnvio );

//Descomposiciòn de objecto 
//valores dedefecto 
let persona2 = { nomN2: "Kely", edad: "17", }
var { nomN2, apellido: apellidoN3 = " Vivero " } = persona2;
console.log ( " El nombre es: " + nomN2 + " " + apellidoN3 );


//DESCOMPOSICIÓN en funciones 
let envio = {
    numEnvio: "114",
    producto: "lapto"
}
function datoEnvio ( {numEnvio, producto} ){
    console.log(" Número de envio: " + numEnvio );
    console.log ( " Producto a enviar: " + producto );
}
datoEnvio( envio );


var saludo ="hola buenas noches";