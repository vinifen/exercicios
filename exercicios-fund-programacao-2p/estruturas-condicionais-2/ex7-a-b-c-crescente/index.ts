/*Implemente um trecho de código que ordene três variáveis inteiras, denominadas a, b e c, de modo
que, ao final: a ≤ b ≤ c. Três estruturas condicionais if (todas sem else) são suficientes.*/


import PromptSync from "prompt-sync";
const prompt = PromptSync();
let a: number = parseInt(prompt('A: ')),
    b: number = parseInt(prompt('B: ')),
    c: number = parseInt(prompt('C: ')),
    cont: number = 0;

    if(a > b){
        cont = b;
        b = a;
        a = cont;
    }

    if(b > c){
        cont = c;
        c = b;
        b = cont;
    }

    if(a > b){
        cont = a;
        a = b;
        b = cont;
    }

    console.log ("A: " + a + " B: " + b + " C: " + c);