/*Modele e implemente uma classe que resolva o problema de transformar um número, entre 1 e 10,
em algarismos romanos. Caso o número fornecido esteja fora desse intervalo, retorne a mensagem:
“Fora do intervalo”.*/

import Number from "./Number";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
const fisrtNumber: Number = new Number(parseInt(prompt('Numero para romano: ')));
console.log(fisrtNumber.romanNumber());

