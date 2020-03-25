"use strict";

/*
calculadora:
-pida dos numeros
-ingresar un numero mal vuelva a pedir
-en el body,en una alerta y en la consola el resultado de + - * /
*/

var numero1 = parseInt(prompt("Ingrese el 1er numero: "));
var numero2 = parseInt(prompt("Ingrese el 2do numero: "));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  alert("algun dato no esta disponible");
  var numero1 = parseInt(prompt("Ingrese el 1er numero: "));
  var numero2 = parseInt(prompt("Ingrese el 2do numero: "));
}

document.write(numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "</br>");
document.write(numero1 + " - " + numero2 + " = " + (numero1 - numero2) + "</br>");
document.write(numero1 + " x " + numero2 + " = " + (numero1 * numero2) + "</br>");
document.write(numero1 + " / " + numero2 + " = " + (numero1 / numero2) + "</br>");

console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
console.log(numero1 + " x " + numero2 + " = " + (numero1 * numero2));
console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2));

alert(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
alert(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
alert(numero1 + " x " + numero2 + " = " + (numero1 * numero2));
alert(numero1 + " / " + numero2 + " = " + (numero1 / numero2));