var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var media = (A*2 + B*3 + C*5) / 10.0;


console.log("MEDIA = " + media.toFixed(1));
                                // o metodo toFixed() adiciona casas decimais ao numero. 