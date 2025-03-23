// money.ts

export class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(dollar: Dollar): any {
        return this.amount === dollar.amount;
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}