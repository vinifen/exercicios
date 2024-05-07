export default class Carro {
    readonly TAM: number;
    private quantTanque: number = 0;
  
    public constructor(TAM: number){
      this.TAM = TAM;
    }
    
    public getQuantTanque(){
      return this.quantTanque;
    }
    
    public fillTank(): void{
      this.quantTanque = this.TAM;
    }
  
    /*public toFuel(liter: number): void {
      this.quantTanque += liter;
      if (this.quantTanque > this.TAM){
        this.quantTanque = this.TAM;
      }
    }*/
    public toFuel(liter: number): void {
      this.quantTanque = Math.min(this.TAM, this.quantTanque + liter)
    }
    
    public percFuel(): number{
      return (this.quantTanque / this.TAM)*100;
    }
  
    public toString(): string{
      return "Quantidade combustivel no tanque em litros: " + this.quantTanque.toFixed(2) + "\n"
      + "Capacidade de combustivel: " + this.TAM + "\n" +
        "Percentual cheio: " + this.percFuel().toFixed(2);
    }
  }