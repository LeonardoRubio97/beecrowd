const input = require('fs').readFileSync('stdin', 'utf8');


let entrada = input.split(" ");

let A = parseInt(entrada.shift());
let B = parseInt(entrada.shift());
let C = parseInt(entrada.shift());
let D = parseInt(entrada.shift());

if (B > C && D > A && (C + D ) > (A + B) && C > 0 && D > 0 && (A % 2 === 0)) {
    console.log('valores aceitos');
} else {
    console.log('valores não aceitos');
}



//console.log(entrada)
//console.log(A,B,C,D)

