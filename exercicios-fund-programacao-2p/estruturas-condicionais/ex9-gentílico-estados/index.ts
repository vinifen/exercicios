/*GENTÍLICO – Modele e implemente uma classe que resolva o problema de retornar o gentílico de um
estado a partir da respectiva sigla de unidade federativa (UF). Por exemplo, para "PR" deve-se
retornar “paranaense”. Considere todos os estados brasileiros, além de possíveis variações entre
minúsculas e maiúsculas.*/

import Gentilico from "./Gentilico";
import prompt from "prompt-sync";

const input = prompt();
let abreviacao: string = input("Digite o Estado Brasileiro: ");
let estado: Gentilico = new Gentilico(abreviacao);
console.log(estado.getGentilico());