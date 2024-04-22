/*ELEITOR – Modele uma classe que represente um eleitor. Implemente de um método que determine
se o voto é: obrigatório, facultativo ou não permitido.*/

export default class Voter {
    readonly age: number;

    public constructor(age: number){
        this.age = age;
    }

    public defineMandatory(): string{
        if (this.age < 16)
            return "O voto não é permitido.";
        if (this.age >=16 && this.age < 18)
            return "O voto é facultativo.";
        if (this.age >= 18 && this.age < 70) 
            return "O voto é obrigatório.";
        return "O voto é facultativo.";
    }
}