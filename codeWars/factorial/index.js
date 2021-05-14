const factorial = (n) => {
  let res = 1;
  let num = 1;
  for (let i = 1; i < n; i += 1) {
    num += 1;
    res *= num;
  }
  return res;
};

module.exports = { factorial };
