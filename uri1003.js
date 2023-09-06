var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

        //converte uma string para um numero inteiro (number)
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
                          //o método shift() remove o primeiro elemento de um 
                          //array e o retorna
var SOMA = A + B;

console.log("SOMA = " + SOMA);
