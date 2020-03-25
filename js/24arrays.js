"use strict";

//arrays,arreglos o matrices

var nombre = "jhon";
var nombres = ["jhon","sebastian","peña","diaz"];

var lenguajes = new Array("php","js","java");

console.log(nombres);
console.log(lenguajes); 

//ver la cantidad de valores que hay en un array

console.log(nombres.length);

var elemento = parseInt(prompt("que elemento del array quieres? "));
console.log(nombres[elemento]);

//recorrer array por pantalla

document.write("<h1>nombres</h1>");

for (var i = 0;i < nombres.length; i++) {
    document.write(nombres[i]+" ");
}