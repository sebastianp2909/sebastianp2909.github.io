"use strict";

//BOM - Browser Object Model

function getBom(){
    //Capturar el alto de la pantalla
    console.log(window.innerHeight);
    //capturar el ancho de la pantalla
    console.log(window.innerWidth);
    //capturar la url de la pagina
    console.log(window.location);
}

function Redirect(url){
    //redireccionar
    window.location.href = url;
}

function abrirVentana(url){
    //abrir pestaña nueva
    window.open(url);
}

getBom();