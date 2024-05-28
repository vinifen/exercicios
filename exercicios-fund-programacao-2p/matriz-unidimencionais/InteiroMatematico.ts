export default class InteiroMatematico{
    n: number;
    constructor(n: number){
        this.n = n;
    }

    /*Exercício 1
    getDivisores()
    Aprimoramento de numeroDeDivisores().
    Retorne todos os divisores (inteiros e positivos) de n.*/
    
    public getDivisores(): number[]{
        let cont: number [] = [];
        const nMeio: number = this.n / 2;
        for(let i = 1; i <= nMeio; i++){
            if(this.n % i == 0){
                cont.push(i);
            }
        }
        cont.push(this.n);
        return cont;
    }

    /*Exercício 2
    serieDeFibonacci()
    Aprimoramento de fibonacci().
    Retorne os n primeiros termos da série de Fibonacci. Saiba que os dois primeiros termos desta série
    são 1 e 1 e os demais são gerados a partir da soma dos anteriores: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
    (e, assim, sucessivamente). Caso n = 6, por exemplo, deve-se retornar até o 8. Utilize o retorno de
    matriz unidimensional vazia, ou seja [ ], como indicativo de erro, caso n = 0.*/

    public serieDeFibonacci(): number []{
        let fibonacci: number [] = [0, 1];
        for(let i = 2; i <= this.n; i++){
            let cont: number = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(cont);
        }
        return fibonacci;
    }

    /*Exercício 3
    serieDeTribonacci()
    Aprimoramento de tribonacci().
    Retorne os n primeiros termos da série de Tribonacci. Um número Tribonacci assemelha-se a um
    número de Fibonacci, mas em vez de se começar com dois termos predefinidos, a sequência é
    iniciada com três termos já determinados, e cada termo posterior é a soma dos três termos
    precedentes: 1, 1, 2, 4, 7, 13, 24, 44, 81, 149 (e, assim, sucessivamente).*/

    public serieDeTribonacci(): number [] {
        let tribonacci: number [] = [0, 1, 1];
        for(let i = 3; i <= this.n; i++){
            let cont: number = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i -3];
            tribonacci.push(cont);
        }
        return tribonacci;
    }
    
    /*Exercício 4
    getPrimos()
    Aprimoramento de isPrimoEficiente().
    Retorne n primeiros números primos. Utilize o retorno de matriz unidimensional vazia, como indicativo
    de erro, caso n = 0.*/

    public getPrimos(): number [] {
        let cont: number [] = [];
        for (let i = 2; i <= 9000 + 1; i++){
            let raizI: number = Math.sqrt(i);
            let y = 1
            console.log(i);
            while( y <= raizI){
                y++
                if(y > raizI)
                    cont.push(i);
                if(i % y == 0){
                    y = raizI + 1;
                }
                if(cont.length == this.n){
                    i = 9999999;
                }
            }
        }
        return cont;
    }
    
    
}