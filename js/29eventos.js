"use strict";

//eventos del raton

function cambiarColor() {
  console.log("me has dado click");
  var bg = boton.style.background;
  if (bg == "green") {
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }
  boton.style.padding = "10px";
  boton.style.border = "0px";
  return true;
}

var boton = document.querySelector("#boton");

//click - capturar el evento con un click
//dblclick - capturar el evento con doble click 
//evento click
boton.addEventListener('click', function(){
    cambiarColor();
});

//evento mouse over

boton.addEventListener('mouseover', function(){
    boton.style.background = "#ccc";
});

//evento mouse out

boton.addEventListener('mouseout', function(){
    boton.style.background = "white";
});

//evento focus

var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("dentro del input");
});

//evento blur

input.addEventListener('blur', function(){
    console.log("fuera del input");
});

//evento Keydown

input.addEventListener('keydown', function(event){
    console.log("pulsando la tecla " ,String.fromCharCode(event.keyCode));
});

//evento keypress

input.addEventListener('keypress', function(event){
    console.log("tecla presionada " ,String.fromCharCode(event.keyCode));
});

//evento keyup
input.addEventListener('keyup', function(event){
    console.log("tecla soltada " ,String.fromCharCode(event.keyCode));
});