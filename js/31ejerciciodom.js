"use strict";

window.addEventListener("load", function() {
  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", function() {
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre.trim() == null || nombre.trim().length == 0) {
      document.querySelector("#error_nombre").innerHTML = "el nombre no es valido";
      return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }

    if (apellido.trim() == null || apellido.trim().length == 0) {
      document.querySelector("#error_apellido").innerHTML = "apellido no valido";
      return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }

    if (edad == null || edad.length <= 0 || isNaN(edad)) {
      document.querySelector("#error_edad").innerHTML = "edad no valida";
      return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }

    box_dashed.style.display = "block";

    var nom = document.querySelector("#nom");
    var ape = document.querySelector("#ape");
    var eda = document.querySelector("#eda");

    nom.innerHTML = nombre;
    ape.innerHTML = apellido;
    eda.innerHTML = edad;

    /*
        var datos = [nombre, apellido, edad];

        for (var indice in datos){
            var parrafo = document.createElement("p");
            parrafo.append(datos[indice]);
            box_dashed.append(parrafo);
        }
        */
  });
});
