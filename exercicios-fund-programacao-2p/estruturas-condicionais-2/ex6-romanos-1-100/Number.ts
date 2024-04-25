/*Amplie solução anterior para atender a uma escala de 1 a 100. Considere que avaliar cada um dos
101 casos possíveis não consiste em uma boa solução.*/

export default class Number{
    readonly num: number;
    private numberRoman: string = '';

    public constructor(num: number){
        this.num = num;
    }

    public romanNumber(): string{
        if (this.num == 10)
            return "X";
        else if(this.num == 100)
            return "L";
        else if(this.num >= 90)
            this.numberRoman = "XC";
        else if(this.num >= 80)
            this.numberRoman = "LXXX"; 
        else if(this.num >= 70)
            this.numberRoman = "LXX";
        else if(this.num >= 60)
            this.numberRoman = "LX";
        else if(this.num >= 50)
            this.numberRoman = "L";
        else if(this.num >= 40)
            this.numberRoman = "XL";
        else if(this.num >= 30)
            this.numberRoman = "XXX";
        else if(this.num >= 20)
            this.numberRoman = "XX";
        else if(this.num >= 10)
            this.numberRoman = "X";
        if((this.num % 10) == 9 || this.num == 9)
            return this.numberRoman += "IX";
        else if((this.num % 10) == 8 || this.num == 8)
            return this.numberRoman += "VIII";
        else if((this.num % 10) == 7 || this.num == 7)
            return this.numberRoman += "VII";
        else if((this.num % 10) == 6 || this.num == 6)
            return this.numberRoman += "VI";
        else if((this.num % 10) == 5 || this.num == 5)
            return this.numberRoman += "V";
        else if((this.num % 10) == 4 || this.num == 4)
            return this.numberRoman += "IV";
        else if((this.num % 10) == 3 || this.num == 3)
            return this.numberRoman += "III";
        else if((this.num % 10) == 2 || this.num == 2)
            return this.numberRoman += "II";
        else if((this.num % 10) == 1 || this.num == 1)
            return this.numberRoman += "I";
        return "Fora do intervalo";
    }
}