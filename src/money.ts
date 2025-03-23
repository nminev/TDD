// money.ts

export class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    equals(money: Money): boolean {
        const sameType = money instanceof this.constructor;
        return sameType && this.amount === money.amount;
    }
}

export class Dollar extends Money {

    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number) {
        return new Dollar(this.amount * multiplier);
    }
}

export class Franc extends Money {

    constructor(amount: number) {
        super(amount);
    }

    times(multiplier: number) {
        return new Franc(this.amount * multiplier);
    }
}