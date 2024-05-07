export default class Relogio{
    private hours: number;
    private minute: number;

    constructor (hours: number, minute: number){
        this.hours = hours;
        this.minute = minute;
    }

    public getHoursPointer(): number{
        return (((this.hours * 60) + this.minute )*0.5) % 360;
    }

    public getMinutePointer(): number{
        return (this.minute * 6);
    }

    public getPointers(): string{
        return "Ponteiro de horas: " + this.getHoursPointer() + "º" + "\n" +
               "Ponteiro de minutos: " + this.getMinutePointer() + "º";
    }
}