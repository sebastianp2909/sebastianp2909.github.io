"use strict";

//Plantillas de texto

var nombre = prompt("ingresar nombre");
var apellido = prompt("ingresar apellido");

//var texto = "mi nombre es: " + nombre + " " + apellido;
var texto = `
    <h1>Hola</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);
