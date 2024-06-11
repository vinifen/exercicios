/*Exercício 1
Defina a classe MatrizAleatoria. Objetos desta classe possuem, como principal atributo, uma
matriz inteira de l linhas e c colunas, sendo l e c fornecidos ao construtor. */

export default class MatrizAleatoria {
    public matriz: number[][];

    /*Exercício 2
    Faça com que essa matriz seja inicializada, no construtor, com inteiros aleatórios entre 0 e 99. A
    implementação dos demais métodos é descrita na sequência. Os parâmetros e o retorno precisam
    ser inferidos.*/
    constructor(l: number, c: number) {
        this.matriz = this.criarMatrizAleatoria(l, c);
    }

    public criarMatrizAleatoria(l: number, c: number): number[][] {
        let matriz: number[][] = [];
        for (let i = 0; i < l; i++) {
            let linha: number[] = [];
            for (let j = 0; j < c; j++) {
                linha.push(Math.floor(Math.random() * 100));
            }
            matriz.push(linha);
        }
        console.log(matriz[0].length);
        return matriz;
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
        let contL = 0;
        let contC = 0;
        for(let i = 0; i < this.matriz.length; i++){
            for(let y = 0; y < this.matriz[i].length; y++){
                let linha = this.matriz[i][y];
                contL += linha;
            }
        }

        for(let i = 0; i < this.matriz.length; i++){
            let coluna = this.matriz[i];
            for(let y = 0; y < this.matriz.length; y++){
                let linha = this.matriz[i][y];
            }
        }
    }
    
}