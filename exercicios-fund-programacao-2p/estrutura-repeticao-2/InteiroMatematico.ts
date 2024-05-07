/*Exercício 1
Defina a classe InteiroMatematico. Objetos desta classe possuem, como principal atributo, um
número inteiro n, fornecido ao construtor. Esse atributo possui métodos tanto de acesso quanto de
modificação. Sempre, entretanto, se assume |n| para internalizá-lo ao objeto.
A implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
ser inferidos.
Não utilize classes externas para cumprir os exercícios. O foco deve ser o benefício didático de como
resolver.*/

export default class InteiroMatematico{
    private n: number;

    constructor(n: number){
        this.n = n;
    }

    public getN(): number{
        return this.n;
    }

    public setN(n: number){
        this.n = n;
    }

    /*Exercício 2
    tabuada()
    Retorne uma cadeia de caracteres formatada com a tabuada de n*/

    public tabuada(): string{
        let string: string = String(this.n) + " ";
        let aux: number = this.n;
        for(let i: number = 2; i < 11; i++){
            aux = i * this.n;
            string = string + String(aux) + " ";
        }
        return string;
    }

    /*Exercício 3
    numeroDeDivisores()
    Retorne o número de divisores (inteiros e positivos) de n*/

    public numeroDivisores(): void {
        for (let i: number = 1; i <= this.n; i++){
            if(this.n % i == 0)
                console.log(i);    
        }
    }


    /*Exercício 4
    produtoPelaSoma()
    Retorne o produto de m por n, calculado por meio de somas sucessivas. O parâmetro m é outro
    número inteiro, considerado em módulo. Perceba a vantagem de tomar o menor dos dois números
    como multiplicador, pois calcular 2 x 10, nesse método, é menos custoso do que 10 x 2.*/

    public produtoPelaSoma(m: number): number{
        let i: number = 0;
        let aux: number = this.n;
        if (m > this.n){
            while (i < this.n){
                aux = m + m;
                i++;
            }
        }
        else{ 
            while (i < m){
                aux = this.n + this.n;
                i++;
            }
        } 
        return aux;
    }

    /*Exercício 5
    elevado()
    Retorne n
    expoente. O expoente é outro número inteiro, passado por parâmetro, e deve ser positivo.
    Caso expoente <= 0, retorne 0. Em caráter de simplificação, desconsiderou-se que 00
     é
    indeterminado. O cálculo precisa ser iterativo.*/
    
    public elevado(e: number): number {
        let aux: number = 1;
        for (let i: number = 1; i <= e; i++){
            aux *= this.n;
        } 
        return aux;
    }

    /*Exercício 6
    fatorial()
    Retorne n!, também calculado de maneira iterativa.*/

    public fatorial(): number {
        if(this.n == 0 || this.n == 1)
            return 1;
        let aux = 1;
        for(let i: number = 2; i <= this.n; i++){
           aux *= i;
        }
        return aux;
    }

    /*Exercício 7
    serieHarmonica()
    Calcule e retorne o valor de H, considerando que n representa o número de termos da série abaixo.
    H = 1 + (1/2) + (1/3) + (1/4) + ... + (1/n)*/
    
    public serieHarmonica(): number{
        let h = 0
        for(let i : number = 1; i < (this.n + 1); i++){
            h = h + (1/i);
        }
        return h;
    }

    /*Exercício 8
    fibonacci()
    Retorne o n-ézimo termo da série de Fibonacci. Saiba que os dois primeiros termos desta série são 1
    e 1 e os demais são gerados a partir da soma dos anteriores: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 (e,
    assim, sucessivamente). Caso n = 6, por exemplo, deve-se retornar 8. Utilize o retorno de -1, como
    indicativo de erro, caso n = 0.*/
    

    public fibonacci(): number{
        let x = 0;
        let y = 1;
        let z = 0;
        for(let i: number = 1; i <= this.n; i++){
            console.log("oi");
            z = x;
            x = y;
            y = z + y;
        }
        return x;
    }

    /*Exercício 9***
    tribonacci()
    Retorne o n-ézimo primeiro termo da série de Tribonacci. Um número Tribonacci assemelha-se a um
    número de Fibonacci, mas em vez de se começar com dois termos predefinidos, a sequência é
    iniciada com três termos já determinados, e cada termo posterior é a soma dos três termos
    precedentes: 1, 1, 2, 4, 7, 13, 24, 44, 81, 149 (e, assim, sucessivamente).*/

    public tribonacci(){
         return 0;
    }
    
    /*Exercício 10***
    isTriangular()
    Retorne se n é um número triangular, ou seja, formado pelo produto de três inteiros consecutivos.
    Exemplos: 6 = 1 x 2 x 3; 24 = 2 x 3 x 4. Cuide com os passos desnecessários. Observe que o retorno
    deve ser booleano.*/

    public isTriangular(): boolean {
        return false;
    }

    /*Exercício 11
    isSomaDosQuadrados()
    Repare a seguinte característica do número 3025: 30 + 25 = 55 e 55^2
     = 3025.
    Retorne se n possui essa mesma característica. Caso n seja menor do que 1.000 ou maior do que
    9.999, retorne falso de imediato.*/

    public isSomaDosQuadrados(): boolean {
        if(this.n < 1000 || this.n > 9999)
            return false;
        let característica: number = Math.trunc(this.n % 100) + Math.trunc(this.n / 100);
        /*let aux = 1;
        for (let i: number = 0; i < 2; i++){
            aux *= característica;
            console.log(aux);
        }
        if(aux == this.n)
            return true;
        return true; */
        if (característica * característica == this.n)
            return true; 
        return false;
    }
}