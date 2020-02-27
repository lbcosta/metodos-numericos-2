const Derivatives = require("../src/Derivatives");

const data = {
  fn: x => Math.sin(x),
  delta: Math.PI / 8
};

const derivatives = new Derivatives(data);

const result = derivatives.taylorApproximation(Math.PI / 6, 3);

console.log(result);
