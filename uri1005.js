var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
                            // o método shift() retira o primeiro elemento de um
                            // array e o retorna.
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var media = (A * 3.5 + B * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));
                                // toFixed formata o número de casas que deve ser apresentadas, no caso 5.
                                