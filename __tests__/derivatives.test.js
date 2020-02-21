const Derivatives = require("../src/Derivatives");

const data = {
  fn: x => 5 * x ** 6,
  x: 2,
  delta: 0.00001
};

const derivatives = new Derivatives(data);

/*
 * FORWARD
 */
test("if i call forward difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 1, the result should be close to 960.0120000868627", () => {
  const result = derivatives.forwardDifference(data.x);

  expect(result).toBe(960.0120000868627);
});

test("if i call forward difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 2, the result should be close to 2400.048515482922", () => {
  const result = derivatives.forwardDifference(data.x, 2);

  expect(result).toBe(2400.048515482922);
});

/*
 * BACKWARD
 */
test("if i call backward difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 1, the result should be close to 959.988000084877", () => {
  const result = derivatives.backwardDifference(data.x);

  expect(result).toBe(959.988000084877);
});

test("if i call backward difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 2, the result should be close to 2400.0001985768904", () => {
  const result = derivatives.backwardDifference(data.x, 2);

  expect(result).toBe(2400.0001985768904);
});

/*
 * CENTRAL
 */
test("if i call central difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 1, the result should be close to 960.0000000858698", () => {
  const result = derivatives.centralDifference(data.x);

  expect(result).toBe(960.0000000858698);
});

test("if i call central difference with { fn: x => 5 * x ** 6, x: 2, delta: 0.00001 } and order 2, the result should be close to 2400.0243570299062", () => {
  const result = derivatives.centralDifference(data.x, 2);

  expect(result).toBe(2400.0243570299062);
});
