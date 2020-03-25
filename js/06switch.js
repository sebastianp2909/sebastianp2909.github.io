'use strict'

//switch

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "mayor de edad";
    break;
    case 17:
        imprime = "menor de edad";
    break;
    case 80:
        imprime = "viejo";
    break;
    default:
        imprime = "no se sabe";
}
console.log(imprime);