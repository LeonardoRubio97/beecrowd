var input = require("fs").readFileSync("stdin", "utf8");

var [A, B, C] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;

var areaTriangulo = (A * C) / 2.0;
console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)

var areaCirculo = PI * Math.pow(C, 2);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)

var areaTrapezio = ((A + B) * C) / 2.0;
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)

var areaQuadrado = B * B;
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)

var areaRetangulo = A * B;
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)


/*
Era possível realizar o calculo da AREA DO TRAPEZIO da seguinte forma:

var areaTrapezio = ((parseFloat(A) + parseFloat(B)) * C) * 2;
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)

isso iria fazer a conversão do valor da variável A para o tipo NUMBER. 
Pois o valor esta dentro de um VETOR [] e VETOR retorna STRING 'texto'.

ou de uma maneira mais elegante, é possível converter todo esse Objeto que armazena
as strings para o tipo NUMBER diretamente. Isso é possível devido o método .map()

.map()

*/