/*Modele e implemente uma classe que resolva o problema de transformar a nota de um aluno,
numérica e na escala de 0 a 10, em um conceito alfabético.
Use a seguinte equivalência:
• A: maior ou igual a 9,0;
• B: entre 8,0 e 9,0;
• C: entre 7,0 e 8,0;
• D: entre 6,0 e 7,0;
• E: menor do que 6,0.*/

import Prova from "./Prova";
import PromptSync from "prompt-sync";

const prompt = PromptSync(),
      joao: Prova = new Prova(parseFloat(prompt('Nota da prova: ')));
      
console.log(joao.alphabeticGrade());
