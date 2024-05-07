/*ACADÊMICO – Implemente uma classe que abstraia um acadêmico, considerando a nota final e a
frequência, obrigatoriamente informados no construtor. A frequência é um número real entre 0,0 e 1,0
(onde 0,8 corresponde a uma frequência de 80%).
Disponha de um método que retorne a situação desse aluno (em termos de “Aprovado”, “Reprovado”
e “Sem Presença Obrigatória”), diante dos requisitos:
• Para aprovação: nota maior ou igual a 6,0 e frequência mínima de 75%;
• Para cursar a disciplina sem presença obrigatória: reprovado com nota maior ou igual a 4,0 e
com frequência mínima de 75%.*/

export default class Academic{
    finalGrade: number;
    frequency: number;

    public constructor(finalGrade: number, frequency: number){
        this.finalGrade = finalGrade;
        this.frequency = frequency;
    }

    public studentSituation(): string{
        if(this.finalGrade >= 6.0 && this.frequency >= 0.75){
            return "Aluno aprovado."
        }
        else if(this.finalGrade >= 4.0 && this.frequency >= 0.75){
            return "Sem presença obrigatória."
        }
        else{
            return "Aluno reprovado."
        }
         
    }
}
