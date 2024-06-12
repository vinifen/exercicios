/*Exercício 1
Defina a classe MatrizAleatoria. Objetos desta classe possuem, como principal atributo, uma
matriz inteira de l linhas e c colunas, sendo l e c fornecidos ao construtor. */

export default class MatrizAleatoria {
    public matriz: number[][];
    public l: number;
    public c: number;

    /*Exercício 2
    Faça com que essa matriz seja inicializada, no construtor, com inteiros aleatórios entre 0 e 99. A
    implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
    ser inferidos.*/
    constructor(l: number, c: number) {
        this.l = l;
        this.c = c;
        this.matriz = [];

        for (let i = 0; i < this.l; i++) {
            let linha: number[] = [];
            for (let j = 0; j < this.c; j++) {
                linha.push(Math.floor(Math.random() * 100));
            }
            this.matriz.push(linha);
        }
        console.log(this.matriz[0].length);
    }

    /*Exercício 3
    toString()
    Retorna uma cadeia de caracteres com a representação em texto da matriz. O método toString()
    é bastante importante em linguagens orientadas a objetos. Pesquise e entenda como ele funciona.*/
    
    public toString(){
        
    }

    /*Exercício 4
    somaLinhaColuna()
    Altera a matriz de forma que cada elemento seja obtido por meio da soma da sua respectiva linha
    com a coluna.*/

    public somaLinhaColuna(){
        
    }

    /*Exercício 5
    multiplicaPor()
    Multiplica a própria matriz por um inteiro n, fornecido como parâmetro.*/

    public multiplicaPor(){

    }

    /*Exercício 6
    somaCom()
    Retorna o resultado da operação M + N, sendo N fornecida como parâmetro. O retorno deve ser
    number[][].*/

    public somaCom(n: number[][]): number[][]{
        if(this.matriz.length != n.length)
            return [];
        
        if(this.matriz[0].length != n[0].length)
            return [];
        let aux: number [][] = [];
        for(let i = 0; i < this.l; i++){
            aux[i] = [];

            for(let y = 0; y < this.c; y++)
                aux[i][y] = this.matriz[i][y] + n[i][y];
        }
        return aux;
    }

    /*Exercício 7
    binaria()
    Retorna uma matriz binária de mesma ordem, que possui zero nas posições em que a matriz original
    tinha elementos pares e um nas posições em que havia elementos ímpares. O retorno deve ser
    number[][].*/

    public binaria(){

    }
    
}