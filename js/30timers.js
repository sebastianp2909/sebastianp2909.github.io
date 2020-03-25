"use strict";

//evento load para cargar todo despues de que cargue la pagina

window.addEventListener("load", function() {
  //timers
  //setInterval - se ejecuta cada cierto tiempo
  //setTimeout - se ejecuta solo una vez

  function intervalo() {
    var tiempo = setInterval(function() {
        //console.log("ejecutando funcion cada 3 segundos");
        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
          encabezado.style.fontSize = "40px";
        } else {
          encabezado.style.fontSize = "50px";
        }
      }, 1000);
      return tiempo;
  }

  var tiempo = intervalo();

  var stop = document.querySelector("#parar");

  stop.addEventListener("click", function() {
    alert("stop");
    clearInterval(tiempo);
  });

  var start = document.querySelector("#seguir");

  start.addEventListener("click", function() {
    alert("start");
    intervalo();
  });
});
