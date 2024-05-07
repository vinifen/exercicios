import Carro from "./Carro";

let fusca: Carro = new Carro(40);
fusca.toFuel(30);
console.log(fusca.getQuantTanque());
fusca.toFuel(15);
console.log(fusca.getQuantTanque());
console.log(fusca.toString());