//SEMANA 3 SESISÓN 17 ASESORIA 27/03/2021 Modulo2
//Declarar una matriz
let matrizBts = [
    ["RM", "Jin", "Suga", "J-hope"], ["Jimin","V", "jungKoo"]
]

console.log( matrizBts[1][0] );

//Descomposición de objeto
let producto = {
    nomProducto: "Chocolate",
    precio: 15,
    peso: "1.5kg",
    cantidad: 4
}

let { nomProducto, precio } = producto;
console.log( nomProducto );
console.log( precio );