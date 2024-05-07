/*CAIXA SECRETA – Modele uma classe que represente uma caixa secreta. Para a instanciação de
um objeto, a classe dispõe de um único construtor que requer, como parâmetros, uma senha
alfanumérica e um segredo a ser guardado (ambos são cadeias de caracteres). Tanto a senha quanto
o segredo não podem ser alterados (set) e nem recuperados (get) pela interface do objeto.
Entretanto, deve ser provido um método que tente abrir a caixa, por meio de outra senha informada
como parâmetro. Caso as duas senhas sejam iguais, a caixa deve retornar o segredo. Do contrário, a
mensagem “Tente novamente!” deve ser retornada.*/

import secretBox from "./secretBox";
import prompt from "prompt-sync";

const input = prompt();
let box: secretBox = new secretBox("senha123", "segredo incrível");
let pass: string = box.tryOpen((input("Digite a senha: ")));

console.log(pass);

