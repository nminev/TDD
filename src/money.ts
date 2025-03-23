// money.ts

export class Money {
    protected amount: number;
    private currency: string;

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency);
    }

    equals(money: Money): boolean {
        const sameType = money instanceof this.constructor;
        return sameType && this.amount === money.amount;
    }
}

export class Dollar extends Money {

    constructor(amount: number) {
        super(amount, "USD");
    }
}

export class Franc extends Money {

    constructor(amount: number) {
        super(amount, "CHF");
    }
}