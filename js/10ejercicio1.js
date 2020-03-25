"use strict"

//1er ejercicio

//pedir 2 numeros y decir si es mayor, menor o iguales
//plus:pedir datos otravez si son letras

var num1 = parseInt(prompt("1er numero"));
var num2 = parseInt(prompt("2do numero"));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
  var num1 = parseInt(prompt("1er numero"));
  var num2 = parseInt(prompt("2do numero"));
}

if (num1 > num2) {
  console.log(num1 + " es el mayor");
} else if (num1 < num2) {
  console.log(num2 + " es el mayor");
} else if ((num1 = num2)) {
  console.log("los numeros son iguales");
} else {
  console.log("numeros invalidos");
}
