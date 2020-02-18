class Derivatives {
  forwardDifference(fn, x, deltaX) {
    return (fn(x + deltaX) - fn(x)) / deltaX;
  }

  backwardDifference(fn, x, deltaX) {
    return (fn(x) - fn(x - deltaX)) / deltaX;
  }

  centralDifference(fn, x, deltaX) {
    return (fn(x + deltaX) - fn(x - deltaX)) / (2 * deltaX);
  }
}

module.exports = new Derivatives();
