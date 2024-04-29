/*Implemente um método que determine se três valores reais formam um triângulo. Considere que,
para formar um triângulo, soma dos dois lados menores deve ultrapassar o lado maior.*/

export default class Triangle{
    readonly side1: number;
    readonly side2: number;
    readonly side3: number;

    constructor(side1: number, side2: number, side3: number){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public triangleValidator(): boolean{
        let longestSide: number = Math.max(this.side1, this.side2, this.side3);
        let sumSides: number = this.side1 + this.side2 + this.side3;
        sumSides -= longestSide;
        return sumSides > longestSide;
    }

    /*public triangleValidator(): string{
        if((this.side1 + this.side2) > this.side3 && (this.side1 + this.side3) > this.side2 && (this.side2 + this.side3) > this.side1)
            return "Is triangle.";
        return "Not triangle."
    }

    public getLongestSide(): number{
        return Math.max(this.side1, this.side2, this.side3);
    }

    public getSmallestSide(): number{
        return Math.min(this.side1, this.side2, this.side3);
    }

    public getMiddleSide(): number{
        return (this.side1 + this.side2 + this.side3) - (this.getLongestSide() + this.getSmallestSide());  
    }

    public triangleValidator(): string{
        if((this.getMiddleSide() + this.getSmallestSide()) > this.getLongestSide())
            return "Is triangle."
        return "Not triangle."
    }*/
}