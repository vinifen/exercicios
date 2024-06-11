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

    public InteirosNaMatriz(): boolean{
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                return true;
            }
        }
        return false;
    }

    public quantidadeInteiros(): number {
        let cont: number = 0;
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                cont++;
            }
        }
        return cont;
    }

    public somaInteiros(): number {
        let cont: number = 0;
        for(let i = 0; i < this.matriz.length; i++){
            if(Number.isInteger(this.matriz[i])){
                cont += this.matriz[i];
            }
        }
        return cont;
    }

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