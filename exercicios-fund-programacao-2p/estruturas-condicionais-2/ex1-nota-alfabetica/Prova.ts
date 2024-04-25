/*Modele e implemente uma classe que resolva o problema de transformar a nota de um aluno,
numérica e na escala de 0 a 10, em um conceito alfabético.
Use a seguinte equivalência:
• A: maior ou igual a 9,0;
• B: entre 8,0 e 9,0;
• C: entre 7,0 e 8,0;
• D: entre 6,0 e 7,0;
• E: menor do que 6,0.*/

export default class Prova{
    private grade: number;

    public constructor(grade: number){
        this.grade = grade;
    }

    public alphabeticGrade(): string{
        if(this.grade >= 9)
            return "A";
        else if(this.grade >= 8)
            return "B";
        else if(this.grade >= 7)
            return "C";
        else if(this.grade >= 6)
            return "D";
        return "E";
    }
}