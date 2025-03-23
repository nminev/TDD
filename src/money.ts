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
        const sameType = this.currency === money.currency;
        return sameType && this.amount === money.amount;
    }
}
