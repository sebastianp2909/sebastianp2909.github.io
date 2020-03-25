"use strict";

//tabla de multiplicar de un numero introducido

var numero = parseInt(prompt("Ingrese un numero: "));

while (isNaN(numero)) {
  alert("numero o caracter invalido");
  var numero = parseInt(prompt("Ingrese un numero: "));
}
document.write("<h1>tabla de multiplicar del " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
  document.write(numero + " x " + i + " = " + (numero * i) + "</br>");
}
for (var c = 1; c <= 3; i++) {
  ("<h1>tabla de multiplicar del " + c + "</h1>");
  for (var i = 1; i <= 10; i++) {
    document.write(c + " x " + i + " = " + (c * i) + "</br>");
  }
}
