"use strict";

//que nos diga si un numero es par o impar
//si no es valido que pida de nuevo el numero

var numero = parseInt(prompt("Ingrese un numero: "));

while (numero <= 0 || isNaN(numero)) {
  alert("numero o caracter invalido");
  var numero = parseInt(prompt("Ingrese un numero: "));
}

if (numero % 2 == 0) {
  console.log(numero + " es par");
} else {
  console.log(numero + " es impar");
}
