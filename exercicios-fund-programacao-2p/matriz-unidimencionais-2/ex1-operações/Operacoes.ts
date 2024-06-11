/*Exercício 1
Implemente uma classe que, no construtor, gere uma matriz unidimensional de 15 inteiros aleatórios.
Forneça métodos para retornar:
(a) Se um número inteiro está presente na matriz;
(b) A quantidade de ocorrências de um número inteiro na matriz;
(c) A soma dos números inteiros da matriz;
(d) Uma listagem (cadeia de caracteres) contendo cada número e se ele é par ou ímpar*/


export default class Operacoes{
    matriz: number [];
    constructor(){
        let matriz: number [] = [];
        for (let i = 0; i < 7; i++){
            matriz.push(Math.round(Math.random() * 100));
        }
        for (let i = 0; i < 8; i++){
            matriz.push(Math.random() * 100);
        }
        this.matriz = matriz;
    }

    //(a) Se um número inteiro está presente na matriz;
    public InteirosNaMatriz(): boolean{
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                return true;
            }
        }
        return false;
    }

    //(b) A quantidade de ocorrências de um número inteiro na matriz;
    public quantidadeInteiros(): number {
        let cont: number = 0;
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                cont++;
            }
        }
        return cont;
    }

    //(c) A soma dos números inteiros da matriz;
    public somaInteiros(): number {
        let cont: number = 0;
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                cont += this.matriz[i];
            }
        }
        return cont;
    }
    
    //(d) Uma listagem (cadeia de caracteres) contendo cada número e se ele é par ou ímpar
    public parImpar(): string [] {
        let stringParImpar: string [] = [];
        for(let i = 0; i < this.matriz.length; i++){
            if(this.matriz[i] % 2 == 0){
                const par: string = "par: " + this.matriz[i];
                stringParImpar.push(par);
            }
            if(this.matriz[i] % 2 != 0){
                const par: string = "impar: " + this.matriz[i];
                stringParImpar.push(par);
            }
        }
        return stringParImpar;
    }
}