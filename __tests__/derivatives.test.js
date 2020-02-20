const Derivatives = require("../src/Derivatives");

const example = {
  fn: x => x ** 2,
  x: 2,
  delta: 0.1
};

test("if i call forward difference with params 'x => x ** 2', '2' and '0.1', the result should be close to 4.1", () => {
  const derivatives = new Derivatives(example);

  const result = derivatives.forwardDifference(example.x);

  expect(result).toBeCloseTo(4.1);
});

test("if i call backward difference with params 'x => x ** 2', '2' and '0.1', the result should be close to 3.9", () => {
  const derivatives = new Derivatives(example);

  const result = derivatives.backwardDifference(example.x);

  expect(result).toBeCloseTo(3.9);
});

test("if i call central difference with params 'x => x ** 2', the result should be close to 4", () => {
  const derivatives = new Derivatives(example);

  const result = derivatives.centralDifference(example.x);

  expect(result).toBeCloseTo(4);
});
