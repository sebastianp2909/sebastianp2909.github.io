"use strict";

//muestre todos los numeros entre 2 numeros introucidos por el usuario

var numero1 = parseInt(prompt("numero1: "));
var numero2 = parseInt(prompt("numero 2: "));

while (isNaN(numero1) || isNaN(numero2)) {
  var numero1 = parseInt(prompt("numero1: "));
  var numero2 = parseInt(prompt("numero 2: "));
}

document.write("<h1>numeros entre " + numero1 + " y " + numero2 + ":</h1>")
for (var i = numero1; i <= numero2; i++) {
  document.write(i+"</br>");
}
