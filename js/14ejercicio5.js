"use strict";

//muestre todos numeros divisores de un numero introducido

var numero = parseInt(prompt("Ingrese un numero: "));

for (var i = 1; i <= numero; i++) {
    if (numero%i == 0) {
        console.log(i);
    }
}
