import { Money } from "../src/money.ts"
import { assertEquals } from "jsr:@std/assert"

// 1. Quickly add a test.
// 2. Run all tests and see the new one fail
// 3. Make a little change
// 4. Run all tests and see them all succeed
// 5. Refactor to remove duplication

// TODO:
// [ ]  $5 + 10 CHF = $10 if rate is 2:1
// [ ]  Money rounding ? 
// [ ]  Compare Dollars to Francs ? 


Deno.test("Test different currency equality", () => {
  const fiveDollars = new Money(5, "USD");
  const tenFrancs = new Money(10, "CHF");

  const sum = fiveDollars.plus(tenFrancs); // Given CHF 2:1 Dollar

  assertEquals(sum.equal(new Money(10, "USD")), true)

})

Deno.test("Test Dollar multiplication", () => {
  const fiveDollars = new Money(5, "USD");
  const tenDollars = fiveDollars.times(2);

  assertEquals(fiveDollars.equal(new Money(5, "USD")), true)
  assertEquals(tenDollars.equal(new Money(10, "USD")), true)
})

Deno.test("Test Franc multiplication", () => {
  const fiveFrancs = new Money(5, "CHF");
  const tenFrancs = fiveFrancs.times(2);

  assertEquals(fiveFrancs.equal(new Money(5, "CHF")), true)
  assertEquals(tenFrancs.equal(new Money(10, "CHF")), true)
})

Deno.test("Test equality", () => {
  assertEquals(new Money(5, "USD").equal(new Money(5, "USD")), true)
})

Deno.test("Test non equality", () => {
  assertEquals(new Money(5, "USD").equal(new Money(6, "USD")), false)
})
