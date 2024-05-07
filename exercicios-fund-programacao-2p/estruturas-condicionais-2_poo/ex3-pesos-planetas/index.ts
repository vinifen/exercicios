/*Resolva o problema de calcular o peso de uma pessoa, caso estivesse em outro planeta do Sistema
Solar. O método deve receber um número inteiro que representa o planeta escolhido (conforme
ordem abaixo). O retorno é o peso, em quilos, da pessoa nesse planeta.
Um quilo na Terra equivale, em outros planetas, a:
1. Mercúrio: 0,37 kg;
2. Vênus: 0,88 kg;
3. Terra: 1,00 kg;
4. Marte: 0,38 kg;
5. Júpiter: 2,64 kg;
6. Saturno: 1,15 kg;
7. Urano: 1,17 kg;
8. Netuno: 1,18 kg;
9. Plutão: 0,11 kg (como foi rebaixado a planeta-anão, é facultativo).
Assim, uma pessoa de 60kg, por exemplo, pesaria 22,2 kg em Mercúrio. Isso é igual a 60 kg x 0,37.
Caso um planeta inválido seja escolhido, retorne o próprio peso da pessoa na Terra.*/

import Person from "./Person";
import PromptSync from "prompt-sync";

const prompt = PromptSync(),
    weight: number = parseInt(prompt('Person weight: ')),
    joao: Person = new Person(weight),
    planet: number = parseInt(prompt('Choose planet: '));
console.log(joao.weightPlanet(planet));
