var input = require("fs").readFileSync("stdin", "utf8");

var PI = 3.14159;
            // converte string para número decima // ponto flutuante
var raio = parseFloat(input);

                //Math.pow realiza a pontênciação
var area = PI * Math.pow(raio, 2);
                    // toFixed formata o número de casas que deve ser apresentadas, no caso 4.   
console.log("A=" + area.toFixed(4));