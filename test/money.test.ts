import { Dollar, Franc } from "../src/money.ts"
import { assertEquals } from "jsr:@std/assert"

// 1. Quickly add a test.
// 2. Run all tests and see the new one fail
// 3. Make a little change
// 4. Run all tests and see them all succeed
// 5. Refactor to remove duplication

// TODO:
// [ ]  $5 + 10 CHF = $10 if rate is 2:1
// [X]  $5 * 2 = $10
// [X]  Make amount private
// [X]  Dollar side effects ?
// [ ]  Money rounding ?
// [X]  Equals ?
// [X]  5 CHF * 2 = 10 CHF
// [ ]  Dollar/Franc duplication

Deno.test("Test Dollar multiplication", () => {
  const five = new Dollar(5)
  assertEquals(five.equals(new Dollar(5)), true)
  assertEquals(five.times(2).equals(new Dollar(10)), true)
  assertEquals(five.times(3).equals(new Dollar(15)), true)
})

Deno.test("Test Franc multiplication", () => {
  const five = new Franc(5)
  assertEquals(five.equals(new Franc(5)), true)
  assertEquals(five.times(2).equals(new Franc(10)), true)
  assertEquals(five.times(3).equals(new Franc(15)), true)
})

Deno.test("Test equals Dollar", () => {
  assertEquals(new Dollar(5).equals(new Dollar(5)), true)
  assertEquals(new Dollar(5).equals(new Dollar(6)), false)
})

Deno.test("Test equals Franc", () => {
  assertEquals(new Franc(5).equals(new Franc(5)), true)
  assertEquals(new Franc(5).equals(new Franc(6)), false)
})

