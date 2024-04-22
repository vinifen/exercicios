/*ELEITOR – Modele uma classe que represente um eleitor. Implemente de um método que determine
se o voto é: obrigatório, facultativo ou não permitido.*/

import Voter from "./Voter";
import prompt from "prompt-sync";

const key = prompt(),
      input: number = parseInt(key("Idade: "));
let carlos: Voter = new Voter(input);
console.log(carlos.defineMandatory());