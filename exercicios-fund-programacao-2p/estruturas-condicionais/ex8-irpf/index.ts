/*IRPF – Com base nas regras do IRPF do ano corrente, implemente uma classe para a qual seja
informada a base de cálculo de um contribuinte. A classe deve prover métodos para retornar a
alíquota e o valor do imposto devido. Revise a resolução diante do princípio da responsabilidade
única.*/

import prompt from "prompt-sync";
import IRPF from "./IRPF";

const input = prompt();
let contribuinte: IRPF = new IRPF(parseFloat(input("Base de cálculo: ")));
console.log(contribuinte.toString());


