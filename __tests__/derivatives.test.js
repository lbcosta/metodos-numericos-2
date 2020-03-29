const FiniteDifference = require("../src/FiniteDifference");

const data = {
  fn: x => 5 * x ** 6,
  delta: 0.00001,
  order: 1,
  x: 2
};

FiniteDifference.setup(data);

/*
 * FORWARD
 */
test("if i call forward difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 1, x: 2 }, the result should be close to 960.0120000868627", () => {
  const result = FiniteDifference.forward(data.x);

  expect(result).toBe(960.0120000868627);
});

test("if i call forward difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 2, x: 2 }, the result should be close to 2400.048515482922", () => {
  const result = FiniteDifference.forward(data.x, 2);

  expect(result).toBe(2400.048515482922);
});

/*
 * BACKWARD
 */
test("if i call backward difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 1, x: 2 }, the result should be close to 959.988000084877", () => {
  const result = FiniteDifference.backward(data.x);

  expect(result).toBe(959.988000084877);
});

test("if i call backward difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 2, x: 2 }, the result should be close to 2400.0001985768904", () => {
  const result = FiniteDifference.backward(data.x, 2);

  expect(result).toBe(2400.0001985768904);
});

/*
 * CENTRAL
 */
test("if i call central difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 1, x: 2 }, the result should be close to 960.0000000858698", () => {
  const result = FiniteDifference.central(data.x);

  expect(result).toBe(960.0000000858698);
});

test("if i call central difference with { fn: x => 5 * x ** 6, delta: 0.00001, order: 2, x: 2 }, the result should be close to 2400.0243570299062", () => {
  const result = FiniteDifference.central(data.x, 2);

  expect(result).toBe(2400.0243570299062);
});
