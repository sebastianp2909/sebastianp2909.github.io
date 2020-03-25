"use strict";

//DOM Document Object Model

function CambiarColor(colores){
    caja.style.background = colores;
}

//conseguir elemento con un id

//ambos hacen lo mismo
var caja = document.getElementById("micaja");

caja.innerHTML = "texto en js";
caja.style.padding = "20px";

//conseguir elementos por su etiqueta

var todoslosdiv =document.getElementsByTagName('div');
console.log(todoslosdiv);

//conseguir elementos por su clase

var clase = document.getElementsByClassName("rojo");
clase[0].style.background = "yellow";
console.log(clase);

console.log(caja);

//Query Selector

var id1 = document.querySelector("#micaja");
console.log(id1);
var clase1 = document.querySelector(".rojo");
console.log(clase1);
var etiqueta = document.querySelector("div");
console.log(etiqueta);