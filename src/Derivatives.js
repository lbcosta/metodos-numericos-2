module.exports = class Derivatives {
  constructor({ fn, delta }) {
    this.fn = fn;
    this.delta = delta;
  }

  forwardDifference(x) {
    return (this.fn(x + this.delta) - this.fn(x)) / this.delta;
  }

  backwardDifference(x) {
    return (this.fn(x) - this.fn(x - this.delta)) / this.delta;
  }

  centralDifference(x) {
    return (
      (this.fn(x + this.delta) - this.fn(x - this.delta)) / (2 * this.delta)
    );
  }
};
