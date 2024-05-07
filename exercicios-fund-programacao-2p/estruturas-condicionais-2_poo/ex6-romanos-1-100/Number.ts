/*Amplie solução anterior para atender a uma escala de 1 a 100. Considere que avaliar cada um dos
101 casos possíveis não consiste em uma boa solução.*/

export default class Number{
    readonly num: number;

    public constructor(num: number){
        this.num = num;
    }

    public romanNumberHundred(): string{
        switch (Math.trunc(this.num / 10)){
            case 0: return "";
            case 1: return "X";
            case 2: return "XX";
            case 3: return "XXX";
            case 4: return "XL";
            case 5: return "L";
            case 6: return "LX";
            case 7: return "LXX";
            case 8: return "LXXX";
            case 9: return "XC";
            case 10: return "C";
            default: return "-1";
        }
    }


    public romanNumberTen(): string{
        switch (this.num % 10){
            case 1: return "I";
            case 2: return "II";
            case 3: return "III";
            case 4: return "IV";
            case 5: return "V";
            case 6: return "VI";
            case 7: return "VII";
            case 8: return "VIII";
            case 9: return "IX";
            default: return "";
        }
    }

    public toString(): string{
        if(this.num <= 0 || this.num > 100)
            return "Fora do intervalo.";
        return "Numero romano: " + this.romanNumberHundred() + this.romanNumberTen();
    }
}