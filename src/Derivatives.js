module.exports = class Derivatives {
  constructor({ fn, delta }) {
    this.fn = fn;
    this.delta = delta;
    this.order = 1;
  }

  forwardDifference(x, order) {
    if (order === 1) {
      return (this.fn(x + this.delta) - this.fn(x)) / this.delta;
    }

    this.order = order - 1;
    return (
      (this.forwardDifference(x + this.delta, this.order) -
        this.forwardDifference(x, this.order)) /
      this.delta
    );
  }

  backwardDifference(x, order) {
    if (order === 1) {
      return (this.fn(x) - this.fn(x - this.delta)) / this.delta;
    }

    this.order = order - 1;
    return (
      (this.backwardDifference(x + this.delta, this.order) -
        this.backwardDifference(x, this.order)) /
      this.delta
    );
  }

  centralDifference(x, order) {
    if (order === 1) {
      return (
        (this.fn(x + this.delta) - this.fn(x - this.delta)) / (2 * this.delta)
      );
    }

    this.order = order - 1;
    return (
      (this.centralDifference(x + this.delta, this.order) -
        this.centralDifference(x, this.order)) /
      this.delta
    );
  }
};
