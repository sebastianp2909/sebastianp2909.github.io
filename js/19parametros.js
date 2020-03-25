"use strict";

//parametros REST y SPREAD

function frutas(fruta1, fruta2, ...restofrutas) {
    console.log("fruta 1: ",fruta1);
    console.log("fruta 2: ",fruta2);
    console.log(restofrutas);
}

var fruta = ["manzana","pera"]

frutas(...fruta, "sandia", "melon", "coco");