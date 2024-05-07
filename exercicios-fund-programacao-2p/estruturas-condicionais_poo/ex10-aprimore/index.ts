/*Aprimore o uso do return no seguinte método. É possível manter a legibilidade e resumir o bloco
de instruções a uma única linha.
public isEven(): boolean {
 if (this.n % 2 == 0) {
 return true;
 } else {
 return false;
 }
}*/

import prompt from "prompt-sync";
import IsEven from "./isEven";

const input = prompt();
let iseven: IsEven = new IsEven(parseInt(input("Numero: ")));
console.log(iseven.getIsEven());


