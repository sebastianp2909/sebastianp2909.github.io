'use strict'

//condicional if
//comparacion de valores para realizar accion


var edad1 = 15;
var edad2 = 20;

//si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log(edad1 + " es mayor que " +edad2);
}else{
    console.log(edad2 + " es mayor que " +edad1);
}

/*operadores relacionales
Mayor >
Menor <
Mayor o igual >=
Menor o igual <=
Igual ==
Distinto !=
*/


/*

AND(y) = &&
OR(o) = ||
Diferente = !

*/

if (edad1 >= 18) {
    console.log("mayor de edad");
}else{
    console.log("menor de edad");
}