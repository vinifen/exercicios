/*Amplie solução anterior para atender a uma escala de 1 a 100. Considere que avaliar cada um dos
101 casos possíveis não consiste em uma boa solução.*/

import Number from "./Number";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
const fisrtNumber: Number = new Number(parseInt(prompt('Numero para romano: ')));
console.log(fisrtNumber.toString());