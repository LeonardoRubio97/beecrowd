// lê o conteúdo do arquivo stdin e armazena na variável input.
var input = require("fs").readFileSync("stdin", "utf8");

var numeros = input.split("\n");

var A = parseInt(numeros.shift());
var B = parseInt(numeros.shift());
var C = parseInt(numeros.shift());
var D = parseInt(numeros.shift());

var DIFERENCA = A * B - C * D;

console.log("DIFERENCA = " + DIFERENCA);