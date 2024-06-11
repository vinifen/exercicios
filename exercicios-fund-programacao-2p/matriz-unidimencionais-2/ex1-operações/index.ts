/*Exercício 1
Implemente uma classe que, no construtor, gere uma matriz unidimensional de 15 inteiros aleatórios.
Forneça métodos para retornar:
(a) Se um número inteiro está presente na matriz;
(b) A quantidade de ocorrências de um número inteiro na matriz;
(c) A soma dos números inteiros da matriz;
(d) Uma listagem (cadeia de caracteres) contendo cada número e se ele é par ou ímpar*/


import PromptSync from "prompt-sync";
import Operacoes from "./Operacoes";

const prompt = PromptSync();
let aaa: Operacoes = new Operacoes();
console.log(aaa.InteirosNaMatriz());

console.log(aaa.quantidadeInteiros());
console.log(aaa.somaInteiros());
console.log(aaa.parImpar());