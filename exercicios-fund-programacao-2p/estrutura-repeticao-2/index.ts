/*Exercício 1
Defina a classe InteiroMatematico. Objetos desta classe possuem, como principal atributo, um
número inteiro n, fornecido ao construtor. Esse atributo possui métodos tanto de acesso quanto de
modificação. Sempre, entretanto, se assume |n| para internalizá-lo ao objeto.
A implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
ser inferidos.
Não utilize classes externas para cumprir os exercícios. O foco deve ser o benefício didático de como
resolver.*/

import InteiroMatematico from "./InteiroMatematico";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
let numero: InteiroMatematico = new InteiroMatematico(parseInt(prompt("Numero: ")));

//Exercício 2
//console.log(numero.tabuada());

//Exercício 3
//console.log(numero.numeroDivisores());

//Exercício 4
//console.log(numero.produtoPelaSoma(parseInt(prompt("M: "))));

//Exercício 5
//console.log(numero.elevado(parseInt(prompt("Elevado: "))));

//Exercício 6
//console.log(numero.fatorial());

//Exercício 7
//console.log(numero.serieHarmonica());

//Exercício 8
//console.log(numero.fibonacci());

//Exercício 9
//console.log(numero.tribonacci());

//Exercício 10
//console.log(numero.isTriangular());

//Exercício 11
//console.log(numero.isSomaDosQuadrados());

//Exercício 12
//console.log(numero.maiorDivisor());

//Exercício 13
//console.log("Menor divisor de " + numero.getN() + " é " + numero.menorDivisor());

//Exercício 14
//console.log(numero.mdc(parseInt(prompt("M: "))));

//Exercício 15
//console.log(numero.mdcEficiente(parseInt(prompt("M: "))));

//Exercício 16
//console.log(numero.mmc(parseInt(prompt("M: "))));

//Exercício 17
//console.log(numero.mmcEficiente(parseInt(prompt("M: "))));

//Exercício 18
//console.log(numero.isPrimo());

//Exercício 19
//console.log(numero.isPrimoEficiente());

//Exercício 20
//console.log(numero.isPerfeito());

//Exercício 21
//console.log(numero.isRaizExata());

//Exercício 22
//console.log(numero.tresN());

//Exercício 23
//console.log(numero.neperiano());

//Exercício 24
//console.log(numero.neperianoEficiente());

//Exercício 25***
console.log(numero.sen());
