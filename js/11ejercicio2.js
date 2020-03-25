"use strict";

//utilizando un bucle realizar la sum de los numeros introducidos por el usuario
//hasta que se introduzca un numero negativoy ahi mostrar el resultado

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("escriba un numero"));
  if (isNaN(numero)) {
    numero = 0;
  } else {
    if (numero >= 0) {
      suma = suma + numero;
      contador++;
    }
  }
  console.log(suma);
  console.log(contador);
} while (numero >= 0);

alert("l suma de todos los numeros es: " + suma);
alert("la media de los numeros es: " + suma / contador);
