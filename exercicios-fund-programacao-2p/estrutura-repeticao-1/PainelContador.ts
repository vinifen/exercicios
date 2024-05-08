/*Exercício 1
Defina a classe PainelContador:
(a) Objetos desta classe possuem, como atributos, os limites inferior e superior (inteiros), de um
intervalo fechado de contagem;
(b) Os atributos são obrigatoriamente fornecidos ao construtor;
(c) Métodos acessadores e modificadores dos atributos devem ser implementados;
(d) Qualquer modificação nesses atributos precisa passar por um método privado de validação,
que troca os valores caso o limite superior seja menor do que o limite inferior;
(e) A implementação dos demais métodos é descrita na sequência;
(f) PainelContador é uma classe de interface. Portanto, imprime mensagens na tela.*/

export default class PainelContador{
    private minimum: number;
    private maximum: number;

    public constructor(minimum: number, maximum: number){
        this.minimum = minimum;
        this.maximum = maximum;
    }

    public getMinimum(): number {
        return this.minimum;
    }

    public setMinimum(minimum: number): void{
        this.minimum = minimum;
    }

    public getMaximum(): number {
        return this.maximum;
    }

    public setMaximum(maximum: number): void{
        this.maximum = maximum;
    }

    /*Exercício 2
    contagem()
    Realiza a contagem, em ordem crescente, do limite inferior até o superior. Por exemplo, caso os
    limites sejam 1 e 10*/ 

    public contagem(): number[] {
        let numeros: number[] = [];
        for (let i: number = this.minimum; i <= this.maximum; i++) {
            numeros.push(i);
        }
        return numeros;
    }

    /*Exercício 3
    contagemDecrescente()
    Idem, mas realizando a contagem decrescente, como:*/

    public contagemDecrescente(): number []{
        let numeros: number[] = [];
        for(let i: number = this.maximum; i >= this.minimum; i--){
            numeros.push(i);
        }
        return numeros;
    }

    /*Exercício 4
    contagemPares()
    Passa apenas pelos números pares da contagem*/

    public contagemPares(): number []{
        let numeros: number[] = [];
        let i: number = this.minimum;
        /*if(i % 2 == 0){
            do{ numeros.push(i);
                i += 2;   
            }while (i <= this.maximum);
            return numeros;
        }
        i++
        do{ numeros.push(i);
            i += 2;
        }while (i <= this.maximum);
        return numeros;*/

        if(i % 2 != 0)
            i++
        while (i <= this.maximum){
            numeros.push(i);
            i += 2;
        }
        return numeros;
    }

    /*Exercício 5
    contagemImpares()
    Idem para os ímpares*/

    public contagemImpares(): number []{
        let numeros: number[] = [];
        let i: number = this.minimum;
        if(i % 2 != 0){
            do{ numeros.push(i);
                i += 2;   
            }while (i <= this.maximum);
            return numeros;
        }
        i++
        do{ numeros.push(i);
            i += 2;
        }while (i <= this.maximum);
        return numeros;
    }

    /*Exercício 6
    contagemPasso()
    Faz a contagem incrementando, a cada iteração, o valor referente ao passo. Trata-se de um inteiro
    passado como parâmetro ao método. Supondo que o passo fosse 3, teria-se a contagem:
    1
    4
    7
    10
    O próximo número, caso não ultrapassasse o limite superior, seria 13.*/

    public contagemPasso(passo: number): number[] {
        let numeros: number[] = [];
        for (let i: number = this.minimum; i <= this.maximum; i += passo) {
            numeros.push(i);
        }
        return numeros;
    }

    /*Exercício 7
    contagemOmitindo()
    A contagem é realizada omitindo os múltiplos de um número inteiro passado como parâmetro ao
    método. Por exemplo, se o número informado fosse o 3*/

    public contagemOmitindo(omitido: number): number[] {
        let numeros: number[] = [];
        for (let i: number = this.minimum; i <= this.maximum; i++) {
            if(i % omitido)
                numeros.push(i);
        }
        return numeros;
    }

}