/*Modele e implemente uma classe que consiga retornar se um CPF é válido. O CPF é representado
por dois atributos inteiros: o primeiro, com nove dígitos, é o número do CPF propriamente dito; e o
segundo são os dois dígitos verificadores. O método de validação deve retornar true ou false.*/

import CPF from "./cpf";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const mycpf: CPF = new CPF(prompt("Numero inicial cpf (9 digitos): "), prompt("Numero de verificação (2 digitos): "));
console.log(mycpf.verificationCPF());
