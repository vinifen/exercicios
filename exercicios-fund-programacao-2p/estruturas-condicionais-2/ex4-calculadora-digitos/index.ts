/*Modele e implemente uma calculadora que retorne quantos caracteres uma pessoa digita por minuto.
A quantidade de caracteres e o tempo transcorrido em segundos, ambos inteiros, são atributos da
classe. Se uma pessoa demora 120 segundos para digitar 300 caracteres, a velocidade de digitação
é de 150 caracteres por minuto.
Ofereça dois construtores, sendo um para inicializar os atributos com zero e outro para fornecer os
respectivos valores. Realize um teste, pedindo para que seja retornada a velocidade de digitação
para um objeto recém criado, considerando o construtor sem parâmetros. Altere a implementação
para que o retorno, nesse caso, seja zero.*/ 


import Calculator from "./Calculator";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const typingSpeed1: Calculator = new Calculator(parseInt(prompt('Number of characters: ')), parseInt(prompt('Time to write characters: ')));
const typingSpeed2: Calculator = new Calculator();
console.log(typingSpeed1.calculator());
console.log(typingSpeed2.calculator());