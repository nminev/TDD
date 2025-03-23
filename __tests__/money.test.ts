import { Dollar } from '../src/money'

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

test('Test multiplication', () => {
  const five = new Dollar(5)
  const ten = five.times(2)
  const fifteen = five.times(3)
  expect(five.amount).toBe(5)
  expect(ten.amount).toBe(10)
  expect(fifteen.amount).toBe(15)
})