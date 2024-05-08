//Todos os exercicios da primeira lista de repetições.

import PainelContador from "./PainelContador";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const intervalo: PainelContador = new PainelContador(parseInt(prompt("Início do intervalo: ")), parseInt(prompt("Limite do intervalo: ")));


//console.log(intervalo.contagem());

//console.log(intervalo.contagemDecrescente());

console.log(intervalo.contagemPares());

//console.log(intervalo.contagemImpares());

//console.log(intervalo.contagemPasso(parseInt(prompt("Passos: "))));

//console.log(intervalo.contagemOmitindo(parseInt(prompt("Multiplos Omitidos: "))));
