/*Exercício 4
Considere um relógio que marca horas e minutos. Coube-lhe a tarefa de fornecer informações para
uma interface gráfica de um relógio analógico. Disponha de métodos que retornem a posição de cada ponteiro do relógio, em graus. Considere doze horas como a posição inicial, ou seja, 0º. Não julgue a resolução como correta sem comparar o resultado com um relógio real.*/

import Relogio from "./Relogio";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let relogioExemplo: Relogio = new Relogio(parseInt(prompt("Horas: ")), parseInt(prompt("Minutos: ")) );
console.log(relogioExemplo.getPointers());
