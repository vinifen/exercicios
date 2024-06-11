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


import PromptSync from "prompt-sync";
import Turma from "./Turma";

const prompt = PromptSync();
let jardim: Turma = new Turma();

console.log(jardim.adicionarAluno("Ana"));
console.log(jardim.adicionarAluno("Carlos"));
console.log(jardim.adicionarAluno("Jair"));
console.log(jardim.adicionarAluno("vinicius"));

console.log(jardim.alunoChamada(1));
console.log(jardim.alunoChamada(2));
console.log(jardim.alunoChamada(3));


console.log(jardim.chamadaNomeAluno("sapinho"));
console.log(jardim.chamadaNomeAluno("vilela"));
console.log(jardim.chamadaNomeAluno("bolsonaro"));

console.log(jardim.listagemAlunos());