/*Modele e implemente uma classe que consiga retornar se um CPF é válido. O CPF é representado
por dois atributos inteiros: o primeiro, com nove dígitos, é o número do CPF propriamente dito; e o
segundo são os dois dígitos verificadores. O método de validação deve retornar true ou false.*/

export default class CPF{
    readonly cpfNumber: string;
    readonly verificationNumber: string;

    constructor (cpfNumber: string, verificationNumber: string){
        this.cpfNumber = cpfNumber;
        this.verificationNumber = verificationNumber;
    }

    public verificationCPF(): boolean{
        return this.cpfNumber.length == 9 && this.verificationNumber.length == 2;
    }
}