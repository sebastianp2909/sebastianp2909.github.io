"use strict";

/*
pida 6 numeros y los meta en un array
mostrar el array entero en el cuerpo y la consola
ordenar y mostrar
invertir su orden y mostrar
mostar cuantos elementos tiene
busqueda de un valor introducido y su indice
*/

var array = [];

for(var i = 0; i <= 5; i++){
    array.push(prompt("ingrese un valor"));
}
document.write("<h1>Array</h1><br>"+array);
console.log(array);
document.write("<h1>Ordenado</h1>"+array.sort());
document.write("<h1>Reversa</h1>"+array.reverse());
document.write("<h1>Cuantos elementos tiene:</h1>"+array.length);

var busqueda = prompt("Valor a buscar");
var buscar = array.findIndex(resul => resul == busqueda );
if(buscar && buscar != -1){
    document.write("<hr><h1>Encontrado</h1>");
    document.write("Posicion "+buscar);
}else{
    document.write("<hr>No Encontrado");
}
