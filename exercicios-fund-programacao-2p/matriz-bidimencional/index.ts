import PromptSync from "prompt-sync";
import MatrizAleatoria from "./MatrizAleatoria";

let prompt = PromptSync();
let matriz: MatrizAleatoria = new MatrizAleatoria(5, 5);

console.log(matriz);