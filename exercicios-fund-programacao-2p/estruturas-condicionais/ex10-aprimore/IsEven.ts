/*Aprimore o uso do return no seguinte método. É possível manter a legibilidade e resumir o bloco
de instruções a uma única linha.
public isEven(): boolean {
 if (this.n % 2 == 0) {
 return true;
 } else {
 return false;
 }
}*/

export default class IsEven{
    private num: number;

    public constructor(num: number){
        this.num = num;
    }

    public getIsEven(): boolean{
        return (this.num % 2) == 0;
    }
}