/*Implemente um método que determine se três valores reais formam um triângulo. Considere que,
para formar um triângulo, soma dos dois lados menores deve ultrapassar o lado maior.*/

import Triangle from "./Triangle";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const triangulo: Triangle = new Triangle(parseInt(prompt('First triangle side: ')), parseInt(prompt('Second triangle side: ')), parseInt(prompt('Third triangle side: ')));
console.log(triangulo.triangleValidator());