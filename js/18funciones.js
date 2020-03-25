"use strict";

//funciones
// es una agrupacion reutilizable de un conjunto de instrucciones

function porconsola(numero1, numero2) {
  console.log("Suma: " + (numero1 + numero2));
  console.log("Resta: " + (numero1 - numero2));
  console.log("Multiplicacion: " + numero1 * numero2);
  console.log("Division: " + (numero1 % numero2));
  console.log("*****************************");
}

function porpantalla(numero1, numero2) {
  document.write("Suma: " + (numero1 + numero2) + "</br>");
  document.write("Resta: " + (numero1 - numero2) + "</br>");
  document.write("Multiplicacion: " + numero1 * numero2 + "</br>");
  document.write("Division: " + (numero1 % numero2) + "</br>");
  document.write("*****************************" + "</br>");
}
function calculadora(numero1, numero2, mostrar = false) {
  if (mostrar == false) {
    return porconsola(numero1, numero2);
  } else {
    return porpantalla(numero1, numero2);
  }
  return true;
}

calculadora(3, 5);
calculadora(4, 8, true);
