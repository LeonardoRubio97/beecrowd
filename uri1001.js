var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
                        //o método shift() remove o primeiro elemento de um 
                        //array e o retorna
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
        // converte uma string (texto) para um inteiro (number)
var X = A + B;

console.log("X = " + X);