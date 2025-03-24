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

    getCurrency(): string {
        return this.currency;
    }

    plus(money: Money): Money {
        return new Money(this.amount + money.amount, this.currency);
    }
}

export class Wallet {
    private currencies: Map<string, Money> = new Map();
    constructor() { }

    add(money: Money) {
        const currency = money.getCurrency();
        if (!this.currencies.has(currency)) {
            this.currencies.set(currency, new Money(0, currency));
        }
        const currentBalance = this.currencies.get(currency)!.plus(money);
        this.currencies.set(currency, currentBalance);
    }

    balance(currency: string): Money {
        return this.currencies.get(currency)!;
    }
}
