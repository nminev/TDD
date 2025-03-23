import { Dollar, Franc } from '../src/money'

// 1. Quickly add a test.
// 2. Run all tests and see the new one fail
// 3. Make a little change
// 4. Run all tests and see them all succeed
// 5. Refactor to remove duplication

// TODO:
// [ ]  $5 + 10 CHF = $10 if rate is 2:1
// [X]  $5 * 2 = $10
// [ ]  Make amount private
// [X]  Dollar side effects ?
// [ ]  Money rounding ?
// [X]  Equals ?
// [ ]  5 CHF * 2 = 10 CHF

test('Test Dollar multiplication', () => {
  const five = new Dollar(5)
  expect(five.equals(new Dollar(5))).toBe(true)
  expect(five.times(2).equals(new Dollar(10))).toBe(true)
  expect(five.times(3).equals(new Dollar(15))).toBe(true)
})


test('Test Franc multiplication', () => {
  const five = new Franc(5)
  expect(five.equals(new Franc(5))).toBe(true)
  expect(five.times(2).equals(new Franc(10))).toBe(true)
  expect(five.times(3).equals(new Franc(15))).toBe(true)
})
test('Test $5 equals $5', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
})

test('Test $5 does not equal $6', () => {
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
})
