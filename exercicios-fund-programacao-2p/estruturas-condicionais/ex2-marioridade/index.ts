/*MAIORIDADE – Modele uma classe que represente um indivíduo. Implemente um método que
determine se a maioridade já foi atingida.*/

import prompt from "prompt-sync";
import Indiviual from "./Individual";
const teclado = prompt();
const entrada: number = parseInt(teclado('Idade: '));
let jorge: Indiviual = new Indiviual(entrada); 
console.log(jorge.ageCompare());