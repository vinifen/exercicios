/*ALUNO – Considere um objeto que represente um aluno de Ensino Médio, abstraindo as notas de
dois semestres e da avaliação de exame. Implemente métodos que retornem:
(a) a maior nota, considerando os dois semestres;
(b) a maior nota, considerando também a avaliação de exame.*/

export default class Student {
    semesterOne: number;
    semesterTwo: number;
    exam: number;

    public constructor(semesterOne: number, semesterTwo: number, exam: number){
        this.semesterOne = semesterOne;
        this.semesterTwo = semesterTwo;
        this.exam = exam;
    }

    public semesterHighest(): number{
        //return Math.max(this.semesterOne, this.semesterTwo);
        if (this.semesterOne > this.semesterTwo)
            return this.semesterOne
        return this.semesterTwo
    }

    public Highest(): number{
        //return Math.max(this.semesterOne, this.semesterTwo, this.exam);
        if(this.exam > this.semesterHighest())
            return this.exam;
        return this.semesterHighest();
    }
}