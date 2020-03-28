"use strict";

var formulario = document.querySelector("#formulario");
var borrar = document.querySelector("#borrar");

borrar.addEventListener("submit", function() {
  var peli = document.querySelector("#bpelicula").value;
  if (peli.length >= 1) {
    localStorage.removeItem(peli);
  }
});

formulario.addEventListener("submit", function() {
  var peli = document.querySelector("#pelicula").value;
  if (peli.length >= 1) {
    localStorage.setItem(peli, peli);
  }
});

var ul = document.querySelector("#lista");
for (var i in localStorage) {
  console.log(localStorage[i]);
  if (typeof localStorage[i] == "string") {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
  }
}
