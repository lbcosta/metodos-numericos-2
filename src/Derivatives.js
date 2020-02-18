module.exports = class Derivatives {
  static forwardDifference(fn, x, deltaX) {
    return (fn(x + deltaX) - fn(x)) / deltaX;
  }

  static backwardDifference(fn, x, deltaX) {
    return (fn(x) - fn(x - deltaX)) / deltaX;
  }

  static centralDifference(fn, x, deltaX) {
    return (fn(x + deltaX) - fn(x - deltaX)) / (2 * deltaX);
  }
};
