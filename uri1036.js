const input = require('fs').readFileSync('stdin', 'utf8');

const valores = input.split(" ");

let A = parseFloat(valores.shift())
let B = parseFloat(valores.shift())
let C = parseFloat(valores.shift())

let delta = (B * B) - (4.0 * A * C)

if (delta < 0 || A == 0) {
    console.log('Impossivel calcular')
} else {
    let R1 = (((-B) + Math.sqrt(delta)) / (2.0 * A)).toFixed(5) 
    // Atenção: o método .toFixed precisa ir nesta posição, na declaração da variável. Se ele for colocado no console log da linha 23, o a resolução será considerada incorreta, provavelmente devido ao fato de que nesta posição ele transforma as variáveis R1 e R2 em String.
    let R2 = (((-B) - Math.sqrt(delta)) / (2.0 * A)).toFixed(5)

    console.log(`R1 = ${R1}\nR2 = ${R2}`)
} 