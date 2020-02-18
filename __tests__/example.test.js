const Derivatives = require("../src/Derivatives");

test("if i call forward difference with params 'x => x ** 2', '2' and '0.1', it should return 4.100000000000001", () => {
  const result = Derivatives.forwardDifference(x => x ** 2, 2, 0.1);

  expect(result).toBe(4.100000000000001);
});
