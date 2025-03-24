// import { } from "../src/money.ts"
import { assertEquals } from "jsr:@std/assert"

// 1. Quickly add a test.
// 2. Run all tests and see the new one fail
// 3. Make a little change
// 4. Run all tests and see them all succeed
// 5. Refactor to remove duplication

// TODO:
// [ ]  $5 + 10 CHF = $10 if rate is 2:1
// [ ]  $5 *2 = $10 - WIP

Deno.test("5 dollars times 2 is 10 dollars", () => {
  const five = new Dollar(5, "USD");
  const product = five.times(2)
  assertEquals(product.amount, 10)
})
