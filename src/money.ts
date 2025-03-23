// money.ts

export class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
}

export class Dollar extends Money {

    constructor(amount: number) {
        super(amount);
    }

    equals(dollar: Dollar): boolean {
        return this.amount === dollar.amount;
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}

export class Franc extends Money {

    constructor(amount: number) {
        super(amount);
    }

    equals(dollar: Franc): boolean {
        return this.amount === dollar.amount;
    }


    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }
}