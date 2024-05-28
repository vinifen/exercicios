import PromptSync from "prompt-sync";
import InteiroMatematico from "./InteiroMatematico";

const prompt = PromptSync();
let numero: InteiroMatematico = new InteiroMatematico(parseInt(prompt("Numero: "))); 

//Exercício 1
//console.log(numero.getDivisores());

//Exercício 2
//console.log(numero.serieDeFibonacci());

//Exercício 3
//console.log(numero.serieDeTribonacci());

//Exercício 3
console.log(numero.getPrimos());