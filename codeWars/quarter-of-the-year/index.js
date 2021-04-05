const quarterOf = (month) => {
  if (month / 3 <= 1) {
    return 1;
  }
  if (month / 3 <= 2) {
    return 2;
  }
  if (month / 3 <= 3) {
    return 3;
  }
  if (month / 3 <= 4) {
    return 4;
  }
};

// better user Math.ceil()

console.log(quarterOf(2));
