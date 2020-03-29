class FiniteDifference {
  constructor() {
    this.fn = x => x;
    this.delta = 0.1;
    this.order = 1;
  }

  setup({ fn, delta, order }) {
    this.fn = fn || this.fn;
    this.delta = delta || this.delta;
    this.order = order || this.order;

    return this;
  }

  forward(x, order = 1) {
    if (order === 1) {
      return (this.fn(x + this.delta) - this.fn(x)) / this.delta;
    }

    this.order = order - 1;
    return (
      (this.forward(x + this.delta, this.order) - this.forward(x, this.order)) /
      this.delta
    );
  }

  backward(x, order = 1) {
    if (order === 1) {
      return (this.fn(x) - this.fn(x - this.delta)) / this.delta;
    }

    this.order = order - 1;
    return (
      (this.backward(x + this.delta, this.order) -
        this.backward(x, this.order)) /
      this.delta
    );
  }

  central(x, order = 1) {
    if (order === 1) {
      return (
        (this.fn(x + this.delta) - this.fn(x - this.delta)) / (2 * this.delta)
      );
    }

    this.order = order - 1;
    return (
      (this.central(x + this.delta, this.order) - this.central(x, this.order)) /
      this.delta
    );
  }
}

module.exports = new FiniteDifference();
