/*ALUNO – Considere um objeto que represente um aluno de Ensino Médio, abstraindo as notas de
dois semestres e da avaliação de exame. Implemente métodos que retornem:
(a) a maior nota, considerando os dois semestres;
(b) a maior nota, considerando também a avaliação de exame.*/

import Student from "./Student";

const carlos: Student = new Student(50, 40, 90);
console.log(carlos.semesterHighest());
console.log(carlos.Highest());

