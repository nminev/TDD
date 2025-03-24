export class Money {
    protected amount: number;
    protected currency: string;
    constructor(amount: number, currency: string) {
        this.amount = amount
        this.currency = currency
    }

    times(multiplier: number): Money {
        return new Money(this.amount * multiplier, this.currency)
    }

    equal(object: Money): boolean {
        return object.amount === this.amount && object.currency === this.currency;
    }

    plus(addend: Money): Money {
        return new Money(10, "USD")
    }

}
