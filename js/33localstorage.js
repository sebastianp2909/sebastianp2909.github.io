"use strict";

// LocalStorage

if (typeof(Storage) !== 'undefined') {
    console.log("LocalStorage Disponible");
}else{
    console.log("LocalStorage no Disponible");
}

//Guardar dato en el LocalStorage
localStorage.setItem("Titulo","Curso JS");

//Recuperar elemento del LocalStorage
document.querySelector("#datos").innerHTML = localStorage.getItem("Titulo");

//Guardar objetos en el LocalStorage
var usuario = {
    nombre : 'sebastian',
    correo : 'jhons.penad@ecci.edu.co',
    edad : 20
}
localStorage.setItem("Usuario", JSON.stringify(usuario));

//Recuperar LocalStorage
var userjs = JSON.parse(localStorage.getItem("Usuario"));
console.log(userjs);