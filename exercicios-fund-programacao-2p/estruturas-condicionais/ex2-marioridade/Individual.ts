/*MAIORIDADE – Modele uma classe que represente um indivíduo. Implemente um método que
determine se a maioridade já foi atingida.*/

export default class Indiviual{
    private age: number;
    public constructor(age: number){
        this.age = age;
    }

    public getAge(){
        return this.age;
    }

    public setAge(age: number){
        this.age = age;
    }

    public ageCompare(): string{
        if (this.age >= 18)
            return "A marioridade já foi atingida";
        return "A marioridade não foi atingida"
    }
}