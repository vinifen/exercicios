/*Exercício 2 – Jardim de Infância
Modele uma turma do jardim de infância, em que cada aluno é representado apenas pelo seu nome.
A turma possui, no máximo, 10 alunos. Implemente uma classe que permita:
(a) Adicionar um aluno na turma. Suponha que os nomes são digitados a partir de uma lista de
chamada que já está em ordem alfabética;
(b) A professora informar o número da chamada correspondente ao aluno e receber, como
retorno, o nome respectivo;
(c) A professora informar o nome do aluno e receber, como retorno, o número da chamada
correspondente;
(d) O retorno de uma listagem numerada de alunos.*/


export default class Turma{
    readonly TAM: number = 10;
    private alunos: string [];

    constructor(){
        this.alunos = [];
    }
    
    /*(a) Adicionar um aluno na turma. Suponha que os nomes são digitados a partir de uma lista de
    chamada que já está em ordem alfabética;*/
    public adicionarAluno(aluno: string): string{
        if(this.alunos.length > 10)
            return 'Sala cheia';
        this.alunos.push(aluno);
        console.log(this.alunos);
        return "aluno: " + aluno + " adicionado na posição " + this.alunos.length;
    }

    /*(b) A professora informar o número da chamada correspondente ao aluno e receber, como
    retorno, o nome respectivo;*/
    public alunoChamada(numero: number): string{
        if(numero <= 0 || numero > this.alunos.length)
            return 'Sem alunos nessa posição'
        return this.alunos[numero - 1];
    }

    /*(c) A professora informar o nome do aluno e receber, como retorno, o número da chamada
    correspondente;*/ 
    public chamadaNomeAluno(nome: string): string{
        for (let i = 0; i < this.alunos.length; i++){
            if (this.alunos[i].toLocaleLowerCase() === nome.toLocaleLowerCase()){
                
                return this.alunos[i] + " Está na posição " + (i+1);
            }
        }
        return "Sem alunos com esse nome";
    }

    /*(d) O retorno de uma listagem numerada de alunos.*/
    public listagemAlunos(): string[]{
        let listagem: string [] = [];
        for (let i = 1; i <= this.alunos.length; i++){
            listagem.push(this.alunos[i-1] + " posição " + i);
        }
        return listagem;
    }

    
}

