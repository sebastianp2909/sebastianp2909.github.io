"use strict";

//mostrar todo los numeros impares entre 2 numeros introducidos por el usuario

var numero1 = parseInt(prompt("numero 1: "));
var numero2 = parseInt(prompt("numero 2: "));

while (isNaN(numero1) || isNaN(numero2)) {
  var numero1 = parseInt(prompt("numero 1: "));
  var numero2 = parseInt(prompt("numero 2: "));
}

while(numero1 < numero2){
    numero1++;
    //0 es para sacar impares
    //1 es para sacar pares
    if(numero1%2 != 0){
        console.log(numero1);
    }
}
