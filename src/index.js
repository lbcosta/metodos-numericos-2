const Derivatives = require("../src/Derivatives");
const math = require("mathjs");

let errors = [];
const exactDerivative = math.derivative("e^sin(x)", "x").evaluate({ x: 0 });

const range = [0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625, 0.0078125];

range.forEach(h => {
  const data = {
    fn: x => Math.exp(Math.sin(x)),
    delta: h
  };

  const derivatives = new Derivatives(data);

  const result = derivatives.backwardDifference(0, 1);

  errors.push({
    Delta: Number(h.toFixed(4)).toExponential(),
    "Backward Difference": Number(result.toFixed(4)).toExponential(),
    Error: Number(Math.abs(result - exactDerivative).toFixed(4)).toExponential()
  });
});

console.table(errors);
