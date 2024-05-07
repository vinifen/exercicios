/*ACADÊMICO – Implemente uma classe que abstraia um acadêmico, considerando a nota final e a
frequência, obrigatoriamente informados no construtor. A frequência é um número real entre 0,0 e 1,0
(onde 0,8 corresponde a uma frequência de 80%).
Disponha de um método que retorne a situação desse aluno (em termos de “Aprovado”, “Reprovado”
e “Sem Presença Obrigatória”), diante dos requisitos:
• Para aprovação: nota maior ou igual a 6,0 e frequência mínima de 75%;
• Para cursar a disciplina sem presença obrigatória: reprovado com nota maior ou igual a 4,0 e
com frequência mínima de 75%.*/

import Academic from "./Academic";
import prompt from "prompt-sync";

const input = prompt();
let finalGrade: number = parseInt(input("Nota final (1.0 - 10.0): "));
let frequency: number = parseFloat(input("Frequência (0.0 - 1.0): "));
const joao: Academic = new Academic(finalGrade, frequency);
console.log(joao.studentSituation());
