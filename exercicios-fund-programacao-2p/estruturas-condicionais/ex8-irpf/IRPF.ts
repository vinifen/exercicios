/*IRPF – Com base nas regras do IRPF do ano corrente, implemente uma classe para a qual seja
informada a base de cálculo de um contribuinte. A classe deve prover métodos para retornar a
alíquota e o valor do imposto devido. Revise a resolução diante do princípio da responsabilidade
única.*/

export default class IRPF{
    readonly baseCalc: number;

    public constructor(baseCalc: number){
        this.baseCalc = baseCalc;
    }

    public getAliquot(): number{
        if (this.baseCalc <= 2259.20)
            return 0;
        else if (this.baseCalc >= 2259.21 && this.baseCalc <= 2826.65)
            return 7.5;
        else if (this.baseCalc >= 2826.66 && this.baseCalc <= 3751.05)
            return 15;
        else if (this.baseCalc >= 3751.05 && this.baseCalc <= 4664.68)
            return 22.5;
        return 27.5;
    }

    public getTax(): number{
        return this.baseCalc*(this.getAliquot()/100);
    }

    public toString(): string{
        return "Alíquota aplicada: " + this.getAliquot() + "%" + "\n" +
               "Valor do imposto devido: " + this.getTax().toFixed(2);
    }
}