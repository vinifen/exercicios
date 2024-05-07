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

export default class Person{
    readonly weight: number;
    
    
    constructor(weight: number){
        this.weight = weight;
    }

    public weightPlanet(planet: number): number{
        switch (planet){
            case 1: return this.weight*0.37;
            case 2: return this.weight*0.88;
            case 3: return this.weight*1.00;
            case 4: return this.weight*0.38;
            case 5: return this.weight*2.64;
            case 6: return this.weight*1.15;
            case 7: return this.weight*1.17;
            case 8: return this.weight*1.18;
            case 9: return this.weight*0.11;
            default: return this.weight*1.00;
        }
    }
}