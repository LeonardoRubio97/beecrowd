const input = require("fs").readFileSync("stdin", "utf8");

const [tempoViagemGasto, velocidadeMedia] = input.split("\n");

const qtdLitrosNecessario = tempoViagemGasto * velocidadeMedia / 12;

console.log(qtdLitrosNecessario.toFixed(3));