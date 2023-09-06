var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
        // converte uma string para numero inteiro (number)
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
                        // o método shift() retira o primeiro elemento de um
                        // array e o retorna. 
var PROD = A * B;

console.log("PROD = " + PROD);

