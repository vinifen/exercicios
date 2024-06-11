import PromptSync from "prompt-sync";
import Operacoes from "./Operacoes";

const prompt = PromptSync();
let aaa: Operacoes = new Operacoes();
console.log(aaa.InteirosNaMatriz());

console.log(aaa.quantidadeInteiros());
console.log(aaa.somaInteiros());
console.log(aaa.parImpar());