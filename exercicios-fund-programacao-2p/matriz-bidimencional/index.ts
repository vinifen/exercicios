import PromptSync from "prompt-sync";
import MatrizAleatoria from "./MatrizAleatoria";

let prompt = PromptSync();
let matriz: MatrizAleatoria = new MatrizAleatoria(5, 5);
let matrizExemplo: number [][] = 
[
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]
console.log(matriz);

console.log(matriz.somaCom(matrizExemplo));