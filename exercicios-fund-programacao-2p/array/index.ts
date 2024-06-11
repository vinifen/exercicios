import InteiroMatematico from "./InteiroMatematico";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
let bb: InteiroMatematico = new InteiroMatematico(2);
let aa: number [] = bb.serieDeFibonacci();
console.log(aa);