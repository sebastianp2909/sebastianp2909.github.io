"use strict";

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["Rapidos Y Furiosos", "Viernes 13", "Son Como Niños"];
var cine = [categorias, peliculas];

/*
console.log(cine);
var pelicula = prompt("Introduzca una pelicula");

peliculas.push(pelicula);

//borrar el ultimo elemento del array
peliculas.pop();

//convertir el array a texto

var pelis = peliculas.join();

document.write(pelis);

console.log(peliculas);

//convertir texto en array

var texto = "texto1, texto2, texto3";

var resultado = texto.split(", ");
console.log(resultado);

//ordenar array

//orden alfabetico
peliculas.sort();
//al revez
peliculas.reverse();
*/
//buscar en un array

//find es para encontrar el texto y find index es para la posicion
var busqueda = peliculas.find(pelicula => pelicula == "Son Como Niños");
console.log(busqueda);
