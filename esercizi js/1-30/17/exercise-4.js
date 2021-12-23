function calculate(y) {
  let x = 0;

  return {
    add(y) {
      x += y;
      return this;
    },
    sub(y) {
      x -= y;
      return this;
    },
    multiply(y) {
      x *= y;
      return this;
    },
    divide(y) {
      x /= y;
      return this;
    },
    printResult() {
      console.log(x);
    },
  };
};

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();