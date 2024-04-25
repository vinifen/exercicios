/*Modele e implemente uma classe que resolva o problema de transformar um número, entre 1 e 10,
em algarismos romanos. Caso o número fornecido esteja fora desse intervalo, retorne a mensagem:
“Fora do intervalo”.*/

export default class Number{
    readonly num: number;

    public constructor(num: number){
        this.num = num;
    }

    public romanNumber(): string{
        switch (this.num){
            case 1: return "I";
            case 2: return "II";
            case 3: return "III";
            case 4: return "IV";
            case 5: return "V";
            case 6: return "VI";
            case 7: return "VII";
            case 8: return "VIII";
            case 9: return "IX";
            case 10: return "X";
            default: return "Fora do intervalo";
        }
    }
}