/*GENTÍLICO – Modele e implemente uma classe que resolva o problema de retornar o gentílico de um
estado a partir da respectiva sigla de unidade federativa (UF). Por exemplo, para "PR" deve-se
retornar “paranaense”. Considere todos os estados brasileiros, além de possíveis variações entre
minúsculas e maiúsculas.*/

export default class Gentilico{
    private estado: string;

    public constructor(estado: string){
        this.estado = estado;
    }

    public upperCase(){
        return this.estado.toUpperCase();
    }

    public getGentilico(): string{
        switch (this.upperCase()){
            case 'AC':
              return 'acreano';
            case 'AL':
              return 'alagoano';
            case 'AP':
              return 'amapaense';
            case 'AM':
              return 'amazonense';
            case 'BA':
              return 'baiano';
            case 'CE':
              return 'cearense';
            case 'DF':
              return 'brasiliense';
            case 'ES':
              return 'capixaba';
            case 'GO':
              return 'goiano';
            case 'MA':
              return 'maranhense';
            case 'MT':
              return 'mato-grossense';
            case 'MS':
              return 'mato-grossense do sul';
            case 'MG':
              return 'mineiro';
            case 'PA':
              return 'paraense';
            case 'PB':
              return 'paraibano';
            case 'PR':
              return 'paranaense';
            case 'PE':
              return 'pernambucano';
            case 'PI':
              return 'piauiense';
            case 'RJ':
              return 'carioca';
            case 'RN':
              return 'potiguar';
            case 'RS':
              return 'gaúcho';
            case 'RO':
              return 'rondoniano';
            case 'RR':
              return 'roraimense';
            case 'SC':
              return 'catarinense';
            case 'SP':
              return 'paulista';
            case 'SE':
              return 'sergipano';
            case 'TO':
              return 'tocantinense';
            default:
              return "Texto errado";
          }
        }

}

