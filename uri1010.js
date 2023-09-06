// lê o conteúdo do arquivo stdin e armazena na variável input.
var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n");

var infoItem1 = linhas.shift().split(' ');
var infoItem2 = linhas.shift().split(' ');

var idItem1 = infoItem1.shift();
var qtdItem1 = infoItem1.shift();
var valorUnitarioItem1 = infoItem1.shift();
var valorTotalItem1 = qtdItem1 * valorUnitarioItem1;

var idItem2 = infoItem2.shift();
var qtdItem2 = infoItem2.shift();
var valorUnitarioItem2 = infoItem2.shift();
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

var valorTotalCompra = valorTotalItem1 + valorTotalItem2;


console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));
