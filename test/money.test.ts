import { Money, Wallet } from "../src/money.ts"
import { assertEquals } from "jsr:@std/assert"

// 1. Quickly add a test.
// 2. Run all tests and see the new one fail
// 3. Make a little change
// 4. Run all tests and see them all succeed
// 5. Refactor to remove duplication

// TODO:
// [ ]  $5 + 10 CHF = $10 if rate is 2:1
// [ ]  $5 + $5 = $10 - WIP
// [ ]  What I own in a specific curreny
// [ ]  What is my overall balance in a specific currency

Deno.test("Test Dollar balance", () => {
  const fiveDollars: Money = new Money(5, "USD")
  const wallet: Wallet = new Wallet()
  wallet.add(fiveDollars)
  wallet.add(fiveDollars)
  console.log(wallet.balance("USD"))
  assertEquals(wallet.balance("USD").equals(new Money(10, "USD")), true)
})

// Deno.test("Test Dollar addition", () => {
//   const fiveDollars: Money = new Money(5, "USD")
//   const tenFranc: Money = new Money(10, "CHF")
//   const wallet: Wallet = new Wallet()
//   wallet.add(fiveDollars)
//   wallet.add(fiveDollars)
//   wallet.add(tenFranc) // Given its 2:1, this should be 5 USD
//   assertEquals(wallet.total("USD").equals(15), true)
// })


Deno.test("Test Dollar multiplication", () => {
  const fiveDollars = new Money(5, "USD")
  assertEquals(fiveDollars.equals(new Money(5, "USD")), true)
  assertEquals(fiveDollars.times(2).equals(new Money(10, "USD")), true)
  assertEquals(fiveDollars.times(3).equals(new Money(15, "USD")), true)
  const fiveFrancs = new Money(5, "CHF")
  assertEquals(fiveFrancs.equals(new Money(5, "CHF")), true)
  assertEquals(fiveFrancs.times(2).equals(new Money(10, "CHF")), true)
  assertEquals(fiveFrancs.times(3).equals(new Money(15, "CHF")), true)
})

Deno.test("Test equals", () => {
  assertEquals(new Money(5, "USD").equals(new Money(5, "USD")), true)
  assertEquals(new Money(5, "USD").equals(new Money(6, "USD")), false)
  assertEquals(new Money(5, "CHF").equals(new Money(5, "CHF")), true)
  assertEquals(new Money(5, "CHF").equals(new Money(6, "CHF")), false)
  assertEquals(new Money(5, "USD").equals(new Money(5, "CHF")), false)
})

