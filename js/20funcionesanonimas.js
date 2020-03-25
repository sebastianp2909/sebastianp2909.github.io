"use strict";

//funciones anonimas
// es una funcion sin nombre

function sumame(numero1, numero2, sumamuestra, sumapordos) {
  var suma = numero1 + numero2;
  sumamuestra(suma);
  sumapordos(suma);

  return suma;
}
sumame(
  4,
  5,
  function(dato) {
    console.log("la suma es: ", dato);
  },
  function(dato) {
    console.log("la suma de los dos es: ", dato * 2);
  }
);
